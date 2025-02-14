const samjs = require("./samjs")

let sam = new samjs.SamJs();

chrome.commands.onCommand.addListener(function (command) {
    if (command === "talk") {
        sam.speak(document.activeElement.innerHTML);
    }
});