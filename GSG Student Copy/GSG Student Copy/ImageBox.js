function ImageBox(hitbox,image)
{
this.hitbox=hitbox;
this.image=image;

this.getHitBox = function()
{
return this.hitbox;
}

this.Draw = function(context)
{
context.drawImage(this.image,this.hitbox.getX(),this.hitbox.getY(),this.hitbox.getWitdh(),this.hitbox.getHeight());
}
this.setImage = function(image2)
{
this.image=image;
}

}