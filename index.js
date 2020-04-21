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
let score;
var startCountDown=false;
var countdown;
var diff='';
var easyUsers=[];
var mediumUsers=[];
var hardUsers=[];
var buttonTap=new Audio("Button_Press_3-Marianne_Gagnon-771871963.mp3");
var wrongTap=new Audio("wrong-buzzer.mp3");



gridNumbers=shuffle(gridNumbers);
gridNumbersMed=shuffle(gridNumbersMed);
var con=localStorage.getItem('condition');


var easyUsers = JSON.parse(localStorage.getItem("easyUsers") || "[]");
var mediumUsers = JSON.parse(localStorage.getItem("mediumUsers") || "[]");
var hardUsers = JSON.parse(localStorage.getItem("hardUsers") || "[]");


// setting difficulty levels
document.getElementById('easy').addEventListener('click',function(){
  diff='easy';
  document.getElementById('difficulty').innerHTML='<h3>Difficulty set to Easy</h3>';
  if(easyUsers.length>0){
  document.getElementById('highScore').innerHTML='High Score:'+easyUsers[0].score;
  }

})

document.getElementById('medium').addEventListener('click',function(){
  diff='medium';
  document.getElementById('difficulty').innerHTML='<h3>Difficulty set to Medium</h3>';
  if(mediumUsers.length>0){
    document.getElementById('highScore').innerHTML='High Score:'+mediumUsers[0].score;

  }
})

