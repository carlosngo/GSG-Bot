var listx= new Array();
var listy= new Array();
var mapdistance=new Array(20);
var goal;
function THINK(player,enemys,maplayout,end)
{
	
    //Static Variables
    this.boxwitdh=48;
    this.boxheight=34.4;
    this.mapx=20;
    this.mapy=20;
	UpdateScores(player,maplayout,enemys);
	getNextBestMove(player);
}
function checkIfValid(x,y)
{
	if(x>19||x<0)
	return false;
	if(y>19||y<0)
	return false;
	return true;
}
function getNextBestMove(player)
{
	var best=99999999;
	var cur=-1;
;
	if(player.flagmovement==-1)
	{
	listx.push(player.x);
	listy.push(player.y);
	if(checkIfValid(player.x-1,player.y))
	{
		if(best>mapdistance[player.x-1][player.y])
		{
			best=mapdistance[player.x-1][player.y];
			cur=0;
		}
		else
		{
		
		}
	}
	if(checkIfValid(player.x+1,player.y))
	{
		if(best>mapdistance[player.x+1][player.y])
		{
			best=mapdistance[player.x+1][player.y];
			cur=1;
		}
		else
		{

		}
	}
	if(checkIfValid(player.x,player.y-1))
	{
		if(best>mapdistance[player.x][player.y-1])
		{
			best=mapdistance[player.x][player.y-1];
			cur=2;
		}
		else
		{
		
		}
	}
	if(checkIfValid(player.x,player.y+1))
	{
		if(best>mapdistance[player.x][player.y+1])
		{
			best=mapdistance[player.x][player.y+1];
			cur=3;
		}
		else
		{
		
		}
	}
	console.log(cur);
	switch(cur)
	{
	case 0:

	player.MoveLeft();
	break;
	case 1:

	player.MoveRight();
	break;
	case 2:
	listx.push(player.x);
	listy.push(player.y-1);
	player.MoveUp();
	break;
	case 3:

	player.MoveDown();
	break;
	}
	
	
	}
	
	
	
	
}
function countinstance(x,y)
{
 var i=0;
 var ctr=0;
	for(i=0;i<listx.length;i++)
	{
		if(listx[i]==x&&listy[i]==y)
		ctr++;
	}
	return ctr;
}

function UpdateScores(player,maplayout,enemies)
{
	 var x=0;
	 var y=0;
	for(x=0;x<20;x++)
	{
		for(y=0;y<20;y++)
		{
			if(!checkIfPassable(maplayout,enemies,x,y))
			{
			mapdistance[x][y]=999999+getDistance(goal.x,goal.y,x,y);
			}
			else if(!ifinlist(x,y))
			{
			mapdistance[x][y]=getDistance(goal.x,goal.y,x,y)/*+(9999*checkDanger(maplayout,enemies,x,y));
			*/
			}
			else
			{
			mapdistance[x][y]=getDistance(goal.x,goal.y,x,y)+(9999*countinstance(x,y));
			
			}
		}
	}

}
function checkDanger(maplayout,enemies,x,y)
{
	var ctr=0;
	if(!checkIfPassable(maplayout,enemies,x-1,y))
	{
	ctr++;
	}
	if(!checkIfPassable(maplayout,enemies,x+1,y))
	{
	ctr++;
	}
	if(!checkIfPassable(maplayout,enemies,x,y-1))
	{
	ctr++;
	}
	if(!checkIfPassable(maplayout,enemies,x,y+1))
	{
	ctr++;
	}
	return ctr;
}
function getDistance(x1,y1,x2,y2)
{
	var a=x1-x2;
	a=a*a;
	var b=y1-y2;
	b=b*b;
	var c=a+b;
	return Math.sqrt(c);
	
	
}
function ifinlist(x,y)
{
	 var a=0;
	 var b=0;
	 var ctr=0;
	for(a=0;a<listx.length;a++)
	{
		if(listx[a]==x&&listy[a]==y)
		ctr++;
	}
	return ctr;
}
function random(start,end)
{
    return Math.floor((Math.random()*end)+start);
}
function initAI(player,enemys,maplayout,end)
{
	var i=0;
	for(i=0;i<20;i++)
	{
	mapdistance[i] = new Array(20);
	}
	listx = new Array();
	listy = new Array();
	goal=end;
}
function checkIfPassable(maplayout,enemys,x,y)
{
	var i=0;
	var a;
	if((x<mapx&&x>=0)&&(y<mapy&&y>=0))
	{
	if(maplayout[x][y]==3)
	return false;
	
	for(i=0;i<enemys.length;i++)
	{
		a=enemys[i].checkifSpotted(x,y)
		if(a)
		{
		console.log("SPOTTED");
		return false;
		}
	}
	}
	return true;
}
function endAI(win)
{


}
