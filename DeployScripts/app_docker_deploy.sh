#!/bin/bash
set -ev

cd docker/
mkdir content
wget -q "$CONTENT_PACKAGE_URL" -O content.zip
unzip -o content.zip -d content/ &> /dev/null
rm content.zip 
docker build -t tds_irisapp .
docker tag tds_irisapp:latest osucass/tds_irisapp:$BRANCH
docker push osucass/tds_irisapp:$BRANCH
