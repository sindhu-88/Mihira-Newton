
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  bobDiameter=40;
	bob1 = new Bob(500,450,40,40);
	bob2 = new Bob(490,450,40,40);
	bob3 = new Bob(480,450,40,40);
	bob4 = new Bob(470,450,40,40);
	bob5 = new Bob(460,450,40,40);
    roof1 = new Roof(350,450,1000,20);
	
	ground1 = new Roof(400,650,900,20);

	rope1= new Rope(bob1.body, roof1.body, bobDiameter*2, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  ground1.display();
  rope1.display();

  drawSprites();
 
}



