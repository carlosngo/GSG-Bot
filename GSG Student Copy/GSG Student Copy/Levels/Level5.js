function Level5(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout5=[
[1,0,0,3,3,3,3,3,3,0,3,3,3,3,3,3,3,3,3,3],
[3,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[3,0,0,0,0,3,3,0,3,3,3,0,3,3,3,3,3,3,0,3],
[3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,3,0,3],
[3,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,0,0,0,3],
[3,0,3,3,3,3,0,3,0,0,0,0,0,0,0,0,0,3,0,3],
[0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,3],
[3,0,3,0,3,3,3,0,3,3,3,3,3,3,0,3,0,3,0,3],
[3,0,3,0,3,0,0,0,0,0,0,0,0,3,0,3,0,3,0,0],
[3,0,3,0,0,0,3,3,3,3,3,0,0,3,0,3,0,0,0,3],
[0,0,3,0,3,0,3,5,0,0,0,0,0,3,0,3,0,3,0,3],
[3,0,3,0,3,0,3,0,0,0,3,0,0,3,0,0,0,3,0,3],
[3,0,3,0,3,0,3,3,3,3,3,0,0,3,0,3,0,3,0,3],
[3,0,3,0,3,0,3,0,3,3,3,3,3,0,0,3,0,3,0,3],
[3,0,0,0,3,0,0,0,0,0,0,0,0,0,0,3,0,3,0,3],
[3,0,3,0,3,3,0,3,3,0,3,3,3,3,0,3,0,3,0,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3],
[3,0,3,3,3,3,3,3,3,3,0,3,3,3,3,3,0,3,0,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,3,3,3,3,3,3,3,0,3,3,3,3,3,3,3,3,3,0,3],

];
var map5 = new map(lvllayout5,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map5);

 var waypoint27 = new Array();
 waypoint27.push(new Point(2,1));
 waypoint27.push(new Point(1,4));
 waypoint27.push(new Point(1,10));
 var enemy27 = new ENEMY2(2,1,waypoint27,lvllayout5,light,enemy);
 map5.addEnemy(enemy27);
 var waypoint28 = new Array();
 waypoint28.push(new Point(1,10));
 waypoint28.push(new Point(1,19));
 var enemy28 = new ENEMY2(1,10,waypoint28,lvllayout5,light,enemy);
 map5.addEnemy(enemy28);
 var waypoint29 = new Array();
 waypoint29.push(new Point(4,1));
 waypoint29.push(new Point(4,6));
 waypoint29.push(new Point(3,6));
 waypoint29.push(new Point(3,16));
 var enemy29 = new ENEMY2(4,1,waypoint29,lvllayout5,light,enemy);
 map5.addEnemy(enemy29);
 var waypoint30 = new Array();
 waypoint30.push(new Point(6,16));
 waypoint30.push(new Point(16,16));
 var enemy30 = new ENEMY2(6,16,waypoint30,lvllayout5,light,enemy);
 map5.addEnemy(enemy30);
 var waypoint31 = new Array();
 waypoint31.push(new Point(5,8));
 waypoint31.push(new Point(5,14));
 waypoint31.push(new Point(6,14));
 waypoint31.push(new Point(6,8));
 var enemy31 = new ENEMY2(5,8,waypoint31,lvllayout5,light,enemy);
 map5.addEnemy(enemy31);
 var waypoint32 = new Array();
 waypoint32.push(new Point(6,6));
 waypoint32.push(new Point(6,3));
 waypoint32.push(new Point(16,3));
 waypoint32.push(new Point(16,6));
 var enemy32 = new ENEMY2(6,6,waypoint32,lvllayout5,light,enemy);
 map5.addEnemy(enemy32);
 var waypoint33 = new Array();
 waypoint33.push(new Point(8,5));
 waypoint33.push(new Point(14,5));
 waypoint33.push(new Point(14,12));
 var enemy33 = new ENEMY2(8,5,waypoint33,lvllayout5,light,enemy);
 map5.addEnemy(enemy33);
 var waypoint34 = new Array();
 waypoint34.push(new Point(8,11));
 waypoint34.push(new Point(8,12));
 waypoint34.push(new Point(12,12));
 waypoint34.push(new Point(12,11));
 var enemy34 = new ENEMY2(8,11,waypoint34,lvllayout5,light,enemy);
 map5.addEnemy(enemy34);
 var waypoint35 = new Array();
 waypoint35.push(new Point(18,1));
 waypoint35.push(new Point(18,16));
 var enemy35 = new ENEMY2(18,1,waypoint35,lvllayout5,light,enemy);
 map5.addEnemy(enemy35);
 var waypoint36 = new Array();
 waypoint36.push(new Point(4,1));
 waypoint36.push(new Point(18,1));
 var enemy36 = new ENEMY2(4,1,waypoint36,lvllayout5,light,enemy);
 map5.addEnemy(enemy36);
 }