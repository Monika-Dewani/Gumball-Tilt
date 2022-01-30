class Ball{
    constructor(x,y){
        var options= {
            density:2,
            friction:0,
            restitution:0.7
        }
    
     this.image = loadImage("images/sphere.png");
     this.body = Bodies.circle(x,y,10, options);
     World.add(world,this.body);
     this.color = color(random(0, 204), random(0,204), random(0,204));
    // Matter.Body.setVelocity(this.body, 1)
        this.body.timeScale=2;

    }

    //#571845, #900C3E,#141518 - color codes
    display(){
        push()
        ellipseMode(RADIUS);
        imageMode(CENTER);
        fill(this.color);
        ellipse(this.body.position.x, this.body.position.y, 10,10)
        image(this.image, this.body.position.x, this.body.position.y, 20, 20);
        pop();
        //console.log(this.body.speed);
    } 
      
            
        }
        
    

