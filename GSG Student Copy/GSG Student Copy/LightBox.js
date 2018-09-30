function LightBox(x,y,maplayout) {
    this.light1=new Image();
    this.light2=new Image();
    this.light3=new Image();
    this.light4=new Image();
    this.light5=new Image();
    this.light1.src="images/YellowTile.fw.png";
    this.light2.src="images/yellowHalfTile2.fw.png";
    this.light3.src="images/yellowHalfTile3.fw.png";
    this.light4.src="images/yellowHalfTile.fw.png";
    this.light5.src="images/yellowHalfTile1.fw.png";
    this.x=x;
    this.y=y;
    this.maplayout=maplayout;
    this.currrotate=0;

    this.boxwitdh=48;
    this.boxheight=34.4;
    this.mapx=20;
    this.mapy=20;


    this.ListofArray = new Array();

    var i=this.x*this.boxwitdh;
    var z=this.y*this.boxheight;
    
	for(var x=0;x<6;x++)
    {
        var temp = new Rectangle(-100,-100,this.boxwitdh,this.boxheight,"Pink");
        var temp2  = new LightBoxProperty(-1,-1,temp);
		this.ListofArray.push(temp2);

    }
	
	
	this.checkifFound = function(player)
	{
		var temp=0;
		for(temp=0;temp<this.ListofArray.length;temp++)
		{
		var x=this.ListofArray[temp].x;
		var y=this.ListofArray[temp].y;
		if(x==player.x&&y==player.y)
		{
			return true;
		}
		}
		return false;
	}
    this.checkLight = function()
    {
	
        var temp=0;
        for(temp =0; temp<this.ListofArray.length;temp++)
        {
			var tempx=this.ListofArray[temp].x;
			var tempy=this.ListofArray[temp].y;
			//console.log(tempx+","+tempy+","+temp);
            if(temp==1)
            {
                if(!this.Passable(tempx,tempy))
                {
                    for(var temp2 =0;temp2<this.ListofArray.length;temp2++)
                    {
                        this.ListofArray[temp2].hitbox.setX(-100);
                        this.ListofArray[temp2].hitbox.setY(-100);
						this.ListofArray[temp2].x=-1;
						this.ListofArray[temp2].y=-1;
					}
                }
            }
			else if(temp==2)
			{
			if(!this.Passable(tempx,tempy))
			{
			            this.ListofArray[2].hitbox.setX(-100);
                        this.ListofArray[2].hitbox.setY(-100);
						this.ListofArray[2].x=-1;
						this.ListofArray[2].y=-1;
			            this.ListofArray[5].hitbox.setX(-100);
                        this.ListofArray[5].hitbox.setY(-100);
						this.ListofArray[5].x=-1;
						this.ListofArray[5].y=-1;
			
			}
			
			}
			else if(temp==0)
			{
				if(!this.Passable(tempx,tempy))
			{
			            this.ListofArray[0].hitbox.setX(-100);
                        this.ListofArray[0].hitbox.setY(-100);
						this.ListofArray[0].x=-1;
						this.ListofArray[0].y=-1;
			            this.ListofArray[3].hitbox.setX(-100);
                        this.ListofArray[3].hitbox.setY(-100);
						this.ListofArray[3].x=-1;
						this.ListofArray[3].y=-1;
			
			}
		
		
			}
			
			else if(temp==4)
			{
			     if(!this.Passable(tempx,tempy))
                {
                    for(var temp2 =3;temp2<this.ListofArray.length;temp2++)
                    {
                        this.ListofArray[temp2].hitbox.setX(-100);
                        this.ListofArray[temp2].hitbox.setY(-100);
						this.ListofArray[temp2].x=-1;
						this.ListofArray[temp2].y=-1;
					}
                }
           
			}
            else
            {
                if(!this.Passable(tempx,tempy))
                {
                    this.ListofArray[temp].setX(-100);
                    this.ListofArray[temp].setY(-100);
					this.ListofArray[temp].x=-1;
					this.ListofArray[temp].y=-1;
                }
            }
        }
    }

    this.moveUp = function(x,y)
    {
        this.currrotate=0;
        var i=x*this.boxwitdh;
        var z=y*this.boxheight;
		this.x=x;
		this.y=y;

       
        this.ListofArray[0].hitbox.setX(i-this.boxwitdh);
        this.ListofArray[0].hitbox.setY(z-this.boxheight);
		this.ListofArray[0].x=this.x-1;
		this.ListofArray[0].y=this.y-1;

        this.ListofArray[1].hitbox.setX(i);
        this.ListofArray[1].hitbox.setY(z-this.boxheight);
		this.ListofArray[1].y=this.y-1;
		this.ListofArray[1].x=this.x;

        this.ListofArray[2].hitbox.setX(i+this.boxwitdh);
        this.ListofArray[2].hitbox.setY(z-this.boxheight);
        this.ListofArray[2].x=this.x+1;
		this.ListofArray[2].y=this.y-1;
		
		this.ListofArray[3].hitbox.setX(i-this.boxwitdh);
        this.ListofArray[3].hitbox.setY(z-(this.boxheight*2));
        this.ListofArray[3].x=this.x-1;
		this.ListofArray[3].y=this.y-2;
		
		this.ListofArray[4].hitbox.setX(i);
        this.ListofArray[4].hitbox.setY(z-(this.boxheight*2));
		this.ListofArray[4].y=this.y-2;
		this.ListofArray[4].x=this.x;
	

		this.ListofArray[5].hitbox.setX(i+this.boxwitdh);
        this.ListofArray[5].hitbox.setY(z-(this.boxheight*2));
		this.ListofArray[5].x=this.x+1;
		this.ListofArray[5].y=this.y-2;
		
		this.checkLight();
    }

    this.moveDown = function(x,y)
    {
        this.currrotate=1;
        var i=x*this.boxwitdh;
        var z=y*this.boxheight;
		this.x=x;
		this.y=y;
	
        this.ListofArray[0].hitbox.setX(i-this.boxwitdh);
        this.ListofArray[0].hitbox.setY(z+this.boxheight);
		this.ListofArray[0].x=this.x-1;
		this.ListofArray[0].y=this.y+1;
		
        this.ListofArray[1].hitbox.setX(i);
        this.ListofArray[1].hitbox.setY(z+this.boxheight);
		this.ListofArray[1].y=this.y+1;
		this.ListofArray[1].x=this.x;
		
        this.ListofArray[2].hitbox.setX(i+this.boxwitdh);
        this.ListofArray[2].hitbox.setY(z+this.boxheight);
		this.ListofArray[2].y=this.y+1;
		this.ListofArray[2].x=this.x+1;
		
        this.ListofArray[3].hitbox.setX(i-this.boxwitdh);
        this.ListofArray[3].hitbox.setY(z+(this.boxheight*2));
		this.ListofArray[3].y=this.y+2;
		this.ListofArray[3].x=this.x-1;
		
        this.ListofArray[4].hitbox.setX(i);
        this.ListofArray[4].hitbox.setY(z+(this.boxheight*2));
		this.ListofArray[4].y=this.y+2;
		this.ListofArray[4].x=this.x;

        this.ListofArray[5].hitbox.setX(i+this.boxwitdh);
        this.ListofArray[5].hitbox.setY(z+(this.boxheight*2));
		this.ListofArray[5].y=this.y+2;
		this.ListofArray[5].x=this.x+1;
		
		this.checkLight();
	
    }

    this.moveLeft = function(x,y)
    {
        this.currrotate=2;
        var i=x*this.boxwitdh;
        var z=y*this.boxheight;

		this.x=x;
		this.y=y;

		
        this.ListofArray[0].hitbox.setX(i-this.boxwitdh);
        this.ListofArray[0].hitbox.setY(z-this.boxheight);
		this.ListofArray[0].x=this.x-1;
		this.ListofArray[0].y=this.y-1;
		
		this.ListofArray[1].hitbox.setX(i-this.boxwitdh);
        this.ListofArray[1].hitbox.setY(z);
        this.ListofArray[1].x=this.x-1;
		this.ListofArray[1].y=this.y;
		
		this.ListofArray[2].hitbox.setX(i-this.boxwitdh);
        this.ListofArray[2].hitbox.setY(z+this.boxheight);
        this.ListofArray[2].x=this.x-1;
		this.ListofArray[2].y=this.y+1;
		
		this.ListofArray[3].hitbox.setX(i-(this.boxwitdh*2));
        this.ListofArray[3].hitbox.setY(z-this.boxheight);
        this.ListofArray[3].x=this.x-2;
		this.ListofArray[3].y=this.y-1;
		
		this.ListofArray[4].hitbox.setX(i-(this.boxwitdh*2));
        this.ListofArray[4].hitbox.setY(z);
		this.ListofArray[4].x=this.x-2;
		this.ListofArray[4].y=this.y;
		
		
        this.ListofArray[5].hitbox.setX(i-(this.boxwitdh*2));
        this.ListofArray[5].hitbox.setY(z+this.boxheight);
		this.ListofArray[5].x=this.x-2;
		this.ListofArray[5].y=this.y+1;
		
		
		this.checkLight();
	


    }


    this.moveRight = function(x,y)
    {

        this.currrotate=3;
        var i=x*this.boxwitdh;
        var z=y*this.boxheight;
		this.x=x;
		this.y=y;

		
        this.ListofArray[0].hitbox.setX(i+this.boxwitdh);
        this.ListofArray[0].hitbox.setY(z-this.boxheight);
        this.ListofArray[0].x=this.x+1;
		this.ListofArray[0].y=this.y-1;
		
		this.ListofArray[1].hitbox.setX(i+this.boxwitdh);
        this.ListofArray[1].hitbox.setY(z);
        this.ListofArray[1].x=this.x+1;
		this.ListofArray[1].y=this.y;
		
		this.ListofArray[2].hitbox.setX(i+this.boxwitdh);
        this.ListofArray[2].hitbox.setY(z+this.boxheight);
        this.ListofArray[2].x=this.x+1;
		this.ListofArray[2].y=this.y+1;
		
		
		this.ListofArray[3].hitbox.setX(i+(this.boxwitdh*2));
        this.ListofArray[3].hitbox.setY(z-this.boxheight);
		this.ListofArray[3].x=this.x+2;
		this.ListofArray[3].y=this.y+1;
		
		
        this.ListofArray[4].hitbox.setX(i+(this.boxwitdh*2));
        this.ListofArray[4].hitbox.setY(z);
        this.ListofArray[4].x=this.x+2;
		this.ListofArray[4].y=this.y;
		
		this.ListofArray[5].hitbox.setX(i+(this.boxwitdh*2));
        this.ListofArray[5].hitbox.setY(z+this.boxheight);
		this.ListofArray[5].x=this.x+2;
		this.ListofArray[5].y=this.y+1;
		this.checkLight();
    }

    this.Draw = function(context)
    {
        if(this.currrotate==0)
        {
            context.drawImage(this.light5,this.ListofArray[0].hitbox.getX(),this.ListofArray[0].hitbox.getY(),this.ListofArray[0].hitbox.getWitdh(),this.ListofArray[0].hitbox.getHeight());
            context.drawImage(this.light4,this.ListofArray[2].hitbox.getX(),this.ListofArray[2].hitbox.getY(),this.ListofArray[2].hitbox.getWitdh(),this.ListofArray[2].hitbox.getHeight());
        }
        else if(this.currrotate==2)
        {
            context.drawImage(this.light3,this.ListofArray[0].hitbox.getX(),this.ListofArray[0].hitbox.getY(),this.ListofArray[0].hitbox.getWitdh(),this.ListofArray[0].hitbox.getHeight());
            context.drawImage(this.light4,this.ListofArray[2].hitbox.getX(),this.ListofArray[2].hitbox.getY(),this.ListofArray[2].hitbox.getWitdh(),this.ListofArray[2].hitbox.getHeight());
        }
        else if(this.currrotate==1)
        {
            context.drawImage(this.light2,this.ListofArray[0].hitbox.getX(),this.ListofArray[0].hitbox.getY(),this.ListofArray[0].hitbox.getWitdh(),this.ListofArray[0].hitbox.getHeight());
            context.drawImage(this.light3,this.ListofArray[2].hitbox.getX(),this.ListofArray[2].hitbox.getY(),this.ListofArray[2].hitbox.getWitdh(),this.ListofArray[2].hitbox.getHeight());
        }
        else
        {
            context.drawImage(this.light2,this.ListofArray[0].hitbox.getX(),this.ListofArray[0].hitbox.getY(),this.ListofArray[0].hitbox.getWitdh(),this.ListofArray[0].hitbox.getHeight());
            context.drawImage(this.light5,this.ListofArray[2].hitbox.getX(),this.ListofArray[2].hitbox.getY(),this.ListofArray[2].hitbox.getWitdh(),this.ListofArray[2].hitbox.getHeight());
        }
	
        //alert("ENTER");
        var i=0;
        for(i=0;i<this.ListofArray.length;i++)
        {
			
            if(i!=0&&i!=2)
            {
				context.drawImage(this.light1,this.ListofArray[i].hitbox.getX(),this.ListofArray[i].hitbox.getY(),this.ListofArray[i].hitbox.getWitdh(),this.ListofArray[i].hitbox.getHeight());
            }

        }
	
    }
	this.checkIfOverlap = function(x,y)
	{
	var i=0;
		for(i=0;i<this.ListofArray.lenght;i++)
		{
		if(this.ListofArray[i].x==x&&this.ListofArray[i].y==y)
		return true;
		
		
		}
		return false;
	}
	
	this.restart = function()
	{
		var i=0;
		for(i=0;i<this.ListofArray.length;i++)
		{
		 this.ListofArray[i].setX(-100);
		 this.ListofArray[i].setY(-100);
		 this.ListofArray[i].x=-1;
		 this.ListofArray[i].y=-1;
		}
	}

    this.Passable = function(x,y)
    {
	
        if(x>=0&&x<this.mapx&&y>=0&&y<this.mapy&&this.maplayout[x][y]!=3)
        {
		//console.log(x+","+y);
		return true;
        }
        else
        {
            return false;
        }
    }






}