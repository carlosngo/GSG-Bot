function Exam9(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout9=[
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,3,3,3,0,0,0,0,0,3,3,3,3,3,3,0,0,3],
[0,3,3,0,0,0,3,0,0,0,3,0,0,0,0,0,3,0,3,3],
[3,3,3,0,0,0,3,0,0,3,0,0,3,0,0,0,3,0,3,3],
[3,3,3,3,3,3,0,3,3,0,0,0,3,0,0,0,0,0,3,3],
[3,3,3,0,0,3,0,0,3,0,0,0,3,3,0,3,3,3,3,3],
[3,3,3,0,0,3,0,0,0,0,0,0,0,3,3,3,0,0,3,3],
[3,3,0,0,0,0,0,0,3,3,3,3,3,0,0,0,0,3,3,3],
[3,3,0,0,0,0,0,0,3,0,0,0,3,5,0,0,0,3,0,0],
[3,3,0,0,0,0,0,0,3,0,0,0,3,0,0,0,0,3,0,0],
[3,3,0,0,0,0,0,0,3,0,0,0,3,5,0,0,0,3,0,0],
[3,3,0,0,0,0,0,0,3,3,3,3,3,0,0,0,0,3,3,3],
[3,3,3,3,3,0,3,0,3,0,0,0,0,3,0,3,0,0,3,3],
[3,3,0,0,0,0,3,0,0,0,0,0,3,3,0,3,3,3,3,3],
[3,3,3,3,3,3,3,3,3,0,0,0,3,0,0,0,0,0,3,3],
[0,3,0,3,0,0,3,0,0,3,0,0,3,0,0,0,3,0,3,3],
[0,3,0,3,0,0,3,0,0,0,3,0,3,0,0,0,3,0,3,3],
[0,3,0,3,3,3,3,0,0,0,0,0,3,3,3,3,3,0,0,3],
[0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

];
var map9 = new map(lvllayout9,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map9);

 var waypoint10229 = new Array();
 waypoint10229.push(new Point(0,7));
 waypoint10229.push(new Point(3,7));
 waypoint10229.push(new Point(3,8));
 waypoint10229.push(new Point(0,8));
 var enemy10229 = new ENEMY2(0,7,waypoint10229,lvllayout9,light,enemy);
 map9.addEnemy(enemy10229);
 /*
 var waypoint10230 = new Array();
 waypoint10230.push(new Point(1,18));
 waypoint10230.push(new Point(1,17));
 waypoint10230.push(new Point(4,17));
 waypoint10230.push(new Point(4,14));
 waypoint10230.push(new Point(5,14));
 waypoint10230.push(new Point(2,14));
 var enemy10230 = new ENEMY2(1,18,waypoint10230,lvllayout9,light,enemy);
 map9.addEnemy(enemy10230);*/
 /*
 var waypoint10231 = new Array();
 waypoint10231.push(new Point(6,12));
 waypoint10231.push(new Point(6,6));
 waypoint10231.push(new Point(4,6));
 var enemy10231 = new ENEMY2(6,12,waypoint10231,lvllayout9,light,enemy);
 map9.addEnemy(enemy10231);
 */
 var waypoint10232 = new Array();
 waypoint10232.push(new Point(11,7));
 waypoint10232.push(new Point(11,2));
 var enemy10232 = new ENEMY2(11,7,waypoint10232,lvllayout9,light,enemy);
 map9.addEnemy(enemy10232);
 
 var waypoint10233 = new Array();
 waypoint10233.push(new Point(5,4));
 waypoint10233.push(new Point(8,4));
 var enemy10233 = new ENEMY2(5,4,waypoint10233,lvllayout9,light,enemy);
 map9.addEnemy(enemy10233);
 
 var waypoint10234 = new Array();
 waypoint10234.push(new Point(12,12));
 waypoint10234.push(new Point(12,9));
 waypoint10234.push(new Point(14,9));
 waypoint10234.push(new Point(14,11));
 var enemy10234 = new ENEMY2(12,12,waypoint10234,lvllayout9,light,enemy);
 map9.addEnemy(enemy10234);
 var waypoint10235 = new Array();
 waypoint10235.push(new Point(19,19));
 waypoint10235.push(new Point(19,0));
 var enemy10235 = new ENEMY2(19,19,waypoint10235,lvllayout9,light,enemy);
 map9.addEnemy(enemy10235);
 var waypoint10236 = new Array();
 waypoint10236.push(new Point(18,19));
 waypoint10236.push(new Point(18,6));
 var enemy10236 = new ENEMY2(18,19,waypoint10236,lvllayout9,light,enemy);
 map9.addEnemy(enemy10236);
 
 /*var waypoint10237 = new Array();
 waypoint10237.push(new Point(14,13));
 waypoint10237.push(new Point(16,13));
 waypoint10237.push(new Point(16,15));
 waypoint10237.push(new Point(14,15));
 var enemy10237 = new ENEMY2(14,13,waypoint10237,lvllayout9,light,enemy);
 map9.addEnemy(enemy10237);*/
 var waypoint10238 = new Array();
 waypoint10238.push(new Point(6,17));
 waypoint10238.push(new Point(6,16));
 waypoint10238.push(new Point(12,16));
 waypoint10238.push(new Point(12,17));
 var enemy10238 = new ENEMY2(6,17,waypoint10238,lvllayout9,light,enemy);
 map9.addEnemy(enemy10238);
}