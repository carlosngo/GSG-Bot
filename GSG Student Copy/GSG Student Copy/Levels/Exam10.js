function Exam10(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout10=[
[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,3,3,3,3,3,3,0,3,3,0,3,3,3,3,3,3,0,3],
[3,0,3,0,0,0,0,0,0,3,3,0,3,0,0,0,0,0,0,3],
[3,0,3,0,0,0,0,3,0,3,3,0,3,0,0,0,0,3,0,3],
[3,0,3,0,0,0,0,3,0,3,3,0,3,0,0,0,0,3,0,3],
[3,0,0,3,0,0,3,0,0,3,3,0,0,3,1,0,3,0,0,3],
[3,0,0,0,3,3,0,0,0,3,3,0,0,0,3,3,0,0,0,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,3],
[3,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,3,3,3,3,0,0,3,3,0,3,3,3,3,3,3,0,3],
[3,0,3,0,0,0,0,3,0,3,3,0,0,0,0,0,0,3,0,3],
[3,0,3,0,0,3,0,3,0,3,3,0,0,0,0,0,0,3,0,3],
[3,0,3,0,0,3,0,3,0,3,3,0,0,0,0,0,0,3,0,3],
[3,0,3,0,0,3,5,3,0,3,3,0,0,0,0,0,0,3,0,3],
[3,0,3,0,0,3,3,3,0,3,3,0,0,0,0,0,0,3,0,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],

];
var map10 = new map(lvllayout10,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map10);

 var waypoint10239 = new Array();
 waypoint10239.push(new Point(1,1));
 waypoint10239.push(new Point(1,18));
 var enemy10239 = new ENEMY2(1,1,waypoint10239,lvllayout10,light,enemy);
 map10.addEnemy(enemy10239);
 var waypoint10240 = new Array();
 waypoint10240.push(new Point(1,1));
 waypoint10240.push(new Point(1,16));
 var enemy10240 = new ENEMY2(1,1,waypoint10240,lvllayout10,light,enemy);
 map10.addEnemy(enemy10240);
 var waypoint10241 = new Array();
 waypoint10241.push(new Point(5,11));
 waypoint10241.push(new Point(2,11));
 var enemy10241 = new ENEMY2(5,11,waypoint10241,lvllayout10,light,enemy);
 map10.addEnemy(enemy10241);
 var waypoint10242 = new Array();
 waypoint10242.push(new Point(5,8));
 waypoint10242.push(new Point(1,8));
 var enemy10242 = new ENEMY2(5,8,waypoint10242,lvllayout10,light,enemy);
 map10.addEnemy(enemy10242);
 var waypoint10243 = new Array();
 waypoint10243.push(new Point(11,11));
 waypoint10243.push(new Point(11,18));
 var enemy10243 = new ENEMY2(11,11,waypoint10243,lvllayout10,light,enemy);
 map10.addEnemy(enemy10243);
 var waypoint10244 = new Array();
 waypoint10244.push(new Point(18,6));
 waypoint10244.push(new Point(18,18));
 var enemy10244 = new ENEMY2(18,6,waypoint10244,lvllayout10,light,enemy);
 map10.addEnemy(enemy10244);
 var waypoint10245 = new Array();
 waypoint10245.push(new Point(12,11));
 waypoint10245.push(new Point(17,11));
 var enemy10245 = new ENEMY2(12,11,waypoint10245,lvllayout10,light,enemy);
 map10.addEnemy(enemy10245);
}