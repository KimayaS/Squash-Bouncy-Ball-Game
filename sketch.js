var ball, ballimg, paddle, paddleimg;

function preload() {
  ballimg =   loadImage("ball.png");
  paddleimg = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
    ball = createSprite(200,200,20,20);
    ball.addImage(ballimg);
    ball.velocityX = 9

    paddle = createSprite(390,200,20,10);
    paddle.addImage(paddleimg);

}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle, randomVelocity);
  
  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y-20
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y+20
  }
  
 if(paddle.y<30)
 {
  paddle.y = 40;
 }
  
 if(paddle.y>370)
 {
  paddle.y = 360;
 }
  
  
  drawSprites();
  
}

function randomVelocity()
{
ball.velocityY = random(-5, 5);
}

