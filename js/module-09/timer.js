let startTime = Date.now(); 
let clockFace = document.querySelector('.js-time');
let startBtn = document.querySelector('.js-start'); 
const resetBtn = document.querySelector('.js-reset');
const lapBtn = document.querySelector('.js-take-lap'); 
const container = document.querySelector('.js-laps'); 
let timerId = 0; 
let pausedTime = 0;
let isActive = false; 
let currentTime = 0; 


function timer(time){ 
    currentTime =  new Date(time);
    let minutes = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : currentTime.getMinutes(); 
    let seconds = currentTime.getSeconds() < 10 ? `0${currentTime.getSeconds()}` : currentTime.getSeconds();
    let mSec = Number.parseInt(currentTime.getMilliseconds()/100);
    return `${minutes}:${seconds}.${mSec}`;
}


function timerFace(){
    clockFace.textContent = timer(Date.now() - startTime); 
}

function onStart() {

    if (!isActive) {
        if (currentTime === 0) {
            activateTimer(Date.now());
        } else if (currentTime !== 0) {
            activateTimer(Date.now() - pausedTime);
        }
    } else if (isActive) {
        clearInterval(timerId);
        pausedTime = Date.now() - startTime;
        startBtn.textContent = 'Continue';
        isActive = false;
    }
}

function activateTimer(time){
    startBtn.textContent = 'Pause';
    startTime = time; 
    timerId = setInterval(timerFace,100); 
    isActive = true; 
}

function onReset(){
    clearInterval(timerId); 
    clockFace.textContent = timer(0); 
    startBtn.textContent = 'Start'; 
    currentTime = 0; 
    
    while (container.firstChild){
        container.removeChild(container.firstChild); 
    }
}

function onLap(){
    const listElement = document.createElement('li'); 
    listElement.textContent = clockFace.textContent;
    container.appendChild(listElement); 
    
}


resetBtn.addEventListener('click',onReset); 
startBtn.addEventListener('click',onStart); 
lapBtn.addEventListener('click', onLap); 


