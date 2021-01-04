class paper
{
  constructor(xpos,ypos,radius)
  {     
      var options={
          isStatic:false,
          resitution:0.3,
          density:0.5
      }

    this.radius = radius  
    this.ball = Bodies.circle(xpos,ypos,radius,options);

    World.add(world,this.ball)

    this.image = loadImage("paper.png");

  }
  

  display()
  {

    push();
    // ellipse(this.ball.position.x,this.ball.position.y,this.radius);
    imageMode(CENTER);

    image(this.image,this.ball.position.x,this.ball.position.y,80,80);

    pop();
    
   
  
  }

    
    
}