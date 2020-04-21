/*
http://heptaveegesimal.com
*/
function genZenTiles(pX, pY){
  var option;
  var selected;
  function resetSelection(){
    option = 0;
    selected = 0;
  }
  function chooseOption(a){
    option += 1;
    if(Math.random() < (1.0 / option)) selected = a;
  }
  function tSignum(a){
    if(a == null) return 0;
    return (a.mines == 0) ? 0 : 1;
  }
  var i;
  var j;
  var x;
  var y;
  var sx;
  var sy;
  var allSafe;
  var attempts = Generator.sx * Generator.sy * Generator.zenDensity;
  for(i = 0; i < attempts; i++){
    x = Math.floor(Math.random() * Generator.sx);
    y = Math.floor(Math.random() * Generator.sy);
    if((field[x][y].mines == 0)&&(field[x][y].neighbours < 36 )&&(x != pX)&&(y != pY)){
      //Check for possible decorations
      resetSelection();
      //Check Knight Paths
      var temp = Shape;
      Shape = Shape_Knight;
      var z = getReachable(x,y);
      var n = 0;
      for(j = 0; j < z.length; j++){
        sx = z[j][0];
        sy = z[j][1];
        n += field[sx][sy].mines;
        if((field[sx][sy].mines == -1)&&(n <= 0)) n += 33;
        if(n > 33) n -= 33;
      }
      if(n == 1) chooseOption(37);
      if(n == 2) chooseOption(38);
      if(n == 3) chooseOption(39);
      Shape = temp;
      //Read in surrounding tiles
      allSafe = true;
      function getTile(dx, dy){
        var tPos = intoBounds([x + dx, y + dy]);
        if(tPos == null){
          allSafe = false;
          return null;
        }
        return field[tPos[0]][tPos[1]];
      }
      t_q = getTile(-1, -1);
      t_a = getTile(-1, 0);
      t_y = getTile(-1, 1);
      t_x = getTile(0, 1);
      t_c = getTile(1, 1);
      t_d = getTile(1, 0);
      t_e = getTile(1, -1);
      t_w = getTile(0, -1);
      //Stones
      var nDiag = tSignum(t_q) + tSignum(t_y) + tSignum(t_c) + tSignum(t_e);
      var nOrth = tSignum(t_w) + tSignum(t_a) + tSignum(t_x) + tSignum(t_d);
      if(nDiag == 1){
        if(nOrth == 0) chooseOption(41);
        if(nOrth == 1) chooseOption(42);
      }
      //Cactus
      if(allSafe && ((nOrth + nDiag) > 0)
                 && (t_q.mines == t_c.mines)
                 && (t_a.mines == t_d.mines)
                 && (t_y.mines == t_e.mines)
                 && (t_x.mines == t_w.mines)) chooseOption(40);
      //Grass
      if((tSignum(getTile(-4,0)) + tSignum(getTile(4,0))
        + tSignum(getTile(0,-4)) + tSignum(getTile(0,4))
        + tSignum(getTile(-5,0)) + tSignum(getTile(5,0))
        + tSignum(getTile(0,-5)) + tSignum(getTile(0,5))) == 0) chooseOption(43);
      //Waves
      if((nDiag + nOrth) > 0){
        n = nDiag + nOrth;
        function swirlCond(a){
          if(a == null) return true;
          if(a.mines == 0) return true;
          return (a.neighbours == n);
        }
        if(swirlCond(t_q) && swirlCond(t_w) &&
          swirlCond(t_e) && swirlCond(t_d) &&
          swirlCond(t_a) && swirlCond(t_c) &&
          swirlCond(t_y) && swirlCond(t_x)) chooseOption(45);
      }
      //Stone 2
      if((option == 0) && (field[x][y].neighbours == 2)) chooseOption(46);
      //Set decoration if possible
      if(selected > 0) field[x][y].neighbours = selected;
    }
  }
}

function loadZenTextures(){
  var i;
  for(i = 0; i < 10; i++){
     Textures.Ground[37 + i] = new Image();
  }
  Textures.Ground[37].src = "Zen_Marble_Blue.png";
  Textures.Ground[38].src = "Zen_Marble_Green.png";
  Textures.Ground[39].src = "Zen_Marble_Red.png";
  Textures.Ground[40].src = "Zen_Cactus.png";
  Textures.Ground[41].src = "Zen_Rock_Small.png";
  Textures.Ground[42].src = "Zen_Rock_Large.png";
  Textures.Ground[43].src = "Zen_Grass_C.png";
  Textures.Ground[44].src = "Zen_Grass_B.png";
  //Textures.Ground[45].src = "Zen_Waves.png";
  //Textures.Ground[46].src = "Zen_Square.png";
  Textures.Ground[45].src = "Zen_Waves.png";
  Textures.Ground[46].src = "Zen_2.png";
}

function doDayReplace(){
  var i;
  for(i = 0; i < Days.length; i++){
    if((Days[i] != null) && (Days[i].postGenFnct == "zenReplace")){
      Days[i].postGenFnct = genZenTiles;
    }
  }
}

loadZenTextures();
doDayReplace();
