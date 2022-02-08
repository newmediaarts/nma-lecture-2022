import splitText from "./utils/splitText";

// Loop through all split elements and run splitText function
const splitTextElements = document.querySelectorAll('[data-split]')

splitTextElements.forEach(el => splitText(el))