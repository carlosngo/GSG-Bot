
var canvas;
var context;
var font;

var curmap;
var curlvlnum=0;
var score=0;

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
var mute =false

function random(start,end)
{
    return Math.floor((Math.random()*end)+start);
}

function start() {
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
    font=new textfactory("60px","Imprint MT Shadow","White");
    canvas = document.getElementById("shootout");
    var temp = new Rectangle(0,0,canvas.width,canvas.height,"Red");
    pausemenu = new ImageBox(temp,imagepause);
    retrymenu = new ImageBox(temp,imageend);
	mousearea = new Rectangle(0,0,10,10,"Blue");
	var temp2= new Rectangle(0,canvas.height-50,100,50,"Red");
	 pausebutton= new ImageBox(temp2,imagepausebutton);
	
	 temp2= new Rectangle(150,canvas.height-50,100,50,"Red");	
	mutebutton=new ImageBox(temp2,imagepausebutton);
    context = canvas.getContext("2d");
    var maps =new Array(mapx);
    for(var y=0;y<mapx;y++)
    {
        maps[y]= new Array(mapy);
    }
    curmap=this.mapdatabase.getLevel(curlvlnum);
    //alert(this.mapdatabase.getLength());
    //Mouse Events
    canvas.addEventListener("mousedown",doMouseDown,false);
    canvas.addEventListener("touchstart",doMouseDown,false);
    //Key pressed
    document.onkeydown = keydownHandler;

    //canvas.addEventListener("mousemove",doMouseDown,false);
	setInterval(doAI,33);
    setInterval(loop, 33);
}

function doAI() {
	if (!isdead && !inpause)
		THINK(curmap.getPlayer(),curmap.getEnemy(),curmap.getMapLayout(),new Point(curmap.x.curmap.y));
	
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
    if(!inpause&&!isdead)
    {
        this.curmap.Draw(context);
        pausebutton.Draw(context);
		mutebutton.Draw(context);
        mousearea.Draw(context);
		font.write("TIME:"+sec,500,728,"false",context)

	}
    else if(isdead)
    {
		
		this.curmap.Draw(context);
		retrymenu.Draw(context);
		pausebutton.Draw(context);
		font.write("YOI DIED AT THIS TIME :"+sec,0,120,"false",context)
    }
    else if(inpause) 
    {
		this.curmap.Draw(context);
		pausemenu.Draw(context);
	}
	 if(nextstage)
	{
		this.curmap.Draw(context);
		font.write("You Completed this stage at :"+sec,0,120,"false",context)
		font.write("NextStageat:"+nextstagecounter,0,320,"false",context)
	
	}

}
function moveenemy()
{
    if(curmap.Update()&&nextstage==false)
    {
        curlvlnum++;
        nextstage=true;
		nextstagecounter=500;
		//curmap=mapdatabase.getLevel(curlvlnum);
    } 


}

function update() {
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
			//THINK(curmap.getPlayer(),curmap.getEnemy(),curmap.getMapLayout());
            this.moveenemy();
            this.enemytimer=0;
			
		}
		if(curmap.checkIfDetected())
            {
                isdead=true;
            }
    }
	else if(nextstage)
	{
		nextstagecounter-=33;
		if(nextstagecounter<=0)
		{
		nextstage=false;
		timer=0;
		curmap=mapdatabase.getLevel(curlvlnum);
		initAi(curmap.getPlayer(),curmap.getEnemy(),curmap.getMapLayout(),new Point(curmap.x.curmap.y));
		}
	}
	
}

	



function keydownHandler(evt) {
    var i=evt.keyCode;
    if(!inpause&&!isdead)
    {
		
        if(i==119||i==87)
        {
            curmap.movePlayerUp();
        }
        else if(i==83)
        {
            curmap.movePlayerDown();

        }
        else if(i==65)
        {
            curmap.movePlayerLeft();
        }
        else if(i==68)
        {
            curmap.movePlayerRight();

        }
	
    }

}