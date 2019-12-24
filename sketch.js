var fixedrect, movingrect;

function setup() {
  createCanvas(200,800);
  
  fixedrect = createSprite(600, 400, 50, 80);
  fixedrect.shapeColour = "green";

  movingrect = createSprite(400,200,80,30);
  movingrect.shapeColour = "green";
}

function draw() {
movingrect.x = world.mouseX;
movingrect.y = world.mouseY;

  background(255,255,255);  

  drawSprites();
}

if(movingrect.x - fixedrect.x <  fixedrect.width/2 + movingrect.width/2 
   &&  fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2
   && movingrect.y - fixedrect.y <  fixedrect.width/2 + movingrect.width/2  
   && fixedrect.y - movingrect.y < movingrect.width/2 + fixedrect.width/2 ) {


movingrect.shapeColour = "red";
fixedrect.shapeColour = "red";

}

else {

movingrect.shapeColour = "green";
fixedrect.shapeColour = "green";

}