class log extends base{
  constructor(x, y, height,angle) {
   super(x,y,20,height,angle);
   this.image = loadImage("wood2.png");
   Matter.Body.setAngle(this.body, angle);
  }
  };
   //save everything and execute and tell me whats the output?? chk now
   //I have sent you the pic ok got it 
   //mam it is working now send me pic of output
   /* var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, height,angle, options);
    //this.width = width; 
    this.height = height;
    
    World.add(world, this.body);
    
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  } */


