import {samjs} from './samjs';

let sam = new samjs.SamJs();

chrome.commands.onCommand.addListener(function (command) {
   console.log("Got Command: " + command)
    if (command === "talk") {
        let activeEle = document.activeElement;
        console.log("Talk Command Read")
        console.log(activeEle)
        sam.speak(activeEle)
    }
});
