// select all the keys and audio elements
const keys = document.querySelectorAll('.key');
const audios = document.querySelectorAll('audio');

// play sound when key is pressed
function playSound(event) {
    // get the key code from the event object
    const keyCode = event.keyCode || event.target.getAttribute('data-key');

    // get the audio element with matching data-key attribute
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

    // get the key element with matching data-key attribute
    const key = document.querySelector(`div[data-key="${keyCode}"]`);

    if (!audio) return; // exit function if no audio element found

    audio.currentTime = 0; // rewind audio to start
    audio.play(); // play the audio

    key.classList.add('playing'); // add class to highlight the key element

    setTimeout(() => {
        key.classList.remove('playing'); // remove the playing class from the key element after 1 second
    }, 2000);
}

// remove the playing class when transition ends
function removeTransition(event) {
    if (event.propertyName !== 'transform') return; // skip if property is not transform
    this.classList.remove('playing'); // remove the playing class from the key element
}

// add event listeners to all the keys to listen for keydown and transitionend events
keys.forEach(key => key.addEventListener('click', playSound));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// add event listener to listen for keydown event on the document
document.addEventListener('keydown', playSound);
