/*
http://heptaveegesimal.com
*/
var d23_offX = 4;
var d23_offY = 3;

function d23_fullReset(){
  Day23.state = 0;
  Day23.lives = 5;
  for(var i = 1; i <= 22; i++){
    Day23.daysDone[i] = false;
    Day23.tries[i] = 0;
  }
}

function d23_generateMenu(){
  var x0 = d23_offX;
  var y0 = d23_offY;
  var i;
  var j;
  var px;
  var py;
  Day23.state = 1;
  field[x0 + 3][y0].neighbours = 34;
  field[x0 + 4][y0].neighbours = 35;
  field[x0 + 5][y0].neighbours = 36;
  field[x0 + 7][y0].neighbours = Day23.lives;
  for(i = 0; i < 22; i++){
    px = x0 + 2 * (i%6) + (i >= 18 ? 2 : 0);
    py = y0 + 3 * Math.floor(i/6) + 2;
    field[px][py].mines = 1;
    field[px][py].flags = (Day23.daysDone[i + 1] ? 1 : 0);
    field[px][py + 1].neighbours = i + 1;
  }
  hasBeenGenerated = true;
  for(i = 0; i < Days[22].sx; i++){
    for(j = 0; j < Days[22].sy; j++){
      if(field[i][j].mines == 0){
        field[i][j].open = true;
      }
    }
  }
  i = 1;
  for(j = 1; j <= 22; j++){
    if(!Day23.daysDone[j]){
      i = 0;
      j = 24;
    }
  }
  if(i == 1){
    Day23.state = 4;
    GameState = 3;
    document.getElementById("title_23").innerHTML = "Day 23 - 22 in a row<br><br>Congratulation!<br>You have completed day 23!<br>Enjoy your grapheme color synesthesia!"
  }
  drawStuff();
}

function loadSign(){
  for(var i = 0; i < 3; i++){
    Textures.Ground[34 + i] = new Image();
    Textures.Ground[34 + i].src = "Ground_Sign_" + i + ".png";
  }
}

function d23_checkDaySelection(posX, posY){
  var gX = (posX - d23_offX) / 2.0;
  var gY = (posY - d23_offY - 2) / 3.0;
  if((Math.floor(gX)!=gX)||(Math.floor(gY)!=gY)) return;
  if((gX < 0)||(gY < 0)||(gX > 5)||(gY > 3)) return;
  var d = 1 + gX + 6 * gY;
  if((d==19)||(d==24)) return;
  if(d > 19) d-=1;
  if(Day23.daysDone[d]) return;
  console.log("Starting Day: " + d);
  confused = (d == 14);
  var nerfedGen = {sx: 10, sy: 10, mineMax: 1, amount:[], neg:0, shape:null, wrap:null, deathTimer:0,  entities:null};
  var origGen = Days[d-1];
  var nFact = 0.8;
  Day23.day = d;
  nerfedGen.sx = origGen.sx;
  nerfedGen.sy = origGen.sy;
  nerfedGen.mineMax = origGen.mineMax;
  for(var i = 0; i < nerfedGen.mineMax; i++){
    nerfedGen.amount[i] = Math.floor(nFact * origGen.amount[i]);
  }
  nerfedGen.neg = Math.floor(nFact * origGen.neg);
  nerfedGen.shape = origGen.shape;
  nerfedGen.wrap = origGen.wrap;
  nerfedGen.deathTimer = Math.floor(origGen.deathTimer / nFact);
  nerfedGen.entities = origGen.entities;
  nerfedGen.postGenFnct = origGen.postGenFnct;
  nerfedGen.zenDensity = origGen.zenDensity * nFact;
  Generator = nerfedGen;
  Day23.state = 2;
  startNewGame();
}

function d23_rightClick(posX, posY){
  if(Day23.state == 2) return false;
  if(Day23.state == 1){
    d23_checkDaySelection(posX, posY);
  }
  return true;
}

function d23_leftClick(posX, posY){
  if(Day23.state == 2) return false;
  if(!hasBeenGenerated){
    if(Day23.state == 0){
      d23_generateMenu();
      return true;
    }
  }
  if(Day23.state == 1){
    d23_checkDaySelection(posX, posY);
  }
  return true;
}

function d23_exitToMenu(){
  Generator = Days[22];
  startNewGame();
  if(Day23.lives == 0){
    Day23.state = 3;
    Day23.lives = 33;
    GameState = 2;
  }
  d23_generateMenu();
  Day23.state = 1;
}

function d23_ret_Win(){
  timeOffset = lastCounterTime;
  Day23.daysDone[Day23.day] = true;
  if(Day23.tries[Day23.day] == 0) Day23.lives += 1;
  setTimeout(d23_exitToMenu, 1000);
}

function d23_ret_Death(){
  timeOffset = lastCounterTime;
  Day23.lives -= 1;
  Day23.tries[Day23.day] += 1;
  setTimeout(d23_exitToMenu, 1000);
}

Day23 = {lives:5, daysDone:[], tries:[], state:0, day:0,
  fnct:{
    fullReset:d23_fullReset,
    generate:d23_generateMenu,
    rightClick:d23_rightClick,
    leftClick:d23_leftClick,
    win:d23_ret_Win,
    death:d23_ret_Death
  }};
loadSign();
