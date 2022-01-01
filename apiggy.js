class Apiggy{
    constructor(x,y,r) {
        var options = {
            isStatic:false,
            friction:1
        }
        this.r = r;
        this.x = x;
        this.y = y;
        this.image = loadImage("pig.gif");
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }

    display() {
        
        if(this.body.speed < 3) {
        var piggypos = this.body.position;

        push();
        translate(piggypos.x,piggypos.y);
        rectMode(CENTER);

        fill(255);
        imageMode(CENTER);

        image(this.image,0,0,this.r*2,this.r*2);
        pop();
        }else{

            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility-10;
            tint(0,this.Visibility);
            image(this.image,0,0,this.r*2,this.r*2);

        }
    }
}