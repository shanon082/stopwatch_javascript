let playpausebtn = document.getElementById('play');
let resetbtn = document.getElementById('reset');

let hours = 0;
let minutes = 0;
let seconds = 0;

let leadingsec = 0;
let leadingmin = 0;
let leadinghr = 0;

let timeinterval = null;
let timestatus = "stopped";

function stopwatch(){
    seconds++;
    if(seconds/60===1){
        seconds = 0;
        minutes++;
        if(minutes/60===1){
            minutes = 0;
            hours++;
        }
    }

    if(seconds<10){
        leadingsec = "0"+seconds.toString();
    }
    else{
        leadingsec = seconds;
    }
    if(minutes<10){
        leadingmin = "0"+minutes.toString();
    }
    else{
        leadingmin = minutes;
    }
    if(hours<10){
        leadinghr = "0"+hours.toString();
    }
    else{
        leadinghr = hours;
    }

    let displaytime = document.getElementById('time').innerText = leadinghr + ":" + leadingmin + ":" +leadingsec;
}

playpausebtn.addEventListener('click',function(){
    if(timestatus==="stopped"){
        timeinterval = window.setInterval(stopwatch,1000);
        document.getElementById('play').innerHTML = '<button id="pause">Pause</button>';
        timestatus = "started";
    }
    else{
        window.clearInterval(timeinterval);
        document.getElementById('pause').innerHTML = '<button id="play">Play</button>';
        timestatus = "stopped";
    }
});

resetbtn.addEventListener('click',function(){
    window.setInterval(timeinterval);
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById('time').innerHTML = "00:00:00";
})