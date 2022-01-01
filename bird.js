class Bird{
    constructor(x,y,r) {
        var opt = {
            restitution:0.4,
            isStatic:false
        }
        this.xaxis = x;
        this.yaxis = y;
        this.r = r;
        this.body = Bodies.circle(this.xaxis,this.yaxis,this.r,opt);
        World.add(world,this.body);
    }
    show() {
    strokeWeight(0);

    ellipse(this.body.position.x,this.body.position.y,this.r);
    ellipseMode(RADIUS);
    }
}