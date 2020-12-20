
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject,ropeObject;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof(200,700);
	ropeObject = new Rope(300,200);
	bobObject1=new bob(200,500);
	bobObject2=new bob(200,800);
	bobObject3=new bob(200,200);
	bobObject4=new bob(200,300);
	bobObject5=new bob(200,100);
	
	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roofObject.display();
  ropeObject.display();
  bobObject1.display(); 
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}



