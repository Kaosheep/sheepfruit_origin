window.addEventListener('scroll', ()=>{
    if(document.documentElement.scrollTop>window.innerHeight){
        monav.style.top = '-10px'
    }else{
        monav.style.top = '-100%'
    }
    });
let wrap = document.querySelector('.wrap')
let paralogo = document.getElementById('paralogo');
let floor = document.getElementById('floor');
let moun = document.getElementById('moun');
let cl= document.getElementById('cl');
let cr = document.getElementById('cr');
window.addEventListener("scroll",()=>{
    let value = window.scrollY;
    paralogo.style.marginTop = value*1.3 + 'px'
    moun.style.bottom = value*-0.2 + 'px'
    cl.style.left = value* -0.5 + 'px'
    cr.style.right = value* -0.5 + 'px'
})
window.addEventListener("mousemove",(e)=>{
    let x = (window.innerWidth - e.pageX)/98;
    let y = (window.innerHeight- e.pageY)/100;
    cl.style.transform = `translate(${x}px , ${y}px)`;
    cr.style.transform = `translate(-${x}px , -${y}px)`
})
window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop>30 ){
    document.querySelector('.fa-angles-down').style.opacity = '0'    
    }else{document.querySelector('.fa-angles-down').style.opacity = '1' }
})

//--------------------------------------------------------------------
let sheeprow = document.querySelector('.sheeprow');
let colwidth = document.querySelector('.newcol').offsetWidth;
let view = document.querySelector('.view');
let leftbtn = document.querySelector('.btngroup .fa-arrow-left');
let rightbtn = document.querySelector('.btngroup .fa-arrow-right');
resizes();

function resizes(){
    view.style.width = (parseInt(Math.floor(document.querySelector('.sheeprow').offsetWidth/colwidth) * colwidth))+'px';
}

window.addEventListener("resize", resizes);



let cols = [...view.children];

let pview = Math.round(view.offsetWidth/colwidth);

cols.slice(-pview).reverse().forEach(col=>{
    view.insertAdjacentHTML("afterbegin",col.outerHTML);
})
cols.slice(0, pview).forEach(col=>{
    view.insertAdjacentHTML("beforeend",col.outerHTML);
})

let timeoutIds;

let autoplays = () => {
    timeoutIds = setTimeout(() => {
        view.scrollLeft += colwidth;
        autoplays(); // 呼叫自身以實現循環
    }, 3500);
}
autoplays();

let infinitescrolls = () =>{
    if(view.scrollLeft == 0){
        view.style.scrollBehavior = 'auto'
        view.scrollLeft = view.scrollWidth - (2 * view.offsetWidth);
        view.style.scrollBehavior = 'smooth'
    }else if(Math.ceil(view.scrollLeft) == view.scrollWidth - view.offsetWidth){
        view.style.scrollBehavior = 'auto'
        view.scrollLeft = view.offsetWidth;
        view.style.scrollBehavior = 'smooth'
    }
    clearTimeout(timeoutIds);
    autoplays();
}

let isScrolling = false;


leftbtn.addEventListener('click', () => {
    if (!isScrolling) {
        clearTimeout(timeoutIds);    
        isScrolling = true;
        view.scrollLeft -= colwidth;
        autoplays();
        setTimeout(() => {
            isScrolling = false;
        }, 500);
    }
});

rightbtn.addEventListener('click', () => {
    if (!isScrolling) {
        clearTimeout(timeoutIds);    
        isScrolling = true;
        view.scrollLeft += colwidth;
        autoplays();
        setTimeout(() => {
            isScrolling = false;
        }, 500);
    }
});



view.addEventListener("scroll",infinitescrolls);
sheeprow.addEventListener("mouseenter",()=>clearTimeout(timeoutIds));
sheeprow.addEventListener("mouseleave",autoplays);