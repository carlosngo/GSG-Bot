function Level10006(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout10006=[
[0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,1],
[0,0,3,3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0],
[0,0,3,3,0,0,3,3,0,0,0,0,0,0,0,3,3,0,0,0],
[0,0,0,0,0,0,3,3,0,0,0,3,3,0,0,3,3,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0],
[0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0],
[0,3,3,0,3,0,0,3,0,0,0,3,3,0,0,0,0,0,0,0],
[0,0,0,0,3,0,0,3,0,0,0,0,0,0,0,3,3,0,0,0],
[3,3,3,3,3,0,0,3,3,3,3,3,0,0,0,3,3,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],
[0,3,0,0,0,0,0,3,0,3,0,3,0,3,3,0,0,0,0,0],
[0,0,3,0,0,0,0,3,0,0,0,3,0,0,0,0,0,3,3,0],
[3,0,3,0,0,3,0,3,3,3,0,3,3,3,0,0,0,3,3,0],
[0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[3,3,3,0,0,3,3,3,0,0,0,0,0,0,0,0,0,3,3,0],
[0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,3,3,0,0],
[3,0,0,0,0,3,3,3,3,0,0,3,0,0,0,0,3,3,0,3],
[0,0,0,0,0,3,0,0,0,0,0,3,0,3,3,0,0,0,0,3],
[5,0,3,0,0,3,0,0,0,3,0,3,0,3,3,0,0,0,0,0],

];
var map10006 = new map(lvllayout10006,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map10006);

 var waypoint10073 = new Array();
 waypoint10073.push(new Point(9,3));
 waypoint10073.push(new Point(9,4));
 waypoint10073.push(new Point(16,4));
 waypoint10073.push(new Point(16,3));
 var enemy10073 = new ENEMY2(9,3,waypoint10073,lvllayout10006,light,enemy);
 map10006.addEnemy(enemy10073);
 var waypoint10074 = new Array();
 waypoint10074.push(new Point(15,10));
 waypoint10074.push(new Point(15,3));
 waypoint10074.push(new Point(16,3));
 waypoint10074.push(new Point(16,10));
 var enemy10074 = new ENEMY2(15,10,waypoint10074,lvllayout10006,light,enemy);
 map10006.addEnemy(enemy10074);
 var waypoint10075 = new Array();
 waypoint10075.push(new Point(13,6));
 waypoint10075.push(new Point(13,19));
 var enemy10075 = new ENEMY2(13,6,waypoint10075,lvllayout10006,light,enemy);
 map10006.addEnemy(enemy10075);
 var waypoint10076 = new Array();
 waypoint10076.push(new Point(13,6));
 waypoint10076.push(new Point(4,6));
 var enemy10076 = new ENEMY2(13,6,waypoint10076,lvllayout10006,light,enemy);
 map10006.addEnemy(enemy10076);
 var waypoint10077 = new Array();
 waypoint10077.push(new Point(1,5));
 waypoint10077.push(new Point(1,8));
 waypoint10077.push(new Point(4,8));
 waypoint10077.push(new Point(4,5));
 var enemy10077 = new ENEMY2(1,5,waypoint10077,lvllayout10006,light,enemy);
 map10006.addEnemy(enemy10077);
 var waypoint10078 = new Array();
 waypoint10078.push(new Point(0,1));
 waypoint10078.push(new Point(0,4));
 waypoint10078.push(new Point(3,4));
 waypoint10078.push(new Point(3,1));
 var enemy10078 = new ENEMY2(0,1,waypoint10078,lvllayout10006,light,enemy);
 map10006.addEnemy(enemy10078);
 var waypoint10079 = new Array();
 waypoint10079.push(new Point(4,0));
 waypoint10079.push(new Point(4,3));
 waypoint10079.push(new Point(7,3));
 waypoint10079.push(new Point(7,0));
 var enemy10079 = new ENEMY2(4,0,waypoint10079,lvllayout10006,light,enemy);
 map10006.addEnemy(enemy10079);
 var waypoint10080 = new Array();
 waypoint10080.push(new Point(6,14));
 waypoint10080.push(new Point(6,17));
 waypoint10080.push(new Point(9,17));
 waypoint10080.push(new Point(9,14));
 var enemy10080 = new ENEMY2(6,14,waypoint10080,lvllayout10006,light,enemy);
 map10006.addEnemy(enemy10080);
 var waypoint10081 = new Array();
 waypoint10081.push(new Point(2,10));
 waypoint10081.push(new Point(2,13));
 waypoint10081.push(new Point(5,13));
 waypoint10081.push(new Point(5,10));
 var enemy10081 = new ENEMY2(2,10,waypoint10081,lvllayout10006,light,enemy);
 map10006.addEnemy(enemy10081);
 var waypoint10082 = new Array();
 waypoint10082.push(new Point(1,14));
 waypoint10082.push(new Point(1,17));
 waypoint10082.push(new Point(4,17));
 waypoint10082.push(new Point(4,14));
 var enemy10082 = new ENEMY2(1,14,waypoint10082,lvllayout10006,light,enemy);
 map10006.addEnemy(enemy10082);
 var waypoint10083 = new Array();
 waypoint10083.push(new Point(10,16));
 waypoint10083.push(new Point(10,19));
 waypoint10083.push(new Point(13,19));
 waypoint10083.push(new Point(13,16));
 var enemy10083 = new ENEMY2(10,16,waypoint10083,lvllayout10006,light,enemy);
 map10006.addEnemy(enemy10083);
 var waypoint10084 = new Array();
 waypoint10084.push(new Point(15,15));
 waypoint10084.push(new Point(15,18));
 waypoint10084.push(new Point(18,18));
 waypoint10084.push(new Point(18,15));
 var enemy10084 = new ENEMY2(15,15,waypoint10084,lvllayout10006,light,enemy);
 map10006.addEnemy(enemy10084);
 var waypoint10085 = new Array();
 waypoint10085.push(new Point(16,0));
 waypoint10085.push(new Point(16,4));
 waypoint10085.push(new Point(19,4));

 }