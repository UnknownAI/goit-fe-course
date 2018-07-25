const startBtn = document.querySelector('.js-start');
const resetBtn = document.querySelector('.js-reset');
const watchFace = document.querySelector('.js-time');
const laps = document.querySelector('.js-laps');
let startTime = Date.now();


let pausedTime = null;
let counter = null;



startBtn.addEventListener('click', onStart);
resetBtn.addEventListener('click', onReset);
// function onReset() {
//   if (resetBtn.textContent === 'Reset') {
//     watchFace.textContent = formWatchFaceFromDate(0);
//     clearInterval(counter);
//     startBtn.textContent = 'Start';
//     while (laps.firstChild) {
//       laps.removeChild(laps.firstChild);
//     }
//   } else if (resetBtn.textContent === 'Lap') {
//     const lapResult = document.createElement('li');
//     lapResult.textContent = watchFace.textContent;
//     laps.appendChild(lapResult);
//   }
// }
function onStart() {
  if (startBtn.textContent === 'Start') {
    startBtn.textContent = 'Pause';
    startTime = Date.now();
    counter = setInterval(timerFunction, 100);
  } else if (startBtn.textContent === 'Pause') {
    clearInterval(counter);
    pausedTime = Date.now() - startTime;
    startBtn.textContent = 'Continue';
    resetBtn.textContent = 'Lap';
  } else if (startBtn.textContent === 'Continue') {
    startBtn.textContent = 'Pause';
    resetBtn.textContent = 'Reset';
    startTime = Date.now() - pausedTime;
    counter = setInterval(timerFunction, 100);
  }
}
function timerFunction() {
  watchFace.textContent = formWatchFaceFromDate(Date.now() - startTime);
}



function formWatchFaceFromDate(deltaDateInMillis) {

  const deltaDate = new Date(deltaDateInMillis);
  
  const minutes =
    deltaDate.getMinutes() < 10
      ? `0${deltaDate.getMinutes()}`
      : deltaDate.getMinutes();
  const seconds =
    deltaDate.getSeconds() < 10
      ? `0${deltaDate.getSeconds()}`
      : deltaDate.getSeconds();
  const milliSeconds = Number.parseInt(deltaDate.getMilliseconds() / 100);
  return `${minutes}:${seconds}.${milliSeconds}`;
}
