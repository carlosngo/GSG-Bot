function Level10001(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout10001=[
[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,0,0,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,1,3],
[3,0,0,0,0,0,0,3,0,0,0,0,3,0,3,0,0,0,0,3],
[3,0,0,0,0,0,0,3,0,0,0,0,3,0,3,0,3,3,3,3],
[3,0,0,0,0,0,0,3,0,0,0,0,3,0,3,0,3,0,0,0],
[3,3,3,3,3,0,3,3,3,3,0,3,3,3,3,0,3,3,3,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,3,3,0,0,0,0,3,3,0,0,0,0,3,3,0,0,3],
[3,0,0,3,3,0,0,0,0,3,3,0,0,0,0,3,3,0,0,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,3,3,3,3,3,0,3,3,3,3,3,3,0,3,3,3,3],
[3,0,0,3,0,0,3,0,0,0,3,0,0,3,0,0,0,3,3,3],
[3,0,0,3,0,0,3,0,0,0,3,0,0,3,0,0,0,3,3,3],
[3,0,0,3,0,0,3,3,3,3,3,0,0,3,3,3,3,3,3,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,0,0,0,0,0],
[3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,0,3,0,0,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,5,5,3],
[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,3],

];
var map10001 = new map(lvllayout10001,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map10001);

 var waypoint10006 = new Array();
 waypoint10006.push(new Point(2,10));
 waypoint10006.push(new Point(6,10));
 waypoint10006.push(new Point(6,13));
 waypoint10006.push(new Point(9,13));
 var enemy10006 = new ENEMY2(2,10,waypoint10006,lvllayout10001,light,enemy);
 map10001.addEnemy(enemy10006);
 var waypoint10007 = new Array();
 waypoint10007.push(new Point(11,8));
 waypoint10007.push(new Point(7,7));
 waypoint10007.push(new Point(9,5));
 var enemy10007 = new ENEMY2(11,8,waypoint10007,lvllayout10001,light,enemy);
 map10001.addEnemy(enemy10007);
 var waypoint10008 = new Array();
 waypoint10008.push(new Point(2,3));
 waypoint10008.push(new Point(6,2));
 waypoint10008.push(new Point(9,4));
 waypoint10008.push(new Point(6,6));
 var enemy10008 = new ENEMY2(2,3,waypoint10008,lvllayout10001,light,enemy);
 map10001.addEnemy(enemy10008);
 var waypoint10009 = new Array();
 waypoint10009.push(new Point(11,15));
 waypoint10009.push(new Point(8,18));
 waypoint10009.push(new Point(6,14));
 var enemy10009 = new ENEMY2(11,15,waypoint10009,lvllayout10001,light,enemy);
 map10001.addEnemy(enemy10009);
 var waypoint10010 = new Array();
 waypoint10010.push(new Point(15,2));
 waypoint10010.push(new Point(18,2));
 waypoint10010.push(new Point(18,5));
 waypoint10010.push(new Point(15,5));
 var enemy10010 = new ENEMY2(15,2,waypoint10010,lvllayout10001,light,enemy);
 map10001.addEnemy(enemy10010);
 var waypoint10011 = new Array();
 waypoint10011.push(new Point(15,6));
 waypoint10011.push(new Point(18,6));
 waypoint10011.push(new Point(18,9));
 waypoint10011.push(new Point(15,9));
 var enemy10011 = new ENEMY2(15,6,waypoint10011,lvllayout10001,light,enemy);
 map10001.addEnemy(enemy10011);
 var waypoint10012 = new Array();
 waypoint10012.push(new Point(15,10));
 waypoint10012.push(new Point(18,10));
 waypoint10012.push(new Point(18,13));
 waypoint10012.push(new Point(15,13));
 var enemy10012 = new ENEMY2(15,10,waypoint10012,lvllayout10001,light,enemy);
 map10001.addEnemy(enemy10012);
 }