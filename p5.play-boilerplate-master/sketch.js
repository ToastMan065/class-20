var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  fixedRect = createSprite(350, 180, 50, 80);
  movingRect = createSprite(500,170,80,30);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  //movingRect.velocityY = -5;
 // fixedRect.velocityY = +5;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;


}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x  < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x  < fixedRect.width/2 + movingRect.width/2){
      movingRect.velocityX = movingRect.velocityY *(-1);
      fixedRect.velocityX = fixedRect.velocityY * (-1);
    }
    if(movingRect.y - fixedRect.y  < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y  < fixedRect.height/2 + movingRect.height/2){
        movingRect.velocityY = movingRect.velocityY *(-1);
        fixedRect.velocityY = fixedRect.velocityY * (-1);
      }
  

 /* if(movingRect.x - fixedRect.x  < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x  < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y  < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y  < fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }*/
  //console.log("Horizontal center distance = "+fixedRect.width/2 + movingRect.width/2);
 // console.log("distance between x positions = " +movingRect.x - fixedRect.x);
  drawSprites();
}