function Point(x,y)
{
this.x=x;
this.y=y;
	this.setX= function(newX)
	{
	this.x=newX;
	}
	this.X = function()
	{
	return this.x;
	}
	this.Y = function()
	{
	return this.y;
	}
	this.getX = function()
	{
	return this.x;
	}
	this.getY = function()
	{
	return this.y;
	}
	this.toString = function()
	{
	return ""+this.x+" ," +this.y;
	}
}
