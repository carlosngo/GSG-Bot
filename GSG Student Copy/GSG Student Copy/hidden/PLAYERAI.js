
var destinationX, destinationY;
var playerX, playerY;

var CELL_GOAL = 5;
var CELL_WALL = 3;
var CELL_FREE = 0;

var mapDanger = new Array(20);
var mapPathFinding = new Array(20);
var mapDefinition;
var movementList;
var currentMove;
var didmove=true;
var d;
var enemydir = new Array();

function THINK(player,enemys,maplayout,end)
{
    //Static Variables
    this.boxwitdh=48;
    this.boxheight=34.4;
    this.mapx=20;
    this.mapy=20;
	var i=random(0,4);
	enemydir=enemys;
	resetMapDanger(player, enemys, maplayout);
	resetMapPath();
	
	updatePlayer(player);
	if(didmove==true)
	{
		alert("MOVED");
		d=nextMove();
	}
	
	didmove=moveDir( player, d);
	alert(didmove);

	
}

function updatePlayer(player){
	playerX = player.x;
	playerY = player.y;
}

function moveDir(player,dir){
	switch(dir){
	case 0:
		return player.MoveUp();
		break;
	case 1:	
		return player.MoveDown();
		break;
	case 2:	
		return player.MoveLeft();
		break;
	case 3:
		return player.MoveRight();
		break;
	}
}

function nextMove(){
	if (currentMove > 0){
		currentMove -= 1;
		var dir = movementList[currentMove];
		
		switch(dir){
			case 0: return 1;
			case 1: return 0;
			case 2: return 3;
			case 3: return 2;
		}
	}
	return 0;
}

function checkMapPath(){
	var bestMove = -1;
	var bestFlood = 999;
	
	
	
	// Check all surrounding cells
	for (var dir = 0; dir < 4; dir++){
		
		// for their values
		var currentFlood = getPathDistanceAtDir(playerX, playerY, dir);
		
		// If better move is found, update
		if (bestFlood > currentFlood){
			bestFlood = currentFlood;
			bestMove = dir;
		}
	}
	
	
	return bestMove;
}

function isDangerous(dir){
	return false;
}

function random(start,end)
{
    return Math.floor((Math.random()*end)+start);
}

function setPlayerDestination(player, enemys, maplayout) {
	for (var y = 0; y < this.mapy; y++){
		for (var x = 0; x < this.mapx; x++){
			if (maplayout[x][y] == 5){
				destinationX = x;
				destinationY = y;
				return;
			}
		}
	}
}

function getPathDistance(x, y){
	if (isValidCell(x, y)) return mapPathFinding[x][y];
	return 999;
}

function getPathDistanceAtDir(x, y, dir){
	switch(dir){
		case 0: return getPathDistance(x, y-1); // up
		case 1: return getPathDistance(x, y+1); // down
		case 2: return getPathDistance(x-1, y); // left
		case 3: return getPathDistance(x+1, y); // right
	}
}

function isValidCellAtDir(x, y, dir) {
	switch(dir){
		case 0: return isValidCell(x, y-1); // up
		case 1: return isValidCell(x, y+1); // down
		case 2: return isValidCell(x-1, y); // left
		case 3: return isValidCell(x+1, y); // right
	}
}


function isValidCell(x, y){
	if (x < 0 || x >= this.mapx) return false;
	if (y < 0 || y >= this.mapy) return false;
	if (mapDefinition[x][y] == CELL_WALL) return false;
	return true;
	
	
}

function isInList(target, list) {
	for (var x = 0; x < list.length; x++){
		var ax = list[x].x;
		var ay = list[x].y;
		var bx = target.x;
		var by = target.y;
		if (ax == bx && ay == by) return true;
	}
	return false;
}

function removeElement(list, index){
	if (list.length <= 0) {
		alert('empty');
	return;
	}
	var tar = list.splice(index, 1);
	return tar[0];
}

function gregDodgeChecker(player, enemy, map)
{
//	for(var x = 0; x < map.)

}

