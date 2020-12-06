
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boxA,,ground;
var box1,ground1;
var box1_options,geound_options;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    ground=createSprite(width/2,700,800,40)
    
	boxA=createSprite(600,670,200,20)
    boxA=createSprite(500,670,20,200)
	boxA=createSprite(700,670,20,200)

	paper=createSprite(300,670,30,30)


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
    ground_options={
		  isStatic:true
	  }
	  ground1=Bodies.rectangle(width/2,700,800,40)
       World.add(world,ground1)

	
	box1_options={
		  isStatic:true
	  }
	  box1=Bodies.rectangle(600,670,200,20,box1_options)
	    World.add(world,box1)


	Engine.run(engine);
     
}


function draw() {
  rectMode(CENTER);
  background(0)
  Engine.update(engine)

  drawSprites();
 
}



