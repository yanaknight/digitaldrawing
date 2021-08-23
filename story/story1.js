var img = [];
var myBox;
var MyImage;
var place = 0;
var aspect;
var iWidth;
var iHeight;
var button;

function preload(){
myBox = ['../../ART/Illustration/DiaryComics21/1a.jpg','../../ART/Illustration/DiaryComics21/1b.jpg','../../ART/Illustration/DiaryComics21/1c.jpg','../../ART/Illustration/DiaryComics21/1d.jpg','../../ART/Illustration/DiaryComics21/2a.jpg','../../ART/Illustration/DiaryComics21/2b.jpg','../../ART/Illustration/DiaryComics21/2c.jpg','../../ART/Illustration/DiaryComics21/2d.jpg','../../ART/Illustration/DiaryComics21/3a.jpg','../../ART/Illustration/DiaryComics21/3b.jpg', '../../ART/Illustration/DiaryComics21/3c.jpg', '../../ART/Illustration/DiaryComics21/3d.jpg', '../../ART/Illustration/DiaryComics21/4a.jpg', '../../ART/Illustration/DiaryComics21/4b.jpg', '../../ART/Illustration/DiaryComics21/4c.jpg', '../../ART/Illustration/DiaryComics21/4d.jpg', '../../ART/Illustration/DiaryComics21/5a.jpg', '../../ART/Illustration/DiaryComics21/5b.jpg', 
         '../../ART/Illustration/DiaryComics21/5b.jpg','../../ART/Illustration/DiaryComics21/5c.jpg', '../../ART/Illustration/DiaryComics21/6b.jpg', '../../ART/Illustration/DiaryComics21/6c.jpg', '../../ART/Illustration/DiaryComics21/6d.jpg', '../../ART/Illustration/DiaryComics21/7a.jpg', '../../ART/Illustration/DiaryComics21/7b.jpg', '../../ART/Illustration/DiaryComics21/7c.jpg'];
       
    shuffle(myBox,true);
    
     for(var i=0; i<myBox.length; i++){
        MyImage = loadImage(myBox[i]);
        
        append(img,MyImage);
    }
    
}

function setup(){
   createCanvas(windowWidth,2000);
    textFont("Arial");
    textSize(80);
    fill("red");
    noLoop();
}

function draw(){
    noFill();
    
   // shuffle(img,true);
    
    for(var x=0; x<width; x+=400){
        for(var y=0; y<height; y+=500){
            
            aspect = img[place].height/img[place].width;
            
            iWidth=270;
            iHeight = iWidth * aspect;
            
           // image(img[place],50+x,10+y,245,290);
            //if(img[place].height>img[place].width)
                image(img[place],20+x,40+y,iWidth,iHeight);
            //else image(img[place],20+x,200+y,iWidth,iHeight);
            rect(20+x,40+y,iWidth,iHeight);
            
            button = createButton(img[place], " "," ");
            button.position(20+x,y+40+iHeight);
            button.mousePressed(changeStory);
            
            if(place>=img.length-1)
                place=0; else place++; 
        }   
    }
    
 // button = createButton('Change Story');
  //button.position(10,10);
  //button.mousePressed(changeStory);
}

function changeStory(){
    background(255);
    shuffle(img,true);
    
   for(var x=0; x<width; x+=400){
        for(var y=0; y<height; y+=500){
            
            aspect = img[place].height/img[place].width;
            
            iWidth=250;
            iHeight = iWidth * aspect;
            
           // image(img[place],50+x,10+y,245,290);
            image(img[place],20+x,40+y,iWidth,iHeight);
            rect(20+x,40+y,iWidth,iHeight);
            
            if(place>=img.length-1)
                place=0; else place++; 
        }   
    }
}

