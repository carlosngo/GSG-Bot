function Level10002(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout10002=[
[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,3,0,0,0,0,0,0,0,0,3,0,0,0,0,3],
[3,0,0,0,3,3,3,0,0,3,3,0,0,3,3,3,0,0,0,3],
[3,0,0,3,3,3,3,3,0,3,3,0,3,3,3,3,3,0,0,3],
[3,0,0,0,3,3,3,0,0,3,3,0,0,3,3,3,0,0,0,3],
[3,0,0,0,0,3,0,0,0,0,0,0,0,0,3,0,0,0,0,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,3,3,3,3,3,3,3,3,3,3,0,0,0,0,3],
[3,0,0,0,0,3,3,3,3,3,3,3,3,3,3,0,0,0,0,3],
[3,0,0,0,0,3,0,0,0,0,0,0,0,0,3,0,0,0,0,3],
[3,0,0,0,0,3,0,0,0,0,0,0,0,0,3,0,0,0,0,3],
[3,0,0,0,0,3,0,0,0,0,0,0,0,0,3,0,0,0,0,3],
[3,0,0,0,0,3,0,0,0,0,0,0,0,0,3,0,0,0,0,3],
[3,0,0,0,0,3,0,0,0,0,0,0,0,0,3,0,0,0,0,3],
[3,0,0,3,0,3,0,0,0,0,0,0,0,0,3,0,3,0,0,3],
[3,5,5,3,0,3,0,0,0,0,0,0,0,0,3,0,3,0,0,3],
[3,5,5,3,3,3,0,0,0,0,0,0,0,0,3,3,3,0,1,3],

];
var map10002 = new map(lvllayout10002,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map10002);

 var waypoint10013 = new Array();
 waypoint10013.push(new Point(12,17));
 waypoint10013.push(new Point(7,17));
 waypoint10013.push(new Point(2,17));
 waypoint10013.push(new Point(2,12));
 waypoint10013.push(new Point(7,12));
 var enemy10013 = new ENEMY2(12,17,waypoint10013,lvllayout10002,light,enemy);
 map10002.addEnemy(enemy10013);
 var waypoint10014 = new Array();
 waypoint10014.push(new Point(2,8));
 waypoint10014.push(new Point(7,8));
 waypoint10014.push(new Point(7,11));
 waypoint10014.push(new Point(2,11));
 var enemy10014 = new ENEMY2(2,8,waypoint10014,lvllayout10002,light,enemy);
 map10002.addEnemy(enemy10014);
 var waypoint10015 = new Array();
 waypoint10015.push(new Point(2,2));
 waypoint10015.push(new Point(2,7));
 waypoint10015.push(new Point(7,7));
 waypoint10015.push(new Point(7,2));
 var enemy10015 = new ENEMY2(2,2,waypoint10015,lvllayout10002,light,enemy);
 map10002.addEnemy(enemy10015);
 var waypoint10016 = new Array();
 waypoint10016.push(new Point(18,4));
 waypoint10016.push(new Point(11,4));
 waypoint10016.push(new Point(11,1));
 waypoint10016.push(new Point(15,1));
 var enemy10016 = new ENEMY2(18,4,waypoint10016,lvllayout10002,light,enemy);
 map10002.addEnemy(enemy10016);

 var waypoint10018 = new Array();
 waypoint10018.push(new Point(8,17));
 waypoint10018.push(new Point(7,17));
 var enemy10018 = new ENEMY2(8,17,waypoint10018,lvllayout10002,light,enemy);
 map10002.addEnemy(enemy10018);
 }