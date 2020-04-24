var sec=0;
var milliSec=0;
var ti=3;
var t;
var gridNumbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var gridNumbersMed=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
var count=1;
var a;
var flag=false;
var paused=false;//to determine if the game is paused
var st=false;//to determine if the game has begun
var scoreTab=false;//to know if clicked on highscores
var submitHit=false; //to know if the user has clicked submit
let score;
var startCountDown=false;
var countdown;
var easyUsers=[];
var mediumUsers=[];
var hardUsers=[];
var buttonTap=new Audio("public/sounds/Button_Press_3-Marianne_Gagnon-771871963.mp3");
var wrongTap=new Audio("public/sounds/wrong-buzzer.mp3");
var row;
var col;
var name;

gridNumbers=shuffle(gridNumbers);
gridNumbersMed=shuffle(gridNumbersMed);
var con=localStorage.getItem('condition');


var easyUsers = JSON.parse(localStorage.getItem("easyUsers") || "[]");
var mediumUsers = JSON.parse(localStorage.getItem("mediumUsers") || "[]");
var hardUsers = JSON.parse(localStorage.getItem("hardUsers") || "[]");



document.getElementById("submit").addEventListener('click',function(){
  name=document.getElementById('userName').value;
  row=document.getElementById('inputRow').value;
  col=document.getElementById('inputCol').value;
  scroll=document.getElementById('scrollCheck').checked;
  if(name===''||row==='row'||col==='col'){
    alert('enter valid inputs');
  }
  else{

  submitHit=true;
  if(scroll){
    document.getElementById('userDetails').innerHTML='<div class="userInput info">\
                                                      <p class="userIntro">Hey '+name+'! <br> You will be playing a grid of '+row+' X '+col+',with rows moving horizontally</p>\
                                                      </div>'
  }
  else{
  document.getElementById('userDetails').innerHTML='<div class="userInput info">\
                                                    <p class="userIntro">Hey '+name+'! <br> You will be playing a grid of '+row+' X '+col+'</p>\
                                                    </div>'
}
}
})


document.getElementById("newGame").addEventListener('click',function(){
  window.location.reload();
})


document.getElementById("pause").style.visibility="hidden";
document.getElementById('scoreTable').style.visibility='visible';

document.getElementById('tableEasy').style.visibility='hidden';
document.getElementById('tableMedium').style.visibility='hidden';
document.getElementById('tableHard').style.visibility='hidden';

//
document.getElementById("startGame").addEventListener('click',function(){
  console.log(scroll);

  if(!submitHit){
    alert('Fill the details above');
  }
  else{
    countdown=setInterval(countDown,1000);
    st=true;
  }



  if(!st){
    document.getElementById('scoreTable').style.visibility='visible';
  }
  else{
    document.getElementById('scoreTable').style.visibility='hidden';
  }

})

document.getElementById("pause").addEventListener('click',function(){
  paused = paused ? false : true;
  if(paused){
    document.getElementById("pause").innerHTML='Start';
    document.getElementById("gridBase").innerHTML ='<h2>PAUSED!!</h2>';
  }
  else{
    document.getElementById("pause").innerHTML='Pause';
if(!startCountDown){
    displayGrid();

    }
  }
})

// shuffling the array

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


// main function

function countDown(){
  document.getElementById("pause").style.visibility="visible";
  if(!paused){
    startCountDown=true;
document.getElementById("gridBase").innerHTML = '<h1 class="count" style="font-size:6rem">'+ti+'</h1>' ;

if(ti===0){
  ti=4;
  startCountDown=false;
   timeControl();
   displayGrid();
   clearInterval(countdown);



}
ti=ti-1;
}
}

// function to display the game for different levels



// game timer

function timeControl(){
t=setInterval(timer,0.5);
}
function timer(){
  if(!paused){
  if(milliSec>0 && milliSec%1000===0){
    sec++;
    milliSec=0;
  }

  if(milliSec>0 && milliSec<10){
    document.getElementById("timer").innerHTML=sec+":"+"00"+milliSec;
  }
  if(milliSec>=10 && milliSec<100){
    document.getElementById("timer").innerHTML=sec+":"+"0"+milliSec;
  }
  if(milliSec>=100 && milliSec<1000){
    document.getElementById("timer").innerHTML=sec+":"+milliSec;

  }
  if(sec<10){
    document.getElementById("timer").innerHTML='0'+document.getElementById("timer").innerHTML;
  }
  milliSec++;
}
}
