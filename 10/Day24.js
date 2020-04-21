/*
http://heptaveegesimal.com
*/
function initDay24(){
  let link="weee50.github.io/10/"; // why does github pages not register the previous commit until you make another one?
  Generator = {sx: 1, sy: 1, mineMax: 3, amount:[0,0,0], shape:Shape_Normal, wrap:[0,0], entities:[], deathTimer:0, zenDensity:0, postGenFnct:null};
  Generator.sx = parseInt(Day24.elements.size.x.value);
  Generator.sy = parseInt(Day24.elements.size.y.value);
  Generator.amount[0] = parseInt(Day24.elements.mines.m1.value);
  Generator.amount[1] = parseInt(Day24.elements.mines.m2.value);
  Generator.amount[2] = parseInt(Day24.elements.mines.m3.value);
  Generator.neg = parseInt(Day24.elements.mines.m_1.value);
  if(Generator.amount[2] == 0){
    Generator.mineMax = 2;
    if(Generator.amount[1] == 0) Generator.mineMax = 1;
  }
  link += "?x=" + Generator.sx + "&y=" + Generator.sy;
  link += "&m1=" + Generator.amount[0] + "&m2=" + Generator.amount[1] + "&m3=" + Generator.amount[2] + "&mn=" + Generator.neg;
  var i;
  for(i = 0; i < Day24.elements.topology.length; i++){
    if(Day24.elements.topology[i].e.checked){
      Generator.wrap = Day24.elements.topology[i].w;
      link += "&t=" + i;
    }
  }
  i = 0;
  if(Day24.elements.entities.sheep.checked){
    Generator.entities[0] = Sheep;
    link += "&sh=true";
    i++;
  }else{
    link += "&sh=false";
  }
  if(Day24.elements.entities.rat.checked){
    Generator.entities[i] = Rat;
    Generator.entities[i + 1] = Cheese;
    link += "&ra=true";
  }else{
    link += "&ra=false";
  }
  if(Day24.elements.deathTimer.c.checked){
    Generator.deathTimer = parseInt(Day24.elements.deathTimer.v.value);
    link += "&ti=" + Generator.deathTimer;
  }else{
    link += "&ti=0";
  }
  if(Day24.elements.zen.c.checked){
    Generator.postGenFnct = genZenTiles;
    Generator.zenDensity = 0.01 * parseInt(Day24.elements.zen.v.value);
    link += "&zg=" + Day24.elements.zen.v.value;
  }else{
    link += "&zg=0";
  }
  link += "&vn=" + Day24.elements.pattern.code;
  Generator.shape = getShapeDay24();
  //-------
  var problem = false;
  var c = Generator.sx * Generator.sy;
  if(c > 8300) problem = true;
  c -= Generator.amount[0];
  c -= Generator.amount[1];
  c -= Generator.amount[2];
  c -= Generator.neg;
  c -= Generator.shape.length;
  c -= 3;
  if(c < 0) problem = true;
  if(problem) alert("Warning:\nThese settings might not be able to generate!\nContinue on your own risk!");
  document.getElementById("D24-Cutom-Link").href = link;
  let link2 = "";
  let linkH = link;
  while(link.length > 79){
    link2 += link.substr(0,79)+"<wbr>";
    link = link.substr(79);
  }
  link2 += link;
  document.getElementById("D24-Cutom-Link").innerHTML = link2;
  link = linkH + "&mobile=1";
  document.getElementById("D24-Cutom-Link-Mobile").href = link;
  link2 = "";
  while(link.length > 79){
    link2 += link.substr(0,79)+"<wbr>";
    link = link.substr(79);
  }
  link2 += link;
  document.getElementById("D24-Cutom-Link-Mobile").innerHTML = link2;
  drawCanvasDay24();
};

function loadDay24Tiles(){
  Textures.Ground[48] = new Image();
  Textures.Ground[49] = new Image();
  Textures.Ground[48].src = "Ground_Visible.png";
  Textures.Ground[49].src = "Ground_Eye.png";
};

function getShapeDay24(){
  var S = [];
  let i;
  for(i = 0; i < Day24.elements.pattern.code.length; i+=2){
    let c = Day24.elements.pattern.code.substring(i, i+2);
    S[i / 2] = [c.charCodeAt(0) - 101, c.charCodeAt(1) - 53];
  }
  return S;
}

function drawCanvasDay24(){
  let x;
  let y;
  for(x = 0; x < 9; x++){
    for(y = 0; y < 9; y++){
      Day24.elements.pattern.context.drawImage(
	Textures.Ground[0], screenscale * x, screenscale * y, screenscale, screenscale);
    }
  }
  Day24.elements.pattern.context.drawImage(
    Textures.Ground[49], screenscale * 4, screenscale * 4, screenscale, screenscale);
  let Shape = getShapeDay24();
  for(x = 0; x < Shape.length; x++){
    Day24.elements.pattern.context.drawImage(
      Textures.Ground[48],
      screenscale * (Shape[x][0] + 4), screenscale * (Shape[x][1] + 4),
      screenscale, screenscale);
  }
}

