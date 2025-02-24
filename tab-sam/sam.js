import {samjs} from './samjs';

let sam = new samjs.SamJs();

chrome.commands.onCommand.addListener(function (command) {
   console.log("it works")
    if (command === "talk") {
        console.log("boom")
    }
});
