var off=false;
var intervalId=null;
let tSec=0;

function startTimer(){
off=false;
if(intervalId){
  clearInterval(intervalId)
}
  

  let hours=parseInt(document.getElementById("hrs").value);
  let minutes=parseInt(document.getElementById("mins").value);
  let seconds=parseInt(document.getElementById("secs").value);
if(isNaN(hours)||isNaN(minutes)||isNaN(seconds)){
  alert("Please enter a number. Type 0 if necessary");
  return;
}

  document.getElementById("Settings").style.display="none";

document.querySelectorAll("input").forEach(input => {
  input.disabled=true;
});

document.getElementById("J").disabled=true;
  document.getElementById("timer").innerText=hours+":"+minutes+":"+seconds;

   tSec=(hours*3600)+(minutes*60)+seconds;
  intervalId = setInterval(() =>{ 
    if(tSec===0 || off){
      clearInterval(intervalId);
      return;
    }
    tSec--;
    var hr=Math.floor(tSec/3600);
    var min=Math.floor((tSec%3600)/60);
    var sec=Math.floor((tSec%3600)%60);
    if(hr<10){
      hr="0"+hr;
    }
    if(min<10){
      min="0"+min;
    }
    if(sec<10){
      sec="0"+sec;
    }
     document.getElementById("timer").innerText=(hr)+":"+(min)+":"+(sec);
  },1000)
}

function pauseTimer(){
  off=true;
}

function unpauseTimer(){
  if(!off || !intervalId){
    alert("There is nothing to unpause!")
  }
  off=false;
  const timeVal=document.getElementById("timer").innerText;
  const [hr,min,sec]=timeVal.split(":");
  document.getElementById("hrs").value=hr;
  document.getElementById("mins").value=min;
  document.getElementById("secs").value=sec;
  startTimer();
}


function reset(){
  off=true;
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
document.getElementById("Settings").style.display="block";
  document.getElementById("timer").innerText="00:00:00";
  document.querySelectorAll("input").forEach(input => {
    input.disabled=false;
  });

  document.getElementById("J").disabled=false;
  
}
