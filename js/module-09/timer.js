'use strict'

const clockFace = document.querySelector('.js-time');
const startBtn = document.querySelector('.js-start'); 
const resetBtn = document.querySelector('.js-reset');
const lapBtn = document.querySelector('.js-take-lap'); 
const container = document.querySelector('.js-laps'); 
let startTime = Date.now(); 
let timerId = 0; 
let pausedTime = 0;
let currentTime = 0;
let isActive = false;  


function timer(time){ 
    currentTime =  new Date(time);
    let minutes = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : currentTime.getMinutes(); 
    let seconds = currentTime.getSeconds() < 10 ? `0${currentTime.getSeconds()}` : currentTime.getSeconds();
    let milliseconds = Number.parseInt(currentTime.getMilliseconds()/100);
    return `${minutes}:${seconds}.${milliseconds}`;
}


function showTime(){
    clockFace.textContent = timer(Date.now() - startTime); 
}

function activateTimer(time){
    startBtn.textContent = 'Pause';
    startTime = time; 
    timerId = setInterval(showTime,100); 
    isActive = true; 
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

function onLap(){
    const listElement = document.createElement('li'); 
    listElement.textContent = clockFace.textContent;
    container.appendChild(listElement);    
}

function onReset() {
    clearInterval(timerId);
    isActive = false;
    clockFace.textContent = timer(0);
    pausedTime = 0;
    startBtn.textContent = 'Start';
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}   


startBtn.addEventListener('click',onStart); 
lapBtn.addEventListener('click', onLap); 
resetBtn.addEventListener('click',onReset); 

