var garden, gardenImage
var cat, catImage1,catImage2
var mouse, mouseImage


function preload() {
  gardenImage = loadImage ("images/garden.png"); 
  catImage1 = loadImage ("images/cat1.png");
  catImage2 = loadAnimation ("images/cat2.png","images/cat3.png"); 
  catImage3 = loadImage("images/cat4.png");
  mouseImage1 = loadImage("images/mouse1.png");
  mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
  mouseImage3 = loadImage("images/mouse4.png");
 }


function setup(){
    createCanvas(800,800);
    garden = createSprite(400,400);
    garden.addImage(gardenImage); 
    garden.scale = 1.2;

    cat = createSprite(600,600)
    cat.addImage(catImage1);
    cat.scale = 0.2;

    mouse = createSprite(100,600);
    mouse.addImage(mouseImage1);
    mouse.scale = 0.2;


}

function draw(){
    background("blue");

  if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.addImage("catImage3");
    mouse.addImage("mouseImage3");
    cat.velocityX = 0;
    }


    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseteasing",mouseImage2);
    mouse.changeAnimation("mouseteasing");
    mouse.frameDelay = 15;
    cat.addAnimation("catmoving",catImage2);
    cat.changeAnimation("catmoving")
    cat.velocityX = -2;

  }

  if(keyCode === RIGHT_ARROW){
    cat.velocityX = 0;
  }


}
