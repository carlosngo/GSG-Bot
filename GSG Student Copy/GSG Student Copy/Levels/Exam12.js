function Exam12(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout12=[
[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0],

];
var map12 = new map(lvllayout12,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map12);

 var waypoint10256 = new Array();
 waypoint10256.push(new Point(4,9));
 waypoint10256.push(new Point(16,9));
 var enemy10256 = new ENEMY2(4,9,waypoint10256,lvllayout12,light,enemy);
 map12.addEnemy(enemy10256);
 var waypoint10257 = new Array();
 waypoint10257.push(new Point(3,9));
 waypoint10257.push(new Point(3,1));
 var enemy10257 = new ENEMY2(3,9,waypoint10257,lvllayout12,light,enemy);
 map12.addEnemy(enemy10257);
 var waypoint10258 = new Array();
 waypoint10258.push(new Point(16,9));
 waypoint10258.push(new Point(16,2));
 var enemy10258 = new ENEMY2(16,9,waypoint10258,lvllayout12,light,enemy);
 map12.addEnemy(enemy10258);
 var waypoint10259 = new Array();
 waypoint10259.push(new Point(3,9));
 waypoint10259.push(new Point(3,16));
 var enemy10259 = new ENEMY2(3,9,waypoint10259,lvllayout12,light,enemy);
 map12.addEnemy(enemy10259);
 var waypoint10260 = new Array();
 waypoint10260.push(new Point(16,9));
 waypoint10260.push(new Point(16,16));
 var enemy10260 = new ENEMY2(16,9,waypoint10260,lvllayout12,light,enemy);
 map12.addEnemy(enemy10260);
 var waypoint10261 = new Array();
 waypoint10261.push(new Point(3,16));
 waypoint10261.push(new Point(16,16));
 var enemy10261 = new ENEMY2(3,16,waypoint10261,lvllayout12,light,enemy);
 map12.addEnemy(enemy10261);
 var waypoint10262 = new Array();
 waypoint10262.push(new Point(3,2));
 waypoint10262.push(new Point(16,2));
 var enemy10262 = new ENEMY2(3,2,waypoint10262,lvllayout12,light,enemy);
 map12.addEnemy(enemy10262);
}