const minutesLable = document.getElementById('minutes');
const secondsLable = document.getElementById('seconds');
const milisecLable = document.getElementById('miliseconds');

const startbtn = document.getElementById('startbtn');
const stopbtn = document.getElementById('stopbtn');
const pausebtn = document.getElementById('pausebtn');
const resetbtn = document.getElementById('resetbtn');

const laplist= document.getElementById('lap-list');

let minutes=0;
let seconds=0;
let miliseconds=0;
let interval;

startbtn.addEventListener('click',startTimer);
stopbtn.addEventListener('click',stopTimer);
pausebtn.addEventListener('click',pauseTimer);
resetbtn.addEventListener('click',resetTimer);

function startTimer(){
    interval =setInterval( updateTimer,10);
    startbtn.disabled=true;
}
function stopTimer(){
    clearInterval(interval);
    addlaplist();
    startbtn.disabled=false;
    resetTimerData();
    
}
function pauseTimer(){
    clearInterval(interval)
    startbtn.disabled=false;
}
function resetTimer(){
    clearInterval(interval);
    resetTimerData();
    startbtn.disabled=false;
}
function updateTimer(){
    miliseconds++;
    if(miliseconds===100){
        miliseconds = 0;
        seconds++;
        if(seconds===60){
            seconds=0;
            minutes++;
        }
    }
    displayTimer();
}
function displayTimer(){
    milisecLable.textContent = miliseconds.toString().padStart(2,'0');
    secondsLable.textContent=seconds.toString().padStart(2,'0');
    minutesLable.textContent=minutes.toString().padStart(2,'0');
}

function resetTimerData(){
    minutes=0;
    miliseconds=0;
    seconds=0;
    displayTimer()
}
function addlaplist(){
    const laptime=`${minutes}:${seconds}:${miliseconds}`;
    const listItem= document.createElement('li');
    listItem.innerHTML=`<span> Lap ${laplist.childElementCount + 1}: </span>${laptime}`;
    laplist.appendChild(listItem);

}