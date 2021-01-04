class bin
{
    constructor(xpos,ypos,width,height)
    {
        var options = {
                           isStatic: true}

       this.body = Bodies.rectangle(xpos,ypos,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world,this.body);
       this.image = loadImage("dustbingreen.png");
    }

    display()
    {

        var position = this.body.position;
        
        if(this.width<200)
        {
            fill("red");

            rectMode(CENTER);
            rect(this.body.position.x,this.body.position.y,this.width,this.height)

        }
        else {

            imageMode(CENTER);

            image(this.image,position.x,position.y-85,this.width+20,this.height*20);

        
        }

        


        
    }

}
