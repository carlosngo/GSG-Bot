function Level10(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout10=[
[5,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,0,0,3,0,3,0,0,3,3,0,0,3,0,0,3,3,0,0],
[0,0,3,3,0,0,3,0,3,0,0,3,0,3,0,3,0,0,3,0],
[0,0,3,3,0,0,3,0,3,0,0,3,0,3,0,3,0,0,3,0],
[0,3,0,0,3,0,3,0,0,3,3,0,0,3,0,0,3,3,0,0],
[0,0,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,0],
[0,3,3,3,3,3,3,0,3,3,3,3,3,3,3,3,3,3,3,0],
[0,0,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,0],
[0,3,0,0,3,0,3,0,3,0,0,3,0,3,0,0,3,3,0,0],
[0,0,3,3,0,0,3,0,0,3,3,0,0,3,0,3,0,0,3,0],
[0,0,3,3,0,0,3,0,0,3,3,0,0,3,0,3,0,0,3,0],
[0,3,0,0,3,0,3,0,3,0,0,3,0,3,0,0,3,3,0,0],
[0,0,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,0],
[3,3,3,3,3,0,3,3,3,3,3,3,0,3,0,3,3,3,3,3],
[0,0,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,0],
[0,0,3,3,0,0,3,0,3,0,0,3,0,3,0,0,3,3,0,0],
[0,3,0,0,3,0,3,0,0,3,3,0,0,3,0,3,1,0,3,0],
[0,3,0,0,3,0,3,0,0,3,3,0,0,3,0,3,0,0,0,0],
[0,0,3,3,0,0,3,0,3,0,0,3,0,3,0,0,3,3,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0],

];
var map10 = new map(lvllayout10,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map10);

 var waypoint60 = new Array();
 waypoint60.push(new Point(19,16));
 waypoint60.push(new Point(19,14));
 waypoint60.push(new Point(14,14));
 waypoint60.push(new Point(14,19));
 waypoint60.push(new Point(16,19));
 var enemy60 = new ENEMY2(19,16,waypoint60,lvllayout10,light,enemy);
 map10.addEnemy(enemy60);
 var waypoint61 = new Array();
 waypoint61.push(new Point(12,14));
 waypoint61.push(new Point(7,14));
 waypoint61.push(new Point(7,19));
 waypoint61.push(new Point(12,19));
 var enemy61 = new ENEMY2(12,14,waypoint61,lvllayout10,light,enemy);
 map10.addEnemy(enemy61);
 var waypoint62 = new Array();
 waypoint62.push(new Point(5,14));
 waypoint62.push(new Point(5,19));
 var enemy62 = new ENEMY2(5,14,waypoint62,lvllayout10,light,enemy);
 map10.addEnemy(enemy62);
 var waypoint63 = new Array();
 waypoint63.push(new Point(0,19));
 waypoint63.push(new Point(0,14));
 var enemy63 = new ENEMY2(0,19,waypoint63,lvllayout10,light,enemy);
 map10.addEnemy(enemy63);
 var waypoint64 = new Array();
 waypoint64.push(new Point(0,10));
 waypoint64.push(new Point(0,7));
 waypoint64.push(new Point(3,7));
 var enemy64 = new ENEMY2(0,10,waypoint64,lvllayout10,light,enemy);
 map10.addEnemy(enemy64);
 var waypoint65 = new Array();
 waypoint65.push(new Point(2,12));
 waypoint65.push(new Point(5,12));
 waypoint65.push(new Point(5,9));
 var enemy65 = new ENEMY2(2,12,waypoint65,lvllayout10,light,enemy);
 map10.addEnemy(enemy65);
 var waypoint66 = new Array();
 waypoint66.push(new Point(7,8));
 waypoint66.push(new Point(7,12));
 waypoint66.push(new Point(11,12));
 var enemy66 = new ENEMY2(7,8,waypoint66,lvllayout10,light,enemy);
 map10.addEnemy(enemy66);
 var waypoint67 = new Array();
 waypoint67.push(new Point(12,10));
 waypoint67.push(new Point(12,7));
 waypoint67.push(new Point(8,7));
 var enemy67 = new ENEMY2(12,10,waypoint67,lvllayout10,light,enemy);
 map10.addEnemy(enemy67);
 var waypoint68 = new Array();
 waypoint68.push(new Point(14,7));
 waypoint68.push(new Point(14,11));
 var enemy68 = new ENEMY2(14,7,waypoint68,lvllayout10,light,enemy);
 map10.addEnemy(enemy68);
 var waypoint69 = new Array();
 waypoint69.push(new Point(16,12));
 waypoint69.push(new Point(19,12));
 waypoint69.push(new Point(19,9));
 var enemy69 = new ENEMY2(16,12,waypoint69,lvllayout10,light,enemy);
 map10.addEnemy(enemy69);
 var waypoint70 = new Array();
 waypoint70.push(new Point(7,5));
 waypoint70.push(new Point(19,5));
 var enemy70 = new ENEMY2(7,5,waypoint70,lvllayout10,light,enemy);
 map10.addEnemy(enemy70);
 var waypoint71 = new Array();
 waypoint71.push(new Point(14,1));
 waypoint71.push(new Point(14,5));
 waypoint71.push(new Point(12,5));
 waypoint71.push(new Point(12,1));
 var enemy71 = new ENEMY2(14,1,waypoint71,lvllayout10,light,enemy);
 map10.addEnemy(enemy71);
 var waypoint72 = new Array();
 waypoint72.push(new Point(4,0));
 waypoint72.push(new Point(11,0));
 var enemy72 = new ENEMY2(4,0,waypoint72,lvllayout10,light,enemy);
 map10.addEnemy(enemy72);
 var waypoint73 = new Array();
 waypoint73.push(new Point(1,5));
 waypoint73.push(new Point(5,5));
 waypoint73.push(new Point(5,2));
 var enemy73 = new ENEMY2(1,5,waypoint73,lvllayout10,light,enemy);
 map10.addEnemy(enemy73);
 
 }