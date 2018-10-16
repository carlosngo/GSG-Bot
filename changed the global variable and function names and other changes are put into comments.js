
var moveIndex;
var Moved;
var playerWay;
var move;
var enemies;
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

function Game(player,enemies,maplayout,end)
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
    
    /*
     var row = 0;
     var col = 0;
     var i = 0
     while(row<20){
     while(col<20){
     var temp = {"x": col, "y": row};
     while(i<enemies.length){
     if (enemies[i].LightboxHit(temp)) {
     heatMap[row][col]++;}
     i++;}
     col++;}
     row++;}
     */
    
    if(deciding > (enemies.length == 10 ? 20 : 50)){
        
        if(executed){
            danger=findDangers(enemies, enemies);
            decidingNextMove(player, enemies, maplayout, end);
        }
    }
    else{
        enemies = avoidEnemies(enemies, enemies);
        
        deciding++
    }
}

function AIBrain(player,enemies,maplayout,end)
{
    
    wait = 0;
    deciding=0;
    executed = false
    enemies=new Array(enemies.length);
    heatMap = new Array(20);
    for(var i=0; i<enemies.length; i++)
        enemies[i]=new Array();
    /*
     var i = 0;
     while(i<enemies.length){
     enemies[i]=new Array();
     i++;
     }
     */
    for (let j = 0; j < 20; j++) {
        heatMap[j] = new Array(20);
        for (let y = 0; y < 20; y++) {
            heatMap[j][y] = 0;
        }
    }
    /*
     var j = 0;
     var y = 0;
     while(j<20){
     while(y=0){
     heatMap[j][y] = 0;
     y++;}
     j++;}
     */
    currentSpace=[player.getX(), player.getY()];
    previousSpace = [-1,-1];
    Moved = true;
    moveIndex=0;
}

/*function decidingNextMove(player, enemies, maplayout, end){ //doesn't move the right way
    
    currentSpace = [player.getX(), player.getY()];
    if ((currentSpace[0]!=previousSpace[0]||currentSpace[1]!=previousSpace[1])){
        
        var h = computeH(currentSpace,[end.getX(), end.getY()]);
        var n = new plot(currentSpace, [-1, -1], h, 0, h);
        playerWay = AIPath(n, [end.getX(), end.getY()], maplayout);
        move = playerWay[moveIndex];
        
        nextSpace = [currentSpace[0]+direct[move][0], currentSpace[1]+direct[move][1]];
        
        if(dangerousSpace(nextSpace)){
            var i=0;
            while (i<direct.length){
                nextSpace = [currentSpace[0]+direct[i][0], currentSpace[1]+direct[i][1]];
                var PossibleMove = i;
                if(!dangerousSpace(nextSpace)&&maplayout[nextSpace[0]][nextSpace[1]]!=3){
                    move = PossibleMove;
                    break;}
                i++;
            }
        }
        
        if(move=0)
            Moved = player.MoveUp();
        else if(move=1)
            Moved = player.MoveDown();
        else if(move=2)
            Moved = player.MoveLeft();
        else if(move=3)
            Moved = player.MoveRight();
        previousSpace = currentSpace;
        
    }
    
    
}*/

function decidingNextMove(player, enemies, maplayout, end){
    
    currentSpace = [player.getX(), player.getY()];
    if ((currentSpace[0]!=previousSpace[0]||currentSpace[1]!=previousSpace[1])){
        
        var h = computeH(currentSpace,[end.getX(), end.getY()]);
        var n = new plot(currentSpace, [-1, -1], h, 0, h);
        playerWay = AIPath(n, [end.getX(), end.getY()], maplayout);
        move = playerWay[moveIndex];
        
        nextSpace = [currentSpace[0]+direct[move][0], currentSpace[1]+direct[move][1]];
        
        if(dangerousSpace(nextSpace)){
            for(var i=0; i<direct.length; i++){
                nextSpace = [currentSpace[0]+direct[i][0], currentSpace[1]+direct[i][1]];
                if(!dangerousSpace(nextSpace)&&maplayout[nextSpace[0]][nextSpace[1]]!=3){
                    move = i;
                    break;
                }
            }
        }
        
        /*
         var i = 0;
         if(dangerousSpace(nextSpace)){
         while(i<direct.length&&dangerousSpace(nextSpace)){
          nextSpace = [currentSpace[0]+direct[i][0], currentSpace[1]+direct[i][1]];
          if(!dangerousSpace(nextSpace)&&maplayout[nextSpace[0]][nextSpace[1]]!=3){
          move = i;
          i++;}}
         */
        
        switch(move){ // do your decided move
            case 0: Moved = player.MoveUp(); break;
            case 1: Moved = player.MoveDown(); break;
            case 2: Moved = player.MoveLeft(); break;
            case 3: Moved = player.MoveRight(); break;
        }
        
        /*
         if(move=0)
         Moved = player.MoveUp();
         else if(move=1)
         Moved = player.MoveDown();
         else if(move=2)
         Moved = player.MoveLeft();
         else if(move=3)
         Moved = player.MoveRight();
         */
        
        previousSpace = currentSpace;
        
    }
    
    
}

