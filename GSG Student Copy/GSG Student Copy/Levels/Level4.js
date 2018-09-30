function Level4(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout4=[
[3,3,3,3,3,3,3,3,0,0,0,3,3,0,0,0,0,3,0,0],
[0,0,0,0,0,0,0,0,0,3,0,0,0,0,3,3,0,0,0,0],
[3,3,3,3,0,0,0,3,3,3,3,3,3,3,3,3,3,0,3,0],
[5,0,0,3,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,3,0,0,0,3,0,3,3,3,3,3,0,3,3,3,3,3],
[0,0,0,3,3,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,3,0,0,0,3,3,3,3,3,0,3,3,3,3,3,3,0],
[0,0,0,3,1,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,0,3,3,3],
[0,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,0],
[3,0,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,3,0],
[0,0,3,0,0,0,3,3,0,3,3,3,3,0,3,3,3,0,3,0],
[3,0,0,0,3,0,0,3,0,3,0,0,0,0,0,0,3,0,3,0],
[0,0,3,0,0,0,3,3,0,3,0,3,3,3,3,0,3,0,3,0],
[3,0,0,0,3,0,0,3,0,3,0,3,0,0,0,0,0,0,3,0],
[0,0,3,0,0,0,3,3,0,3,0,3,0,3,3,3,3,0,3,0],
[3,0,0,0,3,0,0,3,0,3,0,3,0,0,0,0,0,0,3,0],
[0,0,3,0,0,0,3,3,0,3,0,3,3,3,3,3,3,3,3,0],
[3,0,0,0,3,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0],

];
var map4 = new map(lvllayout4,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map4);

 var waypoint0 = new Array();
 waypoint0.push(new Point(1,8));
 waypoint0.push(new Point(1,0));
 var enemy0 = new ENEMY2(1,8,waypoint0,lvllayout4,light,enemy);
 map4.addEnemy(enemy0);
 var waypoint1 = new Array();
 waypoint1.push(new Point(0,16));
 waypoint1.push(new Point(0,19));
 waypoint1.push(new Point(3,19));
 waypoint1.push(new Point(3,16));
 var enemy1 = new ENEMY2(0,16,waypoint1,lvllayout4,light,enemy);
 map4.addEnemy(enemy1);
 var waypoint2 = new Array();
 waypoint2.push(new Point(3,8));
 waypoint2.push(new Point(3,14));
 waypoint2.push(new Point(5,14));
 waypoint2.push(new Point(5,8));
 var enemy2 = new ENEMY2(3,8,waypoint2,lvllayout4,light,enemy);
 map4.addEnemy(enemy2);
 var waypoint3 = new Array();
 waypoint3.push(new Point(5,12));
 waypoint3.push(new Point(5,19));
 waypoint3.push(new Point(7,19));
 waypoint3.push(new Point(7,12));
 var enemy3 = new ENEMY2(5,12,waypoint3,lvllayout4,light,enemy);
 map4.addEnemy(enemy3);
 var waypoint4 = new Array();
 waypoint4.push(new Point(9,10));
 waypoint4.push(new Point(9,19));
 var enemy4 = new ENEMY2(9,10,waypoint4,lvllayout4,light,enemy);
 map4.addEnemy(enemy4);
 var waypoint5 = new Array();
 waypoint5.push(new Point(13,11));
 waypoint5.push(new Point(15,12));
 waypoint5.push(new Point(17,12));
 waypoint5.push(new Point(15,17));
 var enemy5 = new ENEMY2(13,11,waypoint5,lvllayout4,light,enemy);
 map4.addEnemy(enemy5);
 var waypoint6 = new Array();
 waypoint6.push(new Point(12,3));
 waypoint6.push(new Point(19,3));
 var enemy6 = new ENEMY2(12,3,waypoint6,lvllayout4,light,enemy);
 map4.addEnemy(enemy6);
 var waypoint7 = new Array();
 waypoint7.push(new Point(12,1));
 waypoint7.push(new Point(19,1));
 var enemy7 = new ENEMY2(12,1,waypoint7,lvllayout4,light,enemy);
 map4.addEnemy(enemy7);
 var waypoint8 = new Array();
 waypoint8.push(new Point(14,1));
 waypoint8.push(new Point(14,3));
 waypoint8.push(new Point(18,3));
 waypoint8.push(new Point(18,1));
 var enemy8 = new ENEMY2(14,1,waypoint8,lvllayout4,light,enemy);
 map4.addEnemy(enemy8);
 var waypoint9 = new Array();
 waypoint9.push(new Point(9,0));
 waypoint9.push(new Point(9,3));
 waypoint9.push(new Point(10,3));
 waypoint9.push(new Point(10,0));
 var enemy9 = new ENEMY2(9,0,waypoint9,lvllayout4,light,enemy);
 map4.addEnemy(enemy9);
 }