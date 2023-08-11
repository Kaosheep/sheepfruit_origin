
// -----------行動nav
let monav = document.querySelector('.monav');
let opennav = document.getElementById('opennav');
let monavbar = document.querySelector('.monavbar');
let monavlogo = document.getElementById('monavlogo');
let center=document.querySelector('.center')


let close = document.getElementById('close');
let momenu = document.getElementById('momenu');
let liElements = document.querySelectorAll('.momenu li');

let liaElements = document.querySelectorAll('.momenu li a');

opennav.addEventListener("click", function(event) {

    event.stopPropagation();
    monavbar.classList.add('small');
    setTimeout(() => {
    liElements.forEach(liElement => {
        liElement.style.opacity = '1';
    });
    monav.classList.add('open');
    momenu.classList.add('active');    
    },300)
    });

    monav.addEventListener("click", function() {
        if (momenu.classList.contains("active")) {
        momenu.classList.remove('active');
        setTimeout(() => {
            monav.classList.remove('open');
            monavbar.classList.remove('small');
        }, 700);}
        liElements.forEach(liElement => {
            liElement.style.opacity = '0';
        });
    });

console.log(momenu.classList)

close.addEventListener("click",()=>{
    momenu.classList.remove('active');
    setTimeout(() => {
        monav.classList.remove('open');
        monavbar.classList.remove('small');
    }, 700);
    liElements.forEach(liElement => {
        liElement.style.opacity = '0';
    });     
})

