function Level9999(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout9999=[
[3,3,3,3,3,3,3,0,0,0,3,3,3,3,3,3,3,3,0,0],
[3,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,3,0,0],
[3,0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,3,0,0],
[3,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0],
[3,0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,3,0,0],
[3,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,3,0,0],
[3,3,3,3,3,3,3,0,0,0,3,3,3,3,0,3,3,3,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0],
[3,3,3,3,3,0,0,3,3,3,3,3,3,3,0,3,3,3,0,0],
[3,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,3,0,0],
[3,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,3,0,0],
[3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0],
[3,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,3,0,0],
[3,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,3,0,0],
[3,3,3,3,3,0,0,3,3,3,3,3,3,3,3,3,3,3,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

];
var map9999 = new map(lvllayout9999,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map9999);

 var waypoint9999 = new Array();
 waypoint9999.push(new Point(2,12));
 waypoint9999.push(new Point(2,15));
 waypoint9999.push(new Point(4,15));
 var enemy9999 = new ENEMY2(2,12,waypoint9999,lvllayout9999,light,enemy);
 map9999.addEnemy(enemy9999);
 var waypoint10000 = new Array();
 waypoint10000.push(new Point(14,10));
 waypoint10000.push(new Point(16,10));
 waypoint10000.push(new Point(16,12));
 var enemy10000 = new ENEMY2(14,10,waypoint10000,lvllayout9999,light,enemy);
 map9999.addEnemy(enemy10000);
 var waypoint10001 = new Array();
 waypoint10001.push(new Point(14,15));
 waypoint10001.push(new Point(16,15));
 var enemy10001 = new ENEMY2(14,15,waypoint10001,lvllayout9999,light,enemy);
 map9999.addEnemy(enemy10001);
 }