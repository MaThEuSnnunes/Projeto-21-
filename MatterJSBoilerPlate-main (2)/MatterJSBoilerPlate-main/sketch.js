
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var groud
var lixo1
var lixo2
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
var ballopitions = {
	isStatic:false,
	 restitution:0.3,
	  friction:0,
	   density:1.2

}
	//Create the Bodies Here.
   ball=Bodies.circle(200,100,20,ballopitions)
   World.add(world,ball);
   groud=new ground(width/2,670,width,20);
    lixo1 = new ground(1100,600,20,120);
	lixo2 = new ground(1350,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  groud.display()
  lixo1.display()
  lixo2.display()
  
  drawSprites();
 
}



