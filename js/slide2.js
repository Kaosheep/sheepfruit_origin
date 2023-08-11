
const content = document.querySelector('.content');
let isDragStart = false ,prevPageX,prevScrollLeft,positionDiff;

let firstimg=content.querySelector('img');
let left = document.getElementById('left');
let right = document.getElementById('right');
let firstimgwidth = firstimg.offsetWidth;
// let scrollWidth = content.scrollWidth - content.clientWidth;
left.addEventListener('click',()=>{
    content.scrollLeft -= firstimgwidth;
})
right.addEventListener('click',()=>{
    content.scrollLeft += firstimgwidth;
})

function dragStart(e){
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = content.scrollLeft;
}
function dragging(e){
    if(!isDragStart) return;
    e.preventDefault();
    content.classList.add('dragging');
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    content.scrollLeft = prevScrollLeft - positionDiff;
}
function dragStop(){
    isDragStart = false;
    content.classList.remove('dragging');
}

content.style.width = 

content.addEventListener("mousedown",dragStart);
content.addEventListener("touchstart",dragStart);
content.addEventListener("mousemove",dragging);
content.addEventListener("touchmove",dragging);
content.addEventListener("mouseup",dragStop);
content.addEventListener("mouseleave",dragStop);
content.addEventListener("touchend",dragStop);