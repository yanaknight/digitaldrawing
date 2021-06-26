var img =[];
var myBox;
var MyImage; 
var angle = 10;

function preload(){
myBox = ['img/2.jpg','img/3.jpg','img/4.jpg','img/7.jpg','img/8.jpg','img/10.jpg'];
       
    for(var i=0;i<myBox.length;i++){
        MyImage = loadImage(myBox[i]);
        append(img,MyImage);
    }
}

function setup(){
   createCanvas(windowWidth, windowHeight);
    textFont("Arial");
    textSize(80);
    fill("red");
    noLoop();
}

function draw(){
   // background("white")
    //translate(width/2, height/2);
    
    for(var y=0;y<img.length;y++){
        push();
       
        translate(img[y].x, img[y].y);
        scale(0.7);
         rotate(radians(angle));
        image(img[y],random(0,width-250),random(0,height-350),250,350);
        // ellipse(random(width),random(height),random(30,100))
       angle+=15;
        pop();
         
    }
        
    
        //print(img.length);
   // text("Santa Beggar", random(width), random(height));
    noFill();
    
    /*    for (var i = 0; i < 10000; i++) {
  var r = random(width);
  stroke(r * 5);
  line(0, i, 50 + r, i);
}*/
    
   // stroke('blue');
    strokeWeight(30);
    for(var i=0;i<5;i++)
        ellipse(random(width),random(height),random(30,100))
    

   
}
