function Exam7(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout7=[
[0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[0,0,3,3,0,0,0,0,0,0,0,3,0,0,0,3,0,0,0,3],
[0,3,1,3,0,3,0,3,0,0,0,3,0,0,0,3,0,3,0,3],
[3,0,0,3,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,3],
[3,0,0,3,0,3,0,3,0,0,0,3,3,3,0,3,0,3,0,3],
[3,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3],
[3,0,0,3,0,3,0,3,3,3,3,3,0,0,0,3,0,3,0,3],
[3,0,0,3,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,3],
[3,0,0,3,0,3,0,3,0,3,0,3,3,3,3,3,0,3,0,3],
[3,0,0,3,0,0,0,3,0,0,0,0,0,0,0,3,0,3,5,3],
[3,0,0,3,0,3,0,3,3,3,3,3,0,0,0,3,0,3,5,3],
[3,0,0,3,0,0,0,0,0,0,0,3,3,0,0,3,0,3,3,3],
[3,0,0,3,0,3,0,3,0,3,0,3,3,0,0,3,0,0,0,3],
[3,0,0,3,0,0,0,3,0,3,0,3,0,0,0,3,3,3,0,3],
[3,0,0,3,3,3,3,3,0,0,0,3,0,0,0,0,0,3,0,3],
[3,0,0,3,0,0,0,0,0,3,0,3,0,0,0,3,0,3,0,3],
[3,0,0,3,0,0,0,3,0,0,0,3,0,0,0,0,0,3,0,3],
[0,3,0,0,0,0,0,3,0,3,0,3,0,0,0,3,3,3,0,3],
[0,0,3,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,0,3],
[0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],

];
var map7 = new map(lvllayout7,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map7);


 var waypoint10214 = new Array();
 waypoint10214.push(new Point(7,16));
 waypoint10214.push(new Point(7,18));
 var enemy10214 = new ENEMY2(7,16,waypoint10214,lvllayout7,light,enemy);
 map7.addEnemy(enemy10214);
 var waypoint10215 = new Array();
 waypoint10215.push(new Point(5,18));
 waypoint10215.push(new Point(5,16));
 var enemy10215 = new ENEMY2(5,18,waypoint10215,lvllayout7,light,enemy);
 map7.addEnemy(enemy10215);
 var waypoint10216 = new Array();
 waypoint10216.push(new Point(3,16));
 waypoint10216.push(new Point(3,18));
 var enemy10216 = new ENEMY2(3,16,waypoint10216,lvllayout7,light,enemy);
 map7.addEnemy(enemy10216);
 var waypoint10217 = new Array();
 waypoint10217.push(new Point(13,12));
 waypoint10217.push(new Point(13,14));
 waypoint10217.push(new Point(18,14));
 waypoint10217.push(new Point(18,12));
 var enemy10217 = new ENEMY2(13,12,waypoint10217,lvllayout7,light,enemy);
 map7.addEnemy(enemy10217);
 var waypoint10218 = new Array();
 waypoint10218.push(new Point(5,12));
 waypoint10218.push(new Point(5,14));
 waypoint10218.push(new Point(7,14));
 waypoint10218.push(new Point(7,8));
 waypoint10218.push(new Point(9,8));
 waypoint10218.push(new Point(9,10));
 var enemy10218 = new ENEMY2(5,12,waypoint10218,lvllayout7,light,enemy);
 map7.addEnemy(enemy10218);
 var waypoint10219 = new Array();
 waypoint10219.push(new Point(1,8));
 waypoint10219.push(new Point(1,10));
 waypoint10219.push(new Point(5,10));
 waypoint10219.push(new Point(5,8));
 var enemy10219 = new ENEMY2(1,8,waypoint10219,lvllayout7,light,enemy);
 map7.addEnemy(enemy10219);
 var waypoint10220 = new Array();
 waypoint10220.push(new Point(1,6));
 waypoint10220.push(new Point(13,6));
 var enemy10220 = new ENEMY2(1,6,waypoint10220,lvllayout7,light,enemy);
 map7.addEnemy(enemy10220);
 var waypoint10221 = new Array();
 waypoint10221.push(new Point(13,4));
 waypoint10221.push(new Point(1,4));
 var enemy10221 = new ENEMY2(13,4,waypoint10221,lvllayout7,light,enemy);
 map7.addEnemy(enemy10221);
 var waypoint10222 = new Array();
 waypoint10222.push(new Point(11,8));
 waypoint10222.push(new Point(11,10));
 waypoint10222.push(new Point(18,10));
 waypoint10222.push(new Point(18,8));
 var enemy10222 = new ENEMY2(11,8,waypoint10222,lvllayout7,light,enemy);
 map7.addEnemy(enemy10222);
 var waypoint10223 = new Array();
 waypoint10223.push(new Point(18,10));
 waypoint10223.push(new Point(18,8));
 waypoint10223.push(new Point(11,8));
 waypoint10223.push(new Point(11,10));
 var enemy10223 = new ENEMY2(18,10,waypoint10223,lvllayout7,light,enemy);
 map7.addEnemy(enemy10223);
 var waypoint10224 = new Array();
 waypoint10224.push(new Point(17,6));
 waypoint10224.push(new Point(17,2));
 waypoint10224.push(new Point(5,2));
 var enemy10224 = new ENEMY2(17,6,waypoint10224,lvllayout7,light,enemy);
 map7.addEnemy(enemy10224);
}