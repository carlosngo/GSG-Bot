function Exam11(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout11=[
[3,3,3,3,3,3,3,0,3,0,0,3,0,3,3,3,3,3,3,3],
[3,0,0,0,0,0,3,0,3,0,0,3,0,3,0,0,0,3,5,3],
[3,0,3,3,0,3,3,0,3,0,0,3,0,3,0,3,0,0,0,3],
[3,0,3,3,0,3,3,3,3,0,0,3,3,3,0,3,3,0,3,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3],
[3,3,0,3,3,3,3,3,0,3,3,3,3,0,3,0,3,3,3,3],
[3,3,0,0,0,3,0,0,0,0,0,0,0,0,3,0,0,0,0,3],
[3,3,0,3,0,3,0,3,3,3,3,0,3,0,3,0,3,0,0,3],
[3,0,0,3,0,0,0,3,0,0,3,0,3,0,0,0,3,0,0,3],
[3,3,0,3,3,3,0,0,0,0,3,0,3,3,3,0,3,3,0,3],
[3,3,0,3,3,3,0,0,0,0,3,0,3,3,3,0,3,3,0,3],
[3,0,0,3,0,0,0,3,0,0,3,0,3,0,0,0,3,0,0,3],
[3,3,0,3,0,3,0,3,3,3,3,0,3,0,3,0,3,0,0,3],
[3,3,0,0,0,3,0,0,0,0,0,0,0,0,3,0,0,0,0,3],
[3,3,0,3,3,3,3,3,0,3,3,3,3,0,3,0,3,3,3,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3],
[3,0,3,3,0,3,3,3,3,0,0,3,3,3,0,3,3,0,3,3],
[3,0,3,3,0,3,3,0,3,0,0,3,0,3,0,3,0,0,0,3],
[3,1,0,0,0,0,3,0,3,0,0,3,0,3,0,0,0,3,0,3],
[3,3,3,3,3,3,3,0,3,0,0,3,0,3,3,3,3,3,3,3],

];
var map11 = new map(lvllayout11,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map11);

 var waypoint10246 = new Array();
 waypoint10246.push(new Point(2,17));
 waypoint10246.push(new Point(1,14));
 waypoint10246.push(new Point(4,14));
 waypoint10246.push(new Point(4,17));
 var enemy10246 = new ENEMY2(2,17,waypoint10246,lvllayout11,light,enemy);
 map11.addEnemy(enemy10246);

 var waypoint10247 = new Array();
 waypoint10247.push(new Point(15,1));
 waypoint10247.push(new Point(15,4));
 waypoint10247.push(new Point(18,4));
 waypoint10247.push(new Point(18,5));
 var enemy10247 = new ENEMY2(15,1,waypoint10247,lvllayout11,light,enemy);
 map11.addEnemy(enemy10247);
 var waypoint10248 = new Array();
 waypoint10248.push(new Point(15,9));
 waypoint10248.push(new Point(19,9));
 waypoint10248.push(new Point(19,10));
 waypoint10248.push(new Point(15,10));
 var enemy10248 = new ENEMY2(15,9,waypoint10248,lvllayout11,light,enemy);
 map11.addEnemy(enemy10248);
 var waypoint10249 = new Array();
 waypoint10249.push(new Point(0,9));
 waypoint10249.push(new Point(0,10));
 waypoint10249.push(new Point(4,10));
 waypoint10249.push(new Point(4,9));
 var enemy10249 = new ENEMY2(0,9,waypoint10249,lvllayout11,light,enemy);
 map11.addEnemy(enemy10249);
 var waypoint10250 = new Array();
 waypoint10250.push(new Point(4,1));
 waypoint10250.push(new Point(1,1));
 waypoint10250.push(new Point(1,4));
 waypoint10250.push(new Point(1,5));
 waypoint10250.push(new Point(4,4));
 var enemy10250 = new ENEMY2(4,1,waypoint10250,lvllayout11,light,enemy);
 map11.addEnemy(enemy10250);
 var waypoint10251 = new Array();
 waypoint10251.push(new Point(15,14));
 waypoint10251.push(new Point(15,17));
 waypoint10251.push(new Point(17,17));
 waypoint10251.push(new Point(18,14));
 var enemy10251 = new ENEMY2(15,14,waypoint10251,lvllayout11,light,enemy);
 map11.addEnemy(enemy10251);
 var waypoint10252 = new Array();
 waypoint10252.push(new Point(6,15));
 waypoint10252.push(new Point(6,18));
 waypoint10252.push(new Point(13,18));
 waypoint10252.push(new Point(13,15));
 var enemy10252 = new ENEMY2(6,15,waypoint10252,lvllayout11,light,enemy);
 map11.addEnemy(enemy10252);
 var waypoint10253 = new Array();
 waypoint10253.push(new Point(13,18));
 waypoint10253.push(new Point(13,15));
 waypoint10253.push(new Point(6,15));
 waypoint10253.push(new Point(6,18));
 var enemy10253 = new ENEMY2(13,18,waypoint10253,lvllayout11,light,enemy);
 map11.addEnemy(enemy10253);
 var waypoint10254 = new Array();
 waypoint10254.push(new Point(6,6));
 waypoint10254.push(new Point(6,11));
 waypoint10254.push(new Point(13,11));
 waypoint10254.push(new Point(13,6));
 var enemy10254 = new ENEMY2(6,6,waypoint10254,lvllayout11,light,enemy);
 map11.addEnemy(enemy10254);
 var waypoint10255 = new Array();
 waypoint10255.push(new Point(6,2));
 waypoint10255.push(new Point(6,4));
 waypoint10255.push(new Point(8,4));
 waypoint10255.push(new Point(8,6));
 waypoint10255.push(new Point(11,6));
 waypoint10255.push(new Point(11,4));
 waypoint10255.push(new Point(13,4));
 waypoint10255.push(new Point(13,2));
 var enemy10255 = new ENEMY2(6,2,waypoint10255,lvllayout11,light,enemy);
 map11.addEnemy(enemy10255);
}