let pic =document.querySelector('.pic');
let content = document.querySelector('.content');
let img = content.querySelectorAll('.pic img');
let imgwidth = content.querySelector('img').offsetWidth;
let index = 0;
let timer = setInterval(move,4000);
createdot();
let dotlist = document.querySelector('.dot').children;
let dotarr = [...dotlist];
function contentwidth(){
 if((Math.floor(pic.offsetWidth /imgwidth)) == 1){
content.style.width = imgwidth + 'px';
}else{
 content.style.width = parseInt(Math.floor(pic.offsetWidth /imgwidth)*imgwidth + 10) +'px';   
}   
}
contentwidth();
//resize
function resizewindow(e){
contentwidth()
let dotcount = img.length / parseInt(Math.floor(pic.offsetWidth /imgwidth)); 
document.querySelector('.dot').innerHTML = '';
if(dotcount<=img.length){
    for (let i = 0; i <dotcount; i++) {
    document.querySelector('.dot').innerHTML += '<li></li>';
    }
}else{
    dotcount=img.length;
}
let dotlist = document.querySelector('.dot').children;
let dotarr = [...dotlist];
dotarr[parseInt(((content.scrollLeft)/imgwidth) / Math.floor(pic.offsetWidth /imgwidth))].classList.add('active');
dotarr.forEach(
    function(d){
    d.addEventListener('click',(e)=>{    
    clearInterval(timer);
    index = dotarr.indexOf(d);
    content.scrollLeft = (imgwidth + 10) * Math.floor(pic.offsetWidth /imgwidth) *index;
    dotarr.forEach((b)=>{
        if(dotarr.indexOf(b) != dotarr.indexOf(d)){
            b.classList.remove('active')
        }else{
            b.classList.add('active')
        }
    })
    timer = setInterval(move,4000);
    })
})
}
// resizewindow();
window.addEventListener('resize',resizewindow);

//adddot
function createdot(){
let dotcount = img.length / parseInt(Math.floor(pic.offsetWidth /imgwidth));
for (let i = 0; i <dotcount; i++) {
    document.querySelector('.dot').innerHTML += '<li></li>';
    }
    let dotlist = document.querySelector('.dot').children;
    let dotarr = [...dotlist];
}
document.querySelector('.pic .dot li:first-child').classList.add('active');
let left = document.getElementById('left');
let right = document.getElementById('right');
let isScrolling = false;
left.addEventListener('click',()=>{
    if (!isScrolling) {
        clearInterval(timer);
        content.scrollLeft -= (imgwidth + 10) * Math.floor(pic.offsetWidth /imgwidth);
        let activebtn =  document.querySelector('.dot .active');
        if(document.querySelector('.dot').firstElementChild.classList.contains('active')){
            dotlist[dotlist.length-1].classList.add('active');
            content.scrollLeft = (imgwidth+10)*Math.floor(pic.offsetWidth /imgwidth)*(dotlist.length -1);
        }else{
            activebtn.previousElementSibling.classList.add('active');
            content.style.scrollBehavior = 'smooth'
        }
        activebtn.classList.remove('active');
        timer = setInterval(move,4000);
        setTimeout(() => {
        isScrolling = false;
    }, 500);}
})

right.addEventListener('click',()=>{
if (!isScrolling) {
    clearInterval(timer)
    content.scrollLeft += (imgwidth + 10) * Math.floor(pic.offsetWidth /imgwidth);
    let activebtn =  document.querySelector('.dot .active');

    if(document.querySelector('.dot').lastElementChild.classList.contains('active')){
        dotlist[0].classList.add('active');
        content.scrollLeft = 0;
    }else{
        activebtn.nextElementSibling.classList.add('active');
    }
    activebtn.classList.remove('active');
    timer = setInterval(move,4000);
    setTimeout(() => {
      isScrolling = false;
    }, 500);}
})
    
    
//move
function move(){
    if(index<dotlist.length-1){
        index++
    }else{
        index=0;
    }
    content.scrollLeft = (imgwidth + 10) * Math.floor(pic.offsetWidth /imgwidth) *index;
    dotlist[index].classList.add('active');
    for(i=0;i<dotlist.length;i++){
        if(dotlist[i] != dotlist[index]){
            dotlist[i].classList.remove('active');
        }
    }
}
move();
dotarr.forEach(
    function(d){
    d.addEventListener('click',(e)=>{    
    clearInterval(timer);
    index = dotarr.indexOf(d);
    content.scrollLeft = (imgwidth + 10) * Math.floor(pic.offsetWidth /imgwidth) *index;
    dotarr.forEach((b)=>{
    if(dotarr.indexOf(b) != dotarr.indexOf(d)){
                b.classList.remove('active')
            }else{
                b.classList.add('active')
            }
        })
        timer = setInterval(move,4000);
    })
})