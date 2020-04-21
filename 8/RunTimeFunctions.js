/*
This file originates from http://heptaveegesimal.com
You may reupload this file in any noncommercial way as long as this reference and the link on the page is kept and you do not weaken these conditions for anyone downloading the version you have modified.

Chain of edits (You may add yourself below, but not remove anyone above):
> Original File : http://heptaveegesimal.com
> First Editor  : ...
> Second Editor : ...
> ...
*/


function printSingleCounter(a){
  a.div_tex.innerText = a.c + " / " + a.t;
}

function clearCounters(){
  counterDisplay.Floor.c = 0;
  counterDisplay.Mines[0].c = 0;
  counterDisplay.Mines[1].c = 0;
  counterDisplay.Mines[2].c = 0;
  counterDisplay.AntiMines.c = 0;
}

function updateCounterDisplay(){
  counterDisplay.Floor.t = Generator.sx * Generator.sy;
  //Visibility
  var i;
  for(i = 0; i < 3; i++){
    if(Generator.mineMax > i){
      counterDisplay.Mines[i].div_sec.className = "";
      counterDisplay.Mines[i].t = Generator.amount[i];
      counterDisplay.Floor.t -= Generator.amount[i];
    }else{
      counterDisplay.Mines[i].div_sec.className = "hide";
    }
  }
  if(Generator.neg > 0){
    counterDisplay.AntiMines.div_sec.className = "";
    counterDisplay.AntiMines.t = Generator.neg;
    counterDisplay.Floor.t -= Generator.neg;
  }else{
    counterDisplay.AntiMines.div_sec.className = "hide";
  }
  //print counters to screen
  printSingleCounter(counterDisplay.Floor);
  printSingleCounter(counterDisplay.Mines[0]);
  printSingleCounter(counterDisplay.Mines[1]);
  printSingleCounter(counterDisplay.Mines[2]);
  printSingleCounter(counterDisplay.AntiMines);
}

function drawStuff() {
  clearCounters();
  var i;
  var j;
  for(i = 0; i < sizeX; i++){
    for(j = 0; j < sizeY; j++){
      if(GameState == 3){
        if(field[i][j].mines != 0){
          cont.drawImage(Textures.FinalFlag[field[i][j].mines], screenscale * i, screenscale * j, screenscale, screenscale);
          if(field[i][j].mines > 0){
            counterDisplay.Mines[field[i][j].mines - 1].c += 1;
          }else{
            counterDisplay.AntiMines.c += 1;
          }          
        }else{
          if (field[i][j].neighbours <= 25 || specialNum.indexOf(field[i][j].neighbours) > -1) {
            cont.drawImage(Textures.Ground[field[i][j].neighbours], screenscale * i, screenscale * j, screenscale, screenscale);
          } else {
            cont.drawImage(Textures.GroundRight[field[i][j].neighbours % 10], screenscale * i, screenscale * j, screenscale, screenscale);
            cont.drawImage(Textures.GroundLeft[Math.floor(field[i][j].neighbours / 10)], screenscale * i, screenscale * j, screenscale, screenscale);
          }
          counterDisplay.Floor.c += 1;
        }
      }else if((field[i][j].mines != 0) && (GameState == 2)){
        if(field[i][j].open){
          cont.drawImage(Textures.OpenedMine[field[i][j].mines-1], screenscale * i, screenscale * j, screenscale, screenscale);
        }else{
          cont.drawImage(Textures.Mine[field[i][j].mines-1], screenscale * i, screenscale * j, screenscale, screenscale);
        }
      }else{
        if(field[i][j].open){
          if (field[i][j].neighbours <= 25 || specialNum.indexOf(field[i][j].neighbours) > -1) {
            cont.drawImage(Textures.Ground[field[i][j].neighbours], screenscale * i, screenscale * j, screenscale, screenscale);
          } else {
            cont.drawImage(Textures.GroundRight[field[i][j].neighbours % 10], screenscale * i, screenscale * j, screenscale, screenscale);
            cont.drawImage(Textures.GroundLeft[Math.floor(field[i][j].neighbours / 10)], screenscale * i, screenscale * j, screenscale, screenscale);
          }
          counterDisplay.Floor.c += 1;
        }else{
          cont.drawImage(Textures.Closed[field[i][j].flags], screenscale * i, screenscale * j, screenscale, screenscale);
          if(field[i][j].flags > 0){
            counterDisplay.Mines[field[i][j].flags - 1].c += 1;
          }
          if(field[i][j].flags == -1){
            counterDisplay.AntiMines.c += 1;
          }
        }
      }
    }
  }
  if(hasBeenGenerated){
    for(i = 0; i < Generator.entities.length; i++){
      cont.drawImage(Generator.entities[i].img, screenscale * Generator.entities[i].x, screenscale * Generator.entities[i].y, screenscale, screenscale);
    }
  }
  updateCounterDisplay();
}

