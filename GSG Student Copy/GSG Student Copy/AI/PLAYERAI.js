var moveIndex;
var Moved;
var playerWay;
var move;
var enemyArea;
var danger;
var direct = [[0,-1],[0,1],[-1,0],[1,0]];
var currentSpace;
var heatMap;
var previousSpace;
var nextSpace;
var enemySpace;
var go;
var wait;
var executed;
var deciding;
function THINK(player,enemies,maplayout,end)
{
    var string;
    var row = 0;
    var col = 0;
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
    if(deciding > (enemies.length == 10 ? 20 : 50)){
        
        if(executed){
            danger=genDangers(enemies, enemyArea);
            Thinking(player, enemies, maplayout, end);
        }
    }
    else{
        enemyArea = getEnemyArea(enemies, enemyArea);
        
        deciding++;
    }
}

function initAI (player,enemies,maplayout,end)
{
    wait = 0;
    deciding = 0;
    executed = false
    enemyArea = new Array(enemies.length);
    heatMap = new Array(20);
    for(var i=0; i<enemyArea.length; i++)
        enemyArea[i]=new Array();
    for (let j = 0; j < 20; j++) {
        heatMap[j] = new Array(20);
        for (let y = 0; y < 20; y++) {
            heatMap[j][y] = 0;
        }
    }
    currentSpace = [player.getX(), player.getY()];
    previousSpace = [-1,-1];
    Moved = true;
    moveIndex = 0;
}

function Thinking(player, enemies, maplayout, end){
    currentSpace = [player.getX(), player.getY()];
    if ((currentSpace[0]!=previousSpace[0]||currentSpace[1]!=previousSpace[1])){
        var h = computeH(currentSpace,[end.getX(), end.getY()]);
        var n = new plot(currentSpace, [-1, -1], h, 0, h);
        playerWay = pathFind(n, [end.getX(), end.getY()], maplayout);
        move = playerWay[moveIndex];
        nextSpace = [currentSpace[0]+direct[move][0], currentSpace[1]+direct[move][1]];
        if(isDangerous(nextSpace)){
            for(var i=0; i<direct.length; i++){
                nextSpace = [currentSpace[0]+direct[i][0], currentSpace[1]+direct[i][1]];
                if(!isDangerous(nextSpace) && maplayout[nextSpace[0]][nextSpace[1]]!=3){
                    move = i;
                    break;
                }
            }
        }
        switch(move){
            case 0: Moved = player.MoveUp(); break;
            case 1: Moved = player.MoveDown(); break;
            case 2: Moved = player.MoveLeft(); break;
            case 3: Moved = player.MoveRight(); break;
        }
        previousSpace = currentSpace;
    }
}

