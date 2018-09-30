
var canvas;
var context;
var font;

var curmap;
var curlvlnum=0;
var score=0;

var playerlife=1;

var enemy;
var waypoints;

var mapdatabase;
var timer=0;
var sec=0;


//Static Variables
var boxwitdh=48;
var boxheight=34.4;
var mapx=20;
var mapy=20;

//images
var wall= new Image();
var floor= new Image();
var player = new Image();
var enemy = new Image();
var endgoal = new Image();
var light = new Image();
var imagepause = new Image();
var imagepausebutton =new Image();
var imageend = new Image();
var imgmute = new Image();
var imgmute2 = new Image();
//menus
var pausemenu;
var retrymenu;

//timers
var enemytimer=0;

//buttons
var pausebutton;
var yesrestart;
var norestart;
var yesPause;
var noPause;
var mutebutton;


//mouse
var mousearea;

//status
var inpause=false;
var isdead=false;
var nextstage=false;
var nextstagecounter=0;
var mute = false;

var hours;
var minutes;
var seconds;



function random(start,end)
{
    return Math.floor((Math.random()*end)+start);
}

function start() {
    imgmute.src = "images/soundOff.fw.png";
    imgmute2.src = "images/soundOn.fw.png";
    curlvlnum=sessionStorage.level;
	wall.src = "images/RedTile2.fw.png";
    floor.src = "images/BlueTile2.fw.png";
    player.src ="images/player.fw.png";
    enemy.src = "images/BlueTile.fw.png";
    endgoal.src = "images/GreenTile2.fw.png";
    light.src = "images/YellowTile.fw.png";
    imagepause.src="images/paused.fw.png";
	imagepausebutton.src="images/pause.fw.png";
	imageend.src="images/retry.fw.png";
    yesrestart = new Rectangle(382,446,100,100,"Green");
	norestart = new Rectangle(550,446,100,100,"Red");
	yesPause = new Rectangle(382,446,100,100,"Green");
	noPause = new Rectangle(550,446,100,100,"Red");
	
	this.mapdatabase = new MapDataBase(floor,player,wall,enemy,endgoal,light);

    X1=0;
    Y1=0;
    flag=1;
    waypoints = new Array();
    font=new textfactory("60px","Consolas","White");
    canvas = document.getElementById("shootout");
    var temp = new Rectangle(0,0,canvas.width,canvas.height,"Red");
    pausemenu = new ImageBox(temp,imagepause);
    retrymenu = new ImageBox(temp,imageend);
	mousearea = new Rectangle(0,0,10,10,"Blue");
	var temp2= new Rectangle(0,canvas.height-80,150,80,"Red");
	 pausebutton= new ImageBox(temp2,imagepausebutton);
	
	 temp2= new Rectangle(150,canvas.height-80,80,80,"Red");	
	 mutebutton = new ImageBox(temp2, imgmute2);
    context = canvas.getContext("2d");
    var maps =new Array(mapx);
    for(var y=0;y<mapx;y++)
    {
        maps[y]= new Array(mapy);
    }
    curmap=this.mapdatabase.getLevel(curlvlnum);
	initAI(curmap.getPlayer(),curmap.getEnemy(),curmap.getMapLayout(),curmap.getDestination());
		
    canvas.addEventListener("mousedown",doMouseDown,false);
    canvas.addEventListener("touchstart",doMouseDown,false);

    document.onkeydown = keydownHandler;

	setTimeout(doAI,33);

    setInterval(loop, 33);
}
function doAI() {
	if (!isdead && !inpause&&!nextstage) {
		THINK(curmap.getPlayer(),curmap.getEnemy(),curmap.getMapLayout(),curmap.getDestination());
	}
	setTimeout(doAI,33);
}

function doMouseDown(event)
{
    var x=event.pageX-canvas.offsetLeft;
    var y=event.pageY-canvas.offsetTop;
    //alert(event.x+","+event.y+"   "+x+","+y);
    mousearea.setX(x);
    mousearea.setY(y);

    if(mousearea.isIntersect(mousearea,pausebutton.hitbox) &&inpause==false)
    {
        inpause=true;
    }
	if(mousearea.isIntersect(mousearea,mutebutton.hitbox) &&inpause==false)
	{
		mute=!mute;
		document.getElementById('background').muted = mute;
	}
	if(mousearea.isIntersect(mousearea,yesPause) &&inpause==true)
    {
        inpause=false;
    }
	if(mousearea.isIntersect(mousearea,noPause) &&inpause==true)
    {
    window.location.assign("MainMenu.html#Menu");
    }
	if(isdead==true)
	{
	    sec=0;
		timer=1;
	}
    if(mousearea.isIntersect(mousearea,yesrestart) &&isdead==true)
    {
        sec = 0;
		playerlife=1;
        isdead=false;
        curmap.RestartMap();
		
	}
	if(mousearea.isIntersect(mousearea,norestart) &&isdead==true)
    {
    window.location.assign("MainMenu.html#Menu");
	}
	mousearea.setX(-100);
	mousearea.setY(-100);
}
function loop() {
    this.draw();
    this.update();
}

function refresh()
{	
    //context.fillStyle = "#FFFFFF";
    context.fillStyle = "BLACK";
	
    context.fillRect(0,0,canvas.width, canvas.height);
}

