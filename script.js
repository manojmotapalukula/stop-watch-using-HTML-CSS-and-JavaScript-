let timeDisplay = document.getElementById("timeDisplay")
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let milliSec = 0;
let sec = 0;
let min = 0;
let timer = null;

startButton.addEventListener('click',function(){
    if (timer !== null){
        clearInterval(timer);

    }
    timer = setInterval(startTime,10);
});


stopButton.addEventListener('click',function(){
        clearInterval(timer);

});


resetButton.addEventListener('click',function(){
 
        clearInterval(timer);
        milliSec=sec=min=0;
        timeDisplay.innerHTML = '00:00:00'
        

});



function startTime(){
    milliSec++;
    if(milliSec == 100){
        milliSec = 0;
        sec++;
        if (sec == 60){
            sec = 0;
            min++;
        }
    }
    let minFormat = (min<10)?  `0${min}`: min;
    let secFormat = (sec<10)?  `0${sec}`: sec;
    let milliSecFormat = (milliSec<10)?  `0${milliSec}`: milliSec;
    

    timeDisplay.innerHTML = `${minFormat}:${secFormat}:${milliSecFormat}`;
}

