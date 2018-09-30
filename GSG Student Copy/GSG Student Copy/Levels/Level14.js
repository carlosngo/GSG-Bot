function Level14(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout14=[
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,3,3,3,3,3,0,0,3,3,3,3,3,0,0,0,0,0,0],
[0,0,3,0,3,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0],
[0,0,3,0,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0],
[0,0,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,3,0,3,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0],
[0,0,3,0,3,3,0,0,0,3,0,0,0,3,0,0,0,0,0,0],
[0,0,0,3,0,0,3,0,0,3,0,0,0,3,0,0,0,3,0,0],
[0,0,0,0,0,0,0,0,0,3,0,0,0,3,0,0,0,3,0,0],
[0,0,3,3,3,3,3,0,0,0,3,3,3,0,0,0,0,3,0,0],
[0,0,3,0,3,0,3,0,0,0,0,0,0,0,0,0,0,3,0,0],
[0,0,3,0,0,0,3,0,0,3,3,3,3,3,0,0,0,3,0,0],
[0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,3,0,3,0,3],
[0,0,3,3,3,3,3,0,0,0,0,3,0,0,0,0,3,3,3,0],
[0,0,3,0,3,0,3,0,0,0,3,0,0,0,0,0,0,5,0,0],
[0,0,3,0,0,0,3,0,0,3,3,3,3,3,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

];
var map14 = new map(lvllayout14,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map14);

 
 var waypoint10111 = new Array();
 waypoint10111.push(new Point(0,3));
 waypoint10111.push(new Point(0,13));
 var enemy10111 = new ENEMY2(0,3,waypoint10111,lvllayout14,light,enemy);
 map14.addEnemy(enemy10111);
 var waypoint10112 = new Array();
 waypoint10112.push(new Point(1,13));
 waypoint10112.push(new Point(1,3));
 var enemy10112 = new ENEMY2(1,13,waypoint10112,lvllayout14,light,enemy);
 map14.addEnemy(enemy10112);
 var waypoint10113 = new Array();
 waypoint10113.push(new Point(3,0));
 waypoint10113.push(new Point(14,0));
 var enemy10113 = new ENEMY2(3,0,waypoint10113,lvllayout14,light,enemy);
 map14.addEnemy(enemy10113);
 var waypoint10114 = new Array();
 waypoint10114.push(new Point(14,1));
 waypoint10114.push(new Point(3,1));
 var enemy10114 = new ENEMY2(14,1,waypoint10114,lvllayout14,light,enemy);
 map14.addEnemy(enemy10114);
 var waypoint10115 = new Array();
 waypoint10115.push(new Point(3,7));
 waypoint10115.push(new Point(16,7));
 var enemy10115 = new ENEMY2(3,7,waypoint10115,lvllayout14,light,enemy);
 map14.addEnemy(enemy10115);
 var waypoint10116 = new Array();
 waypoint10116.push(new Point(16,8));
 waypoint10116.push(new Point(3,8));
 var enemy10116 = new ENEMY2(16,8,waypoint10116,lvllayout14,light,enemy);
 map14.addEnemy(enemy10116);
 var waypoint10117 = new Array();
 waypoint10117.push(new Point(2,14));
 waypoint10117.push(new Point(2,19));
 waypoint10117.push(new Point(8,19));
 waypoint10117.push(new Point(8,14));
 var enemy10117 = new ENEMY2(2,14,waypoint10117,lvllayout14,light,enemy);
 map14.addEnemy(enemy10117);
 var waypoint10118 = new Array();
 waypoint10118.push(new Point(12,15));
 waypoint10118.push(new Point(3,15));
 waypoint10118.push(new Point(3,16));
 waypoint10118.push(new Point(12,16));
 var enemy10118 = new ENEMY2(12,15,waypoint10118,lvllayout14,light,enemy);
 map14.addEnemy(enemy10118);
 var waypoint10119 = new Array();
 waypoint10119.push(new Point(18,3));
 waypoint10119.push(new Point(18,16));
 var enemy10119 = new ENEMY2(18,3,waypoint10119,lvllayout14,light,enemy);
 map14.addEnemy(enemy10119);
 var waypoint10120 = new Array();
 waypoint10120.push(new Point(19,16));
 waypoint10120.push(new Point(19,3));
 var enemy10120 = new ENEMY2(19,16,waypoint10120,lvllayout14,light,enemy);
 map14.addEnemy(enemy10120);
 var waypoint10121 = new Array();
 waypoint10121.push(new Point(16,14));
 waypoint10121.push(new Point(16,19));
 waypoint10121.push(new Point(19,19));
 waypoint10121.push(new Point(19,14));
 var enemy10121 = new ENEMY2(16,14,waypoint10121,lvllayout14,light,enemy);
 map14.addEnemy(enemy10121);
 var waypoint10122 = new Array();
 waypoint10122.push(new Point(5,3));
 waypoint10122.push(new Point(6,13));
 var enemy10122 = new ENEMY2(5,3,waypoint10122,lvllayout14,light,enemy);
 map14.addEnemy(enemy10122);
 var waypoint10123 = new Array();
 waypoint10123.push(new Point(12,13));
 waypoint10123.push(new Point(10,2));
 var enemy10123 = new ENEMY2(12,13,waypoint10123,lvllayout14,light,enemy);
 map14.addEnemy(enemy10123);
 }