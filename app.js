var minutes = 0;
var seconds = 0;
var miliSeconds = 0;
var minutesHeading = document.getElementById("min");
var secondsHeading = document.getElementById("sec");
var miliSecondsHeading = document.getElementById("miliSec");
var interval;


function timer(){
//     countdown = countdown++ >= 100 ? 0 : countdown;

//   countdownNumberEl.textContent = countdown;
    miliSeconds = miliSeconds++ >= 100 ? 0 : miliSeconds;
    // miliSeconds.innerHTML = miliSeconds;
    miliSecondsHeading.textContent = miliSeconds;
    if(miliSeconds >= 100){
        seconds++;
        secondsHeading.innerHTML = seconds;
        miliSeconds = 0;
//         countdown = countdown++ >= 100 ? 0 : countdown;

//   countdownNumberEl.textContent = countdown;
    }
    else if(seconds >= 60){
        minutes++;
        minutesHeading.innerHTML = minutes;
        seconds = 0;
//         countdown = countdown++ >= 60 ? 0 : countdown;

//   countdownNumberEl.textContent = countdown;
    }
}

function start(){
    interval = setInterval(timer, 10);
    document.getElementById('start').disabled = true;
    // toggle();
}

function pause(){
    clearInterval(interval);
    document.getElementById('start').disabled = false;
    // toggle();
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
    // if (reset()==1){
    //     var a = document.getElementById("reset").disable.false;
    // }
    // else{
    //     a = disable.false;
    // }
}
// function disableNextButton(start){
    // document.getElementById('start').disabled = true;
// }

// var start = document.getElementById("start");
// var pause = document.getElementById("pause");
// function toggle(){
//     if(start.disabled){
//         start.disabled = false;
//         pause.disabled = true;
//     }
//     else{
//         start.disabled = true;
//         pause.disabled = false;
//     }
// }

// start.addEventListener("click", function(){
//     toggle();
//     interval = setInterval(count, 1000);
// });
/* * The setTimeout({},0) is a workaround for what appears to be a bug in StackSnippets. * It should not be required. See JSFiddle version. */ 
// setTimeout(function() { 
//     var time = 10; 
    // / how long the timer will run (seconds) / 
    // var initialOffset = '440'; 
    // var i = 1;
    //  / Need initial run as interval hasn't yet occured... / 
    // $('.circle_animation').css('stroke-dashoffset', initialOffset-(1(initialOffset/time))); 
    // var interval = setInterval(function() { 
        // $('text').text(i); 
        // if (i == time) { 	 
            // clearInterval(interval); return; } 
// $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)(initialOffset/time))); i++; }, 1000); }, 0);
// var countdownNumberEl = document.getElementById('countNum');
// var countdown = 0;

// countdownNumberEl.textContent = countdown;

// interval = setInterval(function() {
//   countdown = countdown++ >= 10 ? 0 : countdown;

//   countdownNumberEl.textContent = countdown;
// }, 10);