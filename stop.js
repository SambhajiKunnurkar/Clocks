let timer = document.getElementById('timer');
let startButton = document.getElementById('green');
let stopButton = document.getElementById('red');
let resetButton = document.getElementById('blue');
let msec = 0;
let secs = 0;
let mins = 0;
let timerId = null;
startButton.addEventListener('click', function () {
    if (timerId === null) {
        timerId = setInterval(startTimer, 10);
    }
});
stopButton.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null; 
});
resetButton.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null; 
    msec = 0;
    secs = 0;
    mins = 0;
    updateTimerDisplay();
});
function updateTimerDisplay() {
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    timer.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
function startTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        secs++;
        if (secs === 60) {
            secs = 0;
            mins++;
        }
    }
    updateTimerDisplay();
}
updateTimerDisplay();
