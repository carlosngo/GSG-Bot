function Player(x,y,maplayout,player,light)
{
	this.flagmovement=-1;
    this.boxwitdh=48;
    this.boxheight=34.4;
    this.mapx=20;
    this.mapy=20;
    this.x=x;
    this.y=y;
    this.player=player;
    this.light=light;
    this.maplayout=maplayout;
    this.hitbox = new Rectangle(x*this.boxwitdh,y*this.boxheight,this.boxwitdh,this.boxheight,"Green");
	this.up= new Image();
	this.down= new Image();
	this.left= new Image();
	this.right= new Image();
	this.up.src="images/player1.fw.png";
	this.down.src="images/player3.fw.png";
	this.left.src="images/player2.fw.png";
	this.right.src="images/player.fw.png";
	this.currotate=0;
	
	this.plan=0;

	this.Restart = function()
	{
	this.flagmovement=-1;
	}
   this.Update = function()
    {
		switch(this.flagmovement)
		{
		case 1:this.playerMoveUp();this.flagmovement=-1;break;
		case 2:this.playerMoveDown();this.flagmovement=-1;break;
		case 3:this.playerMoveLeft();this.flagmovement=-1;break;
		case 4:this.playerMoveRight();this.flagmovement=-1;break;
		default:this.flagmovement=-1;
		}
		
        if(this.maplayout[this.x][this.y]==5)
        {
            return true;
        }
        return false;
		
    }

	this.MoveUp= function()
	{
		if(this.flagmovement==-1)
		{
		this.flagmovement=1;	
		return true;
		}
		return false;
	}
	this.MoveDown= function()
	{
		if(this.flagmovement==-1)
		{
			this.flagmovement=2;
			return true;
		}
		
		return  false;
		
			
	}
	this.MoveLeft= function()
	{
			if(this.flagmovement==-1)
			{
			this.flagmovement=3;
			return true;
			}
			
			return false;
			
	}
	this.MoveRight= function()
	{
			if(this.flagmovement==-1)
			{
			this.flagmovement=4;
			return true;
			}
			return false;
	}
	
    this.playerMoveUp = function()
    {
		this.currotate=0;
        // console.log("UP"+new Date().getTime());
		if(this.y-1>=0&&this.maplayout[this.x][this.y-1] !=3)
        {
			this.y--;
		
        }
    }
    this.playerMoveDown=function()
    {
	this.currotate=1;
	if(this.y+1<this.mapy&&this.maplayout[this.x][this.y+1] !=3)
        {
	
            this.y++;
	
        }
    }
    this.playerMoveLeft = function()
    {	
	this.currotate=2;		
		if(this.x-1>=0&&this.maplayout[this.x-1][this.y] !=3)
        {
            this.x--;
	
        }
    }
    this.playerMoveRight = function()
    {
	this.currotate=3;
		if(this.x+1<this.mapx&&this.maplayout[this.x+1][this.y] !=3)
        {
            this.x++;
	
        }
	
    }
	this.getY = function()
	{
	return this.y;
	}
	
	this.getX = function()
	{
	return this.x;
	}
    this.Draw = function(context)
    {
        this.hitbox.setX(this.x*this.boxwitdh);
        this.hitbox.setY(this.y*this.boxheight);
		//alert(this.curimg);
       
	switch(this.currotate)
	{
	 case 0:context.drawImage(this.up, this.hitbox.getX(), this.hitbox.getY(), this.hitbox.getWidth(), this.hitbox.getHeight());break;
	 case 1:context.drawImage(this.down, this.hitbox.getX(), this.hitbox.getY(), this.hitbox.getWidth(), this.hitbox.getHeight());break;
	 case 2:context.drawImage(this.left, this.hitbox.getX(), this.hitbox.getY(), this.hitbox.getWidth(), this.hitbox.getHeight());break;
	 case 3:context.drawImage(this.right, this.hitbox.getX(), this.hitbox.getY(), this.hitbox.getWidth(), this.hitbox.getHeight());break;

	 }
	
    }
	
	
	
}
