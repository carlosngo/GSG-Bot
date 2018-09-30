function Level10016(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout10016=[
[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
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
[0,0,0,0,0,0,0,0,3,5,3,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

];
var map10016 = new map(lvllayout10016,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map10016);

 var waypoint10178 = new Array();
 waypoint10178.push(new Point(2,1));
 waypoint10178.push(new Point(2,16));
 var enemy10178 = new ENEMY2(2,1,waypoint10178,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10178);
 var waypoint10179 = new Array();
 waypoint10179.push(new Point(3,17));
 waypoint10179.push(new Point(16,17));
 var enemy10179 = new ENEMY2(3,17,waypoint10179,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10179);
 var waypoint10180 = new Array();
 waypoint10180.push(new Point(2,2));
 waypoint10180.push(new Point(16,2));
 var enemy10180 = new ENEMY2(2,2,waypoint10180,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10180);
 /*
 var waypoint10181 = new Array();
 waypoint10181.push(new Point(17,2));
 waypoint10181.push(new Point(17,16));
 var enemy10181 = new ENEMY2(17,2,waypoint10181,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10181);*/
 var waypoint10182 = new Array();
 waypoint10182.push(new Point(3,4));
 waypoint10182.push(new Point(3,16));
 waypoint10182.push(new Point(16,15));
 var enemy10182 = new ENEMY2(3,4,waypoint10182,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10182);
 var waypoint10183 = new Array();
 waypoint10183.push(new Point(16,3));
 waypoint10183.push(new Point(16,7));
 waypoint10183.push(new Point(5,7));
 waypoint10183.push(new Point(5,4));
 var enemy10183 = new ENEMY2(16,3,waypoint10183,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10183);
 var waypoint10184 = new Array();
 waypoint10184.push(new Point(7,10));
 waypoint10184.push(new Point(3,10));
 var enemy10184 = new ENEMY2(7,10,waypoint10184,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10184);
 var waypoint10185 = new Array();
 waypoint10185.push(new Point(2,2));
 waypoint10185.push(new Point(2,15));
 var enemy10185 = new ENEMY2(2,2,waypoint10185,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10185);
 var waypoint10186 = new Array();
 waypoint10186.push(new Point(2,3));
 waypoint10186.push(new Point(2,13));
 var enemy10186 = new ENEMY2(2,3,waypoint10186,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10186);
 var waypoint10187 = new Array();
 waypoint10187.push(new Point(2,11));
 waypoint10187.push(new Point(2,5));
 var enemy10187 = new ENEMY2(2,11,waypoint10187,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10187);
 var waypoint10188 = new Array();
 waypoint10188.push(new Point(3,2));
 waypoint10188.push(new Point(15,2));
 var enemy10188 = new ENEMY2(3,2,waypoint10188,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10188);
 var waypoint10189 = new Array();
 waypoint10189.push(new Point(4,2));
 waypoint10189.push(new Point(14,2));
 var enemy10189 = new ENEMY2(4,2,waypoint10189,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10189);
 var waypoint10190 = new Array();
 waypoint10190.push(new Point(6,2));
 waypoint10190.push(new Point(12,2));
 var enemy10190 = new ENEMY2(6,2,waypoint10190,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10190);
 var waypoint10191 = new Array();
 waypoint10191.push(new Point(3,17));
 waypoint10191.push(new Point(15,17));
 var enemy10191 = new ENEMY2(3,17,waypoint10191,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10191);
 var waypoint10192 = new Array();
 waypoint10192.push(new Point(4,17));
 waypoint10192.push(new Point(14,17));
 var enemy10192 = new ENEMY2(4,17,waypoint10192,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10192);
 var waypoint10193 = new Array();
 waypoint10193.push(new Point(7,17));
 waypoint10193.push(new Point(11,17));
 var enemy10193 = new ENEMY2(7,17,waypoint10193,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10193);
 /*
 var waypoint10194 = new Array();
 waypoint10194.push(new Point(17,3));
 waypoint10194.push(new Point(17,7));

 var enemy10194 = new ENEMY2(17,3,waypoint10194,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10194);*/
 var waypoint10195 = new Array();
 waypoint10195.push(new Point(16,13));
 waypoint10195.push(new Point(16,15));
 waypoint10195.push(new Point(11,15));
 waypoint10195.push(new Point(10,13));
 var enemy10195 = new ENEMY2(16,13,waypoint10195,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10195);
 var waypoint10196 = new Array();
 waypoint10196.push(new Point(3,4));
 waypoint10196.push(new Point(3,12));
 waypoint10196.push(new Point(7,12));
 waypoint10196.push(new Point(7,3));
 var enemy10196 = new ENEMY2(3,4,waypoint10196,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10196);
 var waypoint10197 = new Array();
 waypoint10197.push(new Point(4,5));
 waypoint10197.push(new Point(3,10));
 waypoint10197.push(new Point(5,10));
 waypoint10197.push(new Point(7,10));
 waypoint10197.push(new Point(6,5));
 waypoint10197.push(new Point(4,5));
 var enemy10197 = new ENEMY2(4,5,waypoint10197,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10197);
 var waypoint10198 = new Array();
 waypoint10198.push(new Point(5,8));
 waypoint10198.push(new Point(4,9));
 waypoint10198.push(new Point(6,9));
 var enemy10198 = new ENEMY2(5,8,waypoint10198,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10198);
 var waypoint10199 = new Array();
 waypoint10199.push(new Point(13,3));
 waypoint10199.push(new Point(14,5));
 waypoint10199.push(new Point(9,5));
 waypoint10199.push(new Point(7,5));
 waypoint10199.push(new Point(7,4));
 var enemy10199 = new ENEMY2(13,3,waypoint10199,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10199);
 var waypoint10200 = new Array();
 waypoint10200.push(new Point(7,14));
 waypoint10200.push(new Point(10,16));
 waypoint10200.push(new Point(14,15));
 waypoint10200.push(new Point(15,14));
 waypoint10200.push(new Point(12,13));
 waypoint10200.push(new Point(10,13));
 var enemy10200 = new ENEMY2(7,14,waypoint10200,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10200);
 var waypoint10201 = new Array();
 waypoint10201.push(new Point(15,15));
 waypoint10201.push(new Point(12,15));
 waypoint10201.push(new Point(7,15));
 waypoint10201.push(new Point(7,13));
 waypoint10201.push(new Point(12,12));
 var enemy10201 = new ENEMY2(15,15,waypoint10201,lvllayout10016,light,enemy);
 map10016.addEnemy(enemy10201);
}