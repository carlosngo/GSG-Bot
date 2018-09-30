function ENEMY2(x,y,waypoints,maplayout,light,enemy)
{
    //Static Variables
    this.boxwitdh=48;
    this.boxheight=34.4;
    this.mapx=20;
    this.mapy=20;
    //End Varaibles
	this.rotation=0;
	
	this.currentpoint=0;
    //images
    this.light=light;
    this.enemy=enemy;
    //images

	this.imageup =new Image();
	this.imagedown = new Image();
	this.imageleft= new Image();
	this.imageright = new Image();
	this.visited=new Array();
	
	this.imageup.src="images/BlueTile2.fw2.png";
	this.imagedown.src="images/BlueTile.fw.png";
	this.imageleft.src="images/BlueTile1.fw.png";
	this.imageright.src="images/BlueTile3.fw.png";
    this.maplayout=maplayout;
    this.waypoints=waypoints;
	var i=0;

    this.targetpoints= new Point(-1,-1);
    this.hitbox=new Rectangle(x*this.boxwitdh,y*this.boxheight,this.boxwitdh,this.boxheight,"Red");
	this.initalx=x;
	this.initaly=y;
    this.initalposition = new Rectangle(x*this.boxwitdh,y*this.boxheight,this.boxwitdh,this.boxheight,"Red");

    this.x=x;
    this.y=y;

    this.pathed= new Array();
    this.debug="";
    this.visited=new Array();
    var ctr=0;

    this.Light = new LightBox(this.x,this.y,this.maplayout);

    this.CheckIfPassable = function(x,y)
    {
	
        if(x>this.mapx-1||x<0)
            return false;
	
        if(y>this.mapy-1||y<0)
            return false;
	
	
        if(this.maplayout[x][y]==3)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
	this.checkIfOverlap = function(x,y)
	{
	 if(this.x==x&&this.y==y)
	 return true;
	 
	 if(this.Light.checkIfOverlap(x,y))
	 return true;
	 
	 
	 return false
	}
    this.restart = function()
    {
		this.x=this.initalx;
		this.y=this.initaly;
        this.hitbox = new Rectangle(this.initalposition.getX(),this.initalposition.getY(),this.boxwitdh,this.boxheight,"Red");
		this.currentpoint=0;
		this.Light.restart();
		ctr=this.currentpoint;
		if(this.waypoints.length<=this.currentpoint)
		{
			this.currentpoint=0;
		}
		var temp = this.waypoints[ctr];	
		this.pathed=this.findPath(temp.getX(),temp.getY());
    }
	this.restartWaypoints = function()
	{
	var i=0;
	for(i=0;i<this.waypoints.length;i++)
	{
	this.visited.push(new Point(this.waypoints[i].getX(),this.waypoints[i].getY()));
	}
	}
 
 
 
    this.LightboxHit = function(player)
    {
		if( this.Light.checkifFound(player)||(player.x==this.x&&player.y==this.y))
		return true;
		
        return false;
    }
 
 
    this.Draw = function(context)
    {
        this.hitbox.setX(this.x*this.boxwitdh);
        this.hitbox.setY(this.y*this.boxheight);
        //this.hitbox.Draw(context,"Red");
		
		switch(this.rotation)
		{
        case 0:context.drawImage(this.imageup,this.hitbox.getX(),this.hitbox.getY(),this.hitbox.getWidth(),this.hitbox.getHeight());break;
		case 1:context.drawImage(this.imagedown,this.hitbox.getX(),this.hitbox.getY(),this.hitbox.getWidth(),this.hitbox.getHeight());break;
        case 2:context.drawImage(this.imageleft,this.hitbox.getX(),this.hitbox.getY(),this.hitbox.getWidth(),this.hitbox.getHeight());break;
        case 3:context.drawImage(this.imageright,this.hitbox.getX(),this.hitbox.getY(),this.hitbox.getWidth(),this.hitbox.getHeight());break;
              
	   }
		this.Light.Draw(context);
        var i=0;
	
	
    }
 
 
    this.PathtoString=function(list)
    {
        var word="";
        var i=0;
        for(i=0;i<list.length;i++)
        {

            word+="? "+list.getX()+","+list.getY();
        }

        return word;
    }
  
    this.Update = function()
    {
		/*
		if(this.visited.length==0)
			{
			this.restartWaypoints();
			}
		*/
        if(this.pathed.length<=0)
        {
          
            //ctr=this.random(0,this.visited.length);
			ctr=this.currentpoint;
			this.currentpoint++;
			if(this.waypoints.length<=this.currentpoint)
			{
			this.currentpoint=0;
			}
			var temp = this.waypoints[ctr];	
			this.pathed=this.findPath(temp.x,temp.y);
			//this.visited.splice(ctr,1);
		
	
        }
        else 
        {
            var first=this.pathed[this.pathed.length-1];
            this.moving(first);
            var index=this.pathed.indexOf(first);
            this.pathed.splice(index,1);
        }
	

    }
 
 
    this.checkifContain = function(list,item)
    {
        var i=0;
        for(i=0;i<list.length;i++)
        {
            var temp=list[i];
            if(temp.getX()==item.getX()&&temp.getY()==item.getY())
            {
                return true;
            }
        }
        return false;
    }
 
 
    this.random= function(start,end)
    {
        return Math.floor((Math.random()*end)+start);
    }
	this.checkifSpotted = function(x,y)
	{
		if(this.Light.checkifFound(x,y))
		return true;
		
		if(this.x==x&&this.y==y)
		return true;
		
		return false;
	}

    this.findPath = function(x,y)
    {

        this.visited = new Array();
        var nCtr=1;
        var found=false;
        var path=new Array();
        var x1=this.x;
        var y1=this.y;
        var start=new Node(x1,y1,0 , null);
        var end=null;
        path.push(start);
        while(path.length>0)
        {
				
			
            var curr = this.getBest(path, x, y);
			
            if(curr.getX()==x && curr.getY()==y)
            {
                found=true;
                end=curr;
                break;
            }
            //top
            if(this.CheckIfPassable(curr.getX(), curr.getY()-1))
            {
                var top=new Node(curr.getX(),curr.getY()-1,curr.getCurrCost()+ 1, curr);
                if(!this.checkifContain(this.visited,top))
                {
                    path=this.exploreNode(path, top);
                    this.visited.push(top);
                }
            }
            //right
            if(this.CheckIfPassable(curr.getX()+1, curr.getY()))
            {
                var right=new Node(curr.getX()+1,curr.getY(),curr.getCurrCost()+ 1,curr);
                if(!this.checkifContain(this.visited,right))
                {
                    path=this.exploreNode(path, right);
					
                    this.visited.push(right);
                }
            }
            //bottom
            if(this.CheckIfPassable(curr.getX(), curr.getY()+1) )
            {
                var bottom=new Node(curr.getX(),curr.getY()+1,curr.getCurrCost()+ 1,curr);
                if(!this.checkifContain(this.visited,bottom))
                {
                    path=this.exploreNode(path, bottom);
                    this.visited.push(bottom);
                }
            }
            //left
            if(this.CheckIfPassable(curr.getX()-1, curr.getY()))
            {
                var left=new Node(curr.getX()-1,curr.getY(),curr.getCurrCost()+ 1,curr);
                if(!this.checkifContain(this.visited,left))
                {
                    path=this.exploreNode(path, left);
							
                    this.visited.push(left);
                }
            }
            this.visited.push(curr);
            var i=path.indexOf(curr);
            path.splice(i,1);
     
        }
        //System.out.println("A* explored "+nCtr+" nodes");
        if(found)
        {
            var shortestPath=new Array();
            while(end.getParent()!=null)
            {
                shortestPath.push(new Point(end.getX(),end.getY()));
                end=end.getParent();
            }
            return shortestPath;
        }
        else
            return null;	
    }
	
    this.exploreNode = function(searchSpace,trialNode)
    {
        var i=0;
        for(i=0;i<searchSpace.length;i++)
        {
            var curr=searchSpace[i];
               
            if(curr.getX()==trialNode.getX() && curr.getY()==trialNode.getY())
            {
                searchSpace.splice(i,1);
            }
        }
        searchSpace.push(trialNode);
        return searchSpace;
    }

		
    this.getBest = function(searchSpace,targetX, targetY)
    {
        var best=searchSpace[0];
        var bestScore=searchSpace[0].getCurrCost()+searchSpace[0].getHeuristic(targetX, targetY);
        var i=0;
        for(i=0;i<searchSpace.length;i++)
        {
            var n=searchSpace[i];
            if(n.getCurrCost()+n.getHeuristic(targetX, targetY)<bestScore)
            {
                bestScore=n.getCurrCost()+n.getHeuristic(targetX, targetY);
                best=n;
            }
        }
        return best;
    }
		
    this.moving = function(amp)
    {
		
        var temp = amp;
		
        var x=this.x;
        var y=this.y;
		
        if(x>temp.x)
            this.moveLeft();
        else
        if(x<temp.x)
            this.moveRight();
        else
        if(y>temp.y)
            this.moveUp();
        else
        if(y<temp.y)
            this.moveDown();
	
		
    }
	this.getFacing = function()
	{
	return this.rotation;
	}
	
	this.getWayPoints = function()
	{
	return this.waypoints;
	}
    this.moveUp = function()
    {
        /* this.hitbox.offSet(0,-this.boxheight);
	 var x=this.hitbox.getX();
	 var y=this.hitbox.getY();
	 var z=Math.floor(x/this.boxwitdh);
	 var i=Math.floor(y/this.boxheight);
*/
	this.rotation=0;
        if(this.y-1>=0&&this.CheckIfPassable(this.x,this.y-1))
        {
	
            this.y--;
            this.Light.moveUp(this.x,this.y);
        }
	 
    }
	
    this.moveDown = function()
    {3
	this.rotation=1;
        if(this.y+1<this.mapy&&this.CheckIfPassable(this.x,this.y+1))
        {
            this.y++;

            this.Light.moveDown(this.x,this.y);
        }
	 
    }
	
    this.moveLeft = function()
    {
	this.rotation=2;
        if(this.x-1>=0&&this.CheckIfPassable(this.x-1,this.y))
        {
            this.x--;

            this.Light.moveLeft(this.x,this.y);
        }
	
	 
    }
	
    this.moveRight = function()
    {
	this.rotation=3;
        if(this.x+1<this.mapx&&this.CheckIfPassable(this.x+1,this.y))
        {
            this.x++;

            this.Light.moveRight(this.x,this.y);

        }
    }
	this.getX = function()
	{
	return this.x;
	}
	this.getY = function()
	{
	return this.y;
	}
	

	
	
}
