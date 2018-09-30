function Exam8(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout8=[
[0,0,3,3,3,0,0,0,3,3,3,3,3,3,3,3,3,0,0,0],
[0,3,0,0,0,3,0,3,5,0,0,0,0,0,0,0,0,3,0,0],
[0,3,0,0,0,0,3,0,3,3,3,3,3,3,3,0,0,0,3,0],
[0,3,0,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,3,0],
[0,3,0,0,0,0,0,0,3,3,3,0,0,0,3,0,0,0,3,0],
[0,3,0,0,0,3,0,0,0,0,0,3,0,0,3,0,0,0,3,0],
[0,3,0,0,0,3,3,3,0,0,0,3,0,0,3,0,0,0,3,0],
[0,3,0,0,0,3,0,0,3,0,0,3,0,0,3,0,0,0,3,0],
[0,3,0,0,0,3,0,0,3,0,0,3,0,0,3,0,0,0,3,0],
[0,3,0,0,0,3,0,0,3,0,0,3,0,0,3,0,0,0,3,0],
[0,3,0,0,0,3,0,0,3,0,0,3,0,0,3,0,0,0,3,0],
[0,3,0,0,0,3,0,0,3,0,0,3,0,0,3,0,0,0,3,0],
[0,3,0,0,0,3,0,0,3,0,0,0,3,3,0,0,0,0,3,0],
[0,3,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,3,0],
[0,3,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,3,0],
[0,3,1,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,3,0],
[0,0,3,3,3,0,0,0,0,3,3,3,3,3,3,3,3,3,0,0],
[3,3,3,3,0,0,0,0,0,3,3,3,0,3,0,3,3,3,0,3],
[0,0,3,0,0,3,3,3,0,3,0,3,0,3,0,3,0,3,0,3],
[3,3,3,3,0,0,0,0,0,3,0,3,3,3,0,3,0,3,3,3],

];
var map8 = new map(lvllayout8,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map8);

 var waypoint10225 = new Array();
 waypoint10225.push(new Point(2,2));
 waypoint10225.push(new Point(12,2));
 var enemy10225 = new ENEMY2(2,2,waypoint10225,lvllayout8,light,enemy);
 map8.addEnemy(enemy10225);
 var waypoint10226 = new Array();
 waypoint10226.push(new Point(7,10));
 waypoint10226.push(new Point(15,10));
 var enemy10226 = new ENEMY2(7,10,waypoint10226,lvllayout8,light,enemy);
 map8.addEnemy(enemy10226);
 var waypoint10227 = new Array();
 waypoint10227.push(new Point(15,17));
 waypoint10227.push(new Point(15,9));
 var enemy10227 = new ENEMY2(15,17,waypoint10227,lvllayout8,light,enemy);
 map8.addEnemy(enemy10227);
 var waypoint10228 = new Array();
 waypoint10228.push(new Point(1,15));
 waypoint10228.push(new Point(15,15));
 var enemy10228 = new ENEMY2(1,15,waypoint10228,lvllayout8,light,enemy);
 map8.addEnemy(enemy10228);
}