function Level10009(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout10009=[
[1,0,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,3,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[3,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,3],
[3,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,3],
[3,0,3,0,0,3,0,3,3,3,3,3,3,0,3,0,0,3,0,3],
[3,0,3,0,3,3,0,3,0,0,0,0,3,0,3,3,3,3,0,3],
[3,0,3,0,0,0,0,3,0,3,0,0,3,0,0,0,0,3,0,3],
[3,0,3,0,0,0,0,3,0,0,3,0,3,0,0,0,0,3,0,3],
[3,0,3,0,3,3,0,3,0,0,3,0,3,0,3,3,0,3,0,3],
[0,0,3,0,0,0,0,3,0,0,3,0,0,0,0,0,0,3,0,0],
[0,0,3,0,0,0,0,3,0,5,3,0,3,0,0,0,0,3,0,0],
[3,0,3,0,3,3,0,3,0,0,3,0,3,0,3,3,0,3,0,3],
[3,0,3,0,0,0,0,3,0,0,3,0,3,0,0,0,0,3,0,3],
[3,0,3,0,0,0,0,3,0,3,0,0,3,0,0,0,0,3,0,3],
[3,0,3,3,3,3,0,3,0,0,0,0,3,0,3,3,0,3,0,3],
[3,0,3,0,0,3,0,3,3,3,3,3,3,0,3,0,0,3,0,3],
[3,0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,3],
[3,0,3,3,3,3,3,3,3,3,3,3,3,3,3,0,3,3,0,3],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,3,0,0],

];
var map10009 = new map(lvllayout10009,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map10009);
}