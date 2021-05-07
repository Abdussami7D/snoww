class snow{
    constructor(x, y) {
      var options = {
          'friction':0.1,
          'density':1,
          'isStatic': false

         
      }
      this.body = Bodies.circle(x, y, 5/2, options);
      this.radius = 50;
	  this.image = loadImage("snow4.webp");

      World.add(world,this.body);
    }


    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);

      ellipseMode(CENTER)
      
      fill("blue");
          image(this.image,0, 0,this.radius,this.radius);

      pop();
    }

    update(){

      if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,800)})
      }

    }
  };
