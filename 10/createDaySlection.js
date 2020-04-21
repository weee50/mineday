/*
http://heptaveegesimal.com
*/
var obj = document.getElementById('dayselection');
var today = parseInt(document.getElementById('Today').innerText);
var buttonSize = document.getElementById('be_2').offsetLeft-document.getElementById('be_1').offsetLeft;
var lastPerLine = -1;
var LastSelectedDay = 0;
var NoDay = document.getElementById('NoDay');
var IfDay = document.getElementById('IfDay');
var FutureDay = document.getElementById('FutureDay');
var Titles = [];
var Descriptions = [];

function selectDay(day){
  console.log("Hide No day");
  NoDay.className = "hide";
  if(day > today){
    IfDay.className = "hide";
    FutureDay.className = "";
  }else{
    IfDay.className = "";
    FutureDay.className = "hide";
    Generator = Days[day-1];
    if(LastSelectedDay>0){
      Titles[LastSelectedDay].className = "hide";
      Descriptions[LastSelectedDay].className = "hide";
    }
    Titles[day].className = "";
    Descriptions[day].className = "";
    LastSelectedDay = day;
    confused = (day == 14);
    timeOffset = 0;
    if(LastSelectedDay == 23){
      Day23.fnct.fullReset();
    }
    startNewGame();
  }
}

function setButtonFunction(button, id){
  var n = id;
  button.onclick = function(){selectDay(n);};
}

function newSize(){
  var pLMax = Math.floor((window.innerWidth / buttonSize) - 1);
  var perLine = 24;
  if(pLMax < 24){
    perLine = 12;
  }
  if(pLMax < 12){
    perLine = 8;
  }
  if(pLMax < 8){
    perLine = 6;
  }
  if(pLMax < 6){
    perLine = 4;
  }
  if(pLMax < 4){
    perLine = pLMax;
  }
  if(perLine < 1){
    perLine = 1;
  }
  if(perLine == lastPerLine){
    return;
  }
  lastPerLine = perLine;
  var i;
  var s = "";
  for(i = 1; i < 25; i++){
    s += " <button type=\"button\" class=\"daybutton_"+((i<=today) ? "active" : "inactive")+"\" id = \"db_" + i + "\">" + i + "</button> ";
    if((i%perLine)==0){
      s += "<br>";
    }
  }
  obj.innerHTML = s;
  for(i = 1; i < 25; i++){
    setButtonFunction(document.getElementById("db_"+i), i);
  }
}

function createTitles(){
  var i;
  for(i = 1; i < 25; i++){
    Titles[i] = document.getElementById('title_'+ i);
    Descriptions[i] = document.getElementById('desc_'+ i);
    if(Titles[i] != null){
      Titles[i].className = "hide";
      Descriptions[i].className = "hide";
    }
  }
}

createTitles();

if(!isMobile){
	window.addEventListener("resize", newSize);
}

newSize();

//counterDisplay

counterDisplay = {
  Floor:{
    c:0,
    t:0,
    div_sec:document.getElementById('count_sec_open'),
    div_tex:document.getElementById('count_tex_open')
  },
  Mines:[{
    c:0,
    t:0,
    div_sec:document.getElementById('count_sec_1flag'),
    div_tex:document.getElementById('count_tex_1flag')
  },{
    c:0,
    t:0,
    div_sec:document.getElementById('count_sec_2flag'),
    div_tex:document.getElementById('count_tex_2flag')
  },{
    c:0,
    t:0,
    div_sec:document.getElementById('count_sec_3flag'),
    div_tex:document.getElementById('count_tex_3flag')
  }],
  AntiMines:{
    c:0,
    t:0,
    div_sec:document.getElementById('count_sec_-1flag'),
    div_tex:document.getElementById('count_tex_-1flag')
  }
};
