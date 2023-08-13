let pic = document.querySelector('.pic');
let content = document.querySelector('.content');
let img = content.querySelectorAll('.pic img');
let imgwidth = content.querySelector('img').offsetWidth + 10; // Consider the margin
let index = 0;
let timer = setInterval(move, 4000);

createdot();
let dotlist = document.querySelector('.dot').children;
let dotarr = [...dotlist];

function contentwidth() {
    if ((Math.floor(pic.offsetWidth / imgwidth)) == 1) {
        content.style.width = imgwidth + 'px';
    } else {
        content.style.width = parseInt(Math.floor(pic.offsetWidth / imgwidth) * imgwidth + 20) + 'px';
    }
}
contentwidth();

function updateDots() {
    let currentPhotoIndex = Math.floor(content.scrollLeft / imgwidth);
    for (let i = 0; i < dotarr.length; i++) {
        if (i === currentPhotoIndex) {
            dotarr[i].classList.add('active');
        } else {
            dotarr[i].classList.remove('active');
        }
    }
}

function createdot() {
    let dotcount = img.length;
    for (let i = 0; i < dotcount; i++) {
        document.querySelector('.dot').innerHTML += '<li></li>';
    }
}

document.querySelector('.pic .dot li:first-child').classList.add('active');

let left = document.getElementById('left');
let right = document.getElementById('right');
let isScrolling = false;

left.addEventListener('click', () => {
    if (!isScrolling) {
        clearInterval(timer);
        content.scrollLeft -= imgwidth;
        updateDots();
        timer = setInterval(move, 4000);
    }
});

right.addEventListener('click', () => {
    if (!isScrolling) {
        clearInterval(timer);
        content.scrollLeft += imgwidth;
        updateDots();
        timer = setInterval(move, 4000);
    }
});

function move() {
    if (index < dotlist.length - 1) {
        index++;
    } else {
        index = 0;
    }
    content.scrollLeft = imgwidth * index;
    updateDots();
}

dotarr.forEach(function (d) {
    d.addEventListener('click', (e) => {
        clearInterval(timer);
        index = dotarr.indexOf(d);
        content.scrollLeft = imgwidth * index;
        updateDots();
        timer = setInterval(move, 4000);
    });
});

window.addEventListener('resize', () => {
    contentwidth();
    imgwidth = content.querySelector('img').offsetWidth + 10; // Update imgwidth considering margin
    updateDots();
});

