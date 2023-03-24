// Author:Ingrid Hansen

//Grab the SVGs that will trigger the event on click
const btnLibra = document.getElementById('libra');
const btnLeo = document.getElementById('leo');
const btnCancer = document.getElementById('cancer');
const btnGemini = document.getElementById('gemini');
const btnTaurus = document.getElementById('taurus');
const btnAries = document.getElementById('aries');
const btnAquarius = document.getElementById('aquarius');
const btnVirgo = document.getElementById('virgo');
const btnScorpio = document.getElementById('scorpio');
const btnCapricorn = document.getElementById('capricorn');
const btnSagittarius = document.getElementById('sagittarius');
const btnpisces = document.getElementById('pisces');

//Grab the text sections to be displayed
const cancerText = document.getElementById('cancerInfo');
const leoText = document.getElementById('leoText');
const virgoText = document.getElementById('virgoText');
const libraText = document.getElementById('libraText');
const geminiText = document.getElementById('geminiText');
const taurusText = document.getElementById('taurusText');
const ariesText = document.getElementById('ariesText');
const aquariusText = document.getElementById('aquariusText');
const scorpioText = document.getElementById('scorpioText');
const capricornText = document.getElementById('capricornText');
const sagittariusText = document.getElementById('sagittariusText');
const piscesText = document.getElementById('piscesText');

//function to hide the currently showing paragraph
function hidePara() {
    let x;
    let i;
    x = document.getElementsByClassName('zodiacInfo');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
}

//Eventlisteners to show the text
btnCancer.addEventListener('click', function (e) {
    hidePara();
    cancerText.style.display = 'block';
});

btnLeo.addEventListener('click', function (e) {
    hidePara();
    leoText.style.display = 'block';
});

btnVirgo.addEventListener('click', function (e) {
    hidePara();
    virgoText.style.display = 'block';
});
btnLibra.addEventListener('click', function (e) {
    hidePara();
    libraText.style.display = 'block';
});

btnGemini.addEventListener('click', function (e) {
    hidePara();
    geminiText.style.display = 'block';
});
btnTaurus.addEventListener('click', function (e) {
    hidePara();
    taurusText.style.display = 'block';
});
btnAries.addEventListener('click', function (e) {
    hidePara();
    ariesText.style.display = 'block';
});
btnAquarius.addEventListener('click', function (e) {
    hidePara();
    aquariusText.style.display = 'block';
});
btnScorpio.addEventListener('click', function (e) {
    hidePara();
    scorpioText.style.display = 'block';
});
btnCapricorn.addEventListener('click', function (e) {
    hidePara();
    capricornText.style.display = 'block';
});
btnSagittarius.addEventListener('click', function (e) {
    hidePara();
    sagittariusText.style.display = 'block';
});
btnpisces.addEventListener('click', function (e) {
    hidePara();
    piscesText.style.display = 'block';
});
