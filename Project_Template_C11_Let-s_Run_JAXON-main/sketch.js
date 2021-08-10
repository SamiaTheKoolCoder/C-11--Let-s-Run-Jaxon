//declaring variables
var track, trackImage
var jaxon, running
var invisibleLeft, invisibleRight

function preload(){
  //pre-load 
  trackImage = loadImage("path.png")
  running = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200);
  track.addImage(trackImage);

  jaxon = createSprite(200,300);
  jaxon.addAnimation("running", running);
  jaxon.scale = 0.1;

  invisibleLeft = createSprite(60,200,1,400);
  invisibleLeft.visible = false;
  invisibleRight = createSprite(340,200,1,400);
  invisibleRight.visible = false;
}

function draw() {
  background(0);
  //create moving background
  
  track.velocityY = 8;
  if (track.y > 400) {
    track.y = height/2;
  }

  jaxon.x = World.mouseX;

  drawSprites();
  }
