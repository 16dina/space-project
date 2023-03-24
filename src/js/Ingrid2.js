// Author: Ingrid Hansen
// Calls function to show all cards at default
filterCard('all');

// Main fuction
function filterCard(c) {
    let x;
    let i;

    // Makes an array of the elements
    x = document.getElementsByClassName('filter');
    // If all is selected there is no requirement, all will show
    if (c == 'all') c = '';
    // Add or removes the show class to the elements where the requirements are present or missing respectively.
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], 'show');
        if (x[i].className.indexOf(c) > -1) addClass(x[i], 'show');
    }
}

// Function to add a class to an element
function addClass(element, name) {
    let i;
    let show;
    let hide;
    show = element.className.split(' ');
    hide = name.split(' ');
    for (i = 0; i < hide.length; i++) {
        if (show.indexOf(hide[i]) == -1) {
            element.className += ` ${hide[i]}`;
        }
    }
}

// Function to remove a class from an element
function removeClass(element, name) {
    let i;
    let show;
    let hide;
    show = element.className.split(' ');
    hide = name.split(' ');
    for (i = 0; i < hide.length; i++) {
        while (show.indexOf(hide[i]) > -1) {
            show.splice(show.indexOf(hide[i]), 1, 1);
        }
    }
    element.className = show.join(' ');
}

// Setting up the buttons used to filter the cards, calling the function
const btnAll = document.getElementById('all');
const btnCompany = document.getElementById('capital');
const filterTourism = document.getElementById('tourism');
const filterCommunication = document.getElementById('communication');

//Each button filters based on its own keyword
btnAll.addEventListener('click', (e) => {
    filterCard('all');
});

btnCompany.addEventListener('click', (e) => {
    filterCard('capital');
});
filterTourism.addEventListener('click', (e) => {
    filterCard('tourism');
});
filterCommunication.addEventListener('click', (e) => {
    filterCard('communication');
});

// Card buttons for the satellite card and event listener
const btnSatellite = document.getElementById('btnSatellite');
const closeSatellite = document.getElementById('closeSatellite');

const satelliteOverlay = document.getElementById('satelliteOverlay');

btnSatellite.addEventListener('click', (e) => {
    satelliteOverlay.style.display = 'block';
});

closeSatellite.addEventListener('click', (e) => {
    satelliteOverlay.style.display = 'none';
});

// Card button for tourism card and event listener

const btnTourism = document.getElementById('btnTourism');
const closeTourism = document.getElementById('closeTourism');
const tourismOverlay = document.getElementById('tourismOverlay');

btnTourism.addEventListener('click', (e) => {
    tourismOverlay.style.display = 'block';
});
closeTourism.addEventListener('click', (e) => {
    tourismOverlay.style.display = 'none';
});
// SpaceX card buttons and event listener

const btnSpacex = document.getElementById('btnSpacex');
const closeSpacex = document.getElementById('closeSpacex');
const spacexOverlay = document.getElementById('spacexOverlay');

btnSpacex.addEventListener('click', (e) => {
    spacexOverlay.style.display = 'block';
});
closeSpacex.addEventListener('click', (e) => {
    spacexOverlay.style.display = 'none';
});
// Meteor Mining Card buttons and event listener
const btnMeteor = document.getElementById('btnMeteor');
const closeMeteor = document.getElementById('closeMeteor');
const meteorOverlay = document.getElementById('meteorOverlay');

btnMeteor.addEventListener('click', (e) => {
    meteorOverlay.style.display = 'block';
});
closeMeteor.addEventListener('click', (e) => {
    meteorOverlay.style.display = 'none';
});
// Buttons for Space junk

const btnSpaceJunk = document.getElementById('btnSpaceJunk');
const closeSpaceJunk = document.getElementById('closeSpaceJunk');
const spaceJunkOverlay = document.getElementById('spaceJunkOverlay');

btnSpaceJunk.addEventListener('click', function (e) {
    spaceJunkOverlay.style.display = 'block';
});
closeSpaceJunk.addEventListener('click', function (e) {
    spaceJunkOverlay.style.display = 'none';
});
