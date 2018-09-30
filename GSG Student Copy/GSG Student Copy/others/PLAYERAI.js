function THINK(player,enemys,maplayout,end)
{
    //Static Variables
    this.boxwitdh=48;
    this.boxheight=34.4;
    this.mapx=20;
    this.mapy=20;
	var i=random(0,4);
	switch(i)
	{
	case 0:
	if(checkIfPassable(maplayout,enemys,player.x,player.y-1))
	{
	player.MoveUp();
	break;
	}
	case 1:	
	if(checkIfPassable(maplayout,enemys,player.x,player.y+1))
	{
	player.MoveDown();
	break;
	}
	case 2:	
	if(checkIfPassable(maplayout,enemys,player.x-1,player.y))
	{
	player.MoveLeft();
	break;
	}
	case 3:	if(checkIfPassable(maplayout,enemys,player.x+1,player.y))
	{
	player.MoveRight();
	break;
	}
	}
	
}

function random(start,end)
{
    return Math.floor((Math.random()*end)+start);
}
function initAI(player,enemys,maplayout,end)
{
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
