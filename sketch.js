 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

function preload(){	
}


function setup() {
	createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper=new Paper(100,100)
  ground=new Ground(600,400,1200,20);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  paper.display();
  ground.display();
}

function keyPressed(){
if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject,paperObject.body.position,{x:85,y:-85})
}}

