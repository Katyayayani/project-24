 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){	
}


function setup() {
	createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper=new Paper ()
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ball.display();
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject,paperObject.body.position,{x:85,y:-85})
}}

