var canvas;
var context;
var font;

var imgmenu = new Image();
var imgabout = new Image();
var imgstart = new Image();
var imgquit = new Image();
var imgaboutscreen= new Image();
var imgpasswordinput = new Image();
var imgstageseletct = new Image();
var imgstageselect2 = new Image();
var imgstageselectbutton = new Image();
var imgcur= new Image();
var imgbackbutton = new Image();
var arrayofbutton = new Array();
var stringinbox="12679";
var curmap;
var database;

var prev;
var next;
var curnum=0;

var startrc;
var aboutrc;
var stageselectrc;
var quitrc;
var backrc;
var screenselectrc;

var currentscreenflag=0;

var x=0;
var y=0;
var mouse;

var background; 

var wall= new Image();

var floor= new Image();
var player = new Image();
var enemy = new Image();
var endgoal = new Image();
var light = new Image();
var imagepause = new Image();
var imagepausebutton =new Image();
var imageend = new Image();
var backbuttonbox;



function random(start,end)
{
    return Math.floor((Math.random()*end)+start);
}

function start() {

	imgbackbutton.src="images/back.fw.png"
	 wall.src = "images/RedTile2.fw.png";
    floor.src = "images/BlueTile2.fw.png";
    player.src ="images/player.fw.png";
    enemy.src = "images/BlueTile.fw.png";
    endgoal.src = "images/GreenTile2.fw.png";
    light.src = "images/YellowTile.fw.png";
    imagepause.src="images/paused.fw.png";
	imagepausebutton.src="images/pause.fw.png";
	imageend.src="images/retry.fw.png";
	imgstageselectbutton.src="images/levelselect.fw.png";
	database=new  MapDataBase(floor,player,wall,enemy,endgoal,light);
	map=database.getLevel(0);
    canvas = document.getElementById("Menua");
    font=new textfactory("60px","Imprint MT Shadow","White");
    context = canvas.getContext("2d");
	prev = new Rectangle(39,369,137,119,"Red");
	next = new Rectangle(864,369,137,119,"Green");
    screenselectrc= new Rectangle(184,149,650,563,"Black");
	var i=0;
    var p=361;
    var q=331;
    for(i=0;i<10;i++)
    {
        arrayofbutton.push(new Rectangle(p,q,100,94,"Green"));
        p+=105;
	 
        if(i==2||i==5||i==8)
        {
            p=361;
            q+=100;
        }
	 
	 
    }
			 if (sessionStorage.unlock)
            {
                sessionStorage.unlock=0;
            }
            else
            {
                sessionStorage.unlock=0;
            }
			
			 if(typeof(Storage)!=="undefined")
			{
            if (sessionStorage.level)
            {
                sessionStorage.level=0;
            }
            else
            {
                sessionStorage.level=0;
            }
			}
			
    arrayofbutton[9].setX(arrayofbutton[9].getX()+100);
	
    imgaboutscreen.src="images/aboutscreen.fw.png";
    imgmenu.src="images/sample level.fw.png";
    imgabout.src="images/about.fw.png";
    imgstart.src="images/play.fw.png";
    imgquit.src="images/quit.fw.png";
    imgpasswordinput.src="images/passcreen.fw.png";
    imgstageseletct.src="images/passcreen.fw.png";
	imgstageselect2.src="images/lvlselect1.fw.png";
    this.mouse= new Rectangle(0,0,10,10,"Red");

	
	
    var temp =new Rectangle(370,350,300,100,"Red");
    this.startrc = new ImageBox(temp,imgstart);
    temp = new Rectangle(370,450,300,100,"Red");
    this.aboutrc = new ImageBox(temp,imgabout);
    temp = new Rectangle(370,550,300,100,"Red");
    this.quitrc = new ImageBox(temp,imgquit);
    this.background = new Rectangle(0,0,canvas.witdh,canvas.height,"Black");
    this.backrc = new Rectangle(540,700,300,50,"Red");
	backbuttonbox = new ImageBox(backrc,imgbackbutton);

   temp=new Rectangle(370,650,300,100,100);
    stageselectrc= new ImageBox(temp,imgstageselectbutton);
    //Mouse Events
    canvas.addEventListener("mousedown",doMouseDown,false);
    canvas.addEventListener("touchstart",doMouseDown,false);
    //Key pressed
    document.onkeydown = keydownHandler;

    //canvas.addEventListener("mousemove",doMouseDown,false);
	
    setInterval(loop, 33);
}
function doMouseDown(event)
{
    var x=event.pageX-canvas.offsetLeft;
    var y=event.pageY-canvas.offsetTop;
    //alert(mouse);
    mouse.setX(x);
    mouse.setY(y);


    if(mouse.isIntersect(mouse,startrc.hitbox) && currentscreenflag==0)
    {

       sessionStorage.level=0;
        window.location.assign("Shootout.html");

    }

    if(mouse.isIntersect(mouse,quitrc.hitbox) && currentscreenflag==0)
    {
        window.close();
    }
    else if(mouse.isIntersect(mouse,aboutrc.hitbox) && currentscreenflag==0)
    {/*
alert("About");
currentscreenflag=true;*/
        currentscreenflag=1;
    }
    else if(mouse.isIntersect(mouse,stageselectrc.hitbox) && currentscreenflag==0&&typeof(Storage)!=="undefined")
    {
		//alert(sessionStorage.unlock);
		if(sessionStorage.unlock==0)
		{
        currentscreenflag=2;
		}
		else
		{
		  currentscreenflag=3;
		}
	}
    else if(mouse.isIntersect(mouse,backrc)&& (currentscreenflag==2||currentscreenflag==3||currentscreenflag==1))
    {
   
        currentscreenflag=0;
    }
    else if(currentscreenflag==2)
    {
        if(mouse.isIntersect(mouse,arrayofbutton[0]))
        {
            if(stringinbox.length<5)
            {
                stringinbox=stringinbox+"7";
            }
            else
            {
                stringinbox="7";
            }
        }
        else if(mouse.isIntersect(mouse,arrayofbutton[1]))
        {
            if(stringinbox.length<5)
            {
                stringinbox=stringinbox+"8";
            }
            else
            {
                stringinbox="8";
            }
           
     
        }
        else if(mouse.isIntersect(mouse,arrayofbutton[2]))
        {
            if(stringinbox.length<5)
            {
                stringinbox=stringinbox+"9";
            }
            else
            {
                stringinbox="9";
            }
        }
        else if(mouse.isIntersect(mouse,arrayofbutton[3]))
        {
            if(stringinbox.length<5)
            {
                stringinbox=stringinbox+"4";
            }
            else
            {
                stringinbox="4";
            }
           
     
        }
        else if(mouse.isIntersect(mouse,arrayofbutton[4]))
        {
            if(stringinbox.length<5)
            {
                stringinbox=stringinbox+"5";
            }
            else
            {
                stringinbox="5";
            }
           
     
        }
        else if(mouse.isIntersect(mouse,arrayofbutton[5]))
        {
            if(stringinbox.length<5)
            {
                stringinbox=stringinbox+"6";
            }
            else
            {
                stringinbox="6";
            }
           
        }
        else if(mouse.isIntersect(mouse,arrayofbutton[6]))
        {
            if(stringinbox.length<5)
            {
                stringinbox=stringinbox+"1";
            }
            else
            {
                stringinbox="1";
            }
               
        }
        else if(mouse.isIntersect(mouse,arrayofbutton[7]))
        {
            if(stringinbox.length<5)
            {
                stringinbox=stringinbox+"2";
            }
            else
            {
                stringinbox="2";
            }
           
        }
        else if(mouse.isIntersect(mouse,arrayofbutton[8]))
        {
            if(stringinbox.length<5)
            {
                stringinbox=stringinbox+"3";
            }
            else
            {
                stringinbox="3";
            }
           
        }	
        else if(mouse.isIntersect(mouse,arrayofbutton[9]))
        {
            if(stringinbox.length<5)
            {
                stringinbox=stringinbox+"0";
            }
            else
            {
                stringinbox="0";
            }
           
        }	
				
			
	
        
    }
	else if(currentscreenflag==3)
	{
	 if(mouse.isIntersect(mouse,next)&&curnum+1 < database.getLength())
	 {
	 curnum++;
	 map=database.getLevel(curnum);	
	 }
	 else if(mouse.isIntersect(mouse,prev)&&curnum-1>=0)
	 {
	 curnum--;
	 map=database.getLevel(curnum); 
	 }
	 else if(mouse.isIntersect(mouse,screenselectrc))
	 {
	      sessionStorage.level=curnum;
		  window.location.assign("Shootout.html");

		  }
	}
}
function loop() {
    this.draw();
    this.update();
}

