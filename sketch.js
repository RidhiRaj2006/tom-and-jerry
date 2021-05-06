var bgImg;
var catimg1,catimg2,catimg3;
var mouseimg1,mouseimg2,mouseimg3;


function preload() {
    //load the images here
    bgImg=loadImage("garden.png");
    catimg1=loadAnimation("cat1.png");
    mouseimg1=loadAnimation("mouse1.png");
    catimg2=loadAnimation("cat2.png","cat3.png");
    mouseimg2=loadAnimation("mouse2.png","mouse3.png");
    catimg3=loadAnimation("cat4.png");
    mouseimg3=loadAnimation("mouseimg4");
}

function setup(){
    createCanvas(1000,800);
    var cat=createSprite(500,400);
    cat.addAnimation("catRunning",catimg1);
    cat.scale=0.2;
    var mouse=createSprite(400,500);
    mouse.addAnimation("mouseTeasing",mouseimg1);
    mouse.scale=0.2;
     
}

function draw() {

    background(bgImg);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
     cat.addAnimation("catStop",catimg3);
     cat.changeAnimation("catStop");
     mouse.addAnimation("mouseStop",mouseimg3);
     mouse.changeAnimation("mouseStop");
    }
    
    drawSprites();
     

}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode===LEFT_ARROW){
        cat.velocityX=-5;
        cat.addAnimation("catRunning",catimg2);
        cat.changeAnimation("catRunning");
        mouse.addAnimation("mouseTeasing",mouseimg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay=25;
    }
}
