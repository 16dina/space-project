//Dynamic Text Javascript for index.html
const dynamicText = [
    {text: 'dummy?', color: 'white'},
    {text: 'space fan?', color: 'white'},
];

$(document).ready(async function () {
    carousel(dynamicText, '#feature-text');
});

async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split('');
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[i]);
        i++;
    }
    return;
}

async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split('');
    let i = 0;
    while (letters.length > 0) {
        // eslint-disable-next-line no-await-in-loop
        await waitForMs(100);
        letters.pop();
        $(eleRef).html(letters.join(''));
    }
}

async function carousel(carouselList, eleRef) {
    let i = 0;
    while (true) {
        updateFontColor(eleRef, carouselList[i].color);
        // eslint-disable-next-line no-await-in-loop
        await typeSentence(carouselList[i].text, eleRef);
        // eslint-disable-next-line no-await-in-loop
        await waitForMs(1500);
        // eslint-disable-next-line no-await-in-loop
        await deleteSentence(eleRef);
        // eslint-disable-next-line no-await-in-loop
        await waitForMs(500);
        i++;
        if (i >= carouselList.length) {
            i = 0;
        }
    }
}

function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
}

function waitForMs(ms) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(resolve, ms));
}
