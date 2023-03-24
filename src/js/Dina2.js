// Author: Dina Boshnaq

// Up Button
//Get the button:
const upButton = document.getElementById('upBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upButton.style.display = 'block';
    } else {
        upButton.style.display = 'none';
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// The reading progress bar javascript code
// This code will check the percentage of the reader's reading of the page
// It calculates it using the dimensions of the body and the client height which is the user's reading amount
// Then the width of the bar increases
const readingProgress = document.querySelector('#reading-progress-fill');
document.addEventListener('scroll', (e) => {
    const w =
        ((document.body.scrollTop || document.documentElement.scrollTop) /
            (document.documentElement.scrollHeight - document.documentElement.clientHeight)) *
        100;
    readingProgress.style.setProperty('width', `${w}%`);
});

// The learn button shows the hidden div via this code
// it uses an event listener
const buttonLearn = document.getElementById('learnMore');
const definition = document.getElementById('paragraphDefinition');
buttonLearn.addEventListener('click', (e) => {
    definition.style.display = 'block';
});

// The images in the first div inside div 4 change using this code
// The code to change the content of the image item
// The basis of the code is to associate a tracker variable with the element
let imageTracker = 'enterBlackHole';
function change() {
    const image = document.getElementById('targetImage');
    if (imageTracker === 'enterBlackHole') {
        image.src = 'assets/Dina/enterBlackHole2.jpg';
        imageTracker = 'enterBlackHole2';
    } else if (imageTracker === 'enterBlackHole2') {
        image.src = 'assets/Dina/enterBlackHole3.jpg';
        imageTracker = 'enterBlackHole3';
    } else {
        image.src = 'assets/Dina/enterBlackHole.png';
        // eslint-disable-next-line camelcase
        imageTracker = 'enterBlackHole';
    }
}

// They change every 3 seconds
// eslint-disable-next-line no-implied-eval
let timer = setInterval('change();', 3000);

// This function is to stop the images from changing when the user clicks on an image
// this function is called when the onclick event runs. It stops the timer running.
function stop() {
    clearInterval(timer); //the clearInterval method stops the timer from running
}

// This code gets the images to start changing again when the user double-clicks on the stopped image
function restart() {
    // eslint-disable-next-line no-implied-eval
    timer = setInterval('change();', 3000);
}
