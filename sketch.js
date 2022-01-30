var board, boardImg;
var angle =0;
var engine, world;
var ball1, ball2, ball3, ball4, ball5,ball6;
var bowlImg, bgImg, bg1Img, bg2Img, bg3Img, play, playImg;
var stick1, stick2, stick3;
var ballLeftStick, ballRightStick;
var score = 0;
var i = 0.1;
var WAIT = 0;
var END = 2;
var WIN = 3
var PLAY = 1;
var gameState= 0;
var canvas;
var panelImg;
var x=541,y=600;
var scoreBoard, timeBoard, instructionBoard;
var myTime, sad, win, happy, bee;
var bear, monkey, santa1, sanat2, santa3, deer, pause, sleigh;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const start = Date.now();
  const milliseconds = Date.now() - start;
  //console.log('Seconds passed = ' + milliseconds / 1000);

function preload(){
  boardImg = loadImage("images/board.png");
  bowlImg = loadImage("images/bowl.png");
  panelImg = loadImage("images/panel.jpg");
  playImg = loadImage("images/playImg.png");
  pause = loadImage("images/pause.png");

  bgImg = loadImage("images/bg.png");
  bg1Img = loadImage("images/bg1.jpg");
  bg2Img = loadImage("images/bg2.png");
  bg3Img= loadImage("images/bg3.jpg");
  

  bear = loadImage("images/bear.png");
  santa1 = loadImage("images/santa1.png");
  santa2 = loadImage("images/santa2.png");
  santa3= loadImage("images/santa3.png");
  monkey = loadImage("images/monkey.png");
  sleigh = loadImage("images/sleigh.png");

  sad = loadImage("images/sad.png")
  win = loadImage("images/gameover.png")
  happy = loadImage("images/happy.png");
  bee = loadImage("images/bee.png")
  

}
function setup() {
  
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  stickAngle = PI;
  
  ballLeftStick = Matter.Bodies.rectangle(545, 540, 40, 5,{angle:PI/5, isStatic:true});
  World.add(world,ballLeftStick);
  ballRightStick = Matter.Bodies.rectangle(788, 540, 40, 5,{angle:-PI/5, isStatic:true});
  World.add(world,ballRightStick);

  timeBoard = Matter.Bodies.rectangle(1250,145, 240, 20,{isStatic:true})
  World.add(world,timeBoard);
  scoreBoard = Matter.Bodies.rectangle(1250,145, 240, 20,{isStatic:true})
  World.add(world,scoreBoard);
  instructionBoard = Matter.Bodies.rectangle(75,135, 240, 80,{isStatic:true})
  World.add(world,instructionBoard);

  play = createSprite(750,410, 40,40);
  play.addImage(playImg);
  play.scale = 0.3;
  
  
  stick1 = new Horizontalstick(510,190,400,24,PI);
  stick2 = new Horizontalstick(850,350,400,24,PI);
  stick3 = new Verticalstick(550,450,200,24,PI/3);
   Matter.Body.setAngle(stick3.body,PI/7);
   

  ball1 = new Ball(400,0);
  ball2 = new Ball(450,0);
  ball3 = new Ball(500,0);
  ball4 = new Ball(550,0);
  ball5 = new Ball(600,0);
  ball6 = new Ball(650,0);
  

 //var render = Matter.Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); Matter.Render.run(render);
  
}

