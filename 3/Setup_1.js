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
    
    var Generator = {sx: 20, sy: 20, mineMax: 1, neg: 40, amount:[40], shape:Shape_Normal, wrap:[0,0]};
    
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
    var chord = {time:0, x:0, y:0, lock:true};
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
