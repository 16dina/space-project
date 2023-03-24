// Author: Iris Loret

//Images that change
//Get the images
const imagesDwarf = document.querySelector('div.dwarf img');
const imagesSolar = document.querySelector('div.solar img');
const imagesEarth = document.querySelector('div.earth img');
let number = 2;
let img;
let numberSolar = 2;
let numberEarth = 2;

//function that will take a number and if the images are all displayed, it starts again
//and change the source of the picture to display the new picture
function nextImageDwarf() {
    img = `dwarf_planet${number}.png`;
    number++;
    if (number === 5) {
        number = 1;
    }
    const source = `Images/Iris/${img}`;
    return imagesDwarf.setAttribute('src', source);
}

function nextImageSolarsystem() {
    img = `solarsystem${numberSolar}.jpg`;
    numberSolar++;
    if (numberSolar === 4) {
        numberSolar = 1;
    }
    const source = `Images/Iris/${img}`;
    return imagesSolar.setAttribute('src', source);
}

function nextImageEarth() {
    img = `earth${numberEarth}.png`;
    numberEarth++;
    if (numberEarth === 3) {
        numberEarth = 1;
    }
    const source = `Images/Iris/${img}`;
    return imagesEarth.setAttribute('src', source);
}

//set a timing function (4.5 seconds)
window.setInterval(() => {
    nextImageDwarf();
    nextImageSolarsystem();
    nextImageEarth();
}, 4500);

//set event listener, if you click on the image it will show the next one without the 4.5 seconds waiting time
imagesDwarf.addEventListener('click', () => {
    nextImageDwarf();
});

imagesSolar.addEventListener('click', () => {
    nextImageSolarsystem();
});

imagesEarth.addEventListener('click', () => {
    nextImageEarth();
});

// reading progress bar
const processScroll = () => {
    const docElement = document.documentElement;
    const docBody = document.body;
    //get the top of the page (when scrolling it changes)
    const scrollTop = docBody.scrollTop || docElement.scrollTop;
    //get the bottom of the page (stays the same)
    const scrollBottom = (docBody.scrollHeight || docElement.scrollHeight) - window.innerHeight;
    //calculate how far you are on the page
    const scrollPercent = `${(scrollTop / scrollBottom) * 100}%`;
    //get the bar and set the scroll amount to the scrollpercent
    const bar = document.getElementById('progressBar');
    bar.style.setProperty('--scrollAmount', scrollPercent);
};
//event listener for when you scroll --> the scroll bar changes
document.addEventListener('scroll', processScroll);
