//Author: Dina Boshnaq

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

// To read more about what the moon is made of when clicking on the title
// Also changes the direction of the arrows
// If the title is clicked the content scrolls down
// The arrow's condition is checked via a counter
// depending on how many times it's clicked (even or odd) it changes either up or down
// The change is by just changing the class name from down to up and vice versa
let count1 = 0;
$('#title1').click(() => {
    $('#content1').slideToggle('slow');
    if (count1 % 2 === 0) {
        document.getElementById('arrow1').classList.remove('fa-angle-down');
        document.getElementById('arrow1').classList.add('fa-angle-up');
        // eslint-disable-next-line no-plusplus
        count1++;
    } else {
        document.getElementById('arrow1').classList.remove('fa-angle-up');
        document.getElementById('arrow1').classList.add('fa-angle-down');
        // eslint-disable-next-line no-plusplus
        count1++;
    }
});

// To read more about what the importance of the moon when clicking on the title
// Also changes the direction of the arrows
// Same as the previous one
let count2 = 0;
$('#title2').click(() => {
    $('#content2').slideToggle('slow');
    if (count2 % 2 === 0) {
        document.getElementById('arrow2').classList.remove('fa-angle-down');
        document.getElementById('arrow2').classList.add('fa-angle-up');
        // eslint-disable-next-line no-plusplus
        count2++;
    } else {
        document.getElementById('arrow2').classList.remove('fa-angle-up');
        document.getElementById('arrow2').classList.add('fa-angle-down');
        // eslint-disable-next-line no-plusplus
        count2++;
    }
});

// Changes the color of the moon phase that the user hovers on by removing the grayscale filter
const images = document.getElementById('moonPhases').querySelectorAll('img');
images.forEach((image) => {
    image.addEventListener('mouseenter', (e) => {
        image.style.filter = 'grayscale(0%) contrast(200%)';
    });
    image.addEventListener('mouseleave', (e) => {
        image.style.filter = 'grayscale(80%)';
    });
});

// Javascript code to change the content of the modal depending on which moon phase the user clicked
// First get the elements as variables
const firstPhase = document.getElementById('firstPhase');
const secondPhase = document.getElementById('secondPhase');
const thirdPhase = document.getElementById('thirdPhase');
const fourthPhase = document.getElementById('fourthPhase');
const fifthPhase = document.getElementById('fifthPhase');
const sixthPhase = document.getElementById('sixthPhase');
const seventhPhase = document.getElementById('seventhPhase');
const eighthPhase = document.getElementById('eighthPhase');
const label = document.getElementById('ModelLabel');
const text = document.getElementById('ModelText');

// adding event listeners to see if the image is clicked
// For example: In the first phase, the text in the modal will change accordingly
// same with the rest
firstPhase.addEventListener('click', (e) => {
    label.innerHTML = 'First Phase (Primary): New Moon';
    text.innerHTML = 'The New Moon is when the Sun and Moon are aligned, with the Sun and Earth on opposite sides of the Moon.';
});
secondPhase.addEventListener('click', (e) => {
    label.innerHTML = 'Second Phase (Secondary): Waxing Crescent';
    text.innerHTML =
        "This intermediate Moon phase comes after New Moon and lasts until half of the Moon's visible surface is illuminated at First Quarter Moon.";
});
thirdPhase.addEventListener('click', (e) => {
    label.innerHTML = 'Third Phase (Primary): First Quarter';
    text.innerHTML =
        "Also known as 'Half Moon', the First Quarter Moon is a primary Moon phase when half of the Moon's face is lit up. Whether it is the left or right half depends on where you are on Earth.";
});
fourthPhase.addEventListener('click', (e) => {
    label.innerHTML = 'Fourth Phase (Secondary): Waxing Gibbous';
    text.innerHTML = 'This intermediate Moon phase starts after the First Quarter Moon and lasts until the Full Moon.';
});
fifthPhase.addEventListener('click', (e) => {
    label.innerHTML = 'Fifth Phase (Primary): Full Moon';
    text.innerHTML = 'Full Moon is the most striking Moon phase when the entire face of the Moon is lit up.';
});
sixthPhase.addEventListener('click', (e) => {
    label.innerHTML = 'Sixth Phase (Secondary): Waning Gibbous';
    text.innerHTML =
        "This intermediate Moon phase starts after the Full Moon and lasts until half of the Moon's face remains lit-up at the Third Quarter.";
});
seventhPhase.addEventListener('click', (e) => {
    label.innerHTML = 'Seventh Phase (Primary): Last Quarter';
    text.innerHTML =
        'The Third Quarter Moon is when the opposite half of the Moon is illuminated compared to the First Quarter. Which half you see lit up depends on where you are on Earth.';
});
eighthPhase.addEventListener('click', (e) => {
    label.innerHTML = 'Eighth Phase (Secondary): Waning Crescent';
    text.innerHTML =
        'This intermediate Moon phase is the last phase of the lunar month. It starts just after the Third Quarter Moon and lasts until the following New Moon.';
});

// The code to change the content of the list item that contains a fact about the moon
// The basis of the code is to associate a tracker variable with the element
let factTracker = 1;
const fact = document.getElementById('fact');
function change() {
    if (factTracker === 1) {
        fact.innerHTML =
            'The moon has gravity. It is about 1/6 of the Earth’s gravity, which means that you would weigh mush less if you stand on the moon.';
        factTracker = 2;
    } else if (factTracker === 2) {
        fact.innerHTML =
            'The moon has impacts on marine animals. From changes in feeding behavior when there is change in the ocean tides, to mass spawning specifically at the time of a full moon every year.';
        factTracker = 3;
    } else if (factTracker === 3) {
        fact.innerHTML =
            'Ever heard of Earthquakes? Well, guess what? There is a “Moonquake” too! Although it is much weaker than Earthquakes, it last longer (for up to half an hour).';
        factTracker = 4;
    } else if (factTracker === 4) {
        fact.innerHTML =
            "There is water on the moon! In 2018, NASA confirmed that water ice is present on the surface at the Moon. Based on remote observations by radar instruments, the moon has over 600 billion kilograms of water ice. That's enough to fill at least 240,000 Olympic-sized swimming pools. And according to assistant researcher Shua Li at the University of Hawaii's Institute of Geophysics and Planetology, we can actually drink that water!";
        factTracker = 5;
    } else {
        fact.innerHTML = 'The moon is drifting away from the earth! It is moving around 3.8 cm away from Earth every year.';
        // eslint-disable-next-line camelcase
        factTracker = 1;
    }
}
// Changes the fact every 10 seconds
// eslint-disable-next-line no-implied-eval
const timer = setInterval('change();', 10000);
