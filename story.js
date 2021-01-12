var img =[];
var myBox;
var MyImage; 
var place=0;

function preload(){
myBox = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg','img/10.jpg'];
       
    shuffle(myBox,true);
    
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
    noFill();
    
    
   // shuffle(img,true);
    
    for(var x=0;x<width;x+=400){
        for(var y=0;y<height;y+=400){
            rect(50+x,y,250,350);

           // image(img[place],50+x,10+y,245,290);
            image(img[place],50+x,5+y,248,345);
        
            if(place>=img.length-1)
                place=0; else place++;
        }   
    }
    
  button = createButton('Change Story');
  button.position(width/2-70,height/2);
  button.mousePressed(changeStory);
}

function changeStory(){
    
    shuffle(img,true);
    
    for(var x=0;x<width;x+=400){
        for(var y=0;y<height;y+=400){
            rect(50+x,y,250,350);

           // image(img[place],50+x,10+y,245,290);
            image(img[place],50+x,5+y,248,345);
        
            if(place>=img.length-1)
                place=0; else place++;
        }   
    }
}