function entityCall(fnct, x, y){
  var i;
  for(i = 0; i < Generator.entities.length; i++){
    if(Generator.entities[i].ai[fnct] != null){
      Generator.entities[i].ai[fnct](Generator.entities[i], x, y);
    }
  }
}

function digAround(posX, posY){
  var sx;
  var sy;
  var i;
  var z = getReachable(posX, posY);
  for(i = 0; i < z.length; i++){
    sx = z[i][0];
    sy = z[i][1];
    if(!field[sx][sy].open){
        field[sx][sy].open = true;
        if(field[sx][sy].neighbours == 0){
            digAround(sx,sy);
        }
    }
  }
}

function intoBounds(Pos){
    if((XWrap == 0) && ((Pos[0] < 0) || (Pos[0] >= sizeX))){
      return null;
    }
    if((YWrap == 0) && ((Pos[1] < 0) || (Pos[1] >= sizeY))){
      return null;
    }
    if(Pos[0] < 0){
        switch(XWrap){
            case 0:
                return null;
                break;
            case 1:
                Pos[0] += sizeX;
                break;
            case 2:
                Pos[0] += sizeX;
                Pos[1] = sizeY - Pos[1] - 1;
                break;
        }
    }
    if(Pos[1] < 0){
        switch(YWrap){
            case 0:
                return null;
                break;
            case 1:
                Pos[1] += sizeY;
                break;
            case 2:
                Pos[1] += sizeY;
                Pos[0] = sizeX - Pos[0] - 1;
                break;
        }
    }
    if(Pos[0] >= sizeX){
        switch(XWrap){
            case 0:
                return null;
                break;
            case 1:
                Pos[0] -= sizeX;
                break;
            case 2:
                Pos[0] -= sizeX;
                Pos[1] = sizeY - Pos[1] - 1;
                break;
        }
    }
    if(Pos[1] >= sizeY){
        switch(YWrap){
            case 0:
                return null;
                break;
            case 1:
                Pos[1] -= sizeY;
                break;
            case 2:
                Pos[1] -= sizeY;
                Pos[0] = sizeX - Pos[0] - 1;
                break;
        }
    }
    if(Pos[0] < 0){
      Pos[0] += sizeX;
    }
    if(Pos[1] < 0){
      Pos[1] += sizeY;
    }
    if(Pos[0] >= sizeX){
      Pos[0] -= sizeX;
    }
    if(Pos[1] >= sizeY){
      Pos[1] -= sizeY;
    }
    return Pos;
}

function getReachable(posX, posY){
    var R = [];
    var i;
    var j = 0;
    for(i = 0; i < Shape.length; i++){
        var z = [posX + Shape[i][0], posY + Shape[i][1]];
        z = intoBounds(z);
        if(z != null){
            R[j] = z;
            j++;
        }
    }
    return R;
}

function countPregeneratedMines(n){
  let i;
  let j;
  let c = 0;
  for(i = 0; i < Generator.sx; i++){
    for(j = 0; j < Generator.sy; j++){
      if(field[i][j].mines == n) c++;
    }
  }
  return c;
}

function generate(posX, posY){
  chord.lock = false;
  if(Generator.preGenFnct != null){
    Generator.preGenFnct(posX, posY);
  }
  if(Generator.altGenFnct == null){
    var b;
    var c;
    var i;
    var j;
    var k;
    var l;
    var m;
    var n;
    var Reach = getReachable(posX, posY);
    Reach[Reach.length] = [posX, posY];
    for(k = -1; k < Generator.mineMax; k++){
      n = ((k == -1) ? Generator.neg : Generator.amount[k]);
      n -= countPregeneratedMines((k == -1) ? -1 : (k + 1));
      for(l = 0; l < n; l++){
        b = true;
        while(b){
          i = Math.floor(Math.random() * Generator.sx);
          j = Math.floor(Math.random() * Generator.sy);
          c = true;
          for(m = 0; m < Reach.length; m++){
            if((Reach[m][0] === i) && (Reach[m][1] === j)){
              c = false;
              m = Shape.length;
            }
          }
          if(c && (field[i][j].mines == 0)){
            field[i][j].mines = ((k == -1) ? k : (k + 1));
            b = false;
          }
        }
      }
    }
    calculateneighbours();
  }else{
    Generator.altGenFnct(posX, posY);
  }
  if(Generator.postGenFnct != null){
    Generator.postGenFnct(posX, posY);
  }
}

