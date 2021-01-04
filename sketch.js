
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin;
var paperBall;
var bin1,bin2,bin3;


function preload()
{
    
}

function setup() {
    var canvas = createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world


    //Create the Bodies Here.

    ground = new Ground(400,700,800,20)

    paperBall = new paper(30,80,30);

    bin1 = new bin(500,630,10,110);
    bin2 = new bin(600,680,210,10);
    bin3 = new bin(700,630,10,110);


    Engine.run(engine);
  
}


function draw() {
  background("white");

  rectMode(CENTER);
  // background(0);

  ellipseMode(RADIUS);


  paperBall.display();
  ground.display();
  bin3.display();
  bin1.display();
  bin2.display();


 
  
  drawSprites();
 
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
    console.log(paperBall.ball.position);
		Matter.Body.applyForce(paperBall.ball,paperBall.ball.position,{x:60,y:-70});
	}
}

