// Author: Iris Loret
//A read more button
//Get the button
const buttonMoreText = document.getElementById('buttonReadMore');

//function that looks if the text is displayed or not
function readMore() {
    const dots = document.getElementById('dots');
    const moreText = document.getElementById('moreText');
    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        buttonMoreText.innerHTML = 'Read more';
        moreText.style.display = 'none';
    } else {
        dots.style.display = 'none';
        buttonMoreText.innerHTML = 'Read less';
        moreText.style.display = 'inline';
    }
}

//if the button is clicked the function should start
buttonMoreText.addEventListener('click', () => {
    readMore();
});
