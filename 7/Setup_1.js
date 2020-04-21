    var Shape_Normal = [[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];
    var Shape_Normal_WAXD = [[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1],[0,-1],[0,1],[-1,0],[1,0]];
    var Shape_Knight = [[-2,-1],[-2,1],[2,-1],[2,1],[-1,-2],[1,-2],[-1,2],[1,2]];
    var Shape_Hammer = [[-1,-1],[0,-1],[1,-1],[-1,-2],[0,-2],[1,-2]];
    //var Shape_SandGlass = [[0,1],[-1,2],[0,2],[1,2],[0,-1],[-1,-2],[0,-2],[1,-2]];
    //var Shape_Plus = [[-2,0],[-1,0],[1,0],[2,0],[0,-2],[0,-1],[0,1],[0,2]];
    var Shape_Far = [[-1,-2],[0,-2],[1,-2],[-1,0],[1,0],[-1,2],[0,2],[1,2]];
    var Sheep = {img:null, src:"Sheep.png", x:0, y:0, ai:{dig:null, flag:null, voidClickL:null, voidClickR:null, init:null}};
    var Rat = {img:null, src:"Rat.png", x:0, y:0, ai:{dig:null, flag:null, voidClickL:null, voidClickR:null, init:null}};
    var Cheese = {img:null, src:"Cheese.png", x:0, y:0, ai:{dig:null, flag:null, voidClickL:null, voidClickR:null, init:null}};
    var isMobile = false;
    /* <? if($mobile) echo "*"."/ isMobile = true; /*" ?> */
    var mobileLeftclick = true;
    // *************************************************************************************** //
    function individualneighbours(x,y){ // This is only here because I was editing the wrong RunTimeFunctions.js file and wasn't sure why it wasn't recognizing my function.
      var z = getReachable(x,y);
      var n = 0;
      for(i = 0; i < z.length; i++){
        sx = z[i][0];
        sy = z[i][1];
        n += field[sx][sy].mines;
        if((field[sx][sy].mines == -1)&&(n <= 0)){
          n += 33;
        }
        if(n > 33){
          n -= 33;
        }
      }
      return n;
    }

    var Generator = {sx: 20, sy: 20, mineMax: 1, amount:[80], shape:Shape_Normal, wrap:[0,0],
      altGenFnct:function(posX, posY){
        let i = 0;
        let dir = [[0,1],[0,-1],[1,0],[-1,0]];
        let Reach = getReachable(posX, posY);
        Reach[Reach.length] = [posX, posY];
        while(i < 40){
          let x = Math.floor(Math.random() * Generator.sx);
          let y = Math.floor(Math.random() * Generator.sy);
          let z = Math.floor(Math.random() * 4);
          z = [dir[z][0], dir[z][1]];
          z[0] += x;
          z[1] += y;
          z = intoBounds(z);
          if((z != null) && (field[x][y].mines == 0) && (field[z[0]][z[1]].mines == 0)){
            let c = true;
            for(m = 0; m < Reach.length; m++){
              if(((Reach[m][0] === x) && (Reach[m][1] === y))
                || ((Reach[m][0] === z[0]) && (Reach[m][1] === z[1]))){
                c = false;
                m = Shape.length;
              }
            }
            if(c){
              if (individualneighbours(x,y) == 0 && individualneighbours(z[0],z[1]) == 0) {
                field[x][y].mines = 1;
                field[z[0]][z[1]].mines = 1;
                i++;
              } else {
                console.log(i);
              }
            }
          }
        }
        calculateneighbours();
      }};
    
    // *************************************************************************************** //
    var Shape;
    var hasBeenGenerated;
    var GameState;
    var XWrap;
    var YWrap;
    var screenscale = 16;
    var Textures;
    var sizeX;
    var sizeY;
    var maxFlags;
    var field;
    var confused;
    var timeOffset = 0;
    var lastCounterTime = 0;
    var startingTime;
    var canvas = document.getElementById("canvas_1");
    var cont = canvas.getContext("2d");
    var timer = document.getElementById("regularTimer");
    var lastDigTime;
    var death_timer = document.getElementById("deathTimer");
    var death_timer_sec = document.getElementById("deathTimerSec");
    var death_timer_col = document.getElementById("deathTimerCol");
    var mobileButton = document.getElementById("mobileLR");
    var chord = {time:0, x:0, y:0, lock:false};
    var sideNumbers = {
      left  : document.getElementById("Left-Numbers"),
      right : document.getElementById("Right-Numbers"),
      top   : document.getElementById("Top-Numbers"),
      bottom: document.getElementById("Bottom-Numbers"),
    };
    var counterDisplay = {
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
canvas.oncontextmenu = function (e) {
    e.preventDefault();
};
