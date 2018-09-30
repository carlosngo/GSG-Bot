function textfactory(size,font,color)
{
	this.font=font;
	this.size=size;
	this.color=color;
	this.setColor= function(color)
	{
	this.color=color;
	}
	this.setFont= function(font)
	{
	this.font=font;
	}
	this.getFont=function()
	{
	return this.font;cas
	}
	this.getSize= function()
	{
	return this.size;
	}
	
	this.write= function(words,x,y,bold,context)
	{
	context.fillStyle=this.color;

	 if(bold=="true")
	 {
	 context.font = "bold "+this.size+" "+this.font+" ";	  
	 }
	 else
	 {
	 	 context.font = this.size+" "+this.font+" ";	
	 }
	 
	 context.fillText(words,x,y);
	}
}
