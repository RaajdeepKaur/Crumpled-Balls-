const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var basket1, basket2, basket3
var ground

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  fill("yellow");
  ground = Bodies.rectangle(600,370, 1200, 20 , {isStatic:true} );
   World.add(world, ground);
  
  
  basket1 = new Dustbin(950,350,200,20);
  basket2 = new Dustbin(855,310,20,100);
  basket3 = new Dustbin(1055,310,20,100);

  paperBall = new Paper(50,300,20);

  Engine.run(engine);
  
}

function draw() {
  background("black"); 
  
  drawSprites();
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,20)
  basket1.display();
  basket2.display();
  basket3.display();
  paperBall.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:15,y:-5});

  }
}