function calculateneighbours(){
  var x;
  var y;
  var i;
  var sx;
  var sy;
  var z;
  for(x = 0; x < sizeX; x++){
    for(y = 0; y < sizeY; y++){
        z = getReachable(x,y);
        field[x][y].neighbours = 0;
        for(i = 0; i < z.length; i++){
            sx = z[i][0];
            sy = z[i][1];
            if (field[sx][sy].mines == 1) {
              field[x][y].neighbours += 2
            } else if (field[sx][sy].mines == 2) {
              field[x][y].neighbours += 5
            } else if (field[sx][sy].mines == 3) {
              field[x][y].neighbours += 10
            }
        }
    }
  }
}

function setTimer(time, T){
  if(T == timer) lastCounterTime = time;
  var ms = time % 1000;
  time /= 1000;
  var sec = time % 60;
  time = Math.floor(time / 60);
  sec = Math.floor(sec);
  if(ms < 100){
    if(ms < 10){
      ms = "0" + ms;
    }
    ms = "0" + ms;
  }
  if(sec < 10){
    sec = "0" + sec;
  }
  T.innerText = time + ":" + sec + "." + ms;
}

function timerTick(){
  if((GameState == 1)&&(hasBeenGenerated)){
    setTimer((new Date()).getTime() - startingTime + timeOffset, timer);
    if(Generator.deathTimer > 0){
      death_timer_sec.className = "";
      var time = Generator.deathTimer - (new Date()).getTime() + lastDigTime;
      if(time <= 0){
        setTimer(0, death_timer);
        GameState = 2;
        drawStuff();
      }else{
        if(time > 0.6 * Generator.deathTimer){
          death_timer_col.color = "#006600";
        }else if(time > 0.4 * Generator.deathTimer){
          death_timer_col.color = "#bbbb00";
        }else if(time > 0.2 * Generator.deathTimer){
          death_timer_col.color = "#dd5500";
        }else{
          death_timer_col.color = "#ff0000";
        }
        setTimer(time, death_timer);
      }
    }else{
      death_timer_sec.className = "hide";
    }
    if(GameState == 1) setTimeout(timerTick, 17);
  }
}

function leftClick(posX, posY){
  if(GameState >= 2){
    return;
  }
  if(field[posX][posY].flags!=0){
    return;
  }
  if(!hasBeenGenerated){
    generate(posX, posY);
    entityCall('init', posX, posY);
    startingTime = (new Date()).getTime();
    setTimeout(timerTick, 17);
    hasBeenGenerated = true;
  }
  if(!field[posX][posY].open){
    field[posX][posY].open = true;
    lastDigTime = (new Date()).getTime();
  entityCall('dig', posX, posY);
  }else{
    let clickTime = (new Date()).getTime();
    if((clickTime < (chord.time + 400)) && (posX == chord.x) && (posY == chord.y) && (!chord.lock)){
      //console.log("chord!");
      let r = getReachable(posX, posY);
      let i;
      let flagsSet = 0;
      for(i = 0; i < r.length; i++){
        if(!field[r[i][0]][r[i][1]].open) flagsSet += field[r[i][0]][r[i][1]].flags;
      }
      //console.log("Flags: " + flagsSet + " : " + field[posX][posY].neighbours);
      if(((flagsSet > 0) && (flagsSet < 24) && (flagsSet == field[posX][posY].neighbours)) ||
        ((flagsSet > -9) && (flagsSet < 1) && ((flagsSet + 33) == field[posX][posY].neighbours))){
        for(i = 0; i < r.length; i++){
          if((field[r[i][0]][r[i][1]].flags == 0) && !field[r[i][0]][r[i][1]].open){
            field[r[i][0]][r[i][1]].open = true;
            lastDigTime = (new Date()).getTime();
            if(field[r[i][0]][r[i][1]].mines != 0){
              GameState = 2;
            }else{
              if(field[r[i][0]][r[i][1]].neighbours == 0){
                digAround(r[i][0], r[i][1]);
              }
            }
          }
        }
      }
    }else{
      chord.time = clickTime;
      chord.x = posX;
      chord.y = posY;
    }
    entityCall('voidClickL', posX, posY);
  }
  if(field[posX][posY].mines != 0){
    GameState = 2;
  }else{
    if(field[posX][posY].neighbours == 0){
      digAround(posX, posY);
    }
  }
  if(field[posX][posY].neighbours == 37){
    alert("haha 37")
  }
  drawStuff();
  //Draw Stuff also counts all tiles
  if(counterDisplay.Floor.c == counterDisplay.Floor.t){
    GameState = 3;
    drawStuff();
  }
}

