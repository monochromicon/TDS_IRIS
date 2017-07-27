package tds.iris.repository;


import AIR.Common.Utilities.SpringApplicationContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import tds.iris.abstractions.repository.IContentHelper;

import java.io.IOException;
import java.nio.file.*;

import static java.nio.file.StandardWatchEventKinds.*;
@Component
@Scope("prototype")
public class ContentWatcher extends Thread{
    private static final Logger _logger = LoggerFactory.getLogger(ContentWatcher.class);
    private IContentHelper _contentHelper = SpringApplicationContext.getBean("contentHelper", IContentHelper.class);

    public ContentWatcher(){}

    @Override
    public void run(){
        _logger.info("Watching for content");
        try{
            watchForChange();
        }catch(Exception e){
            _logger.error(e.getMessage());
        }
    }

    private WatchService createWatcher() throws Exception {
        WatchService watcher = null;
        //create watcher to watch file directory for changes
        try {
            watcher = FileSystems.getDefault().newWatchService();
        } catch (IOException e) {
            e.printStackTrace();
        }

        Path dir = Paths.get("C:\\content\\Items");
        dir.register(watcher, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);

        return watcher;
    }

    public void watchForChange() throws Exception {
        WatchService watcher = createWatcher();
        //create infinite while loop to track changes in the directory
        while(true){
            WatchKey key = null;
            try{
                key = watcher.take();
            }catch(InterruptedException ex){
                return;
            }
            for(WatchEvent<?> event : key.pollEvents()){
                //get event type
                WatchEvent.Kind<?> kind = event.kind();

                //get file name
                WatchEvent<Path> ev = (WatchEvent<Path>) event;
                //Path fileName = ev.context();

                if(kind == OVERFLOW){
                    continue;
                }else{
                    //reload content if there was a change
                    try{
                        _logger.info("content reload");
                        _contentHelper.reloadContent();

                    }catch (Exception e){}
                }
            }
            boolean valid = key.reset();
            if(!valid){
                break;
            }
        }
    }
}
