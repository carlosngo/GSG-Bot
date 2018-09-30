function Node(x,y,currCost,parent) {

		this.x=x;
		this.y=y;
		this.parent=parent;
        this.currCost=currCost;
		
		
		this.getX = function() {
			return this.x;
		}
		this.setX = function(x) {
			this.x = x;
		}
		this.getY = function() {
			return this.y;
		}
		this.setY = function(y) {
			this.y = y;
		}
		this.getParent = function() {
			return this.parent;
		}
		this.setParent = function(parent) {
			this.parent = parent;
		}
                this.getCurrCost = function() {
                    return this.currCost;
                 }

                this.setCurrCost= function(currCost) {
                    this.currCost = currCost;
                }
                
                this.getHeuristic = function(targetX,targetY)
                {
				var temp=(this.getY()-targetY);
				if(temp<0)
				{
				temp=temp*-1;
				}
				var temp2=this.getX()-targetX;
				if(temp2<0)
				{
				temp2=temp2*-1;
				}
                    return temp+temp2;
                }
                                
	}