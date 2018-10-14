


// Global variables!
var currentMove;    // current index of movement direction
var hasMoved;                   // checks whether you have already moved
var path;                  // list containing movements that were path
var move;   
var enemyArea;
var hazards;
var direct = [[0,-1],[0,1],[-1,0],[1,0]];  
var cur;
var heatMap;
var prev;  
var next;   
var enemyPos;           
var go;
var delay;  
var done;
var process; // the current decision of the bot


// Base functions

// This function is run during the game loop repeatedly.
function THINK(player,enemies,maplayout,end)
{		
		var string;
		
		for (let row = 0; row < 20; row++) {
			for (let col = 0; col < 20; col++) {
				var temp = {"x" : col, "y" : row};
				for (let i = 0; i < enemies.length; i++) {
					if (enemies[i].LightboxHit(temp)) {
						heatMap[row][col]++;
					}
				}		
			}
		}
		if(process > (enemies.length == 10 ? 20 : 50)){

				if(done){
					hazards=genHazards(enemies, enemyArea);
					Thinking(player, enemies, maplayout, end);
				}
		}
		else{
				enemyArea = getEnemyArea(enemies, enemyArea);
				
				process++
		}
}

// This function is called before the start of each round. Use it to initialize your
// bots intelligence!
function initAI (player,enemies,maplayout,end)
{

		delay = 0;
		process=0;
		done = false
		enemyArea=new Array(enemies.length);
		heatMap = new Array(20);
		for(var i=0; i<enemyArea.length; i++) 
			enemyArea[i]=new Array();
		for (let j = 0; j < 20; j++) {
			heatMap[j] = new Array(20);
			for (let y = 0; y < 20; y++) {
				heatMap[j][y] = 0;
			}
		}
		cur=[player.getX(), player.getY()];
		prev = [-1,-1];
		hasMoved = true;
		currentMove=0;
}

function Thinking(player, enemies, maplayout, end){

        cur = [player.getX(), player.getY()];
        if ((cur[0]!=prev[0]||cur[1]!=prev[1])){
				
				var h = computeH(cur,[end.getX(), end.getY()]);
				var n = new tile(cur, [-1, -1], h, 0, h);
				path = pathFind(n, [end.getX(), end.getY()], maplayout);
                move = path[currentMove];
				
				next = [cur[0]+direct[move][0], cur[1]+direct[move][1]];
				
				if(isHazardous(next)){
					for(var i=0; i<direct.length; i++){
						next = [cur[0]+direct[i][0], cur[1]+direct[i][1]];
						if(!isHazardous(next) && maplayout[next[0]][next[1]]!=3){
							move = i;
							break;
						}
					}
				}
				
				switch(move){ // do your decided move
					case 0: hasMoved = player.MoveUp(); break;
					case 1: hasMoved = player.MoveDown(); break;
					case 2: hasMoved = player.MoveLeft(); break;
					case 3: hasMoved = player.MoveRight(); break;
        		}
				prev = cur;
				
        }


}

function getEnemyArea(enemies, area){
	var eLight;
	var list;
	var temp;
	var x, y, f;
	done = true;
	for(var i=0; i<enemies.length; i++){
		
		x = enemies[i].getX();
		y = enemies[i].getY();
		heatMap[y][x]++;
		f = enemies[i].getFacing();
		if(!inArea(area[i],[x, y, f])){
			
			eLight = new Array();
			temp = new Array();
			eLight.push([x,y]);
			eLight.push(f);
			list = enemies[i].Light.ListofArray;
			for(var j=0; j<list.length; j++) {
				temp.push([list[j].x, list[j].y]);
			}
			eLight.push(temp);
			area[i].push(eLight);
		}
		
	}
	return area;
}

function inArea(area, place){
	var cur, f;
	for(var i=0; i<area.length; i++){
		cur = area[i][0];
		f = area[i][1];
		if(cur[0]==place[0]&&cur[1]==place[1]&&f==place[2])
			return true;
	}
	return false;
}

function tile(coord, parent, h, g, f){
	this.coord=coord;
	this.parent=parent;
	this.h=h;
	this.g=g;
	this.f=f;
	
	this.getCoord = function(){
		return this.coord;
	}
	
	this.getParent = function(){
		return this.parent;
	}
	
	this.getH = function(){
		return this.h;
	}
	
	this.getG = function(){
		return this.g;
	}
	
	this.getF = function(){
		return this.f;
	}
	
	this.setParent = function(newP){
		this.parent=newP;
	}
	
	this.setH = function(newH){
		this.h=newH;
	}
	
	this.setG = function(newG){
		this.g=newG;
	}
	
	this.setF = function(newF){
		this.f=newF;
	}
}

