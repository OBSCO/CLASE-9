 var box;
function setup() {
  createCanvas(500,500);
  box = createSprite(200,200,50,50);
}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
  box.x += 5;
  }   
  if(keyIsDown(LEFT_ARROW)){
  box.x += -5;
  } 
  if(keyIsDown(UP_ARROW)){
  box.y += -5;
  } 
  if(keyIsDown(DOWN_ARROW)){
  box.y += 5; 
} 
 drawSprites();
}




