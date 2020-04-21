//Entity AI
    function toTarget(E, x, y){
      if(E.x < x) E.x++;
      if(E.x > x) E.x--;
      if(E.y < y) E.y++;
      if(E.y > y) E.y--;
    }
    function setPos(E, x, y){
      E.x = x;
      E.y = y;
    }
    function initChordLock(E, x, y){
      setPos(E, x, y);
      chord.lock = true;
      Cursor.img.src = "Cursor.png"
    }
    //Cursor
    Cursor.ai.init = initChordLock;
    Cursor.ai.dig = function(E, x, y){
      if (!flagmode) {
        toTarget(E, x, y);
        if (field[E.x][E.y].flags == 0) {
          field[E.x][E.y].open = true;
          if(field[E.x][E.y].mines != 0){
            GameState = 2;
          }else{
            if(field[E.x][E.y].neighbours == 0){
              digAround(E.x, E.y);
            }
          }
        drawStuff();
        if(counterDisplay.Floor.c == counterDisplay.Floor.t){
          GameState = 3;
        }
        }
      } else {
        toTarget(E, x, y);
        if (!field[E.x][E.y].open) {
          if (field[E.x][E.y].flags == 0) {
            field[E.x][E.y].flags = 1;
          } else {
            field[E.x][E.y].flags = 0;
          }
        }
      }
    };
    // Thanks to Joshua (the creator of the original advent calendar) for providing this fix for the invisible cursor bug
    Cursor.ai.voidClickL = Cursor.ai.dig;
    Cursor.both = [new Image(), new Image()];
    Cursor.both[0].src = "Cursor.png";
    Cursor.both[1].src = "CursorRed.png";
    Cursor.ai.flag = function(E, x, y){
      flagmode = !flagmode;
      if (flagmode) {
        E.img = E.both[1];
      } else {
        E.img = E.both[0];
      }
    drawStuff();
    }
    Cursor.ai.voidClickR = Cursor.ai.flag;

    // Ghost
    Ghost.ai.init = initChordLock;
    Ghost.ai.dig = function(E, x, y){
      if (ghostMovesNow && !isFirstTurn) {
        toTarget(E, x, y);
        ghostMovesNow = false;
      } else if (isFirstTurn) {
        ghostMovesNow = false;
      } else {
        ghostMovesNow = true;
      }
      
      if ((Ghost.x == Cursor.x && Ghost.y == Cursor.y) && !isFirstTurn) {
        GameState = 2;
      }

      if (isFirstTurn && !ghostMovesNow) {
        isFirstTurn = false;
      }

      drawStuff();
    };
    Ghost.ai.voidClickL = Ghost.ai.dig;

    //Events
    canvas.addEventListener('mouseup', function(event) {
      var i = event.pageX - canvas.getBoundingClientRect().left - 1 - window.pageXOffset;
      var j = event.pageY - canvas.getBoundingClientRect().top - 1 - window.pageYOffset;
      i = Math.floor(i / screenscale);
      j = Math.floor(j / screenscale);
      if((i >= 0)&&(j >= 0)&&(i < sizeX)&&(j < sizeY)){
        if(event.button == 0){
          if(document.selection && document.selection.empty) {
            document.selection.empty();
          } else if(window.getSelection) {
            let sel = window.getSelection();
            sel.removeAllRanges();
          }
        }
        if((isMobile ? (!mobileLeftclick) : (event.button == 2)) ^ confused){
          rightClick(i, j);
        }else{
          leftClick(i, j);
        }
      }
    }, false);
    document.getElementById("restartButton").onclick = function(){
      startNewGame();
    };
    if(isMobile){
      mobileButton.onclick = function(){
        if(mobileLeftclick){
          mobileLeftclick = false;
          mobileButton.innerText = "Right Click";
        }else{
          mobileLeftclick = true;
          mobileButton.innerText = "Left Click";
        }
      };
    } else {
      mobileButton.className = "hide";
    }
    //Torus Navigator
    function moveField(dir, tan, sizeDir, sizeTan){
      let i;
      let j;
      let h;
      let f = function(A, lA, B, lB){
        return intoBounds([A[0] * lA + B[0] * lB, A[1] * lA + B[1] * lB]);
      }
      for(i = 0; i < sizeTan; i++){
        let p1 = f(dir, 0, tan, i);
        let p2 = p1;
        let h = field[p1[0]][p1[1]];
        for(j = 1; j < sizeDir; j++){
          p1 = f(dir, j-1, tan, i);
          p2 = f(dir, j, tan, i);
          field[p1[0]][p1[1]] = field[p2[0]][p2[1]];
        }
        field[p2[0]][p2[1]] = h;
      }
      drawStuff();
    }
    document.getElementById("tn_d").onclick = function(){moveField([0,-1],[1,0],Generator.sy,Generator.sx);};
    document.getElementById("tn_r").onclick = function(){moveField([-1,0],[0,1],Generator.sx,Generator.sy);};
    document.getElementById("tn_l").onclick = function(){moveField([1,0],[0,1],Generator.sx,Generator.sy);};
    document.getElementById("tn_u").onclick = function(){moveField([0,1],[1,0],Generator.sy,Generator.sx);};
    
    //Recolors
    var RecolorMap = [[0, 47, 48, 49, 50],[51, 1, 52, 53, 54],[55, 56, 2, 57, 58],[59, 60, 61, 3, 62],[63, 64, 65, 66, 4]];
    for(let i = 0; i < 20; i++){
      Textures.Ground[47 + i] = new Image();
    }
    Textures.Ground[47].src = "Color_0_to_1.png";
    Textures.Ground[48].src = "Color_0_to_2.png";
    Textures.Ground[49].src = "Color_0_to_3.png";
    Textures.Ground[50].src = "Color_0_to_4.png";
    
    Textures.Ground[51].src = "Color_1_to_0.png";
    Textures.Ground[52].src = "Color_1_to_2.png";
    Textures.Ground[53].src = "Color_1_to_3.png";
    Textures.Ground[54].src = "Color_1_to_4.png";
    
    Textures.Ground[55].src = "Color_2_to_0.png";
    Textures.Ground[56].src = "Color_2_to_1.png";
    Textures.Ground[57].src = "Color_2_to_3.png";
    Textures.Ground[58].src = "Color_2_to_4.png";
    
    Textures.Ground[59].src = "Color_3_to_0.png";
    Textures.Ground[60].src = "Color_3_to_1.png";
    Textures.Ground[61].src = "Color_3_to_2.png";
    Textures.Ground[62].src = "Color_3_to_4.png";
    
    Textures.Ground[63].src = "Color_4_to_0.png";
    Textures.Ground[64].src = "Color_4_to_1.png";
    Textures.Ground[65].src = "Color_4_to_2.png";
    Textures.Ground[66].src = "Color_4_to_3.png";
    
    let hasNoEntities = true;
    if(Array.isArray(Generator.entities)){
      hasNoEntities = (Generator.entities.length == 0);
    }
    if((Generator.wrap[0] == 1) && (Generator.wrap[1] == 1) && hasNoEntities){
      TorusNavigator.className = "";
    }else{
      TorusNavigator.className = "hide";
    }
    startNewGame();
    
    setTimeout(function() {drawStuff();}, 50);
    setTimeout(function() {drawStuff();}, 200);
    setTimeout(function() {drawStuff();}, 500);
    setTimeout(function() {drawStuff();}, 1000);
