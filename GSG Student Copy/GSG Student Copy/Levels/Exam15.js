function Exam15(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout15=[
[0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0],
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
[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],

];
var map15 = new map(lvllayout15,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map15);

 var waypoint10297 = new Array();
 waypoint10297.push(new Point(15,3));
 waypoint10297.push(new Point(3,19));
 var enemy10297 = new ENEMY2(15,3,waypoint10297,lvllayout15,light,enemy);
 map15.addEnemy(enemy10297);
 var waypoint10298 = new Array();
 waypoint10298.push(new Point(16,3));
 waypoint10298.push(new Point(3,19));
 var enemy10298 = new ENEMY2(16,3,waypoint10298,lvllayout15,light,enemy);
 map15.addEnemy(enemy10298);
 var waypoint10299 = new Array();
 waypoint10299.push(new Point(15,4));
 waypoint10299.push(new Point(3,19));
 var enemy10299 = new ENEMY2(15,4,waypoint10299,lvllayout15,light,enemy);
 map15.addEnemy(enemy10299);
 var waypoint10300 = new Array();
 waypoint10300.push(new Point(14,6));
 waypoint10300.push(new Point(3,19));
 var enemy10300 = new ENEMY2(14,6,waypoint10300,lvllayout15,light,enemy);
 map15.addEnemy(enemy10300);
 var waypoint10301 = new Array();
 waypoint10301.push(new Point(13,6));
 waypoint10301.push(new Point(3,19));
 var enemy10301 = new ENEMY2(13,6,waypoint10301,lvllayout15,light,enemy);
 map15.addEnemy(enemy10301);
 var waypoint10302 = new Array();
 waypoint10302.push(new Point(13,8));
 waypoint10302.push(new Point(3,19));
 var enemy10302 = new ENEMY2(13,8,waypoint10302,lvllayout15,light,enemy);
 map15.addEnemy(enemy10302);
 var waypoint10303 = new Array();
 waypoint10303.push(new Point(11,10));
 waypoint10303.push(new Point(3,19));
 var enemy10303 = new ENEMY2(11,10,waypoint10303,lvllayout15,light,enemy);
 map15.addEnemy(enemy10303);
 var waypoint10304 = new Array();
 waypoint10304.push(new Point(8,11));
 waypoint10304.push(new Point(3,19));
 var enemy10304 = new ENEMY2(8,11,waypoint10304,lvllayout15,light,enemy);
 map15.addEnemy(enemy10304);
 var waypoint10305 = new Array();
 waypoint10305.push(new Point(4,15));
 waypoint10305.push(new Point(3,19));
 waypoint10305.push(new Point(15,3));
 var enemy10305 = new ENEMY2(4,15,waypoint10305,lvllayout15,light,enemy);
 map15.addEnemy(enemy10305);
}