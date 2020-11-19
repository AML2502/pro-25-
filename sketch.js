
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b3,b1,b2,g,p,p1,d




function setup() {
	createCanvas(800, 700);

 	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	g = new Ground (400,690,800,20);
	b2 = new Box (600,670,200,20);
	p = new paper (100,650);
	Engine.run(engine);
  
}
function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(p.body,p.body.position,{x:150,y:-100});
	}
}

function draw() {
  rectMode(CENTER);
  background("lightblue");
  g.display();
  p.display();
  b2.display();
  
  
  drawSprites();
 
}