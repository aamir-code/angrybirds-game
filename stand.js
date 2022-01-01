class Stand{
    constructor(x,y,width,height) {
        var st_opt = {
            isStatic:true,

        }
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,st_opt);
        World.add(world,this.body);

    }
    show() {
    var pos = this.body.position;
    strokeWeight(0);

    rectMode(CENTER);
    rect(pos.x,pos.y,this.w,this.h);
    


    }
}