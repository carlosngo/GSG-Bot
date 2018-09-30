function Level10004(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout10004=[
[0,0,0,0,0,0,0,0,3,5,5,3,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0],
[3,3,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,3,3,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,3,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,3,3,3],
[0,0,0,0,0,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,3,0,0,0,0,3,0,0,0,0,0,0,0],
[0,0,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,0],
[0,0,0,0,3,3,0,0,0,0,0,0,0,0,3,3,0,0,0,0],
[0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0],
[0,0,0,0,3,3,0,0,0,0,0,0,0,0,3,3,0,0,0,0],
[0,0,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,0],
[0,0,0,0,0,0,0,3,0,0,0,0,3,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0],
[3,3,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,3,3,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,3,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,3,3,3],
[0,0,0,0,0,0,0,3,3,1,0,3,3,0,0,0,0,0,0,0],

];
var map10004 = new map(lvllayout10004,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map10004);

 var waypoint10029 = new Array();
 waypoint10029.push(new Point(16,5));
 waypoint10029.push(new Point(16,9));
 waypoint10029.push(new Point(16,10));
 waypoint10029.push(new Point(16,16));
 var enemy10029 = new ENEMY2(16,5,waypoint10029,lvllayout10004,light,enemy);
 map10004.addEnemy(enemy10029);
 var waypoint10030 = new Array();
 waypoint10030.push(new Point(12,8));
 waypoint10030.push(new Point(11,7));
 waypoint10030.push(new Point(10,6));
 waypoint10030.push(new Point(9,7));
 waypoint10030.push(new Point(8,8));
 waypoint10030.push(new Point(8,11));
 waypoint10030.push(new Point(9,12));
 waypoint10030.push(new Point(10,13));
 waypoint10030.push(new Point(11,12));
 waypoint10030.push(new Point(12,11));
 var enemy10030 = new ENEMY2(12,8,waypoint10030,lvllayout10004,light,enemy);
 map10004.addEnemy(enemy10030);
 var waypoint10031 = new Array();
 waypoint10031.push(new Point(8,9));
 waypoint10031.push(new Point(8,10));
 waypoint10031.push(new Point(12,10));
 waypoint10031.push(new Point(12,9));
 waypoint10031.push(new Point(10,8));
 waypoint10031.push(new Point(10,11));
 var enemy10031 = new ENEMY2(8,9,waypoint10031,lvllayout10004,light,enemy);
 map10004.addEnemy(enemy10031);
 var waypoint10032 = new Array();
 waypoint10032.push(new Point(4,1));
 waypoint10032.push(new Point(4,4));
 waypoint10032.push(new Point(4,7));
 waypoint10032.push(new Point(4,9));
 var enemy10032 = new ENEMY2(4,1,waypoint10032,lvllayout10004,light,enemy);
 map10004.addEnemy(enemy10032);
 var waypoint10033 = new Array();
 waypoint10033.push(new Point(4,18));
 waypoint10033.push(new Point(4,16));
 waypoint10033.push(new Point(4,14));
 waypoint10033.push(new Point(4,11));
 var enemy10033 = new ENEMY2(4,18,waypoint10033,lvllayout10004,light,enemy);
 map10004.addEnemy(enemy10033);
 var waypoint10034 = new Array();
 waypoint10034.push(new Point(1,9));
 waypoint10034.push(new Point(1,10));
 waypoint10034.push(new Point(7,10));
 waypoint10034.push(new Point(7,9));
 var enemy10034 = new ENEMY2(1,9,waypoint10034,lvllayout10004,light,enemy);
 map10004.addEnemy(enemy10034);
 }