function avoidEnemies(enemies, area){
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
        if(!inSpace(area[i],[x, y, f])){
            
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
    
    /*
     var i = 0;
     var j = 0;
     while(i<enemies.length){
     x = enemies[i].getX();
     y = enemies[i].getY();
     heatMap[y][x]++;
     f = enemies[i].getFacing();
     if(!inSpace(area[i],[x, y, f])){
     
     eLight = new Array();
     temp = new Array();
     eLight.push([x,y]);
     eLight.push(f);
     list = enemies[i].Light.ListofArray;
     while(j<list.length){
     temp.push([list[j].x, list[j].y]);
     j++;
     }
     eLight.push(temp);
     area[i].push(eLight);}
     i++}
     
     */
    return area;
}

function inSpace(area, place){
    var currentSpace, f;
    for(var i=0; i<area.length; i++){
        currentSpace = area[i][0];
        f = area[i][1];
        if(currentSpace[0]==place[0]&&currentSpace[1]==place[1]&&f==place[2])
            return true;
    }
    /*
     var i = 0;
     while(i<area.length){
     currentSpace = area[i][0];
     f = area[i][1];
     if(currentSpace[0]==place[0]&&currentSpace[1]==place[1]&&f==place[2])
     return true;
     i++;}
     */
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

function findDangers(enemies, enemies){
    var enemy;
    var area;
    var loc;
    var danger=new Array();
    enemySpace = new Array();
    for(var h=0; h<enemies.length; h++){
        enemy=[enemies[h].getX(), enemies[h].getY(), enemies[h].getFacing()];
        for(var i=0; i<enemies.length;i++){
            area=enemies[i];
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
    
    /*
     var h = 0;
     var i = o;
     var j = 0;
     
     while(h<enemies.length){
     enemy=[enemies[h].getX(), enemies[h].getY(), enemies[h].getFacing()];
     while(i<enemies.length){
     area=enemies[i];}
     while(j<area.length){
     loc=area[j][0];
     if(loc[0]==enemy[0]&&loc[1]==enemy[1]&&area[j][1]==enemy[2]){
     enemySpace.push(j);
     danger.push(area[(j)%area.length][2]);
     danger.push(area[(j+1)%area.length][2]);
     break;}
     j++}
     i++;}
     h++;}
     
     */
    return danger;
}

function computeG(parent, child){
    
    var pX = parent.getCoord()[0];
    var pY = parent.getCoord()[1];
    
    if(dangerousSpace(child)) {
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

function findSpace(open){
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
    /*
     var i = 0;
     var j = open.length;
     while(i<open.length){
     while(j>i){
     if(open[i].getF()>open[j].getF()){
     temp = open[j];
     open[j] = open[i];
     open[i] = temp;}
     j--;}
     i++}
     
     */
    return open;
}

function closedSpace(point, closed){
    var currentSpace;
    for(var i=0; i<closed.length; i++){
        currentSpace = closed[i].getCoord();
        if(currentSpace[0]==point[0]&&currentSpace[1]==point[1])
            return true;
    }
    /*
     var i = 0;
     while(i<closed.length){
     currentSpace = closed[i].getCoord();
     if(currentSpace[0]==point[0]&&currentSpace[1]==point[1])
     return true;
     i++;}
     */
    return false;
}

function openedSpace(point, open){
    var currentSpace;
    for(var i=0; i<open.length; i++){
        currentSpace = open[i].getCoord();
        if(currentSpace[0]==point[0]&&currentSpace[1]==point[1])
            return true;
    }
    /*
     var i = 0;
     while(i<open.length){
      currentSpace = open[i].getCoord();
     if(currentSpace[0]==point[0]&&currentSpace[1]==point[1])
     return true;
     i++;}
     */
    return false;
}

function checkChange(parent, point, g, open){
    var currentSpace;
    for(var i=0; i<open.length; i++){
        currentSpace = open[i].getCoord();
        if(currentSpace[0]==point[0]&&currentSpace[1]==point[1])
            if(g<open[i].getG()){
                open[i].setParent(parent);
                open[i].setG(g);
                open[i].setF(open[i].getH()+open[i].getG());
                break;
            }
    }
    
    /*
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
     */
    return open;
}

function goBack(playerWay){
    var bplayerWay = new Array();
    for(var i=playerWay.length-1; i>=0; i--)
        bplayerWay.push(playerWay[i]);
    /*
     var i = 0;
     while(i>=0){
     rplayerWay.push(playerWay[i]);
     i--;}
     */
    return bplayerWay;
}


function dangerousSpace(player){
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
    /*
     var i = 0;
     var j = 0;
     while(i<danger.length){
     area=danger[i];
     while(j<area.length){
     if(area[j][0]==pX&&area[j][1]==pY)
     return true;}
     j++;}
     i++;}
     */
    
    return false;
    
}

function AIPathFind(closed, start, end){
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
            
            /*
             var i = 0;
             while(i<closed.length){
             previousSpace=closed[i].getCoord();
             if(currentSpace[0]==previousSpace[0]&&currentSpace[1]==previousSpace[1]){
             break;}
             i++;}
             */
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
    return goBack(playerWay);
}

function AIPath(start, end, maplayout){
    var open = new Array();
    var closed = new Array();
    var connected = new Array();
    var found = false;
    var currentSpacePos;
    var nextSpace;
    var h, g;
    var count=0;
    open.push(start);
    
    while(!found&&open.length>0){
        open = findSpace(open);
        currentSpacePos = open[0].getCoord();
        
        for(var i=0; i<direct.length; i++){
            nextSpace=new Array();
            nextSpace.push(currentSpacePos[0]+direct[i][0]);
            nextSpace.push(currentSpacePos[1]+direct[i][1]);
            
            h = computeH(nextSpace, end);
            g = computeG(open[0], nextSpace);
            
            if(nextSpace[0]<0||nextSpace[1]<0||nextSpace[0]>=20||nextSpace[1]>=20){}
            else if(maplayout[nextSpace[0]][nextSpace[1]]==3||closedSpace(nextSpace,closed)){}
            else if(openedSpace(nextSpace, open)){
                open = checkChange(currentSpacePos, nextSpace, g, open);
            }
            else{
                open.push(new plot(nextSpace, currentSpacePos, h, g, g+h));
            }
            if(nextSpace[0]==end[0]&&nextSpace[1]==end[1]){
                closed.push(open[open.length-1]);
                open.splice(open.length-1,1);
                found = true;
                break;
            }
            
        }
        
        /*
         var i = 0;
         while(i<direct.length){
         nextSpace=new Array();
         nextSpace.push(currentSpacePos[0]+direct[i][0]);
         nextSpace.push(currentSpacePos[1]+direct[i][1]);
         
         h = computeH(nextSpace, end);
         g = computeG(open[0], nextSpace);
         
         if(nextSpace[0]<0||nextSpace[1]<0||nextSpace[0]>=20||nextSpace[1]>=20){}
         else if(maplayout[nextSpace[0]][nextSpace[1]]==3||closedSpace(nextSpace,closed)){}
         else if(openedSpace(nextSpace, open)){
         open = checkChange(currentSpacePos, nextSpace, g, open);
         }
         else{
         open.push(new plot(nextSpace, currentSpacePos, h, g, g+h));
         }
         if(nextSpace[0]==end[0]&&nextSpace[1]==end[1]){
         closed.push(open[open.length-1]);
         open.splice(open.length-1,1);
         found = true;
         break;
         }
         i++;}
         */
        closed.push(open[0]);
        open.splice(0, 1);
    }
    return AIPathFind(closed, start.getCoord(), end);
}

// Other functions

function gameOver(win)
{
    
}
