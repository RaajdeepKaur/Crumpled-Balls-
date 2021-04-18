class Paper{
    constructor(x,y,radius){
        var options={
            isStatic : false,
            restitution : 0.3,
            friction : 1.0,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.radius = radius;
        this.image = loadImage("d9c6059a-bb78-4d65-be2c-ef7c30326b83.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
       imageMode(RADIUS)
       fill("blue") 
       image(this.image,50,300,20);
    }
}