loadDay24Tiles();

Day24 = {
  init:initDay24,
  elements:{
    size:{
      x: document.getElementById('D24-S_X'),
      y: document.getElementById('D24-S_Y')
    },
    mines:{
      m1: document.getElementById('D24-M_1'),
      m2: document.getElementById('D24-M_2'),
      m3: document.getElementById('D24-M_3'),
      m_1: document.getElementById('D24-M_-1')
    },
    topology:[
      {e: document.getElementById('D24-T_00'), w: [0,0]},
      {e: document.getElementById('D24-T_10'), w: [1,0]},
      {e: document.getElementById('D24-T_01'), w: [0,1]},
      {e: document.getElementById('D24-T_20'), w: [2,0]},
      {e: document.getElementById('D24-T_02'), w: [0,2]},
      {e: document.getElementById('D24-T_11'), w: [1,1]},
      {e: document.getElementById('D24-T_12'), w: [1,2]},
      {e: document.getElementById('D24-T_21'), w: [2,1]}
    ],
    entities:{
      sheep: document.getElementById('D24-E_S'),
      rat: document.getElementById('D24-E_R')
    },
    deathTimer:{
      c: document.getElementById('D24-DT_E'),
      v: document.getElementById('D24-DT_T')
    },
    zen:{
      c: document.getElementById('D24-Z_E'),
      v: document.getElementById('D24-Z_D')
    },
    pattern:{
      canvas: document.getElementById('canvas_2'),
      context: document.getElementById('canvas_2').getContext("2d"),
      code:"d4d5d6e4e6f4f5f6"
    }
  }
};



Day24.elements.pattern.canvas.addEventListener('mouseup', function (event){
  let i = event.pageX - Day24.elements.pattern.canvas.getBoundingClientRect().left - 1 - window.pageXOffset;
  let j = event.pageY - Day24.elements.pattern.canvas.getBoundingClientRect().top - 1 - window.pageYOffset;
  i = Math.floor(i / screenscale);
  j = Math.floor(j / screenscale);
  let s = String.fromCharCode(97 + i) + String.fromCharCode(49 + j);
  if(s == "e5") return;
  if(Day24.elements.pattern.code.includes(s)){
    var split = Day24.elements.pattern.code.split(s);
    Day24.elements.pattern.code = "";
    for(i = 0; i < split.length; i++){
      Day24.elements.pattern.code += split[i];
    }
  }else{
    Day24.elements.pattern.code += s;
  }
  drawCanvasDay24();
});

if(document.getElementById("D24-Custom").innerText == "true"){
  console.log("Starting day 24 with custom settings!");
  Day24.elements.size.x.value = document.getElementById("D24-C-X").innerText;
  Day24.elements.size.y.value = document.getElementById("D24-C-Y").innerText;
  Day24.elements.mines.m1.value = document.getElementById("D24-C-M1").innerText;
  Day24.elements.mines.m2.value = document.getElementById("D24-C-M2").innerText;
  Day24.elements.mines.m3.value = document.getElementById("D24-C-M3").innerText;
  Day24.elements.mines.m_1.value = document.getElementById("D24-C-M-1").innerText;
  Day24.elements.pattern.code = document.getElementById("D24-C-Code").innerText;
  Day24.elements.topology[0].e.checked = false;
  Day24.elements.topology[parseInt(document.getElementById("D24-C-T").innerText)].e.checked = true;
  Day24.elements.entities.sheep.checked = (document.getElementById("D24-C-E-S").innerText == "true");
  Day24.elements.entities.rat.checked = (document.getElementById("D24-C-E-R").innerText == "true");
  if(document.getElementById("D24-C-O-Ti").innerText != "0"){
    Day24.elements.deathTimer.c.checked = true;
    Day24.elements.deathTimer.v.value = document.getElementById("D24-C-O-Ti").innerText;
  }
  if(document.getElementById("D24-C-O-Zg").innerText != "0"){
    Day24.elements.zen.c.checked = true;
    Day24.elements.zen.v.value = document.getElementById("D24-C-O-Zg").innerText;
  }
  selectDay(24);
  setTimeout(function() {drawCanvasDay24();}, 50);
  setTimeout(function() {drawCanvasDay24();}, 100);
  setTimeout(function() {drawCanvasDay24();}, 250);
  setTimeout(function() {drawCanvasDay24();}, 500);
}
