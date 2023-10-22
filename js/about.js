let btn = [...document.querySelectorAll('.time span')];
let page = document.querySelectorAll('.page')
let pagewidth = nowwidth();
let win = document.querySelector('.window');
let index = 0;

function nowwidth(){
    return document.querySelector('.window').offsetWidth;
}
window.addEventListener("resize", function () {
    pagewidth = nowwidth();
    win.scrollLeft = pagewidth*index;
});
btn[0].classList.add('click');

function setActiveButton(activeIndex) {
    btn.forEach((btn, i) => {
        if (i === activeIndex) {
            btn.classList.add('click');
        } else {
            btn.classList.remove('click');
        }
    });
}
btn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        index = i;
        win.scrollLeft = nowwidth() * index;
        setActiveButton(index);
    });
});
//------------------------------------

let ophoto = document.querySelectorAll('.photo img')
let photobox = document.querySelector('.photobox')
let large = document.querySelector('.large')


for(let i=0;i<ophoto.length;i++){
    ophoto[i].onclick = openModal;
    ophoto[i].addEventListener('click',(e)=>{
    document.querySelector('.large').src=e.target.src;
})
}

photobox.onclick = closeModal;

large.addEventListener('click',(e)=>{
    e.stopPropagation();
})

function openModal() {
    document.getElementById("photobox").style.display = "flex";
}

function closeModal() {
    document.getElementById("photobox").style.display = "none";
}
  
let photos = document.querySelectorAll('.small');
let photoarr = [...photos];


photoarr.forEach((p)=>{
    p.addEventListener('click',(e)=>{
        e.stopPropagation();
        document.querySelector(".large").src = e.target.src;
    })
})

let X=document.getElementById('X');
X.addEventListener('click',closeModal)