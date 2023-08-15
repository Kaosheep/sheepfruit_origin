let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);
// -----------行動nav
let monav = document.querySelector('.monav');
let opennav = document.getElementById('opennav');
let monavbar = document.querySelector('.monavbar');
let monavlogo = document.getElementById('monavlogo');
let center=document.querySelector('.center')


let closen = document.getElementById('close');
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

closen.addEventListener("click",()=>{
    momenu.classList.remove('active');
    setTimeout(() => {
        monav.classList.remove('open');
        monavbar.classList.remove('small');
    }, 700);
    liElements.forEach(liElement => {
        liElement.style.opacity = '0';
    });     
})
//------------------------------------------
let totop = document.getElementById('totop');
totop.addEventListener('click',()=>{
    window.scrollTo(0,0);
})

//---------------------------------
let info = document.querySelector('.info');
let send = document.getElementById('send');
let textbox = document.getElementById('textbox');
let bot = document.getElementById('bot');
let server = document.querySelector('.server')

function addtxtWithTime(mes, time, className) {
    let chatdiv = document.createElement('div');
    chatdiv.classList.add(className);
    
    let chatContent = document.createTextNode(mes);
    let chatTime = document.createTextNode(time);
    
    let chatMessage = document.createElement('p');
    chatMessage.appendChild(chatContent);

    if (className === 'auto') {
        let chatTimeSpan = document.createElement('span');
        chatTimeSpan.classList.add('chattime');
        chatTimeSpan.appendChild(chatTime);
        
        chatdiv.appendChild(chatMessage);
        chatdiv.appendChild(chatTimeSpan);
    } else if (className === 'cust') {
        let chatTimeSpan = document.createElement('span');
        chatTimeSpan.classList.add('chattime');
        chatTimeSpan.appendChild(chatTime);
        
        chatdiv.appendChild(chatTimeSpan);
        chatdiv.appendChild(chatMessage);
    }

    return chatdiv;
}

function chatback(userInput) {
    if (userInput.includes('時間')) {
        return '營業時間為8:00-17:00咩';
    }else if (userInput.includes('地點') ||userInput.includes('地址')){
        return '桃園市中壢區復興路46號咩';
    }else if (userInput.includes('交通')||userInput.includes('怎麼去')){
        return '公共交通工具： 乘坐火車並在中壢火車站下車，在火車站後門轉乘44號公車至羊桃觀光牧場站下車咩。';
    }else{
        return '不理解您的輸入咩!';
    }
}

function addchat() {
    let mes = textbox.value;
    if (!mes) return;

    let currentTime = new Date().toLocaleTimeString([], {hour12: false, hour: "2-digit", minute: "2-digit" });

    info.appendChild(addtxtWithTime(mes, currentTime, 'cust'));
    info.appendChild(addtxtWithTime(chatback(mes), currentTime, 'auto'));

    textbox.value = '';
}

textbox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { 
        addchat();
    }
});

send.addEventListener('click', addchat);

let botclose = document.getElementById('botclose');

let isFirstClick = true;
let firstClickTime;

bot.addEventListener('click', () => {
    if (isFirstClick) {
        firstClickTime = new Date().toLocaleTimeString([], {hour12: false, hour: "2-digit", minute: "2-digit" });
        document.getElementById('opentime').innerHTML = firstClickTime;
        isFirstClick = false;
    }
    server.classList.toggle('tap');
});


botclose.addEventListener('click',()=>{
    server.classList.remove('tap')
})
window.addEventListener("click", function (event) {
    if (!server.contains(event.target) && event.target != bot) {
        server.classList.remove('tap')
    }
});
//----------------------------------------------------


