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