function refresh()
{	
    //context.fillStyle = "#FFFFFF";
    context.fillStyle = "White";
	
    context.fillRect(0,0,canvas.width, canvas.height);
}

function draw() {
    //background.Draw(context,"Black");
    refresh();
    if(currentscreenflag==0)
    {
        context.drawImage(imgmenu,0,0,canvas.width,canvas.height);
        startrc.Draw(context); 
        aboutrc.Draw(context);
        quitrc.Draw(context);
        stageselectrc.Draw(context);
    }
    else if(currentscreenflag==1)
    {
        context.drawImage(imgaboutscreen,0,0,canvas.width,canvas.height);
       // backbuttonbox.Draw(context);
        this.backrc.setX(467);
        this.backrc.setY(670);
        this.backrc.setWidth(103);
        //this.backrc.Draw(context);
    }
    else if(currentscreenflag==2)
    {
        context.drawImage(imgstageseletct,0,0,canvas.width,canvas.height);
		font.write(stringinbox,292,278,"false",context);
		this.backrc.setX(850);
		this.backrc.setY(670);
		this.backrc.setWidth(150);
		backbuttonbox.Draw(context);
        //this.backrc.Draw(context);
    }
	else if(currentscreenflag==3)
	{
	    context.drawImage(imgstageselect2,0,0,canvas.width,canvas.height);
	    map.DrawMap(context,188,155,32.5,28);
		font.write("LEVEL COUNT:"+curnum,292,278,"false",context);
		backbuttonbox.Draw(context);
		/*next.Draw(context);
		prev.Draw(context);
		screenselectrc.Draw(context);*/
		//this.backrc.Draw(context);
    
	}
     //font.write(mouse.getX()+" "+mouse.getY(),292,278,"false",context);
	


}


function update() {

        if(typeof(Storage)!=="undefined"&&stringinbox=="12679" &&sessionStorage.unlock!=1)
        {
            if (sessionStorage.unlock)
            {
				currentscreenflag=3;
                sessionStorage.unlock=1;
            }
            else
            {
				currentscreenflag=3;
                sessionStorage.level=1;
            }
        }
}


function keydownHandler(evt) {
    var i=evt.keyCode;
    if(i==8)
    {
        stringinbox="";
    }
}
