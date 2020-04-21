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
    }
    //Sheep
    Sheep.ai.init = initChordLock;
    Sheep.ai.dig = function(E, x, y){
      if(field[E.x][E.y].neighbours == 43){
        field[E.x][E.y].neighbours = 44;
        return;
      }
      toTarget(E, x, y);
      field[E.x][E.y].open = true;
      if(field[E.x][E.y].mines != 0){
        GameState = 2;
      }else{
        if(field[E.x][E.y].neighbours == 0){
          digAround(E.x, E.y);
        }
      }
    };
    //Cheese
    Cheese.ai.init = setPos;
    Cheese.ai.voidClickR = setPos;
    //Rat
    Rat.ai.init = setPos;
    Rat.ai.dig = function(E, x, y){
      toTarget(E, Cheese.x, Cheese.y);
      if(!field[E.x][E.y].open){
        if(field[E.x][E.y].mines != 0){
          field[E.x][E.y].flags = field[E.x][E.y].mines;
        }else{
          field[E.x][E.y].open = true;
          if(field[E.x][E.y].neighbours == 0){
            digAround(E.x, E.y);
          }
        }
      }
    }
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