document.getElementById('hard').addEventListener('click',function(){
  diff='hard';
  document.getElementById('difficulty').innerHTML='<h3>Difficulty set to Hard</h3>';
  if(hardUsers.length>0){
    document.getElementById('highScore').innerHTML='High Score:'+hardUsers[0].score;
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
  var nameInput=document.getElementById('userName').value;
  if(nameInput==='' || diff===''){
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
document.getElementById("gridBase").innerHTML = '<div class="info countD">\
                                                <h1 class="count" style="font-size:6rem">'+ti+'</h1>\
                                                </div>' ;

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

function displayGrid(){
  if(diff==='easy'){
  document.getElementById("gridBase").style.gridTemplateRows='25% 25% 25% 25%';
 document.getElementById("gridBase").innerHTML = '<div class="grid-item">'+gridNumbers[0]+'</div>\
                                                  <div class="grid-item">'+gridNumbers[1]+'</div>\
                                                  <div class="grid-item">'+gridNumbers[2]+'</div>\
                                                  <div class="grid-item">'+gridNumbers[3]+'</div>\
                                                  <div class="grid-item">'+gridNumbers[4]+'</div>\
                                                  <div class="grid-item">'+gridNumbers[5]+'</div>\
                                                  <div class="grid-item">'+gridNumbers[6]+'</div>\
                                                  <div class="grid-item">'+gridNumbers[7]+'</div>\
                                                  <div class="grid-item">'+gridNumbers[8]+'</div>\
                                                  <div class="grid-item">'+gridNumbers[9]+'</div>\
                                                  <div class="grid-item">'+gridNumbers[10]+'</div>\
                                                  <div class="grid-item">'+gridNumbers[11]+'</div>\
                                                  <div class="grid-item">'+gridNumbers[12]+'</div>\
                                                  <div class="grid-item">'+gridNumbers[13]+'</div>\
                                                  <div class="grid-item">'+gridNumbers[14]+'</div>\
                                                  <div class="grid-item">'+gridNumbers[15]+'</div>\
                                                  <div class="grid-item">'+gridNumbers[16]+'</div>\
                                                  <div class="grid-item">'+gridNumbers[17]+'</div>\
                                                  <div class="grid-item">'+gridNumbers[18]+'</div>\
                                                  <div class="grid-item">'+gridNumbers[19]+'</div>'



a=document.getElementsByClassName('grid-item');
for(let i=0;i<20;i++){
var numb=40-a[i].innerHTML;
var color="rgb("+numb*4+','+numb*4+','+numb*4+")";
a[i].style.backgroundColor=color;
a[i].addEventListener('click',function(){
  // console.log(a[i].innerHTML);
if(count+20<=40){
if(a[i].innerHTML==count){
  a[i].innerHTML=count+20;
  gridNumbers[i]=count+20;
  count=count+1;
  buttonTap.play();

}
else{

  wrongTap.play();
  alert('Wrong Box!!!');

}
}
else{
  if(a[i].innerHTML==count){
    a[i].innerHTML=''
    count=count+1;
    buttonTap.play();

  }

  else{
    wrongTap.play();
    alert('Wrong Box!!!');

  }
}
var numb=40-a[i].innerHTML;
var color="rgb("+numb*4+','+numb*4+','+numb*4+")";
a[i].style.backgroundColor=color;
if(count===41){
  clearInterval(t);
  flag=true;
  document.getElementById("pause").remove();
  var timeScore=document.getElementById("timer").innerHTML;
  var sec='';
  var milli='';
  for(var j=0;j<timeScore.length;j++){
    if(j<=1){
      sec=sec+timeScore[j];
    }
    else if (j>2) {
      milli=milli+timeScore[j];
    }
  }

  score=sec+'.'+milli;

  var userEasy ={
    name:document.getElementById('userName').value,
    score:parseFloat(score),
  };
  easyUsers.push(userEasy);
  easyUsers.sort(function(a,b) { return a.score - b.score;});

  window.localStorage.setItem('easyUsers',JSON.stringify(easyUsers));
  window.localStorage.setItem('condition',flag);

  document.getElementById('highScore').innerHTML='High Score:'+easyUsers[0].score;
  if(easyUsers.findIndex(x=>x.score===parseFloat(score))===0){
    document.getElementById("gridBase").innerHTML ='<div class="info countD">\
                                                    <h1>🎉New Highscore🎉</h1>\
                                                    <h1>Score:'+score+'</h1>\
                                                    </div>';
  }
  else{
  document.getElementById("gridBase").innerHTML ='<div class="info countD">\
                                                  <h1>Score:'+score+'</h1>\
                                                  </div>';
  }
  document.getElementById('scoreTable').style.visibility='visible';

}
})
}///
}
if(diff==='medium'){
  document.getElementById("gridBase").style.gridTemplateRows='20% 20% 20% 20% 20%';

  document.getElementById("gridBase").innerHTML = '<div class="grid-item">'+gridNumbersMed[0]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[1]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[2]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[3]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[4]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[5]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[6]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[7]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[8]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[9]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[10]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[11]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[12]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[13]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[14]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[15]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[16]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[17]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[18]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[19]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[20]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[21]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[22]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[23]+'</div>\
                                                   <div class="grid-item">'+gridNumbersMed[24]+'</div>\
                                                   '



 a=document.getElementsByClassName('grid-item');
 for(let i=0;i<25;i++){
   var numb=50-a[i].innerHTML;
   var color="rgb("+numb*4+','+numb*4+','+numb*4+")";
   a[i].style.backgroundColor=color;

 a[i].addEventListener('click',function(){
   // console.log(a[i].innerHTML);

 if(count+25<=50){
 if(a[i].innerHTML==count){
   a[i].innerHTML=count+25;
   gridNumbersMed[i]=count+25;
   count=count+1;
   buttonTap.play();

 }
 else{
   wrongTap.play();
   alert('Wrong Box!!!');
 }
 }
 else{
   if(a[i].innerHTML==count){
     a[i].innerHTML=''
     count=count+1;
     buttonTap.play();

   }

   else{
     wrongTap.play();

     alert('Wrong Box!!!');
   }
 }
 var numb=50-a[i].innerHTML;
 var color="rgb("+numb*4+','+numb*4+','+numb*4+")";
 a[i].style.backgroundColor=color;

 if(count===51){
   clearInterval(t);
   flag=true;
   document.getElementById("pause").remove();
   var timeScore=document.getElementById("timer").innerHTML;
   var sec='';
   var milli='';
   for(var j=0;j<timeScore.length;j++){
     if(j<=1){
       sec=sec+timeScore[j];
     }
     else if (j>2) {
       milli=milli+timeScore[j];
     }
   }

   score=sec+'.'+milli;


    var userMedium={
      name:document.getElementById('userName').value,
      score:parseFloat(score)
    }
    mediumUsers.push(userMedium);
    mediumUsers.sort(function(a,b) { return a.score - b.score;});
    window.localStorage.setItem('mediumUsers',JSON.stringify(mediumUsers));


   window.localStorage.setItem('condition',flag);

   document.getElementById('highScore').innerHTML='High Score:'+mediumUsers[0].score;
   if(mediumUsers.findIndex(x=>x.score===parseFloat(score))===0){
     document.getElementById("gridBase").innerHTML ='<div class="info countD">\
                                                     <h1>🎉New Highscore🎉</h1>\
                                                     <h1>Score:'+score+'</h1>\
                                                     </div>';
   }
   else{
   document.getElementById("gridBase").innerHTML ='<div class="info countD">\
                                                   <h1>Score:'+score+'</h1>\
                                                   </div>';
   }
   document.getElementById('scoreTable').style.visibility='visible';

 }
 })
 }
}


///
if(diff==='hard'){
  document.getElementById("gridBase").remove();
  document.getElementById('gameField').innerHTML='<div class="main" id="main">\
                                                  <div class="row1">\
                                                  <div class="box">'+gridNumbers[0]+'</div>\
                                                  <div class="box">'+gridNumbers[1]+'</div>\
                                                  <div class="box">'+gridNumbers[2]+'</div>\
                                                  <div class="box">'+gridNumbers[3]+'</div>\
                                                  <div class="box">'+gridNumbers[0]+'</div>\
                                                  <div class="box">'+gridNumbers[1]+'</div>\
                                                  <div class="box">'+gridNumbers[2]+'</div>\
                                                  <div class="box">'+gridNumbers[3]+'</div>\
                                                  </div>\
                                                  <div class="row2">\
                                                  <div class="box">'+gridNumbers[4]+'</div>\
                                                  <div class="box">'+gridNumbers[5]+'</div>\
                                                  <div class="box">'+gridNumbers[6]+'</div>\
                                                  <div class="box">'+gridNumbers[7]+'</div>\
                                                  <div class="box">'+gridNumbers[4]+'</div>\
                                                  <div class="box">'+gridNumbers[5]+'</div>\
                                                  <div class="box">'+gridNumbers[6]+'</div>\
                                                  <div class="box">'+gridNumbers[7]+'</div>\
                                                  </div>\
                                                  <div class="row3">\
                                                  <div class="box">'+gridNumbers[8]+'</div>\
                                                  <div class="box">'+gridNumbers[9]+'</div>\
                                                  <div class="box">'+gridNumbers[10]+'</div>\
                                                  <div class="box">'+gridNumbers[11]+'</div>\
                                                  <div class="box">'+gridNumbers[8]+'</div>\
                                                  <div class="box">'+gridNumbers[9]+'</div>\
                                                  <div class="box">'+gridNumbers[10]+'</div>\
                                                  <div class="box">'+gridNumbers[11]+'</div>\
                                                  </div>\
                                                  <div class="row4">\
                                                  <div class="box">'+gridNumbers[12]+'</div>\
                                                  <div class="box">'+gridNumbers[13]+'</div>\
                                                  <div class="box">'+gridNumbers[14]+'</div>\
                                                  <div class="box">'+gridNumbers[15]+'</div>\
                                                  <div class="box">'+gridNumbers[12]+'</div>\
                                                  <div class="box">'+gridNumbers[13]+'</div>\
                                                  <div class="box">'+gridNumbers[14]+'</div>\
                                                  <div class="box">'+gridNumbers[15]+'</div>\
                                                  </div>\
                                                  <div class="row5">\
                                                  <div class="box">'+gridNumbers[16]+'</div>\
                                                  <div class="box">'+gridNumbers[17]+'</div>\
                                                  <div class="box">'+gridNumbers[18]+'</div>\
                                                  <div class="box">'+gridNumbers[19]+'</div>\
                                                  <div class="box">'+gridNumbers[16]+'</div>\
                                                  <div class="box">'+gridNumbers[17]+'</div>\
                                                  <div class="box">'+gridNumbers[18]+'</div>\
                                                  <div class="box">'+gridNumbers[19]+'</div>\
                                                  </div>\
                                                  </div>'


var a =document.getElementsByClassName('box');
for(let i=0;i<a.length;i++){
  var numb=40-a[i].innerHTML;
  var color="rgb("+numb*4+','+numb*4+','+numb*4+")";
  a[i].style.backgroundColor=color;
a[i].addEventListener('click',function(){
var it=a[i].innerHTML;
if(count+20<=40){
  if(a[i].innerHTML==count){
    for(let g=0;g<a.length;g++){
      if(a[g].innerHTML===it){
        a[i].innerHTML=count+20;
        a[g].innerHTML=count+20;
      }
    }
    gridNumbers[i]=gridNumbers[i]+20;
    count=count+1;
    buttonTap.play();
  }
  else{
    wrongTap.play();
    alert('Wrong Box!!!');
  }
}
else{
  if(a[i].innerHTML==count){
    for(let g=0;g<a.length;g++){
      if(a[g].innerHTML===it){
        a[i].innerHTML=" ";
        a[g].innerHTML=" ";
      }
    }
    count=count+1;
    buttonTap.play();

  }

  else{
    wrongTap.play();
    alert('Wrong Box!!!');
  }
}
for(let o=0;o<a.length;o++){
var numb=40-a[o].innerHTML;
var color="rgb("+numb*4+','+numb*4+','+numb*4+")";
a[o].style.backgroundColor=color;
}
if(count===41){
  clearInterval(t);
  flag=true;
  // document.getElementById("pause").remove();
  var timeScore=document.getElementById("timer").innerHTML;
  var sec='';
  var milli='';
  for(var j=0;j<timeScore.length;j++){
    if(j<=1){
      sec=sec+timeScore[j];
    }
    else if (j>2) {
      milli=milli+timeScore[j];
    }
  }

  score=sec+'.'+milli;


  var userHard={
    name:document.getElementById('userName').value,
    score:parseFloat(score)
  }
  hardUsers.push(userHard);
  hardUsers.sort(function(a,b) { return a.score - b.score;});
  window.localStorage.setItem('hardUsers',JSON.stringify(hardUsers));


  window.localStorage.setItem('condition',flag);

  document.getElementById('highScore').innerHTML='High Score:'+hardUsers[0].score;
  if(hardUsers.findIndex(x=>x.score===parseFloat(score))===0){
    document.getElementById("main").innerHTML ='<div class="info ">\
                                                    <h1>🎉New HighScore 🎉</h1>\
                                                    <h1>Score:'+score+'</h1>\
                                                    </div>';
  }
  else{
  document.getElementById("main").innerHTML ='<div class="info ">\
                                                  <h1>Score:'+score+'</h1>\
                                                  </div>';
  }
  document.getElementById('scoreTable').style.visibility='visible';

}


})
}

}


}


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




// display the LeaderBoard

document.getElementById('scoreTable').addEventListener('click',function(){

  console.log(easyUsers);
  console.log(hardUsers);
  console.log(mediumUsers);

document.getElementById('tableEasy').innerHTML='';
document.getElementById('tableMedium').innerHTML='';
document.getElementById('tableHard').innerHTML='';

  document.getElementById('tableHeading').innerHTML='<h1>LeaderBoard</h1>'
  if(easyUsers.length>0 ){
document.getElementById('tableEasy').style.visibility='visible';
}
if(easyUsers.length>5 ){
  var l=5;
}
else{
  l=easyUsers.length;
}

  for(var k=0;k<l;k++){

    MyTable=document.getElementById('tableEasy');


      var NewRow = MyTable.insertRow(0);
      var Newcell1 = NewRow.insertCell(0);
      var Newcell2 = NewRow.insertCell(1);
      var Newcell3 = NewRow.insertCell(2);

      if((easyUsers.length-k)===1){
        Newcell1.innerHTML='1 👑';
        Newcell2.innerHTML=easyUsers[easyUsers.length-k-1].name;
        Newcell3.innerHTML=easyUsers[easyUsers.length-k-1].score;

      }
      else{
        Newcell1.innerHTML = easyUsers.length-k;
        Newcell2.innerHTML=easyUsers[easyUsers.length-k-1].name;
        Newcell3.innerHTML=easyUsers[easyUsers.length-k-1].score;
      }

  }
  var table=document.getElementById('tableEasy');
  var header=table.createTHead();
  var row=header.insertRow(0);
  var cell0 = row.insertCell(0);
  var cell1 =row.insertCell(1);
  var cell2 =row.insertCell(2);
  cell0.innerHTML='Easy';
  cell1.innerHTML='Name';
  cell2.innerHTML='Duration(sec)';
if(mediumUsers.length>0){
  document.getElementById('tableMedium').style.visibility='visible';
}
if(mediumUsers.length>5){
  var l=5;
}
else{
  l=mediumUsers.length;
}
  for(var k=0;k<l;k++){

    MyTable=document.getElementById('tableMedium');


      var NewRow = MyTable.insertRow(0);
      var Newcell1 = NewRow.insertCell(0);
      var Newcell2 = NewRow.insertCell(1);
      var Newcell3 = NewRow.insertCell(2);

      if((mediumUsers.length-k)===1){
        Newcell1.innerHTML='1 👑';
        Newcell2.innerHTML=mediumUsers[mediumUsers.length-k-1].name;
        Newcell3.innerHTML=mediumUsers[mediumUsers.length-k-1].score;
      }
      else{
        Newcell1.innerHTML = mediumUsers.length-k;
        Newcell2.innerHTML=mediumUsers[mediumUsers.length-k-1].name;
        Newcell3.innerHTML=mediumUsers[mediumUsers.length-k-1].score;
       }

  }
  var table=document.getElementById('tableMedium');
  var header=table.createTHead();
  var row=header.insertRow(0);
  var cell0 = row.insertCell(0);
  var cell1 =row.insertCell(1);
  var cell2 =row.insertCell(2);
  cell0.innerHTML='Medium';
  cell1.innerHTML='Name';
  cell2.innerHTML='Duration(sec)';

  if(hardUsers.length>0){
  document.getElementById('tableHard').style.visibility='visible';
  }
  if(hardUsers.length>5){
    var l=5;
  }
  else{
    l=hardUsers.length;
  }
  for(var k=0;k<l;k++){

    MyTable=document.getElementById('tableHard');


      var NewRow = MyTable.insertRow(0);
      var Newcell1 = NewRow.insertCell(0);
      var Newcell2 = NewRow.insertCell(1);
      var Newcell3 = NewRow.insertCell(2);
if((hardUsers.length-k)===1){
  Newcell1.innerHTML='1 👑';
  Newcell2.innerHTML=hardUsers[hardUsers.length-k-1].name;
  Newcell3.innerHTML=hardUsers[hardUsers.length-k-1].score;
}
else{
  Newcell1.innerHTML = hardUsers.length-k;
  Newcell2.innerHTML=hardUsers[hardUsers.length-k-1].name;
  Newcell3.innerHTML=hardUsers[hardUsers.length-k-1].score;
}


  }
  var table=document.getElementById('tableHard');
  var header=table.createTHead();
  var row=header.insertRow(0);
  var cell0 = row.insertCell(0);
  var cell1 =row.insertCell(1);
  var cell2 =row.insertCell(2);
  cell0.innerHTML='Hard';
  cell1.innerHTML='Name';
  cell2.innerHTML='Duration(sec)';

  scoreTab=true;


})
