declare const WordListPanel

declare namespace Blackbox {
  export function getConfig()
  export function showButton(name: string, callback: Function, bool: boolean)
  export function bindUIEvents()
  export function changeAccommodations(clearAccommodations)
  export function setAccommodations(accommodations)
  export const events
  export function fireEvent(event: string)
}

declare namespace ContentManager {
  export const Dialog
  export function getCurrentPage()
  export function getCurrentEntity()
  export function removePage(page)
  export function onItemEvent(event: string, fn: Function)
}

declare namespace CM {
  export function setReadOnly(readOnly: boolean)
  export function getPages(): Array<any>
  export function createPage(context)
  export function getCurrentPage()
  export const Xml
  export let accessibilityEnabled: boolean
  export function getAccProps()
  export function getZoom()
  export function requestNextPage()
  export function requestPreviousPage()
}

declare namespace Calculator {
  export function toggle()
}

declare namespace TDS {
  export const Notes
  export const Dialog
  export function getAccommodationProperties()
}

declare namespace Masking {
  export function toggle()
}

declare namespace Dictionary {
  export function toggle()
}

declare namespace XDM {
  export function init(window: Window)
  export function addListener(event: string, fn: Function)
}

declare function XDM(window: Window)

declare namespace Util {
  export const Xml
}
declare namespace Accommodations {
  export const Manager
}

declare namespace Messages {
  export function set(str1, str2, str3);
}

declare class ContentItem {
  setResponse(response)
  setQuestionLabel(label)
  getResponse()
}

declare var CKEDITOR: {
  on(event: string, fn: Function)
}
