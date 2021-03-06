class paper {
    constructor(x, y) {
      var options = {
          'friction':0.3,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 30, options);
      this.radius = 30;
      World.add(world, this.body);
      this.image=loadImage("paper.png");
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
     /* ellipseMode(RADIUS);
      fill("red");     
      ellipse(0, 0, this.radius, this.radius);*/
      imageMode(CENTER);
      image(this.image,0, 0, this.radius*2, this.radius*2); 
      pop();
    }
  };
  