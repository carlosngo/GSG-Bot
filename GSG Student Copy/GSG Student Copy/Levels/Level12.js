function Level12(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout12=[
[3,3,3,0,3,3,0,3,3,3,3,3,3,0,0,0,3,0,0,0],
[3,0,0,0,3,3,0,0,0,0,0,0,3,0,3,0,3,3,3,0],
[3,1,3,0,3,3,0,3,3,0,3,0,3,0,3,0,0,0,0,0],
[3,3,3,0,3,0,0,3,3,0,3,0,3,0,3,3,0,3,0,3],
[3,0,0,0,0,3,0,3,0,0,3,0,3,0,0,0,3,3,0,3],
[3,0,3,0,3,0,0,0,0,3,3,0,3,0,0,3,0,0,0,3],
[3,3,3,0,3,3,0,3,0,3,0,0,3,3,0,3,0,3,0,0],
[3,0,0,0,3,3,0,3,3,3,0,3,0,3,0,3,0,0,3,3],
[3,0,3,0,3,3,0,3,0,0,0,3,0,3,0,0,3,0,0,0],
[3,3,3,0,3,0,0,3,0,3,3,0,0,3,3,0,3,0,3,0],
[3,0,0,0,0,3,0,3,0,0,0,0,0,0,3,0,3,3,3,0],
[3,0,3,0,3,3,0,3,0,3,3,3,3,0,3,0,3,0,0,0],
[3,3,3,0,3,3,0,3,0,3,3,0,0,0,3,0,3,0,3,3],
[3,0,0,0,0,3,0,3,0,3,3,0,3,3,3,0,3,0,0,0],
[3,0,3,0,3,0,0,3,0,0,3,0,0,3,0,0,3,0,3,0],
[3,3,3,0,3,3,0,3,3,3,3,0,3,0,0,3,0,0,3,3],
[3,0,0,0,0,0,0,0,0,3,0,0,3,0,3,0,0,0,0,0],
[3,0,3,0,3,3,3,0,3,3,0,3,0,0,3,0,0,0,3,0],
[3,3,3,0,3,3,0,0,3,0,0,0,0,0,3,0,0,0,0,0],
[3,3,0,0,3,3,3,3,3,3,3,3,3,3,3,0,3,0,0,5],

];
var map12 = new map(lvllayout12,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map12);
 
 var waypoint10054 = new Array();
 waypoint10054.push(new Point(4,1));
 waypoint10054.push(new Point(4,4));
 var enemy10054 = new ENEMY2(4,1,waypoint10054,lvllayout12,light,enemy);
 map12.addEnemy(enemy10054);
 var waypoint10055 = new Array();
 waypoint10055.push(new Point(10,1));
 waypoint10055.push(new Point(10,4));
 var enemy10055 = new ENEMY2(10,1,waypoint10055,lvllayout12,light,enemy);
 map12.addEnemy(enemy10055);
 var waypoint10056 = new Array();
 waypoint10056.push(new Point(13,1));
 waypoint10056.push(new Point(13,4));
 var enemy10056 = new ENEMY2(13,1,waypoint10056,lvllayout12,light,enemy);
 map12.addEnemy(enemy10056);
 var waypoint10057 = new Array();
 waypoint10057.push(new Point(1,6));
 waypoint10057.push(new Point(1,9));
 waypoint10057.push(new Point(4,9));
 var enemy10057 = new ENEMY2(1,6,waypoint10057,lvllayout12,light,enemy);
 map12.addEnemy(enemy10057);
 var waypoint10058 = new Array();
 waypoint10058.push(new Point(9,11));
 waypoint10058.push(new Point(9,12));
 waypoint10058.push(new Point(10,12));
 waypoint10058.push(new Point(10,11));
 var enemy10058 = new ENEMY2(9,11,waypoint10058,lvllayout12,light,enemy);
 map12.addEnemy(enemy10058);
 var waypoint10059 = new Array();
 waypoint10059.push(new Point(17,12));
 waypoint10059.push(new Point(17,13));
 waypoint10059.push(new Point(18,13));
 waypoint10059.push(new Point(18,12));
 var enemy10059 = new ENEMY2(17,12,waypoint10059,lvllayout12,light,enemy);
 map12.addEnemy(enemy10059);
 var waypoint10060 = new Array();
 waypoint10060.push(new Point(4,14));
 waypoint10060.push(new Point(5,14));
 waypoint10060.push(new Point(5,13));
 waypoint10060.push(new Point(4,13));
 var enemy10060 = new ENEMY2(4,14,waypoint10060,lvllayout12,light,enemy);
 map12.addEnemy(enemy10060);
 var waypoint10061 = new Array();
 waypoint10061.push(new Point(0,17));
 waypoint10061.push(new Point(0,19));
 waypoint10061.push(new Point(2,19));
 waypoint10061.push(new Point(2,18));
 var enemy10061 = new ENEMY2(0,17,waypoint10061,lvllayout12,light,enemy);
 map12.addEnemy(enemy10061);
 var waypoint10062 = new Array();
 waypoint10062.push(new Point(7,17));
 waypoint10062.push(new Point(9,17));
 waypoint10062.push(new Point(9,17));
 waypoint10062.push(new Point(9,17));
 var enemy10062 = new ENEMY2(7,17,waypoint10062,lvllayout12,light,enemy);
 map12.addEnemy(enemy10062);
 var waypoint10063 = new Array();
 waypoint10063.push(new Point(16,15));
 waypoint10063.push(new Point(16,19));
 waypoint10063.push(new Point(18,19));
 waypoint10063.push(new Point(18,15));
 var enemy10063 = new ENEMY2(16,15,waypoint10063,lvllayout12,light,enemy);
 map12.addEnemy(enemy10063);
 var waypoint10064 = new Array();
 waypoint10064.push(new Point(16,16));
 waypoint10064.push(new Point(16,17));
 waypoint10064.push(new Point(18,17));
 waypoint10064.push(new Point(18,16));
 var enemy10064 = new ENEMY2(16,16,waypoint10064,lvllayout12,light,enemy);
 map12.addEnemy(enemy10064);
 }