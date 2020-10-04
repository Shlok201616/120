function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 80, 40);
  fixed.shapeColor=("green");
  fixed.debug=true;
  moving=createSprite(500,200,50,60)
  moving.shapeColor=("green");
  moving.debug=true;

}

function draw() {
  background("blue"); 

  console.log(fixed.y-moving.y);
  moving.y=World.mouseY;
  moving.x=World.mouseX;
  if(moving.y-fixed.y<(fixed.height+moving.height)/2  && (fixed.y-moving.y<(fixed.height+moving.height)/2) && moving.x-fixed.x<(fixed.width+moving.width)/2  && (fixed.x-moving.x<(fixed.width+moving.width)/2)){

    fixed.shapeColor=("red");
    moving.shapeColor=("red");
  }else{
    moving.shapeColor=("green");
    fixed.shapeColor=("green");
  }


  drawSprites();
}