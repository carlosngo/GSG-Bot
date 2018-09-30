function Level1(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout1=[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0],
[0,0,3,5,0,3,0,0,0,0,0,0,0,0,0,0,3,0,0,0],
[0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,3,0,0,0],
[0,0,3,0,0,3,0,0,0,0,0,0,0,3,0,0,3,0,0,0],
[0,0,3,0,0,3,0,0,0,0,0,0,0,3,0,0,3,0,0,0],
[0,0,3,0,0,3,0,0,0,0,0,0,0,3,0,0,3,0,0,0],
[0,0,3,0,0,3,0,0,0,0,0,0,0,3,0,0,3,0,0,0],
[0,0,3,0,0,3,0,0,0,0,0,0,0,3,0,0,3,0,0,0],
[0,0,3,0,0,3,0,0,0,0,0,0,0,3,0,0,3,0,0,0],
[0,0,3,0,0,3,0,0,0,0,0,0,0,3,0,0,3,0,0,0],
[0,0,3,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,0,0],
[0,0,3,0,0,0,0,0,0,0,0,0,0,3,0,1,3,0,0,0],
[0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

];
var map1 = new map(lvllayout1,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map1);

 var waypoint10036 = new Array();
 waypoint10036.push(new Point(6,6));
 waypoint10036.push(new Point(6,12));
 var enemy10036 = new ENEMY2(6,6,waypoint10036,lvllayout1,light,enemy);
 map1.addEnemy(enemy10036);
 var waypoint10037 = new Array();
 waypoint10037.push(new Point(11,6));
 waypoint10037.push(new Point(11,12));
 var enemy10037 = new ENEMY2(11,6,waypoint10037,lvllayout1,light,enemy);
 map1.addEnemy(enemy10037);
 var waypoint10038 = new Array();
 waypoint10038.push(new Point(4,9));
 waypoint10038.push(new Point(14,9));
 var enemy10038 = new ENEMY2(4,9,waypoint10038,lvllayout1,light,enemy);
 map1.addEnemy(enemy10038);
 }