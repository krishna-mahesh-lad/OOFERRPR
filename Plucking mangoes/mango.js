class Mango {
    constructor(x,y,r){
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1            
        }

        this.r = r;
        this.body = Bodies.circle(x,y,(this.r-30.5)/2,options);
        this.image = loadImage("sprites/mango.png");

        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);    
        pop();
    }
};