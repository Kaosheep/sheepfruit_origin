document.addEventListener("DOMContentLoaded", function () {
    let divWidth = nowDivWidth();

    function nowDivWidth() {
        return document.getElementById('sliderBoard').offsetWidth;
    }

    window.addEventListener("resize", function () {
        divWidth = nowDivWidth();
        let imgCount = document.querySelectorAll('#content li').length;
        document.querySelectorAll('#content li').forEach(function (li) {
            li.style.width = divWidth + 'px';
        });
        document.querySelector('#content').style.width = (divWidth * imgCount) + 'px';
        document.querySelector('#content').style.left = (-index * divWidth) + 'px';
    });

    let imgCount = document.querySelectorAll('#content li').length;

    for (let i = 0; i < imgCount; i++) {
        document.querySelector('#contentButton').innerHTML += '<li></li>';
    }

    document.querySelector('#contentButton li:first-child').classList.add('clicked');

    document.querySelectorAll('#content li').forEach(function (li) {
        li.style.width = divWidth + 'px';
    });

    document.querySelector('#content').style.width = (divWidth * imgCount) + 'px';

    let index = 0;
    let timer = setInterval(moveToNext, 5000);

    document.querySelectorAll('#contentButton li').forEach(function (button) {
        button.addEventListener('click', function () {
            clearInterval(timer);
            index = Array.from(this.parentNode.children).indexOf(this);
            document.querySelector('#content').style.left = (index * -divWidth) + 'px';
            this.classList.add('clicked');
            document.querySelectorAll('#contentButton li').forEach(function (otherButton) {
                if (otherButton !== button) {
                    otherButton.classList.remove('clicked');
                }
            });
            timer = setInterval(moveToNext, 5000);
        });
    });

    function moveToNext() {
        if (index < imgCount - 1) {
            index++;
        } else {
            index = 0;
        }
        document.querySelector('#content').style.left = (index * -divWidth) + 'px';
        document.querySelector(`#contentButton li:nth-child(${index + 1})`).classList.add('clicked');
        document.querySelectorAll(`#contentButton li:not(:nth-child(${index + 1}))`).forEach(function (button) {
            button.classList.remove('clicked');
        });
    }
});
