var listx= new Array();
var listy= new Array();
var goal;
var listofvisited= new Array();
var listofnodes = new Array();
var enemys;
function THINK(player,enemys,maplayout,end)
{
	enemys=enemys;
    //Static Variables
    this.boxwitdh=48;
    this.boxheight=34.4;
    this.mapx=20;
    this.mapy=20;
	getNextBestMove(player,enemys,end,maplayout);
}
function checkIfValid(x,y)
{
	if(x>19||x<0)
	return false;
	if(y>19||y<0)
	return false;
	return true;
}
function ifindanger(enemys,player)
{
	var closes=999;
	for(var i=0;i<enemys.length;i++)
	{
		var dis=getDistance(player.x,player.y,enemys[i].getX(),enemys[i].getY());
		if(closes>dis)
		{
		closes=dis;
		}
	}

	if(closes<3)
	return true;
	
	return false;
}


function quickreaction(maplayout,enemys,x,y,player)
{
		var closes=999;
		var temp=-1;
		var e1;
	for(var i=0;i<enemys.length;i++)
	{
	
		var dis=getDistance(player.x,player.y,enemys[i].getX(),enemys[i].getY());
		if(closes>dis)
		{
		closes=dis;
		e1=enemys[i];
		}
	}
	closes=-1;
	if(checkIfPassable(maplayout,enemys,x-1,y))
	{
	var dis=getDistance(player.x-1,player.y,e1.getX(),e1.getY());
		if(closes<dis)
		{
		closes=dis;
		temp=0;
		}
//		player.MoveLeft();

	}
	else if(checkIfPassable(maplayout,enemys,x+1,y))
	{
	//	player.MoveRight();
		var dis=getDistance(player.x+1,player.y,e1.getX(),e1.getY());
		if(closes<dis)
		{
		closes=dis;
		temp=1;
		}
	
	}
	else if(checkIfPassable(maplayout,enemys,x,y-1))
	{
//		player.MoveUp();
	var dis=getDistance(player.x,player.y-1,e1.getX(),e1.getY());
		if(closes<dis)
		{
		closes=dis;
		temp=2;
		}
	}
	else if(checkIfPassable(maplayout,enemys,x,y+1))
	{
		//player.MoveDown();
		var dis=getDistance(player.x,player.y+1,e1.getX(),e1.getY());
		if(closes<dis)
		{
		closes=dis;
		temp=3;
		}
	}
	
	switch(temp)
	{
	case 0:player.MoveLeft();break;
	case 1:player.MoveRight();break;
	case 2:player.MoveUp();break;
	case 3:player.MoveDown();break;
	}
}


function getNextBestMove(player,enemys,goal,maplayout)
{
	if(ifindanger(enemys,player))
	{
	console.log("Hello");
		quickreaction(maplayout,enemys,player.getX(),player.getY(),player)
	}
	else
	{
		//console.writeln(pathfind(player.getX(),player.getY(),goal.getX(),goal.getY(),maplayout));
	}
	
}
function pathfind(x,y,x1,y1,maplayout)
{
	if(x==x1&&y==y1)
	{
		return true;
	}
	else
	{
		if(checkIfPassable(maplayout,enemys,x-1,y))
		{
			return pathfind(x-1,y,x1,y1,maplayout);
		}
		
		if(checkIfPassable(maplayout,enemys,x+1,y))
		{
			return pathfind(x+1,y,x1,y1,maplayout);
		}
		
		if(checkIfPassable(maplayout,enemys,x,y-1))
		{
			return pathfind(x,y-1,x1,y1,maplayout);
		}
		
		if(checkIfPassable(maplayout,enemys,x,y+1))
		{
			return pathfind(x,y+1,x1,y1,maplayout);
		}
	}
	return false;
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