function genHazards(enemies, enemyArea){
	var enemy;
	var area;
	var loc;
	var hazards=new Array();
	enemyPos = new Array();
	for(var h=0; h<enemies.length; h++){
		enemy=[enemies[h].getX(), enemies[h].getY(), enemies[h].getFacing()];
		for(var i=0; i<enemyArea.length;i++){
			area=enemyArea[i];
			for(var j=0; j<area.length; j++){
				loc=area[j][0];
				if(loc[0]==enemy[0]&&loc[1]==enemy[1]&&area[j][1]==enemy[2]){
					enemyPos.push(j);
					hazards.push(area[(j)%area.length][2]);
					hazards.push(area[(j+1)%area.length][2]);
					break;
				}
			}
		}
	}
	return hazards;
}

function computeG(parent, child){
	
	var pX = parent.getCoord()[0];
	var pY = parent.getCoord()[1];

	if(isHazardous(child)) {
		return parent.getG()+1000;
	} else  {
		if (pX >= 0 && pX < 20 && pY >= 0 && pY < 20 && child[0] >= 0 && child[0] < 20 && child[1] >= 0 && child[1] < 20) 
			if (heatMap[child[1]][child[0]] > heatMap[pY][pX]) 
				return parent.getG() + 400;
		return parent.getG()+10;	
	}
}

function computeH(point, end){
	return (Math.abs(point[0]-end[0])+Math.abs(point[1]-end[1]))*10;
}

function computeF(g, h){
	return g+h;
}

function arrange(open){
	var temp;
	
	for(var i=0; i<open.length-1; i++){
		for(var j=open.length-1; j>i; j--){
			if(open[i].getF()>open[j].getF()){
				temp = open[j];
				open[j] = open[i];
				open[i] = temp;
			}
		}
	}
	
	return open;
}

function inClosed(point, closed){
	var cur;
	for(var i=0; i<closed.length; i++){
		cur = closed[i].getCoord();
		if(cur[0]==point[0]&&cur[1]==point[1])
			return true;
	}
	return false;
}

function inOpen(point, open){
	var cur;
	for(var i=0; i<open.length; i++){
		cur = open[i].getCoord();
		if(cur[0]==point[0]&&cur[1]==point[1])
			return true;
	}
	return false;
}

function checkChange(parent, point, g, open){
	var cur;
	for(var i=0; i<open.length; i++){
		cur = open[i].getCoord();
		if(cur[0]==point[0]&&cur[1]==point[1])
			if(g<open[i].getG()){
				open[i].setParent(parent);
				open[i].setG(g);
				open[i].setF(open[i].getH()+open[i].getG());
				break;
			}
	}
	return open;
}

function reverse(path){
	var rPath = new Array();
	for(var i=path.length-1; i>=0; i--)
		rPath.push(path[i]);
	
	return rPath;
}


function isHazardous(player){
	var pX=player[0];
	var pY=player[1];
	var area;
	for(var i=0; i<hazards.length; i++){
		area=hazards[i];
		for(var j=0; j<area.length; j++){
			if(area[j][0]==pX&&area[j][1]==pY)
				return true;
		}
	}
	return false;

}

function genPath(closed, start, end){
	var cur=end;
	var prev;
	var done=false;
	var i;
	var path = new Array();
	while(!done){
		for(i=0; i<closed.length; i++){
			prev=closed[i].getCoord();
			if(cur[0]==prev[0]&&cur[1]==prev[1])
				break;
		}
		prev=closed[i].getParent();
		if(cur[0]<prev[0])
			path.push(2);		
		else if(cur[0]>prev[0])
			path.push(3);
		else if(cur[1]<prev[1])
			path.push(0);
		else if(cur[1]>prev[1])
			path.push(1);
		
		cur = prev;
		if(cur[0]==start[0]&&cur[1]==start[1])
				done=true;
	}
	return reverse(path);
}

function pathFind(start, end, maplayout){
	var open = new Array();
	var closed = new Array();
	var connected = new Array();
	var found = false;
	var curPos;
	var next;
	var h, g;
	var count=0;
	open.push(start);
	
	while(!found&&open.length>0){
		open = arrange(open);
		curPos = open[0].getCoord();
		
		for(var i=0; i<direct.length; i++){
			next=new Array();
			next.push(curPos[0]+direct[i][0]);
			next.push(curPos[1]+direct[i][1]);
			
			h = computeH(next, end);
			g = computeG(open[0], next);
			
			if(next[0]<0||next[1]<0||next[0]>=20||next[1]>=20){}
			else if(maplayout[next[0]][next[1]]==3||inClosed(next,closed)){}
			else if(inOpen(next, open)){
				open = checkChange(curPos, next, g, open);
			}
			else{
				open.push(new tile(next, curPos, h, g, g+h));
			}
			if(next[0]==end[0]&&next[1]==end[1]){
				closed.push(open[open.length-1]);
				open.splice(open.length-1,1);
				found = true;
				break;
			}

		}	
		closed.push(open[0]);
		open.splice(0, 1);
	}
	return genPath(closed, start.getCoord(), end);
}

// Other functions 

function random(start,end)
{
    return Math.floor((Math.random()*end)+start);
}

function endAI(win)
{


}

