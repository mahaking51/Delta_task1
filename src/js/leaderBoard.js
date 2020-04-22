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

  document.getElementById('hoverBkgr').style.display='block';


})


document.getElementById('hoverBkgr').addEventListener('click',function(){
  document.getElementById('hoverBkgr').style.display='none';

})
document.getElementById("popupClose").addEventListener('click',function(){
  document.getElementById('hoverBkgr').style.display='none';

})
