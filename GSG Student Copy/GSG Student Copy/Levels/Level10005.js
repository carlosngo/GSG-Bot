function Level10005(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout10005=[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,3,3,3,3,3,0,0,3,3,3,3,3,3,0,3,3,3,0],
[0,3,1,0,0,0,3,0,0,3,0,0,0,0,0,0,3,0,3,0],
[0,3,0,3,0,0,3,0,0,3,0,0,0,3,3,0,3,3,3,0],
[0,3,0,3,3,3,3,0,0,3,0,0,0,3,0,0,0,0,0,0],
[0,3,0,0,0,0,0,0,0,3,0,0,0,3,0,0,3,3,3,3],
[0,3,0,3,3,3,3,0,0,3,0,0,0,3,0,0,3,0,0,3],
[0,3,3,3,0,0,0,0,0,3,3,3,3,3,0,0,3,0,0,3],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3],
[0,3,3,3,3,3,3,0,0,0,0,0,3,3,0,0,3,0,0,3],
[0,3,0,0,0,0,0,0,0,0,0,0,3,3,0,0,3,0,0,3],
[0,3,0,3,0,0,3,0,0,3,3,0,0,0,0,0,3,0,0,3],
[0,3,0,3,0,0,3,0,0,3,3,0,0,0,0,0,3,0,0,3],
[0,0,0,3,0,0,3,0,0,0,0,0,0,3,3,3,3,0,0,3],
[0,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,3],
[0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,3],
[3,3,3,3,3,3,3,3,0,0,0,0,0,0,3,3,3,3,3,3],
[0,0,0,0,0,0,0,3,0,0,3,3,3,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,3,0,0,3,0,0,3,3,3,3,3,3,3],
[0,0,0,0,0,0,0,0,5,5,0,0,0,0,0,0,0,0,0,0],

];
var map10005 = new map(lvllayout10005,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map10005);

 var waypoint10065 = new Array();
 waypoint10065.push(new Point(10,8));
 waypoint10065.push(new Point(10,11));
 waypoint10065.push(new Point(13,11));
 waypoint10065.push(new Point(13,8));
 var enemy10065 = new ENEMY2(10,8,waypoint10065,lvllayout10005,light,enemy);
 map10005.addEnemy(enemy10065);
 var waypoint10066 = new Array();
 waypoint10066.push(new Point(8,11));
 waypoint10066.push(new Point(11,11));
 waypoint10066.push(new Point(11,14));
 waypoint10066.push(new Point(8,14));
 var enemy10066 = new ENEMY2(8,11,waypoint10066,lvllayout10005,light,enemy);
 map10005.addEnemy(enemy10066);
 var waypoint10067 = new Array();
 waypoint10067.push(new Point(0,8));
 waypoint10067.push(new Point(0,15));
 waypoint10067.push(new Point(4,15));
 waypoint10067.push(new Point(4,14));
 waypoint10067.push(new Point(8,14));
 waypoint10067.push(new Point(8,8));
 var enemy10067 = new ENEMY2(0,8,waypoint10067,lvllayout10005,light,enemy);
 map10005.addEnemy(enemy10067);
 var waypoint10068 = new Array();
 waypoint10068.push(new Point(0,0));
 waypoint10068.push(new Point(0,7));
 waypoint10068.push(new Point(7,7));
 waypoint10068.push(new Point(7,4));
 waypoint10068.push(new Point(8,4));
 waypoint10068.push(new Point(8,0));
 var enemy10068 = new ENEMY2(0,0,waypoint10068,lvllayout10005,light,enemy);
 map10005.addEnemy(enemy10068);
 var waypoint10069 = new Array();
 waypoint10069.push(new Point(8,7));
 waypoint10069.push(new Point(8,0));
 waypoint10069.push(new Point(15,0));
 waypoint10069.push(new Point(15,7));
 var enemy10069 = new ENEMY2(8,7,waypoint10069,lvllayout10005,light,enemy);
 map10005.addEnemy(enemy10069);
 var waypoint10070 = new Array();
 waypoint10070.push(new Point(0,15));
 waypoint10070.push(new Point(0,19));
 waypoint10070.push(new Point(4,19));
 waypoint10070.push(new Point(4,15));
 var enemy10070 = new ENEMY2(0,15,waypoint10070,lvllayout10005,light,enemy);
 map10005.addEnemy(enemy10070);
 var waypoint10071 = new Array();
 waypoint10071.push(new Point(16,8));
 waypoint10071.push(new Point(16,13));
 waypoint10071.push(new Point(17,13));
 waypoint10071.push(new Point(17,19));
 var enemy10071 = new ENEMY2(16,8,waypoint10071,lvllayout10005,light,enemy);
 map10005.addEnemy(enemy10071);
 var waypoint10072 = new Array();
 waypoint10072.push(new Point(15,12));
 waypoint10072.push(new Point(12,12));
 waypoint10072.push(new Point(12,15));
 waypoint10072.push(new Point(5,15));
 var enemy10072 = new ENEMY2(15,12,waypoint10072,lvllayout10005,light,enemy);
 map10005.addEnemy(enemy10072);
 }