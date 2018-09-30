function Level10003(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout10003=[
[0,0,3,3,3,3,3,3,3,5,5,3,3,3,3,3,3,3,0,0],
[3,3,3,0,0,0,0,0,3,0,0,3,0,0,0,0,0,3,3,3],
[3,0,3,3,3,3,0,0,0,0,0,0,0,0,3,3,3,3,0,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,3,3,0,0,0,0,0,0,0,0,0,0,3,3,0,0,3],
[3,0,0,3,3,0,0,0,0,0,0,0,0,0,0,3,3,0,0,3],
[3,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,3],
[3,0,0,3,3,0,0,0,0,0,0,0,0,0,0,3,3,0,0,3],
[3,0,0,3,3,0,0,0,0,0,0,0,0,0,0,3,3,0,0,3],
[3,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,3],
[3,0,0,3,3,0,0,0,0,0,0,0,0,0,0,3,3,0,0,3],
[3,0,0,3,3,0,0,0,0,0,0,0,0,0,0,3,3,0,0,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,0,3,1,0,3,0,0,0,0,0,0,0,3],
[3,3,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,3,3,3],
[0,0,0,0,0,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0],

];
var map10003 = new map(lvllayout10003,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map10003);

 var waypoint10019 = new Array();
 waypoint10019.push(new Point(4,2));
 waypoint10019.push(new Point(4,5));
 waypoint10019.push(new Point(7,5));
 waypoint10019.push(new Point(7,2));
 var enemy10019 = new ENEMY2(4,2,waypoint10019,lvllayout10003,light,enemy);
 map10003.addEnemy(enemy10019);
 var waypoint10020 = new Array();
 waypoint10020.push(new Point(8,2));
 waypoint10020.push(new Point(8,5));
 waypoint10020.push(new Point(11,5));
 waypoint10020.push(new Point(11,2));
 var enemy10020 = new ENEMY2(8,2,waypoint10020,lvllayout10003,light,enemy);
 map10003.addEnemy(enemy10020);
 var waypoint10021 = new Array();
 waypoint10021.push(new Point(12,2));
 waypoint10021.push(new Point(15,2));
 waypoint10021.push(new Point(15,5));
 waypoint10021.push(new Point(12,5));
 var enemy10021 = new ENEMY2(12,2,waypoint10021,lvllayout10003,light,enemy);
 map10003.addEnemy(enemy10021);
 var waypoint10022 = new Array();
 waypoint10022.push(new Point(5,11));
 waypoint10022.push(new Point(5,8));
 waypoint10022.push(new Point(9,8));
 waypoint10022.push(new Point(10,11));
 waypoint10022.push(new Point(13,11));
 waypoint10022.push(new Point(13,8));
 waypoint10022.push(new Point(9,11));
 var enemy10022 = new ENEMY2(5,11,waypoint10022,lvllayout10003,light,enemy);
 map10003.addEnemy(enemy10022);
 var waypoint10023 = new Array();
 waypoint10023.push(new Point(4,14));
 waypoint10023.push(new Point(7,14));
 waypoint10023.push(new Point(7,17));
 waypoint10023.push(new Point(4,17));
 var enemy10023 = new ENEMY2(4,14,waypoint10023,lvllayout10003,light,enemy);
 map10003.addEnemy(enemy10023);
 var waypoint10024 = new Array();
 waypoint10024.push(new Point(8,14));
 waypoint10024.push(new Point(11,14));
 waypoint10024.push(new Point(11,17));
 waypoint10024.push(new Point(8,17));
 var enemy10024 = new ENEMY2(8,14,waypoint10024,lvllayout10003,light,enemy);
 map10003.addEnemy(enemy10024);
 var waypoint10025 = new Array();
 waypoint10025.push(new Point(12,14));
 waypoint10025.push(new Point(15,14));
 waypoint10025.push(new Point(15,17));
 waypoint10025.push(new Point(12,17));
 var enemy10025 = new ENEMY2(12,14,waypoint10025,lvllayout10003,light,enemy);
 map10003.addEnemy(enemy10025);
 var waypoint10026 = new Array();
 waypoint10026.push(new Point(3,1));
 waypoint10026.push(new Point(3,5));
 waypoint10026.push(new Point(3,8));
 waypoint10026.push(new Point(3,11));
 waypoint10026.push(new Point(3,14));
 waypoint10026.push(new Point(3,18));
 var enemy10026 = new ENEMY2(3,1,waypoint10026,lvllayout10003,light,enemy);
 map10003.addEnemy(enemy10026);
 var waypoint10027 = new Array();
 waypoint10027.push(new Point(1,3));
 waypoint10027.push(new Point(1,7));
 waypoint10027.push(new Point(5,7));
 waypoint10027.push(new Point(9,7));
 waypoint10027.push(new Point(13,7));
 var enemy10027 = new ENEMY2(1,3,waypoint10027,lvllayout10003,light,enemy);
 map10003.addEnemy(enemy10027);
 var waypoint10028 = new Array();
 waypoint10028.push(new Point(1,16));
 waypoint10028.push(new Point(1,12));
 waypoint10028.push(new Point(5,12));
 waypoint10028.push(new Point(10,12));
 waypoint10028.push(new Point(14,12));
 var enemy10028 = new ENEMY2(1,16,waypoint10028,lvllayout10003,light,enemy);
 map10003.addEnemy(enemy10028);
 }