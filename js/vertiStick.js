class Verticalstick{
    constructor(x,y,w,h,angle){
        var options= {
            'friction':0,
            'density': 1,
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h, options);
        World.add(world, this.body);
        this.width = w;
        this.height = h;

        // if(this.width===200){
            this.image = loadImage("images/stick3.png");
        // }
        
        // Matter.Body.setAngle(this.body,angle)
    }
    display(){

        
        var angle = this.body.angle;
        //console.log("angle"+angle);
        push();
       translate(this.body.position.x, this.body.position.y)
       rotate(angle*50);
       imageMode(CENTER);
       image(this.image, 0, 0,this.width, this.height)
       pop(); 

       console.log(this.body.angle);

       if(keyIsDown(RIGHT_ARROW)){
          // console.log(this.body.angle);
           if(this.body.angle<0.6)
           Matter.Body.rotate(this.body, 0.01);

       }


        else if(this.body.angle>0.4 && this.body.angle<0.7){
       Matter.Body.rotate(this.body, -0.01); 
      }

       if(keyIsDown(LEFT_ARROW)){
        //console.log(this.body.angle);
           if(this.body.angle>0.25)
        Matter.Body.rotate(this.body, -0.01);
    }

    else if(this.body.angle<=0.398 && this.body.angle>=0.248){
        Matter.Body.rotate(this.body, 0.01); 
       }
    }
}