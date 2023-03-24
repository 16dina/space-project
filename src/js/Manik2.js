// Author: Manik Setia
const noOfCharacters = 300;
const contents = document.querySelectorAll('.content');
contents.forEach((content) => {
    //If text length is less that noOfCharacters... then hide the read more button
    if (content.textContent.length < noOfCharacters) {
        content.nextElementSibling.style.display = 'none';
    } else {
        const displayText = content.textContent.slice(0, noOfCharacters);
        const moreText = content.textContent.slice(noOfCharacters);
        content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
    }
});

function readMore(btn) {
    const post = btn.parentElement;
    post.querySelector('.dots').classList.toggle('hide');
    post.querySelector('.more').classList.toggle('hide');
    // eslint-disable-next-line no-unused-expressions
    btn.textContent === 'Read More' ? (btn.textContent = 'Read Less') : (btn.textContent = 'Read More');
}

//modal
// Get the modal
// const modal = document.getElementById('myModal');
// //
// // // Get the image and insert it inside the modal - use its "alt" text as a caption
// const img = document.getElementById('myImg');
// const modalImg = document.getElementById('img01');
// const captionText = document.getElementById('caption');

// const img2 = document.getElementById('myImg2');
// const captionText2 = document.getElementById('caption2');

// img.onclick = function () {
//     modal.style.display = 'block';
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// };
//
// img2.onclick = function () {
//     modal.style.display = 'block';
//     modalImg.src = this.src;
//     captionText2.innerHTML = this.alt;
// };

// Get the <span> element that closes the modal
// const span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = 'none';
// };

// Get the modal
const modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img1 = document.getElementById('myImg1');
const img2 = document.getElementById('myImg2');
const img3 = document.getElementById('myImg3');
const img4 = document.getElementById('myImg4');
const img5 = document.getElementById('myImg5');
const img6 = document.getElementById('myImg6');
const img7 = document.getElementById('myImg7');
const img8 = document.getElementById('myImg8');
const img9 = document.getElementById('myImg9');
const img10 = document.getElementById('myImg10');
const modalImg = document.getElementById('img01');
const captionText = document.getElementById('caption');

img1.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

img2.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

img3.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

img4.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

img5.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

img6.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

img7.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

img8.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

img9.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

img10.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

const span = document.getElementsByClassName('close')[0];
span.onclick = function () {
    modal.style.display = 'none';
};
