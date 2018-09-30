function Level9(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout9=[
[1,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,3,3,0,3,0,0,3,3,3,0,0,3,0,3,0,3,0,0,3],
[3,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,0,0,0,3],
[3,0,3,3,3,3,0,0,3,0,3,0,0,3,0,3,0,3,0,3],
[3,0,3,3,3,3,0,3,0,0,3,0,0,0,0,0,0,0,0,3],
[3,0,3,3,3,3,0,3,0,3,0,0,3,0,3,0,3,0,0,3],
[3,0,3,3,3,0,0,3,0,3,0,3,3,3,3,3,3,3,0,3],
[3,0,3,3,0,0,3,0,0,3,0,3,0,0,0,0,0,0,0,3],
[3,0,0,0,0,3,0,0,0,0,0,3,0,3,3,0,3,3,0,3],
[3,0,3,3,3,3,3,3,3,3,3,3,0,3,3,0,3,3,0,3],
[3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,3,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[3,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,0],
[3,0,0,0,0,0,0,0,3,0,3,0,0,0,3,0,0,0,3,0],
[3,0,0,3,3,3,3,3,3,0,0,0,3,0,0,0,3,0,0,0],
[3,3,3,3,0,0,0,0,3,0,3,3,3,3,3,3,3,3,3,3],
[3,0,0,3,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,3,0,3,0,3,3,3,3,3,3,3,3,3,3,0,3],
[3,5,3,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3],

];
var map9 = new map(lvllayout9,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map9);

 var waypoint10046 = new Array();
 waypoint10046.push(new Point(7,12));
 waypoint10046.push(new Point(10,12));
 waypoint10046.push(new Point(10,15));
 waypoint10046.push(new Point(7,15));
 var enemy10046 = new ENEMY2(7,12,waypoint10046,lvllayout9,light,enemy);
 map9.addEnemy(enemy10046);
 var waypoint10047 = new Array();
 waypoint10047.push(new Point(7,18));
 waypoint10047.push(new Point(7,15));
 waypoint10047.push(new Point(10,15));
 waypoint10047.push(new Point(10,18));
 var enemy10047 = new ENEMY2(7,18,waypoint10047,lvllayout9,light,enemy);
 map9.addEnemy(enemy10047);
 var waypoint10048 = new Array();
 waypoint10048.push(new Point(2,12));
 waypoint10048.push(new Point(2,14));
 waypoint10048.push(new Point(4,14));
 waypoint10048.push(new Point(4,12));
 var enemy10048 = new ENEMY2(2,12,waypoint10048,lvllayout9,light,enemy);
 map9.addEnemy(enemy10048);
 var waypoint10049 = new Array();
 waypoint10049.push(new Point(2,16));
 waypoint10049.push(new Point(2,18));
 waypoint10049.push(new Point(4,18));
 waypoint10049.push(new Point(4,16));
 var enemy10049 = new ENEMY2(2,16,waypoint10049,lvllayout9,light,enemy);
 map9.addEnemy(enemy10049);
 var waypoint10050 = new Array();
 waypoint10050.push(new Point(7,7));
 waypoint10050.push(new Point(8,7));
 var enemy10050 = new ENEMY2(7,7,waypoint10050,lvllayout9,light,enemy);
 map9.addEnemy(enemy10050);
 var waypoint10051 = new Array();
 waypoint10051.push(new Point(12,5));
 waypoint10051.push(new Point(12,7));
 waypoint10051.push(new Point(14,7));
 waypoint10051.push(new Point(14,5));
 var enemy10051 = new ENEMY2(12,5,waypoint10051,lvllayout9,light,enemy);
 map9.addEnemy(enemy10051);
 var waypoint10052 = new Array();
 waypoint10052.push(new Point(14,9));
 waypoint10052.push(new Point(17,9));
 var enemy10052 = new ENEMY2(14,9,waypoint10052,lvllayout9,light,enemy);
 map9.addEnemy(enemy10052);
 var waypoint10053 = new Array();
 waypoint10053.push(new Point(16,4));
 waypoint10053.push(new Point(16,5));
 waypoint10053.push(new Point(17,5));
 waypoint10053.push(new Point(17,4));
 var enemy10053 = new ENEMY2(16,4,waypoint10053,lvllayout9,light,enemy);
 map9.addEnemy(enemy10053);
 }