<!---
http://heptaveegesimal.com
--->
<!--- Php Test
<?php
$time = (float)time();
echo $time;

//30 Minute Test
//$day = (int)(($time % 1800) / 60);

//November
//$day = 1 + (int)(($time - 1541026800) / 86400); 

//December
$day = 1 + (int)(($time - 1543618800) / 86400);

if($day < 0) $day = 0;

$htmlOpen = "<"."!"."-"."-";
$htmlClose = "-"."-".">";

$mobile = false;

if($_GET['mobile'] == "1") $mobile = true;

function compDay($unlock, $today){
  return ($today >= $unlock);
}

include 'AdventStats.php';

writeStatsBonus($day, ((int)$time));
?>
--->
<html>
<head>
  <title>Heptaveegesimal</title>
  <link href="style_5.css" rel="stylesheet" type="text/css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="utf-8">
</head>
<body>
  <p id="pls_disable">
  If you see this text this site will only be partially functional due to JavaScript being disabled!<br>
  </p>
  <p class="hide" id="Today"><!-- <? echo $htmlClose.$day.$htmlOpen; if(false){ ?> -->31<!-- <? } ?>--></p>
  <!--- Head Of Page --->
  <center>
    <p class="top"><font size="6"><em>Heptaveegesimal</em></font><br>
      <font size="4" id="ins_1">Minesveeper</font>
    </p>
  </center>
  <!--- Actual Page Content --->
  <div class="normalText">
    <center>
      <button type="button" class="daybutton_active" style="width: 150px" onclick="window.location.href='http://heptaveegesimal.com/2018/advent-calendar/'">1 - 24</button>
      <div id="dayselection" class="nowrap">
        <button type="button" id="be_1" class="daybutton_inactive"></button>
        <button type="button" id="be_2" class="daybutton_inactive"></button>
      </div>
      <div id="IfDay" class="hide">
        <!-- <?if(compDay(25, $day)){ ?>-->
        <h1 id="title_25">Day 25 - Better Torus</h1>
        <!-- <?} if(compDay(26, $day)){ ?>-->
        <h1 id="title_26">Day 26 - Double Mines?</h1>
        <!-- <?} if(compDay(27, $day)){ ?>-->
        <h1 id="title_27">Day 27 - Real Projective Plane</h1>
        <!-- <?} if(compDay(28, $day)){ ?>-->
        <h1 id="title_28">Day 28 - 3 Minus 1 Plus Cheese</h1>
        <!-- <?} if(compDay(29, $day)){ ?>-->
        <h1 id="title_29">Day 29 - Modulo 3</h1>
        <!-- <?} if(compDay(30, $day)){ ?>-->
        <h1 id="title_30">Day 30 - Diagonal Reverse Synesthesia</h1>
        <!-- <?} if(compDay(31, $day)){ ?>-->
        <h1 id="title_31">Day 31 - True Custom Mode</h1>
        <!-- <?}?>-->
        <table>
          <tr>
          <td>
            <table class="invis">
            <tr class="invis">
              <td class="invis"><!-- Top Left -->
              <td class="invis">
                <table class="invis" id="Top-Numbers">
                  <tr class="invis">
                </table>
              <td class="invis"><!-- Top Right -->
            <tr class="invis">
              <td class="invis">
                <table class="invis" id="Left-Numbers">
                </table>
              <td class="invis">
                <canvas id="canvas_1" width="0" height="0" style="border:1px solid #000000;" oncontextmenu="return false">
              <td class="invis">
                <table class="invis" id="Right-Numbers">
                </table>
            <tr class="invis">
              <td class="invis"><!-- Bottom Left -->
              <td class="invis">
              <table class="invis" id="Bottom-Numbers">
                  <tr class="invis">
                </table>
              <td class="invis"><!-- Bottom Right -->
          </table>
          </canvas>
          <td width="200" valign="top" style="position:relative">
            <div style="margin:7px">
              <!--- Top Display --->
              <div style="width:172px;"><center><button type="button" class="greenbutton" id="mobileLR">Left Click</button></center></div>
              <div id="count_sec_open">
                <img src="Flag_0.png"></img><div id="count_tex_open" style="display:inline; margin-left:7px">Hallo</div>
                <br>
              </div>
              <div id="count_sec_1flag">
                <img src="Flag_1.png"></img><div id="count_tex_1flag" style="display:inline; margin-left:7px"">Hallo</div>
                <br>
              </div>
              <div id="count_sec_2flag">
                <img src="Flag_2.png"></img><div id="count_tex_2flag" style="display:inline; margin-left:7px"">Hallo</div>
                <br>
              </div>
              <div id="count_sec_3flag">
                <img src="Flag_3.png"></img><div id="count_tex_3flag" style="display:inline; margin-left:7px">Hallo</div>
              </div>
              <div id="count_sec_-1flag">
                <img src="Flag_-1.png"></img><div id="count_tex_-1flag" style="display:inline; margin-left:7px"">Hallo</div>
                <br>
              </div>
              <div id="TorusNavigator">
                <br>
                <table class="invis">
                  <tr class="invis">
                    <td class="invis">
                    <td class="invis"><button type="button" class="greenbutton" id="tn_u"><img src="Arrow_Up.png"></button>
                    <td class="invis">
                  <tr class="invis">
                    <td class="invis"><button type="button" class="greenbutton" id="tn_l"><img src="Arrow_Left.png"></button>
                    <td class="invis">
                    <td class="invis"><button type="button" class="greenbutton" id="tn_r"><img src="Arrow_Right.png"></button>
                  <tr class="invis">
                    <td class="invis">
                    <td class="invis"><button type="button" class="greenbutton" id="tn_d"><img src="Arrow_Down.png"></button>
                    <td class="invis">
                </table>
              </div>
            </div>
            <div style="position:absolute; bottom:0px; left:0px"><div style="margin:7px">
              <!--- Bottom Text --->
              <div id="deathTimerSec" class="hide">
                <b>Death in:<font id="deathTimerCol" color="#00ff00"><div id="deathTimer" style="font-family:'Courier New'; font-size:20px; margin-left:16px">0:05.000</div></font></b>
              </div>
              <br>
              <b>Time:<div id="regularTimer" style="font-family:'Courier New'; font-size:20px; margin-left:16px">0:00.000</div></b>
              <!-- <? if(!$mobile) echo $htmlClose."<br>".$htmlOpen; ?> -->
              <div style="width:172px;"><center><button type="button" class="redbutton" id="restartButton">Restart</button></center></div>
            </div></div>
        </table>
         <div class="out_blue">
          <!-- <?  if(compDay(25, $day)){ ?>-->
          <div id="desc_25"><p align="left">
            When I first made the advent calendar, connected edges where kind of hard to deal with.<br>
            I did get two suggestions how to make them a bit easier, the one I added was to put numbers next to the edges.<br>
            The other one was to add the ability to move the field around, which I didn't add. The problem with it would be that I would have to add it everytime there are connected edges. However this isn't nearly as trivial on a Klein bottle, then there are entities which move based on the location on the board and don't care about the edges. Asymetric shapes on day 24 in combination with a m&ouml;bius strip, could also cause some problems.<br>
            However for today which is just a completely normal torus I have added this option. So you can just use the buttons on the right to move the board around.
            </p>
          </div>
          <!-- <?  } if(compDay(26, $day)){ ?>-->
          <div id="desc_26"><p align="left">
            Double Mines?<br>
            But there are only normal mines?<br>
            Yes, today uses a slightly different interpretation of double mines. Here mines always generate in orthogonal pairs of two. Here you can't just have one mine surrounded by safe tiles, but there always has to be mine next to it as well.
            </p>
            <br><center><img src="images/D26_0.png" id="slider"></img></center><br>
            <p align="left">
            In this example tile A has to be a mine.<br>
            Why?<br>
            Because the mine below it, needs to have mine next to it. To it's left, right and below it however are safe tiles. This means that the other mine has on the tile above it.<br>
            Theoretically you could play this day just like any other days. There are however quite a few situations where you can use this knowledge about how the mines were generated to your advantage
            </p>
          </div>
          <!-- <?  } if(compDay(27, $day)){ ?>-->
          <div id="desc_27"><p align="left">
            During day 11 when the field was a Klein bottle, I also mentioned that there is also a thing called a real projective plane where all side are connected in opposite directions.<br>
            But I also mentioned that I would have to drastically change the algorithm for counting neighbours so that it still works in the corners and even then it wouldn't be obvious how to play there.<br>
            However there is an easier solution to this problem, I just make sure that there are always mines around the corners, so the flags you see will always be mines.<br>
            Don't remove them and click there, there will be mines and if you click right next to them you will also not get a clearing at the beginning.<br>
            <br>
            Ideally you would want to have a disk for a projective plane, then you could define two opposite points on the edge to be the same and connect them that way.<br>
            Now if you zoom into edge they will at some point just appear flat and the two opposite edges will be connected in opposite directions. But since this game is a square, the disk gets deformed and 4 points of the edge of the disk turn into corners. Which is where the problem with these comes from.
            </p>
          </div>
          <!-- <?  } if(compDay(28, $day)){ ?>-->
          <div id="desc_28"><p align="left">
            When Anti Mines where introduced, there were a lot of situations where you need to guess. However this is a version where Anti Mines work better and you aren't forced to guess as much. Here there are only triple mines and Anti Mines, and while a regular mine and a Anti Mine can cancel out, here it would take a triple mine and three Anti Mines which would take up 4 tiles. So if you have only 3 unknown tiles next to a number with the correct amount of mines around it. You know they are all safe since there aren't enough tiles for a triple and three anti mines to cancel out.<br>
            And even if all of that fails, you might still be able to get the rat to run over any problematic area.<br>
            Also quick reminder this day uses zeros on the ground in the same way as before, where if all 8 tiles are safe the ground is empty, but if there are mines that cancel out to zero there is a zero on the ground.<br>
            <br>
            Wait, there is no unique mechanic to this!<br>
            But I need to add something new otherwise this is just a specific day 24 setting.<br>
            What should I add, I can't just leave this day like this?<br>
            <br>
            No, let's just leave it like this and I am just going to hope that there are still some people here, who have not yet played with this setting?
            That's right no other mechanic for today.<br>
            This day is normal.<br>
            I am normal.<br>
            Everything will be fine.
            </p>
          </div>
          <!-- <?  } if(compDay(29, $day)){ ?>-->
          <div id="desc_29"><p align="left">
            When I made the Zen garden, I made it by first generating a regular game and then applying some modifications to the board.<br>
            But the Zen garden was the only time I used this for a serious mechanic.<br>
            Today I will use this in another way.<br>
            Because every number has been replaced by that number modulo 3 (Remainder when dividing by 3).
            So if there was a 4 it would have turned into a 1.<br>
            And if you see a 2 that could have been a 2, 5 or 8.<br>
            This day also uses the 0, in the same way it is used with anti mines, so if there are no mines around you will see an empty tile, but if there are 3 or 6 around that cancel out to 0, then there will be a 0 on the ground.<br>
            Also this game is on a Torus again, where you will again be able to navigate on it like you could on day 25.
            </p>
          </div>
          <!-- <?  } if(compDay(30, $day)){ ?>-->
          <div id="desc_30"><p align="left">
            You might mave noticed that each number has a specific color and will always appear in that color.<br>
            However today these are two different mechanics. The numbers tell you how many mines there are on the 4 orthogonal neighbours of a tile. While the colors in the meantime correspond to the numbers of mines on the 4 diagonal tiles. This day also uses zero's, just not the regular brown zero, because a tile that has no orthogonal or diagonal mines around it will just appear as empty ground.<br>
            So today a green two, means two out of four diagonal and two out of four orthogonal tiles contain mines. A brown three means there are three mines on the orthogonal tiles and all diagonal tiles are safe.<br>
            And since this gives you way more information then a number on a regular day. There are 120 mines on this day.<br>
            <br>
            Also there was a low chance for recolored numbers to appear on day 28, there they were just a regular number with the color changed.<br>
            Why?<br>
            I just thought it would be funny to do this and see if it confuses anyone.
            </p>
          </div>
          <!-- <?  } if(compDay(31, $day)){ ?>-->
          <div id="desc_31"><p align="left">
            True custom mode?<br>
            But there isn't any way to customize this, like there was on day 24.<br>
            This is just a regular day 2!<br>
            <br>
            Yes, looking at it from that perspective, you are correct.<br>
            However the problem with this advent calendar + bonus days, is that there are a lot more ways in which you could customize it, even without any major changes. There were only ever 3 entities used in this, the sheep, the rat and the cheese although the last two would always show up in combination. However the current code would allow for entities with an arbitrary move pattern whenever you make a click. So this would require a tiny bit of custom programming. There are also more ways for alternative generators, you could come up with in a similar way to the one used for day 26. But again this would require a bit of custom programming. Maybe you would also have ideas for something similar like the Zen Garden or the color changes yesterday, which could be added in with not too much effort. But again custom programming.<br>
            So if you want to do any of that here is a zip-file with containing all the relevant files to this project, that you can just download without having to figure out all the individual files, you would otherwise have to manually download.
            </p>
            <br><center><a class="downloadlink" href="http://heptaveegesimal.com/resources/phps/Download_File_By_Id.php?id=10">Download</a></center><br>
            <p align="left">
            And now to a quick description, of how you can easily mess around with the settings for this day.<br>
            For this I will assume that you know some basics about JavaScript, or are able to figure a few things about it out / look some stuff up.<br>
            To mess with this day you want to edit "bonus-days.html". In there you will want to find the line "var Days = [" this is the array of all settings for the individual days. In there you can change the last element to mess with the settings for this day.<br>
            Each setting is an object consisting of the following properties:<br><br>
            </p>
            <table>
              <tr>
                <td>sx / sy
                <td>Size of the board in x and y direction.
              <tr>
                <td>mineMax
                <td>The maximum number of mines below one tile. This should only have the values 1, 2 or 3.
              <tr>
                <td>amount
                <td>Array containing the number of regular, double and triple mines on the board, should have the length <em>mineMax</em>.
              <tr>
                <td><font color="#990000">neg</font>
                <td>If provided, describes the amount of anti-mines on the board.
              <tr>
                <td>shape
                <td>Describes the shape in which mines are counted, check out how other shapes are structured in the code above.
              <tr>
                <td>wrap
                <td>Describes how the edges are connected, is an array of two elements the first for left/right the second for up/down. Where 0 is no connection, 1 is a normal connection and 2 is a connection in opposite directions.
              <tr>
                <td><font color="#990000">entities</font>
                <td>Array of all entities, description can be found below.
              <tr>
                <td><font color="#990000">deathTimer</font>
                <td>Milliseconds after which you die if don't open another save tile.
              <tr>
                <td><font color="#990000">selFnct</font>
                <td>Function that gets called as soon as the day is selected or after the reset button is pressed. This function does not take any parameters.
              <tr>
                <td><font color="#990000">preGenFnct</font>
                <td>Function that gets called before the mines are generated, it takes the x and y coordinates of where the player has dug up the first tile as parameters.
              <tr>
                <td><font color="#990000">altGenFnct</font>
                <td>If provided this function will be called instead of the regular generator, it takes the x and y coordinates of where the player has dug up the first tile as parameters.
              <tr>
                <td><font color="#990000">postGenFnct</font>
                <td>This function will get called after all mines have been generated, it takes the x and y coordinates of where the player has dug up the first tile as parameters.
            </table><br>
            <p align="left">
            Only the properties in black are mandatory, the ones in red do not need to be specified.<br>
            If you mess with the number the generation of mines, you will need to make sure that at the end the correct amount of mines, have been generated. Otherwise the detection of when the game has been completed might not work properly.<br>
            Should you want to create custom entities, they again are objects containing the following properties:<br><br>
            </p>
            <table>
              <tr>
                <td width="70">img / x / y
                <td>They will be dealt with later you can just set them to: img:null, x:0, y:0
              <tr>
                <td>src
                <td>Link to the image which will be used for the entity / just the image name if you put it in the same directory.
              <tr>
                <td>ai
                <td>Object containing the movement patterns for the entity. Each of these functions takes three parameters first is the entity itself and the other two are the coordinates, where a specific click event has occurred. You need the following properties to fully describe the movement of an entity :<br><br>
                <table>
                  <tr>
                    <td>init
                    <td>Gets called when the player makes the first click and should ideally set the initial position of the entity.
                  <tr>
                    <td>dig
                    <td>Gets called when the player digs up a tile.
                  <tr>
                    <td>flag
                    <td>Gets called whenever the player changes the amount of flags on a tile.
                  <tr>
                    <td>voidClickL
                    <td>Called when the player left clicks a tile that has been dug up.
                  <tr>
                    <td>voidClickR
                    <td>Called when the player right clicks a tile that has been dug up.
                </table>
                <br>
                If you don't want to use a certain function set it to null instead.
            </table><br>
            <p align="left">
            And now to some specific features:<br>
            If you want to use the Zen Garden decorations, set <em>postGenFnct</em> to the string "zenReplace" it will then be automatically replaced with the function for generating the Zen Garden decorations, in this case however you will also have to add the property <em>zenDensity</em> to the setting, this describes how many attempts to place a Zen Garden decoration are made. Setting it to 0.25 means that on a 20 by 20 board there will be 100 attempts to replace a number with a Zen Garden tile.<br>
            If you want to mess with the controls you can change the variable <em>confused</em>, if it is false all controls are normal, when it is true all controls get inverted.<br>
            <br>
            Now you might want to share some settings you create with this.<br>
            To do this there are two different ways.<br>
            If you can fit your entire setting into a Generator Object, meaning you have just been using the stuff explained above. You can easily just tell people to go to the bonus days open the developer console and enter a command like:<br>
            <em>Days[6] = {sx:20, . . . };</em><br>
            To replace the setting for this day with your code.<br><br>
            However should that still not be enough and you want to do something where you need to change more of the code, but not the point where you where you would just be making your own version. Then inside the .zip you can download there also is a folder called "reupload" in there you can find "index.html" this is a page containing only the basics you need to play one individual setting, plus a placeholder description and a link to the original. To change the setting you can just change the line saying:<br>
            <em>var Generator = {sx: 20, . . . };</em><br>
            You may now re upload the files from this directory however you like in any noncommercial way, as long as the link to the <em>heptaveegesimal.com</em>, where you got these files from is kept in.<br>
            <br>
            So to conclude this extended advent calendar, I'd like to say that it was really fun to work on and it was also nice to see that there were quite a few people to play it.<br>
            So will there be more?<br>
            Maybe, there definitely won't be another extension tomorrow, however I still have some Minesveeper ideas I'd like to try. So if you want to get informed about them, there still is a <a href="https://discordapp.com/invite/ZqEXjqB">Discord Server</a> for this.<br>
            If you are one of the people I know in person:<br>
            Dann werde ich das ganze wahrscheinlich wieder in alle m&ouml;glichen Gruppen schicken oder Zettel austeilen, wenn es eine umfangreichere Erweiterung hiervon gibt.<br>
            You could also just check here once every three to four months.<br>
            And if none of these are an option for you but you still want to know if there is a major update, then uhhh...<br>
            You could send an E-Mail to the address on the about page. I don't have any sort of mailing list that one could automatically join and leave. So even if I set up an extra address for this it would ultimately still just be me, treating it like such a list. So should there be a major update and also anyone who has sent me such an E-Mail, I will reply with a link to the update.<br>
            <br>
            <br>
            <br>
            <b>Thanks for playing!</b>
            </p>
          </div>
          <!--- <? } ?> --->
        </div>
      </div>
      <div id="NoDay">
        <h1>The Bonus Days</h1>
        <div class="out_blue"><p align="left">
        When I started working on the advent calendar, I kind of expected it to turn into a thing where a few people play the first few days and then everyone forgets about it.
        However it seem like there are quite a few people who have been playing this.
        <br><br>
        So here are the bonus days to the advent calender, which is just an extension of it until the end of the year.
        <br>
        Otherwise everything works just as before.<br>
        There is a <a href="http://heptaveegesimal.com/2018/advent-calendar/bonus-days.php?mobile=1">mobile version</a> of this again.<br>
        And also there still is the <a href="https://discordapp.com/invite/ZqEXjqB">Discord Server</a> for this.<br>
        <br>
        <b>Have fun!</b>
        </p></div>
      </div>
      <div id="FutureDay" class="hide">
        <h1>Please be patient</h1>
        <div class="out_blue"><p align="left">
        It's nice that you are excited to see this day.<br>
        But you will have to wait for this day to arive.
        The point of an Advent calendar also isn't to spoil everything on the first day right away, but to have something each day.
        Yes, this isn't really an advent calendar anymore but it still works the same way.
        Now if you want to do something here, but you don't want to play any of the previous days again, here are two alternatives for you:
        <br><br>
        You could play <b><a href="http://heptaveegesimal.com/vvovov.html">VVOVOV</a></b> it is a fan game of the game VVVVVV, but with a portal gun. It was written in Java, so you would need to download a .jar file to run it. It contains a 4 to 8 hours of content, but also comes with a level editor.
        <br><br>
        If however you don't want to download anything or are on a device that can't run it.<br>
        You can just stay here and instead play/read <b><a href="http://heptaveegesimal.com/opencyoa">OpenCYOA</a></b>.It is a "Choose your own adventure" story, where every decision you make leads to a new branch of the story. And once you reach the end of a branch, you then have the option to continue writing this branch and end it in another decision.
      </div>
    </center>
  </div>
  <!--- Scripts --->
  <!--- Standart Page Stuff -->
  <!-- <?
  echo $htmlClose;
  echo '<script src="http://heptaveegesimal.com/scriptcheck.js"></script>';
  echo '<script src="http://heptaveegesimal.com/insert_1.js"></script>';
  echo $htmlOpen;
  if(false){ ?>-->
  <script language="javascript" type="text/javascript" src="scriptcheck.js"></script>
  <script language="javascript" type="text/javascript" src="insert_1.js"></script>
  <!-- <? } ?> -->
  <!--- Global Variables --->
  <script>
    var Shape_Normal = [[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];
    /*<?if(compDay(10, $day)){ ?>*/
    var Shape_Normal_WAXD = [[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1],[0,-1],[0,1],[-1,0],[1,0]];
    /*<?} if(compDay(6, $day)){ ?>*/
    var Shape_Knight = [[-2,-1],[-2,1],[2,-1],[2,1],[-1,-2],[1,-2],[-1,2],[1,2]];
    /*<?} if(compDay(13, $day)){ ?>*/
    var Shape_Hammer = [[-1,-1],[0,-1],[1,-1],[-1,-2],[0,-2],[1,-2]];
    /*<?} if(compDay(19, $day)){ ?>*/
    //var Shape_SandGlass = [[0,1],[-1,2],[0,2],[1,2],[0,-1],[-1,-2],[0,-2],[1,-2]];
    //var Shape_Plus = [[-2,0],[-1,0],[1,0],[2,0],[0,-2],[0,-1],[0,1],[0,2]];
    var Shape_Far = [[-1,-2],[0,-2],[1,-2],[-1,0],[1,0],[-1,2],[0,2],[1,2]];
    /*<?} if(compDay(15, $day)){ ?>*/
    var Sheep = {img:null, src:"Sheep.png", x:0, y:0, ai:{dig:null, flag:null, voidClickL:null, voidClickR:null, init:null}};
    /*<?} if(compDay(18, $day)){ ?>*/
    var Rat = {img:null, src:"Rat.png", x:0, y:0, ai:{dig:null, flag:null, voidClickL:null, voidClickR:null, init:null}};
    var Cheese = {img:null, src:"Cheese.png", x:0, y:0, ai:{dig:null, flag:null, voidClickL:null, voidClickR:null, init:null}};
    /*<?} ?>*/
    var Days = [
    /*<?if(compDay(25, $day)){ ?>*/
    {sx: 20, sy: 20, mineMax: 1, amount:[70], shape:Shape_Normal, wrap:[1,1]},     //Day 25  Better Torus
    
    /*<?} if(compDay(26, $day)){ ?>*/
    {sx: 20, sy: 20, mineMax: 1, amount:[80], shape:Shape_Normal, wrap:[0,0],
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
              field[x][y].mines = 1;
              field[z[0]][z[1]].mines = 1;
              i++;
            }
          }
        }
        calculateneighbours();
      }},                                                                          //Day 26  Double Mines?
      
    /*<?} if(compDay(27, $day)){ ?>*/
    {sx: 20, sy: 20, mineMax: 1, amount:[76], shape:Shape_Normal, wrap:[2,2],
      selFnct:function(){
        let f = function(x, y){field[x][y].flags = 1; field[x][y].mines = 1;};
        let f2 = function(x, y) {f(x,y); f(x,y+1);f(x+1,y);f(x+1,y+1);};
        f2(0,0);f2(0,18);f2(18,0);f2(18,18);
      }},                                                                          //Day 27  Real Projective Plane
      
    /*<?} if(compDay(28, $day)){ ?>*/
    {sx: 15, sy: 30, mineMax: 3, amount:[0, 0, 42], neg:42, shape:Shape_Normal, wrap:[0,1],
      entities:[Cheese, Rat],
      postGenFnct:function(posX, posY){
        let b = true;
        while(b){
          let i = Math.floor(Math.random() * Generator.sx);
          let j = Math.floor(Math.random() * Generator.sy);
          let k = field[i][j].neighbours;
          if((k > 0) && (k < 5)){
            let m = Math.floor(Math.random() * 5);
            k = RecolorMap[k][m];
            field[i][j].neighbours = k;
          }
          if(Math.random() > 0.5){ b = false; }
        }}},                                                                       //Day 28  3 Minus 1
    
    /*<?} if(compDay(29, $day)){ ?>*/
    {sx: 20, sy: 20, mineMax: 1, amount:[55], shape:Shape_Normal, wrap:[1,1],
      postGenFnct:function(posX, posY){
        let i;
        let j;
        for(i = 0; i < Generator.sx; i++){
          for(j = 0; j < Generator.sy; j++){
            let k = field[i][j].neighbours;
            if(k > 0){
              k %= 3;
              if(k == 0) k = 33;
            }
            field[i][j].neighbours = k;
          }
        }
      }},                                                                          //Day 29  Modulo 3
      
    /*<?} if(compDay(30, $day)){ ?>*/
    {sx: 20, sy: 20, mineMax: 1, amount:[120], shape:Shape_Normal, wrap:[1,1],
      postGenFnct:function(posX, posY){
        Shape = [[-1,0],[1,0],[0,-1],[0,1]];
        calculateneighbours();
        chord.lock = true;
        let i;
        let j;
        let h;
        let ds = [[-1,-1],[-1,1],[1,-1],[1,1]];
        for(i = 0; i < Generator.sx; i++){
          for(j = 0; j < Generator.sy; j++){
            let k = field[i][j].neighbours;
            let diag = 0;
            for(h = 0; h < 4; h++){
              let db = intoBounds([i + ds[h][0], j + ds[h][1]]);
              if(db != null){
                diag += field[db[0]][db[1]].mines;
              }
            }
            k = RecolorMap[k][diag];
            field[i][j].neighbours = k;
          }
        }
        Shape = Shape_Normal;
        }},                                                                       //Day 30  Synesthesia
      
    /*<?} if(compDay(31, $day)){ ?>*/
    //Change the line below to mess with the settings for day 31
    {sx: 20, sy: 20, mineMax: 1, amount:[60], shape:Shape_Normal, wrap:[0,0]},     //Day 31  True Custom
    /*<?} ?>*/
    ]
    var isMobile = false;
    /* <? if($mobile) echo "*"."/ isMobile = true; /*" ?> */
    var mobileLeftclick = true;
    var Generator;
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
    var counterDisplay;
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
  </script>
  <!--- Important Scripts --->
  <script language="javascript" type="text/javascript" src="LoadImages.js"></script>
  <script language="javascript" type="text/javascript" src="RunTimeFunctions.js"></script>
  <script language="javascript" type="text/javascript" src="createBonusDaySlection.js"></script>
  <script language="javascript" type="text/javascript" src="Zen.js"></script>
  <!--- Assign on click function to canvas --->
  <script>
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
      Generator = Days[LastSelectedDay - 25];
      timeOffset = 0;
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
  </script>
  </body>
</html>
