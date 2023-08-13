let btn = [...document.querySelectorAll('.time button')];
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
btn.forEach(function(b){
    b.addEventListener('click',()=>{
        index = btn.indexOf(b);
        win.scrollLeft = pagewidth*index; 
    btn.forEach((d)=>{
        if(btn.indexOf(d) != btn.indexOf(b)){
            d.classList.remove('click')
        }else{
            d.classList.add('click')
        }
    })
    })
    
})

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
    document.getElementById("photobox").style.display = "block";
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