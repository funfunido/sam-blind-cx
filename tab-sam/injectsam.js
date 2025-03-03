const firstPart = "https://sam.seofernando.com/speak?text="
const secondPart = "&mouth=100&throat=140&speed=50&pitch=50"

console.log("Sam Tab Extension Invoked");

/*document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        setTimeout(function() {
            console.log("Tab Key Pressed");
            let fullApiLink = (firstPart + document.activeElement + secondPart);
            const ctx = new AudioContext();
        let audio;
        fetch(fullApiLink)
            .then(data => data.arrayBuffer())
            .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
            .then(decodedAudio => {
        audio = decodedAudio;
    })
    .catch(error => {
        console.error('Error fetching or decoding audio:', error);
    });

    const playSound = ctx.createBufferSource();
    playSound.buffer = audio;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);

        }, 1000);
    }
});*/

document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        setTimeout(function() {
            console.log("Tab Key Pressed");
            const textToSpeak = document.activeElement.value || document.activeElement.innerText || '';
            let fullApiLink = (firstPart + encodeURIComponent(textToSpeak) + secondPart);
            const ctx = new AudioContext();
            let audio;

            fetch(fullApiLink, { mode: 'no-cors' })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.arrayBuffer();
                })
                .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
                .then(decodedAudio => {
                    audio = decodedAudio;
                    const playSound = ctx.createBufferSource();
                    playSound.buffer = audio;
                    playSound.connect(ctx.destination);
                    playSound.start(ctx.currentTime);
                })
                .catch(error => {
                    console.error('Error fetching or decoding audio:', error);
                });

        }, 1000);
    }
});
