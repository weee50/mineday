/*
http://heptaveegesimal.com
*/
Textures = {Ground:[], Closed:[], Mine:[], OpenedMine:[], FinalFlag:[]};

function createTextures(){
  var i
  var j;
  // 0..24 = 0..24
  // 25..33 = -8..-0
  for(i=0;i<25;i++){
    Textures.Ground[i] = new Image();
    Textures.Ground[i].src = "Ground_" + i + ".png";
  }
  for(i=25;i<34;i++){
    Textures.Ground[i] = new Image();
    Textures.Ground[i].src = "Ground_Negative_" + (33 - i) + ".png";
  }
  for(i=-1;i<4;i++){
    Textures.Closed[i] = new Image();
    Textures.Closed[i].src = "Flag_" + i + ".png";
    Textures.FinalFlag[i] = new Image();
    Textures.FinalFlag[i].src = "Flag_Final_" + i + ".png";
  }
  for(i=-2;i<3;i++){
    j = i + 1;
    if(j != 0){
      Textures.Mine[i] = new Image();
      Textures.Mine[i].src = "Mine_" + j + ".png";
      Textures.OpenedMine[i] = new Image();
      Textures.OpenedMine[i].src = "MineOpen_" + j + ".png";
    }
  }
}

function createEntityTexture(E){
  if(E.img == null){
    E.img = new Image();
    E.img.src = E.src;
  }
}

createTextures();
