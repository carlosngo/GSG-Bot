function LightBoxProperty(x,y,hitbox)
{
//Static Variables
var boxwitdh=48;
var boxheight=34.4;
var mapx=20;
var mapy=20;


	this.x=x;
	this.y=y;
	this.hitbox= hitbox;
	this.setX = function(x)
	{
	this.hitbox.setX(x);
	}
	
	this.setY = function(y)
	{
	this.hitbox.setY(y);
	}
	
	this.getX = function()
	{
	return this.hitbox.getX();
	}
	
	this.getY = function()
	{
	return this.hitbox.getY();
	}
	this.getWitdh = function()
	{
	return this.hitbox.getWitdh();
	}
	this.getHeight = function()
	{
	return this.hitbox.getHeight();
	}
	
}
