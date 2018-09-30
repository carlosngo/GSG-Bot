function Exam6(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout6=[
[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,3,0,1,3],
[3,0,3,3,3,3,3,0,0,0,0,0,0,3,0,0,3,0,0,3],
[3,0,3,0,0,0,3,0,0,3,3,3,3,3,3,0,0,0,0,3],
[3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,3,3,3],
[3,0,3,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,3],
[3,0,3,0,0,0,3,0,3,3,3,3,0,3,0,3,0,3,0,3],
[3,0,3,0,0,0,3,0,3,0,0,0,0,3,0,0,0,0,0,3],
[3,0,3,0,0,0,3,0,0,0,0,0,0,0,0,3,0,3,0,3],
[3,0,0,0,0,0,0,0,3,3,3,3,0,3,0,0,0,0,0,3],
[3,0,3,0,0,0,3,0,0,0,0,0,0,3,0,3,0,3,0,3],
[3,0,3,3,3,3,3,0,3,3,3,3,0,3,0,0,0,0,0,3],
[3,0,0,0,0,0,0,0,0,3,0,0,0,3,3,3,3,3,0,3],
[3,0,0,0,3,3,0,0,0,0,3,0,0,3,0,0,0,0,0,3],
[3,0,0,3,0,3,0,0,0,3,0,0,0,3,0,3,3,0,0,3],
[3,0,0,0,0,3,0,0,3,3,3,3,0,3,0,3,3,0,0,3],
[3,3,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,3,0,0,0,3,3,3,0,3,0,0,3,3,0,0,3],
[3,5,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],

];
var map6 = new map(lvllayout6,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map6);

 var waypoint10202 = new Array();
 waypoint10202.push(new Point(2,10));
 waypoint10202.push(new Point(1,14));
 var enemy10202 = new ENEMY2(2,10,waypoint10202,lvllayout6,light,enemy);
 map6.addEnemy(enemy10202);
 var waypoint10203 = new Array();
 waypoint10203.push(new Point(10,14));
 waypoint10203.push(new Point(8,14));
 var enemy10203 = new ENEMY2(10,14,waypoint10203,lvllayout6,light,enemy);
 map6.addEnemy(enemy10203);
 var waypoint10204 = new Array();
 waypoint10204.push(new Point(13,15));
 waypoint10204.push(new Point(15,14));
 var enemy10204 = new ENEMY2(13,15,waypoint10204,lvllayout6,light,enemy);
 map6.addEnemy(enemy10204);
 var waypoint10205 = new Array();
 waypoint10205.push(new Point(7,12));
 waypoint10205.push(new Point(14,12));
 var enemy10205 = new ENEMY2(7,12,waypoint10205,lvllayout6,light,enemy);
 map6.addEnemy(enemy10205);
 var waypoint10206 = new Array();
 waypoint10206.push(new Point(12,3));
 waypoint10206.push(new Point(13,3));
 var enemy10206 = new ENEMY2(12,3,waypoint10206,lvllayout6,light,enemy);
 map6.addEnemy(enemy10206);
 var waypoint10207 = new Array();
 waypoint10207.push(new Point(1,1));
 waypoint10207.push(new Point(4,1));
 waypoint10207.push(new Point(4,7));
 waypoint10207.push(new Point(1,7));
 var enemy10207 = new ENEMY2(1,1,waypoint10207,lvllayout6,light,enemy);
 map6.addEnemy(enemy10207);
 var waypoint10208 = new Array();
 waypoint10208.push(new Point(3,3));
 waypoint10208.push(new Point(6,3));
 waypoint10208.push(new Point(6,5));
 waypoint10208.push(new Point(3,5));
 var enemy10208 = new ENEMY2(3,3,waypoint10208,lvllayout6,light,enemy);
 map6.addEnemy(enemy10208);
 var waypoint10209 = new Array();
 waypoint10209.push(new Point(16,9));
 waypoint10209.push(new Point(16,15));
 var enemy10209 = new ENEMY2(16,9,waypoint10209,lvllayout6,light,enemy);
 map6.addEnemy(enemy10209);
 var waypoint10210 = new Array();
 waypoint10210.push(new Point(8,10));
 waypoint10210.push(new Point(8,12));
 waypoint10210.push(new Point(10,12));
 waypoint10210.push(new Point(10,10));
 var enemy10210 = new ENEMY2(8,10,waypoint10210,lvllayout6,light,enemy);
 map6.addEnemy(enemy10210);
}