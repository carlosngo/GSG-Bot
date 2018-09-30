function Level10015(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout10015=[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
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
[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

];
var map10015 = new map(lvllayout10015,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map10015);

 var waypoint10157 = new Array();
 waypoint10157.push(new Point(2,18));
 waypoint10157.push(new Point(2,19));
 var enemy10157 = new ENEMY2(2,18,waypoint10157,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10157);
 var waypoint10158 = new Array();
 waypoint10158.push(new Point(3,17));
 waypoint10158.push(new Point(3,18));
 var enemy10158 = new ENEMY2(3,17,waypoint10158,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10158);
 var waypoint10159 = new Array();
 waypoint10159.push(new Point(4,16));
 waypoint10159.push(new Point(4,17));
 var enemy10159 = new ENEMY2(4,16,waypoint10159,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10159);
 var waypoint10160 = new Array();
 waypoint10160.push(new Point(5,15));
 waypoint10160.push(new Point(5,16));
 var enemy10160 = new ENEMY2(5,15,waypoint10160,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10160);
 var waypoint10161 = new Array();
 waypoint10161.push(new Point(6,14));
 waypoint10161.push(new Point(6,15));
 var enemy10161 = new ENEMY2(6,14,waypoint10161,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10161);
 var waypoint10162 = new Array();
 waypoint10162.push(new Point(7,13));
 waypoint10162.push(new Point(7,14));
 var enemy10162 = new ENEMY2(7,13,waypoint10162,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10162);
 var waypoint10163 = new Array();
 waypoint10163.push(new Point(8,12));
 waypoint10163.push(new Point(8,13));
 var enemy10163 = new ENEMY2(8,12,waypoint10163,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10163);
 var waypoint10164 = new Array();
 waypoint10164.push(new Point(9,11));
 waypoint10164.push(new Point(9,12));
 var enemy10164 = new ENEMY2(9,11,waypoint10164,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10164);
 var waypoint10165 = new Array();
 waypoint10165.push(new Point(10,10));
 waypoint10165.push(new Point(10,11));
 var enemy10165 = new ENEMY2(10,10,waypoint10165,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10165);
 var waypoint10166 = new Array();
 waypoint10166.push(new Point(11,9));
 waypoint10166.push(new Point(11,10));
 var enemy10166 = new ENEMY2(11,9,waypoint10166,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10166);
 var waypoint10167 = new Array();
 waypoint10167.push(new Point(12,8));
 waypoint10167.push(new Point(12,9));
 var enemy10167 = new ENEMY2(12,8,waypoint10167,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10167);
 var waypoint10168 = new Array();
 waypoint10168.push(new Point(13,7));
 waypoint10168.push(new Point(13,8));
 var enemy10168 = new ENEMY2(13,7,waypoint10168,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10168);
 var waypoint10169 = new Array();
 waypoint10169.push(new Point(14,6));
 waypoint10169.push(new Point(14,7));
 var enemy10169 = new ENEMY2(14,6,waypoint10169,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10169);
 var waypoint10170 = new Array();
 waypoint10170.push(new Point(15,5));
 waypoint10170.push(new Point(15,6));
 var enemy10170 = new ENEMY2(15,5,waypoint10170,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10170);
 var waypoint10171 = new Array();
 waypoint10171.push(new Point(16,4));
 waypoint10171.push(new Point(16,5));
 var enemy10171 = new ENEMY2(16,4,waypoint10171,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10171);
 var waypoint10172 = new Array();
 waypoint10172.push(new Point(17,3));
 waypoint10172.push(new Point(17,4));
 var enemy10172 = new ENEMY2(17,3,waypoint10172,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10172);
 /*
 var waypoint10173 = new Array();
 waypoint10173.push(new Point(0,14));
 waypoint10173.push(new Point(0,0));
 waypoint10173.push(new Point(10,0));
 var enemy10173 = new ENEMY2(0,14,waypoint10173,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10173);
 */
 var waypoint10174 = new Array();
 waypoint10174.push(new Point(1,2));
 waypoint10174.push(new Point(1,8));
 var enemy10174 = new ENEMY2(1,2,waypoint10174,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10174);
 var waypoint10175 = new Array();
 waypoint10175.push(new Point(3,19));
 waypoint10175.push(new Point(19,19));
 waypoint10175.push(new Point(19,5));
 var enemy10175 = new ENEMY2(3,19,waypoint10175,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10175);
 var waypoint10176 = new Array();
 waypoint10176.push(new Point(17,9));
 waypoint10176.push(new Point(17,17));
 waypoint10176.push(new Point(11,17));
 var enemy10176 = new ENEMY2(17,9,waypoint10176,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10176);
 var waypoint10177 = new Array();
 waypoint10177.push(new Point(10,16));
 waypoint10177.push(new Point(13,13));
 waypoint10177.push(new Point(15,13));
 waypoint10177.push(new Point(14,15));
 var enemy10177 = new ENEMY2(10,16,waypoint10177,lvllayout10015,light,enemy);
 map10015.addEnemy(enemy10177);
}