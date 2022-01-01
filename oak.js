class Oak{

    constructor(x,y,width,height) {

        var options = {
            
           isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
    }
    display() {
        var pos = this.body.position;
        strokeWeight(0);

        push();
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
        

        }
    }