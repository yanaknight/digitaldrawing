var center;
var img;
var position_x=0;
var s = 380;
var slit;


function preload(){

    img = loadImage('../../ART/Illustration/DiaryComics21/9a.jpg');    
    
}

function setup(){
   createCanvas(windowWidth,windowHeight);
    imageMode(CENTER);
    img.loadPixels();
    background(255);
    stroke(255,0,0);
    center = width/2;
    strokeWeight(2);
   
}

function draw(){
   background(255);
   
    var mx=constrain(mouseX,center-s/2,center+s/2);
    // MyImage.resize(700,0);
  var imgX=map(mx, center-s/2, center+s/2, s,0);
    
    imgX = floor(imgX);
    
    for (var y=0; y<height; y++)
        {
            var c = img.get(imgX,y);
            set(position_x,y,c);
        }
    
    updatePixels();
    //copy(MyImage,mouseX,0,1,MyImage.height, x,10,1,MyImage.height*3);
    //copy(MyImage,imgX,0,1,MyImage.height, x,10,1,MyImage.height*2);
   
   //thumbnail
    //image(MyImage,0,height-s);
    image(img,mx,height-s/2);
    line(width/2,height-s,width/2,height);
    
    line(position_x,s,width/2,height-s);
    //loop back
    position_x++;
   if(position_x >= width)
       position_x=0;
 // x=x+1; 
 
    
}