function draw() {

  if(gameState===0){
    push();
    background(bg1Img);
  fill("white")
  stroke("purple")
  textSize(45);
  strokeWeight(7)
  text("Santa's Gumball Tilt",570, 55);
  pop();
  imageMode(CENTER)
    image(pause, 550, 400,200,200)
    image(bear, 950, 400,200,200)
    image(monkey, 1180, 150,200,200)
    image(santa1, 1150, 500,200,200)
    image(santa2, 500,100,200,200)
    image(santa3, 150, 400,200,200)
    image(sleigh, 350, 500,200,200)


  if(mousePressedOver(play)){
    gameState=1;
    play.destroy(); 
  }

  }
 
 
if(gameState===1){
  background(bgImg);

  const milliseconds = Date.now() - start;
  const time = Math.floor( milliseconds / 1000);
  //display it (text)
 
  rectMode(CENTER);
  fill("purple") 
  rect(timeBoard.position.x,timeBoard.position.y,155,95);
  fill("white") 
  rect(scoreBoard.position.x,scoreBoard.position.y,140,75);
  rect(instructionBoard.position.x, instructionBoard.position.y, 200,100)

  if(keyIsDown(RIGHT_ARROW)||keyIsDown(LEFT_ARROW)){
  push();
  translate(660,300)
  rotate(stick1.body.angle*50);
  imageMode(CENTER);
  image(boardImg, 0, 0, 1000,500);
  pop();
  }

  push();
  translate(660,300)
  rotate(stick1.body.angle*50);
  imageMode(CENTER);
  image(boardImg, 0, 0, 1000,500);
  pop();
  //image(boardImg, 500, 250, 1000,500);

//text(mouseX+","+mouseY,mouseX,mouseY)
stroke('purple')

push();
fill('black')

textSize(20)
text("Score : "+ score, 1200,142);
myTime = Math.floor(milliseconds/1000)
text('Time = ' + myTime +" sec", 1190,169);
text("Try to score 300", 18,118 ) 
text("or above to win ",18,140)
text("within 20 sec", 18, 165)
pop();




  Engine.update(engine);


  //score 
 if(ball1.body.position.y>535 && ball1.body.position.y<550 && ball1.body.position.x>534 && ball1.body.position.x<775){
  score = score+50
  // ball1.destroy();
}
if(ball2.body.position.y>535 && ball2.body.position.y<550 && ball2.body.position.x>534 && ball2.body.position.x<775){
  score = score+50
  // ball2.destroy();
}
if(ball3.body.position.y>535 && ball3.body.position.y<550 && ball3.body.position.x>534 && ball3.body.position.x<775){
  score = score+50
  // ball3.destroy();
}
if(ball4.body.position.y>535 && ball4.body.position.y<550 && ball4.body.position.x>534 && ball4.body.position.x<775){
  score = score+50
  // ball4.destroy();
}
if(ball5.body.position.y>535 && ball5.body.position.y<550 && ball5.body.position.x>534 && ball5.body.position.x<775){
  score = score+50
  // ball5.destroy();
}
if(ball6.body.position.y>535 && ball6.body.position.y<550 && ball6.body.position.x>534 && ball6.body.position.x<775){
  score = score+50
  // ball6.destroy();
}

  
  
  stick1.display();
  stick2.display();
  stick3.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  
  // rectMode(CENTER);
  // rect(ballRightStick.position.x, ballRightStick.position.y, 40, 5)
  imageMode(CENTER);
 image(bowlImg, 670, 565, 250, 40);
 image(panelImg, 670, 600, 298, 40);

 for(var i=0,j=0;i<6;i++,j=j+29){
  //rect(x+j,y,20,20);
  fill("brown");
  circle(x+j,y,20);

}

 for(var k=0,l=0;k<score&&l<170;k=k+50,l=l+29){
  //rect(x+j,y,20,20);
   push();
  fill("yellow");
  circle(x+l,y,20);
   pop();

}  

fill("white")
textSize(30);
strokeWeight(5)
text("Santa's Gumball Tilt",580, 45)
 }
 drawSprites();

 if(myTime>20||myTime>30 && score<300){
  gameState=2
 }

 if(score>=300&&myTime>= 20){
   gameState=3
 }
 
 if(gameState===2){
      background(bg2Img);
      fill("black")
textSize(35);
strokeWeight(5)
text("Santa's Gumball Tilt",580, 45)
text("You Lost!!", 280, 300);
text("Game Over..", 280, 350);
image(sad, 250, 60,200,200);

      }
if(gameState===3){
  background(bg3Img);
      fill("black")
textSize(45);
strokeWeight(5)
//text("Santa's Gumball Tilt",580, 45)
text("You Won!!", 1080, 300);
text("Game Over..", 1080, 350);
image(win, 20, 300,200,200);
image(happy, 1010, 60,200,200);
image(bee, 107, 50,200,200);
//text(mouseX+","+mouseY,mouseX,mouseY)
}
 
}



 