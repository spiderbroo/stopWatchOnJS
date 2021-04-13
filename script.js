let time = Date.now();
let stopWatch;
let DateNowIs = 0;
let clockDisplay = document.querySelector('.clock');

function displayClock() {
    DateNowIs = Date.now();
    let hours = Math.floor((DateNowIs - time)/3600000);
    let minutes = Math.floor(((DateNowIs - time) / 60000) % 60);
    let seconds = Math.floor(((DateNowIs - time) / 1000) % 60);
    let milliseconds = Math.floor((DateNowIs - time) % 1000)

    let displayHours = (hours < 10) ? '0' + hours : hours;
    let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;
    let displayMilliseconds = (milliseconds < 10) ? '00' + milliseconds : (milliseconds < 100 && milliseconds >10) ? '0' + milliseconds : milliseconds;
    clockDisplay.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}.${displayMilliseconds}`;

    time++;
};

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

startBtn.addEventListener('click', () => {
    stopWatch = setInterval(displayClock, 0.01);
    startBtn.disabled = true;
    time = Date.now();
});

stopBtn.addEventListener('click', () => {
    clearInterval(stopWatch);
    startBtn.disabled = false;
});

resetBtn.addEventListener('click', () => {
    clearInterval(stopWatch);
    startBtn.disabled = false;
    time = Date.now();
    DateNowIs = Date.now();
    displayClock();
});

displayClock();