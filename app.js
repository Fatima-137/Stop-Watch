var minutes = 0;
var seconds = 0;
var miliSeconds = 0;
var minutesHeading = document.getElementById("min");
var secondsHeading = document.getElementById("sec");
var miliSecondsHeading = document.getElementById("miliSec");
var interval;


function timer(){
    miliSeconds++;
    miliSeconds.innerHTML = miliSeconds;
    if(miliSeconds >= 100){
        seconds++;
        secondsHeading.innerHTML = seconds;
        miliSeconds = 0;
    }
    else if(seconds >= 60){
        minutes++;
        minutesHeading.innerHTML = minutes;
        seconds = 0;
    }
}

function start(){
    interval = setInterval(timer, 10);
    document.getElementById('start').disabled = true;
}

function pause(){
    clearInterval(interval);
    document.getElementById('start').disabled = false;
}
function reset(){
    minutes = 0;
    seconds = 0;
    miliSeconds = 0;
    minutesHeading.innerHTML = minutes;
    secondsHeading.innerHTML = seconds;
    miliSecondsHeading.innerHTML = miliSeconds;
    pause();
    document.getElementById('start').disabled = false;
}
