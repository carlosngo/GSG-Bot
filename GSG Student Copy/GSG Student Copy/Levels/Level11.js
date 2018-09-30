function Level11(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout11=[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,3,3,3,3,0,0,3,0,0,3,3,0,3,3,3,3,3,0],
[0,3,0,3,0,0,0,0,3,3,3,3,3,0,0,3,3,0,0,0],
[0,0,3,3,3,3,0,0,3,0,0,0,0,0,3,0,0,3,3,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,3,3,3,3,0,0,3,0,0,0,3,0,3,3,3,3,3,0],
[0,3,0,3,0,3,0,0,3,3,3,3,3,0,0,0,0,0,3,0],
[0,3,3,0,3,3,0,0,3,0,0,0,3,0,0,0,0,0,3,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,3,3,3,0,0,0,3,3,3,3,3,0,3,3,3,3,3,0],
[0,3,0,0,0,3,0,0,0,0,3,0,0,0,0,3,0,0,0,0],
[0,3,0,0,0,3,0,0,3,3,3,3,3,0,0,0,3,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0],
[0,3,3,3,3,3,0,0,0,3,3,3,0,0,3,3,3,3,3,0],
[0,3,0,0,0,3,0,0,3,0,3,0,3,0,0,0,0,0,0,0],
[0,0,3,3,3,0,0,0,3,0,3,3,3,0,3,3,3,3,3,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,5,0,0,0],
[0,3,3,3,3,3,0,0,3,3,3,3,3,0,0,0,3,3,0,0],
[0,3,0,3,0,3,0,0,3,0,3,0,0,0,3,3,3,3,3,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

];
var map11 = new map(lvllayout11,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map11);

 var waypoint52 = new Array();
 waypoint52.push(new Point(0,4));
 waypoint52.push(new Point(0,7));
 waypoint52.push(new Point(4,7));
 waypoint52.push(new Point(4,1));
 var enemy52 = new ENEMY2(0,4,waypoint52,lvllayout11,light,enemy);
 map11.addEnemy(enemy52);
 var waypoint53 = new Array();
 waypoint53.push(new Point(6,0));
 waypoint53.push(new Point(8,0));
 waypoint53.push(new Point(8,1));
 waypoint53.push(new Point(12,0));
 waypoint53.push(new Point(12,1));
 waypoint53.push(new Point(16,0));
 waypoint53.push(new Point(16,1));
 waypoint53.push(new Point(19,0));
 waypoint53.push(new Point(19,1));
 var enemy53 = new ENEMY2(6,0,waypoint53,lvllayout11,light,enemy);
 map11.addEnemy(enemy53);
 var waypoint54 = new Array();
 waypoint54.push(new Point(0,14));
 waypoint54.push(new Point(0,19));
 waypoint54.push(new Point(4,19));
 waypoint54.push(new Point(4,13));
 var enemy54 = new ENEMY2(0,14,waypoint54,lvllayout11,light,enemy);
 map11.addEnemy(enemy54);
 var waypoint55 = new Array();
 waypoint55.push(new Point(8,17));
 waypoint55.push(new Point(6,17));
 waypoint55.push(new Point(6,13));
 var enemy55 = new ENEMY2(8,17,waypoint55,lvllayout11,light,enemy);
 map11.addEnemy(enemy55);
 var waypoint56 = new Array();
 waypoint56.push(new Point(7,19));
 waypoint56.push(new Point(11,19));
 waypoint56.push(new Point(11,18));
 waypoint56.push(new Point(11,19));
 waypoint56.push(new Point(14,19));
 var enemy56 = new ENEMY2(7,19,waypoint56,lvllayout11,light,enemy);
 map11.addEnemy(enemy56);
 var waypoint57 = new Array();
 waypoint57.push(new Point(4,9));
 waypoint57.push(new Point(4,13));
 waypoint57.push(new Point(8,13));
 waypoint57.push(new Point(8,9));
 var enemy57 = new ENEMY2(4,9,waypoint57,lvllayout11,light,enemy);
 map11.addEnemy(enemy57);
 var waypoint58 = new Array();
 waypoint58.push(new Point(5,6));
 waypoint58.push(new Point(16,6));
 waypoint58.push(new Point(16,7));
 waypoint58.push(new Point(5,7));
 var enemy58 = new ENEMY2(5,6,waypoint58,lvllayout11,light,enemy);
 map11.addEnemy(enemy58);
 var waypoint59 = new Array();
 waypoint59.push(new Point(18,0));
 waypoint59.push(new Point(19,0));
 waypoint59.push(new Point(19,6));
 waypoint59.push(new Point(18,6));
 waypoint59.push(new Point(18,7));
 waypoint59.push(new Point(19,7));
 waypoint59.push(new Point(19,13));
 waypoint59.push(new Point(18,13));
 waypoint59.push(new Point(19,14));
 var enemy59 = new ENEMY2(18,0,waypoint59,lvllayout11,light,enemy);
 map11.addEnemy(enemy59);
 }