function rightClick(posX, posY){
  if(GameState >= 2){
    return;
  }
  if(field[posX][posY].open){
    entityCall('voidClickR', posX, posY);
    drawStuff();
    return;
  }
  field[posX][posY].flags++;
  while((field[posX][posY].flags > 0) && (field[posX][posY].flags <= maxFlags) && (Generator.amount[field[posX][posY].flags - 1] == 0)){
    field[posX][posY].flags++;
  }
  if(field[posX][posY].flags > maxFlags){
    field[posX][posY].flags = ((Generator.neg > 0) ? -1 : 0);
  }
  entityCall('flag', posX, posY);
  drawStuff();
}

function setSideNumbers(){
  if(XWrap == 0){
    sideNumbers.left.clasName = "invis hide";
    sideNumbers.right.clasName = "invis hide";
    sideNumbers.left.innerHTML = "";
    sideNumbers.right.innerHTML = "";
  }else{
    let contentL = "";
    let contentR = "";
    let i;
    for(i = 1; i <= sizeY; i++){
      contentL += "<tr class=\"lrn\"><td class=\"invis\">" + i;
      contentR += "<tr class=\"lrn\"><td class=\"invis\">" + ((XWrap == 1) ? i : (sizeY - i + 1));
    }
    sideNumbers.left.innerHTML = contentL;
    sideNumbers.right.innerHTML = contentR;
    sideNumbers.left.clasName = "invis";
    sideNumbers.right.clasName = "invis";
  }
  if(YWrap == 0){
    sideNumbers.top.clasName = "invis hide";
    sideNumbers.bottom.clasName = "invis hide";
    sideNumbers.top.innerHTML = "";
    sideNumbers.bottom.innerHTML = "";
  }else{
    let contentT = "<tr class=\"invis\">";
    let contentB = "<tr class=\"invis\">";
    let i;
    for(i = 1; i <= sizeX; i++){
      contentT += "<td class=\"tbn\">" + i;
      contentB += "<td class=\"tbn\">" + ((YWrap == 1) ? i : (sizeX - i + 1));
    }
    sideNumbers.top.innerHTML = contentT;
    sideNumbers.bottom.innerHTML = contentB;
    sideNumbers.top.clasName = "invis";
    sideNumbers.bottom.clasName = "invis";
  }
}

function startNewGame(){
  if(Generator.neg === undefined){
    Generator.neg = 0;
  }
  if(Generator.deathTimer === undefined){
    Generator.deathTimer = 0;
  }
  if(Generator.entities === undefined){
    Generator.entities = [];
  }
  if(Generator.selFnct === undefined){
    Generator.selFnct = null;
  }
  if(Generator.preGenFnct === undefined){
    Generator.preGenFnct = null;
  }
  if(Generator.postGenFnct === undefined){
    Generator.postGenFnct = null;
  }
  if(Generator.altGenFnct === undefined){
    Generator.altGenFnct = null;
  }
  Shape = Generator.shape;
  hasBeenGenerated = false;
  XWrap = Generator.wrap[0];
  YWrap = Generator.wrap[1];
  maxFlags = Generator.mineMax;
  sizeX = Generator.sx;
  sizeY = Generator.sy;
  canvas.width = sizeX * screenscale;
  canvas.height = sizeY * screenscale;
  var i;
  var j;
  field = [];
  for(i = 0; i < sizeX; i++){
    field[i] = [];
    for(j = 0; j < sizeY; j++){
      field[i][j] = {mines:0, open:false, neighbours:0, flags:0}
    }
  }
  if(Generator.selFnct != null){
    Generator.selFnct();
  }
  GameState = 1;
  setTimer(timeOffset, timer);
  setTimer(Generator.deathTimer, death_timer);
  death_timer_sec.className = (Generator.deathTimer > 0) ? "" : "hide";
  death_timer_col.color = "#006600";
  for(i = 0; i < Generator.entities.length; i++){
    createEntityTexture(Generator.entities[i]);
  }
  setSideNumbers();
  drawStuff();
}
