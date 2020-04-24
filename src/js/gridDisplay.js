function displayGrid(){

///
if(scroll){
  var rowLayout='';
  var colLayout='';
  var s='';
  gridNumbers=[];
  for(var k =1;k<col*row+1;k++){
    gridNumbers.push(k);
  }
  gridNumbers=shuffle(gridNumbers);
document.getElementById("gridBase").remove();
for(var f=0;f<row;f++){
  rowLayout=rowLayout+(100/row+'% ');
}
for(var f=0;f<col;f++){
  colLayout=colLayout+(100/col+'% ');
}
console.log(colLayout+colLayout);
document.getElementById('gameField').innerHTML='<div class="main" id="main">\
                                                </div>';
document.getElementById('main').innerHTML='';
document.getElementById('main').style.gridTemplateRows=rowLayout;
// document.getElementById('main').style.gridTemplateColumns=colLayout;

for(var g=0;g<row;g++){
  s='';
for(var f=0;f<col;f++){
  s=s+'<div class="box" >'+gridNumbers[g*col+f]+'</div>'
}
s=s+s;
document.getElementById('main').innerHTML+='<div class="row1">'+s+'</div>';
if(g%2===0){
  a=document.getElementsByClassName("row1");
  a[a.length-1].style.animationDirection='reverse'
}
}
rows=  document.getElementsByClassName('row1')

for(let r=0;r<rows.length;r++){
  rows[r].style.gridTemplateColumns=colLayout+colLayout;
}

b=document.getElementsByClassName('box');
for(let d=0;d<b.length;d++){
  b[d].style.width=Math.round(500/col);
}

var w=document.getElementsByClassName('box')[0].offsetWidth;
document.getElementById('main').style.width=String(col*w);

var a =document.getElementsByClassName('box');
for(let i=0;i<a.length;i++){
  var numb=40-a[i].innerHTML;
  var color="rgb("+numb*4+','+numb*4+','+numb*4+")";
  a[i].style.backgroundColor=color;
a[i].addEventListener('click',function(){
var it=a[i].innerHTML;
if(count+row*col<=2*row*col){
  if(a[i].innerHTML==count){
    for(let g=0;g<a.length;g++){
      if(a[g].innerHTML===it){
        a[i].innerHTML=count+row*col;
        a[g].innerHTML=count+row*col;
      }
    }
    gridNumbers[i]=gridNumbers[i]+row*col;
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
if(count===2*row*col+1){
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
    name:name,
    score:parseFloat(score),
    type:row+'X'+col+'scroll'
  }
  hardUsers.push(userHard);
  hardUsers.sort(function(a,b) { return a.score - b.score;});
  window.localStorage.setItem('hardUsers',JSON.stringify(hardUsers));


  window.localStorage.setItem('condition',flag);

  document.getElementById('highScore').innerHTML='High Score:'+hardUsers[0].score;
  if(hardUsers.findIndex(x=>x.score===parseFloat(score))===0){
    document.getElementById("main").innerHTML ='<div class="info scoreD">\
                                                    <h1>🎉New HighScore 🎉</h1>\
                                                    <h1>Score:'+score+'</h1>\
                                                    </div>';
  }
  else{
  document.getElementById("main").innerHTML ='<div class="info scoreD">\
                                                  <h1>Score:'+score+'</h1>\
                                                  </div>';
  }
  document.getElementById('scoreTable').style.visibility='visible';

}


})
}

}


///////////

else{
  row=parseInt(row);
  col=parseInt(col);
    var rowLayout='';
    var colLayout='';
    gridNumbers=[];
    for(var f=0;f<row;f++){
      rowLayout=rowLayout+(100/row+'% ');
    }
    for(var f=0;f<col;f++){
      colLayout=colLayout+(100/col+'% ');
    }
    for(var k =1;k<col*row+1;k++){
      gridNumbers.push(k);
    }
    gridNumbers=shuffle(gridNumbers);

    document.getElementById("gridBase").style.gridTemplateRows=rowLayout;
    document.getElementById("gridBase").style.gridTemplateColumns=colLayout;

  document.getElementById('gridBase').innerHTML='';

    for(var g=0;g<row*col;g++){
      document.getElementById('gridBase').innerHTML+='<div class="grid-item">'+gridNumbers[g]+'</div>'
    }




  a=document.getElementsByClassName('grid-item');
  for(let i=0;i<row*col;i++){
  var numb=40-a[i].innerHTML;
  var color="rgb("+numb*4+','+numb*4+','+numb*4+")";
  a[i].style.backgroundColor=color;
  a[i].addEventListener('click',function(){
  // console.log(a[i].innerHTML);
  if(count+row*col<=2*row*col){
  if(a[i].innerHTML==count){
  a[i].innerHTML=count+row*col;
  gridNumbers[i]=count+row*col;
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
  if(count===2*row*col+1){
    document.getElementById("gridBase").style.display='block';
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
  if(row*col<=20){
  var userEasy ={
    name:name,
    score:parseFloat(score),
    type:row+'X'+col

  };
  easyUsers.push(userEasy);
  easyUsers.sort(function(a,b) { return a.score - b.score;});

  window.localStorage.setItem('easyUsers',JSON.stringify(easyUsers));
  window.localStorage.setItem('condition',flag);

  document.getElementById('highScore').innerHTML='High Score:'+easyUsers[0].score;
  if(easyUsers.findIndex(x=>x.score===parseFloat(score))===0){
    document.getElementById("gridBase").innerHTML ='<div class="info scoreD">\
                                                    <h1>🎉New Highscore🎉</h1>\
                                                    <h1>Score:'+score+'</h1>\
                                                    </div>';
  }
  else{
  document.getElementById("gridBase").innerHTML ='<div class="info scoreD">\
                                                  <h1>Score:'+score+'</h1>\
                                                  </div>';
  }
  document.getElementById('scoreTable').style.visibility='visible';

  }
  else if(row*col>20 && row*col<=30){
  var userMedium={
        name:name,
        score:parseFloat(score),
        type:row+'X'+col
      }
      mediumUsers.push(userMedium);
      mediumUsers.sort(function(a,b) { return a.score - b.score;});
      window.localStorage.setItem('mediumUsers',JSON.stringify(mediumUsers));


     window.localStorage.setItem('condition',flag);

     document.getElementById('highScore').innerHTML='High Score:'+mediumUsers[0].score;
     if(mediumUsers.findIndex(x=>x.score===parseFloat(score))===0){
       document.getElementById("gridBase").innerHTML ='<div class="info scoreD">\
                                                       <h1>🎉New Highscore🎉</h1>\
                                                       <h1>Score:'+score+'</h1>\
                                                       </div>';
     }
     else{
     document.getElementById("gridBase").innerHTML ='<div class="info scoreD">\
                                                     <h1>Score:'+score+'</h1>\
                                                     </div>';
     }
     document.getElementById('scoreTable').style.visibility='visible';

  }

  }
  })
  }///





}

}