function draw() {
    refresh();
    secondsToTime(sec);
    var temp = minutes;
    var temp2 = seconds;
    if(!inpause&&!isdead)
    {
        this.curmap.Draw(context);
        pausebutton.Draw(context);
		mutebutton.Draw(context);
		mousearea.Draw(context);
		if (temp < 10 && temp2 < 10) {
		    font.write("TIME:" + "0" + temp + ":" + "0" + temp2, 390, 750, "false", context);
		}
		else if (temp < 10 && temp2 >= 10) {
		    font.write("TIME:" + "0" + temp + ":" + temp2, 390, 750, "false", context);
		}
		else if (temp >= 10 && temp2 < 10) {
		    font.write("TIME:" + temp + ":" + "0" + temp2, 390, 750, "false", context);
		}
		else {
		    font.write("TIME:" + temp + ":" + temp2, 390, 750, "false", context);
		}
		
		font.write("LIVES :"+playerlife,750,750,"true",context);

	}
    else if(isdead)
    {
		
		this.curmap.Draw(context);
		retrymenu.Draw(context);
		pausebutton.Draw(context);
		if (temp < 10 && temp2 < 10) {
		    font.write("You Died at this time:" + "0" + temp + ":" + "0" + temp2, 0, 600, "false", context);
		}
		else if (temp < 10 && temp2 >= 10) {
		    font.write("You Died at this time:" + "0" + temp + ":" + temp2, 0, 600, "false", context);
		}
		else if (temp >= 10 && temp2 < 10) {
		    font.write("You Died at this time:" + temp + ":" + "0" + temp2, 0, 600, "false", context);
		}
		else {
		    font.write("You Died at this time:" + temp + ":" + temp2, 0, 600, "false", context);
		}
		
    }
    else if(inpause) 
    {
		this.curmap.Draw(context);
		pausemenu.Draw(context);
	}
	 if(nextstage)
	{
		this.curmap.Draw(context);
		font.write("You Completed this stage at :" + temp + ":" + temp2, 0, 120, "false", context);
		font.write("NextStageat:" + getSeconds(nextstagecounter), 0, 320, "false", context)
	
	}

}
function checkifCleared()
{
    if(curmap.Update()&&nextstage==false)
    {
        alert(playerlife);
        curlvlnum++;
        nextstage=true;
		nextstagecounter=500;
		//curmap=mapdatabase.getLevel(curlvlnum);
    } 


}

function update() {
    if (mute == true) {
        mutebutton.setImage(imgmute);
    }
    else {
        mutebutton.setImage(imgmute2);
    }
    if(!inpause&&!isdead&&!nextstage)
    {
		
		timer+=33;
		if(timer>1000)
		{
		sec++;
		timer=33;
		}
        this.enemytimer+=33;
        if(this.enemytimer>33)
        {
			checkifCleared();
            curmap.UpdateEnemy();
            this.enemytimer=0;
			
		}
		if(curmap.checkIfDetected())
            {
				playerlife--;
				if(playerlife<0)
				{
                isdead=true;
				}
				/*sec = 0;
				isdead=false;
				curmap.RestartMap();*/
            }
    }
	else if(nextstage)
	{
		nextstagecounter-=33;
		if(nextstagecounter<=0)
		{
		nextstage=false;
		timer = 0;
		sec = 0;
		sec = 0;
		playerlife=1;
		curmap=mapdatabase.getLevel(curlvlnum);
		curmap.RestartMap();
		player.flagmovement=-1;
		
		//initAI(curmap.getPlayer(),curmap.getEnemy(),curmap.getMapLayout(),curmap.getDestination());
		}
	}
	
}
function getSeconds(seca)
{
    seca=seca / 1000;
    var hoursa = Math.floor(seca / (60 * 60));

   var  divisor_for_minutesa = seca % (60 * 60);
    var minutesa = Math.floor(divisor_for_minutesa / 60);

    var divisor_for_secondsa = divisor_for_minutesa % 60;
    var secondsa = Math.ceil(divisor_for_secondsa);
    return secondsa;
}

function secondsToTime(secs) {

    if (secs == 0)
        secs = 1;

    hours = Math.floor(secs / (60 * 60));

    divisor_for_minutes = secs % (60 * 60);
    minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    seconds = Math.ceil(divisor_for_seconds);

   

    var obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
    };
    return obj;
}



function keydownHandler(evt) {
    var i=evt.keyCode;
    if(!inpause&&!isdead)
    {
		
        if (i == 119 || i == 87 || i == 38)
		
        {
            curmap.movePlayerUp();
        }
        else if(i==83||i==40)
        {
            curmap.movePlayerDown();

        }
        else if(i==65||i==37)
        {
            curmap.movePlayerLeft();
        }
        else if (i == 68||i==39) {
            curmap.movePlayerRight();

        }
		else
		{
		nextstage=false;
		timer = 0;
		sec = 0;
		sec = 0;
		curmap=mapdatabase.getLevel(curlvlnum);
		curmap.RestartMap();
		player.flagmovement=-1;
		}
    
        
	
    }
    else if (isdead == true) {
        if (i == 89 && isdead == true) {

            sec = 0;
			playerlife=1;
            isdead = false;
            curmap.RestartMap();
        }

        if (i == 78 && isdead == true) {
            window.location.assign("MainMenu.html#Menu");
        }
    }

}