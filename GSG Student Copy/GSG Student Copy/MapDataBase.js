function MapDataBase(floor,player,wall,enemy,endgoal,light)
{
	this.floor=floor;
	this.player=player;
	this.wall=wall;
	this.enemy=enemy;
	this.endgoal=endgoal;
	this.light=light;
	this.boxwitdh=48;
	this.boxheight=34.4;
	this.mapx=20;
	this.mapy=20;
	this.ListofLevels = new Array();
	var lvllayout1= new Array(this.mapx);
	var i=0;
	for(i=0;i<this.mapx;i++)
	{
	 lvllayout1[i]=new Array(this.mapy);
	}
	this.creatingArray = function(x,y)
	{
	var i=0;
	var b=0;
	var something= new Array(x);
	for(i=0;i<x;i++)
	{
	 for(b=0;b<y;b++)
	 {
	  something[i]  = new Array(y);
	 }
	}
	
	return something;
	}
	//Level1
	Exam1(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	//Level2
	Exam2(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	//Level3
	Exam3(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	//Level4
	Exam4(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	//Level5
	Exam5(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
    //Level6
    Exam12(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
    //Level7
	Exam14(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	 //Level8
	Exam15(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	 //Level9
	Level10015(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	 //Level10
	Level10016(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	 //Level11
	Exam6(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
    //Level12
    Exam10(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	//Level13
	Exam9(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	 //Level14
	Exam8(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	 //Level15
	Exam11(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);		
	//Level16
	Exam7(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	

	/*

	Level10009(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	Level10010(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	Level10011(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	Level10014(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	Level10007(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	Level10015(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	Level10016(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

Level10008(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	//<==== Level1===>
	Level2(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

//	Level2(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//<==== Level2===>
	Level1(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//Level0(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//<==== Level3===>
	Level0(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//Level1(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//<==== Level4===>
	Level10001(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);


	//Level10003(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//<==== Level5===>	
	Level10005(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//Level14(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//<==== Level6===>
	Level10002(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//Level9999(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//<==== Level7===>
	Level5(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//Level6(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//<==== Level8===>
	Level3(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//Level10005(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//<==== Level9===>
	Level10000(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//Level10006(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//<==== Level10===>
	
	Level10003(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//Level12(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//<==== Level11===>
	Level9999(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//Level10002(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//<==== Level12===>
	Level6(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//Level10001(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//<==== Level13===>
	Level12(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//Level4(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//<==== Level14===>
	Level4(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//Level5(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//<==== Level15===>
	Level10004(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//<==== Level16===>
	Level11(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	
	//Level3(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//<==== Level17===>
	Level9(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	
	//Level11(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	
	//<==== Level18===>
	Level14(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

//	Level10000(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//<==== Level19===>
	Level10006(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);

	//Level9(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	
	//<==== Level20===>	
	Level8(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);
	//<==== Level21===>	
	Level10(this.ListofLevels,this.floor,this.player,this.wall,this.enemy,this.endgoal,this.light);


	*/

	//<----------------------------- Level 1 ----------------------------->

//<----------------------------- Level 5 ----------------------------->
/*
*/


	this.getLevel = function(num)
	{
	return this.ListofLevels[num];
	}
	this.getLength = function()
	{
	return this.ListofLevels.length;
	}
	
	
	
	

	

}