function updateMapPathFinding (player, enemys, maplayout){
	var found = false;
	var value = 0;
	
	mapPathFinding[player.x][player.y] = 0;
	
	while(!found) {
		for (var y = 0; y < this.mapy; y++){
			for (var x = 0; x < this.mapx; x++){
				if (mapPathFinding[x][y] == value){
					
					if (isValidCellAtDir(x, y, 0) && mapPathFinding[x][y-1] > value + 1) mapPathFinding[x][y-1] = value + 1;
					if (isValidCellAtDir(x, y, 1) && mapPathFinding[x][y+1] > value + 1) mapPathFinding[x][y+1] = value + 1;
					if (isValidCellAtDir(x, y, 2) && mapPathFinding[x-1][y] > value + 1) mapPathFinding[x-1][y] = value + 1;
					if (isValidCellAtDir(x, y, 3) && mapPathFinding[x+1][y] > value + 1) mapPathFinding[x+1][y] = value + 1;
					
					if (x == destinationX && y == destinationY){
						found = true;
					}
				}
			}
		}
		value++;
	}
	displayConsole();
	

 /*
	// 5 goal
	// 3 wall
	// 0 free space
	var startPosition = new Vector2D();
	startPosition.x = destinationX;
	startPosition.y = destinationY;
	
	var updateList = new Array();
	var addList = new Array();
	
	
	// Base case
	var floodDistance = 0;
	mapPathFinding[startPosition.x][startPosition.y] = floodDistance++;
	
	addList.push(startPosition);
	
	// Inductive cases
	do {
		var current = removeElement(addList, 0); // get next to be explored
		
		// get surrounding cells
		for (var dir = 0; dir < 4; dir++){
		
			// check first if valid
			if (isValidCellAtDir(current.x, current.y, dir)){
				var nextx, nexty;
				switch(dir){
					case 0: nextx = current.x; nexty = current.y -= 1; break; // up
					case 1: nextx = current.x; nexty = current.y += 1; break; // down
					case 2: nextx = current.x - 1; nexty = current.y; break; // left
					case 3: nextx = current.x + 1; nexty = current.y; break; // right
				}
				
				// add to be updated
				updateList.push( new Vector2D(nextx, nexty) );
			}
		}
		
		// Update values
		for(var s = 0; s < updateList.length; s++) {
			var currentToUpdate = removeElement(updateList, 0);
			
			// Only update cells if there is a better path
			if (mapPathFinding[currentToUpdate.x][currentToUpdate.y] > floodDistance)
				mapPathFinding[currentToUpdate.x][currentToUpdate.y] = floodDistance;
			
			// Push the updated cells to the list of 'to be explored'
			if (!isInList(currentToUpdate, addList)){
				if (addList.length < 5);
					// addList.push(currentToUpdate);
			}
		}
		
		floodDistance++;
		displayConsole();
	} while(addList.length > 0);
	
	*/
}

function displayConsole(){

	for (var y = 0; y < this.mapy; y++){
	var string = "";
		for (var x = 0; x < this.mapx; x++) {
			z = mapPathFinding[x][y];
			if (mapPathFinding[x][y] < 10)
				z = "00" + z;
			else if (mapPathFinding[x][y] < 100)
				z = "0" + z;
				
			string += "[" + z + "]";
		}
		console.log(string);
	}
	console.log("done");
	console.log("");
}

function Vector2D (x, y){
	this.x = x;
	this.y = y;
	
}

function resetMapDanger (player, enemys, maplayout) {
	mapDanger = new Array(20);
	for(var i=0;i<20;i++)
	{
		mapDanger[i]= new Array(20);
	}
	for (var y = 0; y < this.mapy; y++){
		//mapDanger[y] = new Array(20);
		for (var x = 0; x < this.mapx; x++){
			mapDanger[x][y] = -1;
		}
	}
}

function resetMapPath () {
	mapPathFinding = new Array(20);
	for(var i=0;i<20;i++)
	{
		mapPathFinding[i]= new Array(20);
	}

	for (var y = 0; y < this.mapy; y++){
		//mapPathFinding[y] = new Array(20);
		for (var x = 0; x < this.mapx; x++){
			mapPathFinding[x][y] = 999;
		}
	}
}

function updateEnemyInformation (player, enemys, maplayout){
	for (var x = 0; x < enemys.length; x++){
		var current = enemys[x];
		switch (current.getFacing()){
			case 0: // Up
				
			break;
			case 1: // Down
			
			break;
			case 2: // Left
			
			break;
			case 3: // Right
			
			break;
		}
	}
}

function initAI(player,enemys,maplayout)
{
	mapDefinition = maplayout;
	setPlayerDestination(player,enemys,maplayout);
	resetMapPath();
	updateMapPathFinding(player,enemys,maplayout);
	setMovements();
}

function setMovements(){
	movementList = new Array();
	aX = destinationX;
	aY = destinationY;
	
	do {
	
		// wher you are
		var current = mapPathFinding[aX][aY];
		
		// Look at surroundings
		for (var dir = 0; dir < 4; dir++){
		
			// Get their value
			var foresightValue = getPathDistanceAtDir(aX, aY, dir);
			
			// check if they are the previous value
			if (foresightValue == current - 1){
				// if so, then set the movement to that
				movementList.push(dir);
				
				switch(dir){
					case 0: // up
						aY -= 1; console.log("Move up");
					break;
					case 1:
						aY += 1;  console.log("Move down");
					break;
					case 2:
						aX -= 1;  console.log("Move left");
					break;
					case 3:
						aX += 1;  console.log("Move right");
					break;
				}
				break;
			}
		}
		current--;
	}while(current > 0);
	
	for (var c = 0; c < movementList.length; c++)
		console.log(movementList[c]);
		
	currentMove = movementList.length;
}

function checkIfPassable(maplayout,enemys,x,y)
{
	var i=0;
	var a;
	if((x<mapx&&x>=0)&&(y<mapy&&y>=0))
	{
	if(maplayout[x][y]==3)
	{
	//console.log("WALL");
	return false;
	}
	for(i=0;i<enemys.length;i++)
	{
		a=enemys[i].checkifSpotted(x,y)
		if(a)
		{
		//console.log("SPOTTED");
		return false;
		}
	}
	}
	else 
	{
	return false;
	//console.log("OUTOFBOUNCE");
	}
	return true;
}
function endAI(win)
{


}

