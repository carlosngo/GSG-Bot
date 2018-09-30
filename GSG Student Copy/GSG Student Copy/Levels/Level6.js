function Level6(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout6=[
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,3,3,0,3,3,3,3,3,3,3,3,3,3,0,3,3,3,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,3,0],
[0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,3,0],
[0,3,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,3,0],
[0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,3,0],
[0,3,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,3,0],
[0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,3,0],
[0,3,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,3,0],
[0,3,0,0,0,3,0,0,0,5,0,0,0,3,0,0,0,3,3,0],
[0,3,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,3,0],
[0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,3,0],
[0,3,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,3,0],
[0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,3,0],
[0,3,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,3,0],
[0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,3,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,3,3,0,3,3,3,3,3,3,3,3,3,3,0,3,3,3,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

];
var map6 = new map(lvllayout6,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map6);

 
 var waypoint10100 = new Array();
 waypoint10100.push(new Point(2,2));
 waypoint10100.push(new Point(2,16));
 waypoint10100.push(new Point(17,16));
 waypoint10100.push(new Point(17,2));
 var enemy10100 = new ENEMY2(2,2,waypoint10100,lvllayout6,light,enemy);
 map6.addEnemy(enemy10100);
 var waypoint10101 = new Array();
 waypoint10101.push(new Point(3,4));
 waypoint10101.push(new Point(16,4));
 var enemy10101 = new ENEMY2(3,4,waypoint10101,lvllayout6,light,enemy);
 map6.addEnemy(enemy10101);
 var waypoint10102 = new Array();
 waypoint10102.push(new Point(3,14));
 waypoint10102.push(new Point(16,14));
 var enemy10102 = new ENEMY2(3,14,waypoint10102,lvllayout6,light,enemy);
 map6.addEnemy(enemy10102);
 var waypoint10103 = new Array();
 waypoint10103.push(new Point(4,6));
 waypoint10103.push(new Point(15,6));
 var enemy10103 = new ENEMY2(4,6,waypoint10103,lvllayout6,light,enemy);
 map6.addEnemy(enemy10103);
 var waypoint10104 = new Array();
 waypoint10104.push(new Point(4,12));
 waypoint10104.push(new Point(15,12));
 var enemy10104 = new ENEMY2(4,12,waypoint10104,lvllayout6,light,enemy);
 map6.addEnemy(enemy10104);
 var waypoint10105 = new Array();
 waypoint10105.push(new Point(3,8));
 waypoint10105.push(new Point(3,10));
 waypoint10105.push(new Point(15,10));
 waypoint10105.push(new Point(15,8));
 var enemy10105 = new ENEMY2(3,8,waypoint10105,lvllayout6,light,enemy);
 map6.addEnemy(enemy10105);
 var waypoint10106 = new Array();
 waypoint10106.push(new Point(0,4));
 waypoint10106.push(new Point(0,15));
 var enemy10106 = new ENEMY2(0,4,waypoint10106,lvllayout6,light,enemy);
 map6.addEnemy(enemy10106);
 var waypoint10107 = new Array();
 waypoint10107.push(new Point(2,19));
 waypoint10107.push(new Point(17,19));
 var enemy10107 = new ENEMY2(2,19,waypoint10107,lvllayout6,light,enemy);
 map6.addEnemy(enemy10107);
 var waypoint10108 = new Array();
 waypoint10108.push(new Point(19,16));
 waypoint10108.push(new Point(19,3));
 var enemy10108 = new ENEMY2(19,16,waypoint10108,lvllayout6,light,enemy);
 map6.addEnemy(enemy10108);
 var waypoint10109 = new Array();
 waypoint10109.push(new Point(3,0));
 waypoint10109.push(new Point(16,0));
 var enemy10109 = new ENEMY2(3,0,waypoint10109,lvllayout6,light,enemy);
 map6.addEnemy(enemy10109);
 var waypoint10110 = new Array();
 waypoint10110.push(new Point(7,6));
 waypoint10110.push(new Point(7,12));
 waypoint10110.push(new Point(12,12));
 waypoint10110.push(new Point(12,6));
 var enemy10110 = new ENEMY2(7,6,waypoint10110,lvllayout6,light,enemy);
 map6.addEnemy(enemy10110);
 }