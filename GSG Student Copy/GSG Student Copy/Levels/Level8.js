function Level8(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout8=[
[3,0,0,0,0,0,0,0,3,0,0,0,3,3,0,0,0,0,3,0],
[0,0,3,3,3,0,3,0,3,0,3,0,3,0,0,3,0,3,1,0],
[0,3,0,0,0,3,0,0,3,0,3,0,0,0,3,0,0,3,3,0],
[0,3,0,3,0,0,3,0,0,0,3,0,0,3,0,0,3,5,3,0],
[0,3,0,0,3,0,0,3,0,3,0,0,3,0,0,3,0,0,3,0],
[0,0,3,0,0,3,0,0,3,0,0,3,0,0,3,0,0,3,0,0],
[3,0,0,3,0,0,3,0,0,3,3,0,0,3,0,0,3,0,0,3],
[0,0,0,0,3,0,0,3,0,0,0,0,3,0,0,3,3,3,0,0],
[0,3,3,3,3,3,0,0,3,0,0,3,0,0,3,0,0,0,0,0],
[0,0,0,0,0,0,3,0,0,3,3,0,0,3,0,0,3,3,3,3],
[0,0,0,3,0,0,3,0,0,3,3,0,0,3,0,0,0,0,0,0],
[0,0,3,0,0,3,0,0,3,0,0,3,0,0,3,3,3,3,3,0],
[0,3,0,0,3,0,0,3,0,0,0,0,3,0,0,3,0,3,0,0],
[3,0,0,3,0,0,3,0,0,3,3,0,0,3,0,0,3,0,0,3],
[0,0,3,0,0,3,0,0,3,0,3,3,0,0,3,0,0,3,0,0],
[0,3,0,0,3,0,0,3,0,0,3,0,3,0,0,3,0,0,3,0],
[0,3,0,3,0,0,3,0,0,0,3,0,0,3,0,0,3,0,3,0],
[0,3,0,0,0,3,0,0,3,0,3,0,0,0,3,0,0,0,3,0],
[0,0,3,3,3,3,3,0,3,0,3,0,3,0,0,3,3,3,0,0],
[3,0,0,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,0],

];
var map8 = new map(lvllayout8,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map8);
 
 var waypoint10124 = new Array();
 waypoint10124.push(new Point(6,17));
 waypoint10124.push(new Point(6,18));
 waypoint10124.push(new Point(7,18));
 waypoint10124.push(new Point(7,19));
 waypoint10124.push(new Point(8,19));
 waypoint10124.push(new Point(8,15));
 waypoint10124.push(new Point(10,14));
 waypoint10124.push(new Point(10,19));
 waypoint10124.push(new Point(12,19));
 waypoint10124.push(new Point(13,17));
 var enemy10124 = new ENEMY2(6,17,waypoint10124,lvllayout8,light,enemy);
 map8.addEnemy(enemy10124);
 var waypoint10125 = new Array();
 waypoint10125.push(new Point(19,19));
 waypoint10125.push(new Point(19,13));
 var enemy10125 = new ENEMY2(19,19,waypoint10125,lvllayout8,light,enemy);
 map8.addEnemy(enemy10125);
 var waypoint10126 = new Array(); 
 waypoint10126.push(new Point(14,9));
 waypoint10126.push(new Point(19,9));
 waypoint10126.push(new Point(15,11));
 waypoint10126.push(new Point(19,11));
 var enemy10126 = new ENEMY2(14,9,waypoint10126,lvllayout8,light,enemy);
 map8.addEnemy(enemy10126);
 var waypoint10127 = new Array();
 waypoint10127.push(new Point(17,6));
 waypoint10127.push(new Point(19,7));
 waypoint10127.push(new Point(19,1));
 var enemy10127 = new ENEMY2(17,6,waypoint10127,lvllayout8,light,enemy);
 map8.addEnemy(enemy10127);
 var waypoint10128 = new Array();
 waypoint10128.push(new Point(12,0));
 waypoint10128.push(new Point(9,0));
 waypoint10128.push(new Point(9,5));
 waypoint10128.push(new Point(10,5));
 var enemy10128 = new ENEMY2(12,0,waypoint10128,lvllayout8,light,enemy);
 map8.addEnemy(enemy10128);
 var waypoint10129 = new Array();
 waypoint10129.push(new Point(0,1));
 waypoint10129.push(new Point(1,5));
 waypoint10129.push(new Point(2,6));
 var enemy10129 = new ENEMY2(0,1,waypoint10129,lvllayout8,light,enemy);
 map8.addEnemy(enemy10129);
 var waypoint10130 = new Array();
 waypoint10130.push(new Point(0,11));
 waypoint10130.push(new Point(3,11));
 waypoint10130.push(new Point(3,12));
 waypoint10130.push(new Point(0,17));
 var enemy10130 = new ENEMY2(0,11,waypoint10130,lvllayout8,light,enemy);
 map8.addEnemy(enemy10130);
 var waypoint10131 = new Array();
 waypoint10131.push(new Point(4,13));
 waypoint10131.push(new Point(8,10));
 var enemy10131 = new ENEMY2(4,13,waypoint10131,lvllayout8,light,enemy);
 map8.addEnemy(enemy10131);
 var waypoint10132 = new Array();
 waypoint10132.push(new Point(2,2));
 waypoint10132.push(new Point(9,8));
 var enemy10132 = new ENEMY2(2,2,waypoint10132,lvllayout8,light,enemy);
 map8.addEnemy(enemy10132);
 var waypoint10133 = new Array();
 waypoint10133.push(new Point(17,4));
 waypoint10133.push(new Point(11,9));
 var enemy10133 = new ENEMY2(17,4,waypoint10133,lvllayout8,light,enemy);
 map8.addEnemy(enemy10133);
 var waypoint10134 = new Array();
 waypoint10134.push(new Point(17,17));
 waypoint10134.push(new Point(10,11));
 var enemy10134 = new ENEMY2(17,17,waypoint10134,lvllayout8,light,enemy);
 map8.addEnemy(enemy10134);
 }