function getEnemyArea(enemies, area){
    var eLight;
    var list;
    var temp;
    var x, y, f;
    executed = true;
    for(var i=0; i<enemies.length; i++){
        
        x = enemies[i].getX();
        y = enemies[i].getY();
        heatMap[y][x]++;
        f = enemies[i].getFacing();
        if(!evaluateArea(area[i],[x, y, f])){
            
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

function evaluateArea(area, place){
    var currentSpace, f;
    var i = 0;
    while(i<area.length){
        currentSpace = area[i][0];
        f = area[i][1];
        if(currentSpace[0]==place[0]&&currentSpace[1]==place[1]&&f==place[2])
            return true;
        i++;}
    return false;
}

function plot(coord, parent, h, g, f){
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

function genDangers(enemies, enemyArea){
    var enemy;
    var area;
    var loc;
    var danger=new Array();
    enemySpace = new Array();
    for(var h=0; h<enemies.length; h++){
        enemy=[enemies[h].getX(), enemies[h].getY(), enemies[h].getFacing()];
        for(var i=0; i<enemyArea.length;i++){
            area=enemyArea[i];
            for(var j=0; j<area.length; j++){
                loc=area[j][0];
                if(loc[0]==enemy[0]&&loc[1]==enemy[1]&&area[j][1]==enemy[2]){
                    enemySpace.push(j);
                    danger.push(area[(j)%area.length][2]);
                    danger.push(area[(j+1)%area.length][2]);
                    break;
                }
            }
        }
    }
    return danger;
}

function computeG(parent, child){
    
    var pX = parent.getCoord()[0];
    var pY = parent.getCoord()[1];
    
    if(isDangerous(child)) {
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

function whenOpen(open){
    var temp;
    var i = 0;
    var j = open.length-1;
    while(i<open.length-1){
        while(j>i){
            if(open[i].getF()>open[j].getF()){
                temp = open[j];
                open[j] = open[i];
                open[i] = temp;}
            j--;}
        i++}
    
    return open;}

function closeSpace(point, closed){
    var currentSpace;
    var i = 0;
    while(i<closed.length){
        currentSpace = closed[i].getCoord();
        if(currentSpace[0]==point[0]&&currentSpace[1]==point[1])
            return true;
        i++;}
    
    return false;
}

function openSpace(point, open){
    var currentSpace;
    var i = 0;
    while(i<open.length){
        currentSpace = open[i].getCoord();
        if(currentSpace[0]==point[0]&&currentSpace[1]==point[1])
            return true;
        i++;}
    
    return false;
}

function changeChecker(parent, point, g, open){
    var currentSpace;
    var i = 0;
    while(i<open.length){
        currentSpace = open[i].getCoord();
        if(currentSpace[0]==point[0]&&currentSpace[1]==point[1])
            if(g<open[i].getG()){
                open[i].setParent(parent);
                open[i].setG(g);
                open[i].setF(open[i].getH()+open[i].getG());
                break;
            }
        i++;
    }
    
    return open;
}

function goBackwards(playerWay){
    var bplayerWay = new Array();
    
    var i = playerWay.length-1;
    while(i>=0){
        bplayerWay.push(playerWay[i]);
        i--;}
    
    return bplayerWay;
}


function isDangerous(player){
    var pX=player[0];
    var pY=player[1];
    var area;
    for(var i=0; i<danger.length; i++){
        area=danger[i];
        for(var j=0; j<area.length; j++){
            if(area[j][0]==pX&&area[j][1]==pY)
                return true;
        }
    }
    return false;
    
}

function genPath(closed, start, end){
    var currentSpace=end;
    var previousSpace;
    var executed=false;
    var i;
    var playerWay = new Array();
    while(!executed){
        for(i=0; i<closed.length; i++){
            previousSpace=closed[i].getCoord();
            if(currentSpace[0]==previousSpace[0]&&currentSpace[1]==previousSpace[1])
                break;
        }
        previousSpace=closed[i].getParent();
        if(currentSpace[0]<previousSpace[0])
            playerWay.push(2);
        else if(currentSpace[0]>previousSpace[0])
            playerWay.push(3);
        else if(currentSpace[1]<previousSpace[1])
            playerWay.push(0);
        else if(currentSpace[1]>previousSpace[1])
            playerWay.push(1);
        
        currentSpace = previousSpace;
        if(currentSpace[0]==start[0]&&currentSpace[1]==start[1])
            executed=true;
    }
    return goBackwards(playerWay);
}

function pathFind(start, end, maplayout){
    var open = new Array();
    var closed = new Array();
    var connected = new Array();
    var found = false;
    var curPos;
    var nextSpace;
    var h, g;
    var count=0;
    open.push(start);
    
    while(!found&&open.length>0){
        open = whenOpen(open);
        curPos = open[0].getCoord();
        
        for(var i=0; i<direct.length; i++){
            nextSpace=new Array();
            nextSpace.push(curPos[0]+direct[i][0]);
            nextSpace.push(curPos[1]+direct[i][1]);
            
            h = computeH(nextSpace, end);
            g = computeG(open[0], nextSpace);
            
            if(nextSpace[0]<0||nextSpace[1]<0||nextSpace[0]>=20||nextSpace[1]>=20){}
            else if(maplayout[nextSpace[0]][nextSpace[1]]==3||closeSpace(nextSpace,closed)){}
            else if(openSpace(nextSpace, open)){
                open = changeChecker(curPos, nextSpace, g, open);
            }
            else{
                open.push(new plot(nextSpace, curPos, h, g, g+h));
            }
            if(nextSpace[0]==end[0]&&nextSpace[1]==end[1]){
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

function endAI(win){}

