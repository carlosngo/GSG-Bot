function Level10011(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout10011=[
[3,0,0,3,0,0,0,3,3,3,3,3,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,1,3,3,5,0,3,0,0,3,0,3,0],
[0,0,3,0,0,3,0,0,0,3,3,3,3,3,3,0,0,0,3,0],
[3,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0],
[0,0,0,3,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0],
[0,0,3,0,0,3,0,0,0,3,3,0,0,0,3,3,3,3,0,0],
[0,0,0,0,0,3,0,3,3,3,3,0,0,3,3,0,0,0,3,0],
[3,3,3,3,3,0,0,0,0,3,3,0,3,0,0,0,3,0,0,3],
[3,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,3,0,0,3],
[3,0,3,0,0,3,3,3,3,3,3,0,0,3,3,3,0,0,0,3],
[3,0,3,0,0,3,0,0,0,3,3,0,0,3,0,0,0,0,0,3],
[3,0,0,0,3,3,0,3,0,3,3,0,3,0,0,0,0,3,3,3],
[3,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0,3,0,0,3],
[0,3,0,0,0,0,0,3,0,3,3,0,0,0,3,3,0,0,0,0],
[0,0,3,0,0,0,3,0,0,3,3,0,0,3,0,0,0,3,0,0],
[0,0,0,3,0,0,3,0,0,3,3,0,3,3,0,0,3,0,0,0],
[0,3,0,0,3,3,3,0,0,3,3,0,0,0,0,3,0,0,0,0],
[0,3,3,0,0,0,0,0,0,3,3,0,0,0,3,0,0,3,3,0],
[0,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,3,3,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

];
var map10011 = new map(lvllayout10011,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map10011);
}