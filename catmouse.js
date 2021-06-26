var x=0;
var y=0;
var MyImage;
var sound;
var purr;
var scalar = 40;
var angle = 0;
var speed = 0.6;
var mp=0;
var milsAt;

var targetX = 0; 
var targetY = 0;

function preload(){
   purr = loadSound("sounds/Purring-SoundBible-1561515931.mp3");
    sound = loadSound("sounds/CatMeow-SoundBible-1453940411.mp3");
    MyImage = loadImage('img/cat.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    sound.setVolume(0.2);
    purr.setVolume(0.05);
}

function draw() {
  background(255);
  //line(x,0,x,height);
  //ellipse(x,y,70,70);
    //purr.play();
  image(MyImage, x, y, 150,150);
  var easing = 0.9;
  var diffX = targetX-x;
  x+=diffX*easing;
  var diffY = targetY-y;
  y+=diffY*easing;
   
    if (mp > 4){
        milsAt = millis();
       // print (milsAt)
        
        
        while (millis() < milsAt+4000){
    
          x= diffX*easing + sin(angle)*scalar; 
        y= diffY*easing + sin(angle)*scalar; 
           print(x)
               angle+=speed;
            
         }
       
        mp=0;
    }
  
   // print(mp);
  
}

function mousePressed(){
  
  targetX = mouseX;
  targetY = mouseY;
    sound.play();
    mp++; 
  
}