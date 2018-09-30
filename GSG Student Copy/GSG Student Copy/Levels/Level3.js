function Level3(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout3=[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0],
[0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0],
[0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0],
[0,0,3,0,0,3,3,0,0,0,3,3,0,0,0,0,1,3,0,0],
[0,0,3,0,0,3,3,0,0,0,3,3,0,0,0,0,0,3,0,0],
[0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0],
[0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0],
[0,0,3,0,0,3,3,0,0,0,3,3,0,0,3,0,0,0,0,0],
[0,0,3,0,0,3,3,0,0,0,3,3,0,0,0,0,0,0,0,0],
[0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0],
[0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0],
[0,0,3,3,3,3,3,0,0,0,3,3,3,3,3,0,0,0,0,0],
[0,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,3,0,5,0,3,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

];
var map3 = new map(lvllayout3,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map3);
 
 var waypoint10093 = new Array();
 waypoint10093.push(new Point(4,9));
 waypoint10093.push(new Point(4,12));
 waypoint10093.push(new Point(7,12));
 waypoint10093.push(new Point(7,9));
 var enemy10093 = new ENEMY2(4,9,waypoint10093,lvllayout3,light,enemy);
 map3.addEnemy(enemy10093);
 var waypoint10094 = new Array();
 waypoint10094.push(new Point(11,12));
 waypoint10094.push(new Point(8,12));
 waypoint10094.push(new Point(8,9));
 waypoint10094.push(new Point(11,9));
 var enemy10094 = new ENEMY2(11,12,waypoint10094,lvllayout3,light,enemy);
 map3.addEnemy(enemy10094);
 var waypoint10095 = new Array();
 waypoint10095.push(new Point(7,4));
 waypoint10095.push(new Point(4,4));
 waypoint10095.push(new Point(4,7));
 waypoint10095.push(new Point(7,7));
 var enemy10095 = new ENEMY2(7,4,waypoint10095,lvllayout3,light,enemy);
 map3.addEnemy(enemy10095);
 var waypoint10096 = new Array();
 waypoint10096.push(new Point(11,7));
 waypoint10096.push(new Point(11,4));
 waypoint10096.push(new Point(8,4));
 waypoint10096.push(new Point(8,7));
 var enemy10096 = new ENEMY2(11,7,waypoint10096,lvllayout3,light,enemy);
 map3.addEnemy(enemy10096);
 var waypoint10097 = new Array();
 waypoint10097.push(new Point(12,3));
 waypoint10097.push(new Point(12,13));
 var enemy10097 = new ENEMY2(12,3,waypoint10097,lvllayout3,light,enemy);
 map3.addEnemy(enemy10097);
 var waypoint10098 = new Array();
 waypoint10098.push(new Point(3,3));
 waypoint10098.push(new Point(3,13));
 var enemy10098 = new ENEMY2(3,3,waypoint10098,lvllayout3,light,enemy);
 map3.addEnemy(enemy10098);
 var waypoint10099 = new Array();
 waypoint10099.push(new Point(13,7));
 waypoint10099.push(new Point(13,9));
 waypoint10099.push(new Point(16,9));
 waypoint10099.push(new Point(16,7));
 var enemy10099 = new ENEMY2(13,7,waypoint10099,lvllayout3,light,enemy);
 map3.addEnemy(enemy10099);
 }