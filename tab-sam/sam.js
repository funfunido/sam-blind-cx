const firstPart = "https://sam.seofernando.com/speak?text="
const secondPart = "&mouth=100&throat=140&speed=50&pitch=50"

chrome.commands.onCommand.addListener(function (command) {
    console.log("Got Command: " + command)
     if (command === "talk") {
         let activeEle = document.activeElement;
         console.log("Talk Command Read")
         console.log(activeEle)
         let finalPart = firstPart.concat(activeEle, secondPart)
         FetchThing(finalPart);
     }
function FetchThing(apiUrl) {
     self.addEventListener('fetch', (event) => {
    // Intercept GET requests
    if (event.request.method === 'GET') {
        //const apiUrl = 'https://api.example.com/data'; // Custom API URL

        // Check if the request URL matches the custom API endpoint
        if (event.request.url === apiUrl) {
            event.respondWith(
                // Fetch data from the custom API
                fetch(apiUrl)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json(); // Parse the JSON response
                    })
                    .then((data) => {
                        // Manipulate data if needed, or return it directly
                        console.log('Data from custom API:', data);
                        // Respond with the data
                        return new Response(JSON.stringify(data), {
                            headers: { 'Content-Type': 'application/json' },
                        });
                    })
                    .catch((error) => {
                        console.error('Error fetching from custom API:', error);
                        // Handle errors (e.g., return a fallback response)
                        return new Response('Error fetching data from the API', { status: 500 });
                    })
            );
        }
    }
});
}
})



/*import {samjs} from './samjs.js';

let sam = new samjs.SamJs();

chrome.commands.onCommand.addListener(function (command) {
   console.log("Got Command: " + command)
    if (command === "talk") {
        let activeEle = document.activeElement;
        console.log("Talk Command Read")
        console.log(activeEle)
        sam.speak(activeEle)
    }
});*/