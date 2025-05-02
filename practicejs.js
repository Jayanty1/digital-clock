const htext=document.querySelector("#hours");
const mtext=document.querySelector("#minutes");
const stext=document.querySelector("#seconds");
const start=document.querySelector(".start");
const stop=document.querySelector(".stop");
const reset=document.querySelector(".button");

let hours=0;
let minutes=0;
let seconds=0;
let i=null;

function updatetime(){
    seconds+=1;
    if(seconds>=60){
        seconds=0;
        minutes+=1;
        if(minutes>=60){
            minutes=0;
            hours+=1;
        }
    }
    htext.textContent=hours.toString().padStart(2,"0");
    mtext.textContent=minutes.toString().padStart(2,"0");
    stext.textContent=seconds.toString().padStart(2,"0");
}

start.addEventListener("click", function() {
    if(i===null){
        i=setInterval(updatetime,1000);
    }
});
stop.addEventListener("click", function(){
    if(i!==null){
        clearInterval(i);
        i=null;
    }
});
reset.addEventListener("click", function(){
    resetTimer();
});



function resetTimer(){
    clearInterval(i);
    i=null;
    hours=0;
    seconds=0;
    minutes=0;
    htext.textContent="00";
    mtext.textContent="00";
    stext.textContent="00";
}

