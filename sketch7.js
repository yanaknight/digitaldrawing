var img;

function preload(){
    img = loadImage('img/barn.png');
}

function setup(){
   createCanvas(windowWidth,windowHeight);
    textFont("Arial");
    textSize(80);
    fill("red")
    noLoop();
}

function draw(){
   // background("white")
    image(img,random(width),random(height), 500,300);
    text("Dodgy Barn", random(width), random(height));
    noFill();
    stroke('blue');
    strokeWeight(30);
    for(var i=0;i<5;i++)
        ellipse(random(width),random(height),random(30,100))
}
