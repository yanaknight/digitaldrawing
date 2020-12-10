var img =[];
var myBox;
var MyImage; 

function preload(){
myBox = ['img/27.jpg','img/28.jpg','img/30.jpg','img/33.jpg'];
       
    for(var i=0;i<myBox.length;i++){
        MyImage = loadImage(myBox[i]);
        append(img,MyImage);
    }
}

function setup(){
   createCanvas(windowWidth,windowHeight);
    textFont("Arial");
    textSize(80);
    fill("red");
    noLoop();
}

function draw(){
   // background("white")
    angleMode(DEGREES);
    
    for(var y=0;y<img.length;y++){
      // rotate(45);
        image(img[y],random(width-300),random(height-300),500,300);
        //rotate(-45);
    }
        
    
        //print(img.length);
    text("Dodgy Barn", random(width), random(height));
    noFill();
    stroke('blue');
    strokeWeight(30);
    for(var i=0;i<5;i++)
        ellipse(random(width),random(height),random(30,100))
}
