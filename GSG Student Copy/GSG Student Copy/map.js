function map(maplayout,floor,player,wall,enemy,endgoal,light)
{
    this.floor=floor;
    this.player=player;
    this.wall=wall;
    this.enemy=enemy;
    this.endgoal=endgoal;
    this.light=light;
	//Static Variables
var boxwitdh=48;
var boxheight=34.4;
var mapx=20;
var mapy=20;

    this.initplayerlocation;
    /*
<-----------Legend----------->
0- DEAD SPACE
1- PLAYER SPAWN
2- ENEMY WAYPOINT
3- WALL
4- OPEN AREA
5- END POINT
48,48
20,15
<-----------END Legend----------->
*/
	
    this.random = function(start,end)
    {
        return Math.floor((Math.random()*end)+start);
    }
    //Static Variables
    this.boxwitdh=48;
    this.boxheight=34.4;
    this.mapx=20;
    this.mapy=20;
    //End Varaibles
    this.finish=false;
    this.maplayout=maplayout;
    this.enemywaypoint=new Array();
    this.walls= new Array();
    this.listenemy = new Array();
	this.endx=0;
	this.endy=0;
    this.listofrectangle = new Array(mapx);

    for(var i=0;i<mapx;i++)
    {
        this.listofrectangle[i]= new Array(mapy);
    }

    for(var x=0;x<this.mapx;x++)
    {
        for(var y=0;y<this.mapy;y++)
        {
            if(this.maplayout[x][y]==1)
            {
                this.playerlocation = new Player(x,y,this.maplayout,this.player,this.light);
                this.initplayerlocation=new Player(x,y,this.maplayout,this.player,this.light);
                var temp=new Rectangle(x*this.boxwitdh,y*this.boxheight,this.boxwitdh,this.boxheight,"Green");
            }
            else if(this.maplayout[x][y]==3)
            {
                var temp=new Rectangle(x*this.boxwitdh,y*this.boxheight,this.boxwitdh,this.boxheight,"Pink");
            }
            else if(this.maplayout[x][y]==5)
            {
				this.endx=x;
				this.endy=y;
                var temp=new Rectangle(x*this.boxwitdh,y*this.boxheight,this.boxwitdh,this.boxheight,"Blue");
            }
   
            else
            {
                var temp=new Rectangle(x*this.boxwitdh,y*this.boxheight,this.boxwitdh,this.boxheight,"Black");
            }
            this.listofrectangle[x][y] = temp;
        }
		
    }
	
   this.setMap = function(othermap)
    {
        this.finish=othermap.finish;
        this.maplayout=othermap.maplayout;
        this.enemywaypoint=new Array();
        this.walls= new Array();
        this.listenemy = new Array();
        this.listofrectangle = new Array(mapx);
        for(var i=0;i<mapx;i++)
        {
            this.listofrectangle[i]= new Array(mapy);
        }

        for(var x=0;x<this.mapx;x++)
        {
            for(var y=0;y<this.mapy;y++)
            {
                if(this.maplayout[x][y]==1)
                {
                    this.playerlocation = new Rectangle(x,y,this.boxwitdh,this.boxheight);
                    var temp=new Rectangle(x*this.boxwitdh,y*this.boxheight,this.boxwitdh,this.boxheight,"Green");
                }
                else if(this.maplayout[x][y]==3)
                {
                    var temp=new Rectangle(x*this.boxwitdh,y*this.boxheight,this.boxwitdh,this.boxheight,"Pink");
                }
                else if(this.maplayout[x][y]==5)
				{
                    var temp=new Rectangle(x*this.boxwitdh,y*this.boxheight,this.boxwitdh,this.boxheight,"Blue");
                
                }   
                else
                {
                    var temp=new Rectangle(x*this.boxwitdh,y*this.boxheight,this.boxwitdh,this.boxheight,"Black");
                }
                this.listofrectangle[x][y] = temp;
            }
        }

    }
	this.UpdateEnemy = function()
	{
	this.updateEnemy();
	}
    this.Update = function()
    {
		if(this.playerlocation.Update())
		{
		endAI(true);
		return true;
		}
		else
		{
		endAI(false);
        return false;
		}
    }
	this.DrawMap = function(context,a,b,witdh,height)
	{
		
        var x;
        var y;
        for(x=0;x<this.mapx;x++)
        {
            for(y=0;y<this.mapy;y++)
            {
                if(this.maplayout[x][y]==3)
                {
                    context.drawImage(this.wall, (a+(witdh*x)), (b+(height*y)), witdh, height);
                }
                else if(this.maplayout[x][y]==5)
                {
                    context.drawImage(this.endgoal, (a+(witdh*x)),(b+(height*y)), witdh, height);
                }
                else
                {
                    context.drawImage(this.floor, (a+(witdh*x)), (b+(height*y)), witdh, height);
                }
               // this.playerlocation.Draw(context);
            //this.listofrectangle[x][y].Draw(context,"Red");
            }
        }
	}
    this.Draw = function(context)
    {
        var x;
        var y;
        for(x=0;x<this.mapx;x++)
        {
            for(y=0;y<this.mapy;y++)
            {
                if(this.maplayout[x][y]==3)
                {
                    context.drawImage(this.wall, this.listofrectangle[x][y].getX(), this.listofrectangle[x][y].getY(), this.listofrectangle[x][y].getWidth(), this.listofrectangle[x][y].getHeight());
                }
                else if(this.maplayout[x][y]==5)
                {
                    context.drawImage(this.endgoal, this.listofrectangle[x][y].getX(), this.listofrectangle[x][y].getY(), this.listofrectangle[x][y].getWidth(), this.listofrectangle[x][y].getHeight());
                }
                else
                {
                    context.drawImage(this.floor, this.listofrectangle[x][y].getX(), this.listofrectangle[x][y].getY(), this.listofrectangle[x][y].getWidth(), this.listofrectangle[x][y].getHeight());
                }
                this.playerlocation.Draw(context);
            //this.listofrectangle[x][y].Draw(context,"Red");
            }
        }
 
 	
        this.drawEnemy(context);

    }
 
 
    this.movePlayerUp = function()
    {
        this.playerlocation.playerMoveUp();
    }
 
    this.movePlayerDown = function()
    {
        this.playerlocation.playerMoveDown();
    }
    this.movePlayerRight = function()
    {
        this.playerlocation.playerMoveRight();
    }
    this.movePlayerLeft = function()
    {
        this.playerlocation.playerMoveLeft();
    }
 
    this.updateEnemy = function()
    {

        var i=0;
        for(i=0;i<this.listenemy.length;i++)
        {
            var temp=this.listenemy[i];
            temp.Update();
        }
	
			
  
    }
    this.drawEnemy = function(context)
    {
        var i=0;
        var y=100;
        for(i=0;i<this.listenemy.length;i++)
        {
            var temp=this.listenemy[i];
            temp.Draw(context);
            y+=50;
        }
			this.checkIfDetected();
		
    }
    this.playerRestart = function()
    {
		//alert("SPOTTED");
        this.playerlocation= new Player(this.initplayerlocation.x,this.initplayerlocation.y,this.maplayout,this.player,this.light);;
    }
 
 
    this.checkIfDetected = function()
    {
        for(i=0;i<this.listenemy.length;i++)
        {
            if(this.listenemy[i].LightboxHit(this.playerlocation))
            {
                //alert("YELLOW");
                //this.RestartMap();
				return true;
			}
        }
		return false;
    }
	
	this.getDestination = function() {
	for (var y = 0; y < this.mapy; y++){
		for (var x = 0; x < this.mapx; x++){
			if (this.maplayout[x][y] == 5){
				var temp= new Point(x,y);
				
				return temp;
			}
		}
	}
	}
	
 
 
 
 
    this.RestartMap=function()
    {
	
        this.playerRestart();
        var i=0;
        for(i=0;i<this.listenemy.length;i++)
        {
            this.listenemy[i].restart();
        }
		initAI(this.playerlocation,this.listenemy,this.maplayout,this.getDestination());
    }
 
    this.addEnemy = function(enemy)
    {
        this.listenemy.push(enemy);
    }
	this.getPlayer = function()
	{
		return this.playerlocation;
	}
	this.getEnemy = function()
	{
	return this.listenemy;
	}
	this.getMapLayout = function()
	{
	return this.maplayout;
	}

}
