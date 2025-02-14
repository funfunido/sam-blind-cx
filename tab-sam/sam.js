import {samjs} from './samjs';

let sam = new samjs.SamJs();

chrome.commands.onCommand.addListener(function (command) {
   alert("it works")
    if (command === "talk") {
        sam.speak(document.activeElement.innerHTML);
    }
});
