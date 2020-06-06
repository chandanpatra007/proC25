const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ball;
var bin1,bin2,bin3;
var ground;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	

	ball = new Ball(100,100,70);
	bin1 = new Dustbin(690,590,20,200);
	bin2 = new Dustbin(390,590,20,200);
	bin3 = new Dustbin(590,600,200,20)
  ground = new Ground(width/2,630,800,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bin1.display();
  bin2.display();
  bin3.display();
  ball.display();
  ground.display();
  drawSprites();
 
}
function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
	  Matter.BodyapplyForce(ballObject.body,ballObject.body.position,{x:50,y:-50});
  }
}



