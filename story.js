var img = [];
var img1 = [];
var img2 = [];
var img3 = [];
var myBox;
var MyImage;
var place = 0;
var aspect;
var iWidth;
var iHeight;
var button;
var c;

function preload(){
myBox = ['../../ART/Illustration/DiaryComics21/1a.jpg','../../ART/Illustration/DiaryComics21/1b.jpg','../../ART/Illustration/DiaryComics21/1c.jpg','../../ART/Illustration/DiaryComics21/1d.jpg','../../ART/Illustration/DiaryComics21/2a.jpg','../../ART/Illustration/DiaryComics21/2b.jpg','../../ART/Illustration/DiaryComics21/2c.jpg','../../ART/Illustration/DiaryComics21/2d.jpg','../../ART/Illustration/DiaryComics21/3a.jpg','../../ART/Illustration/DiaryComics21/3b.jpg', '../../ART/Illustration/DiaryComics21/3c.jpg', '../../ART/Illustration/DiaryComics21/3d.jpg', '../../ART/Illustration/DiaryComics21/4a.jpg', '../../ART/Illustration/DiaryComics21/4b.jpg', '../../ART/Illustration/DiaryComics21/4c.jpg', '../../ART/Illustration/DiaryComics21/4d.jpg', '../../ART/Illustration/DiaryComics21/5a.jpg', '../../ART/Illustration/DiaryComics21/5b.jpg', 
         '../../ART/Illustration/DiaryComics21/5b.jpg','../../ART/Illustration/DiaryComics21/5c.jpg', '../../ART/Illustration/DiaryComics21/6b.jpg', '../../ART/Illustration/DiaryComics21/6c.jpg', '../../ART/Illustration/DiaryComics21/6d.jpg', '../../ART/Illustration/DiaryComics21/7a.jpg', '../../ART/Illustration/DiaryComics21/7b.jpg', '../../ART/Illustration/DiaryComics21/7c.jpg', '../../ART/Illustration/DiaryComics21/8a.jpg', '../../ART/Illustration/DiaryComics21/8b.jpg', '../../ART/Illustration/DiaryComics21/8c.jpg', '../../ART/Illustration/DiaryComics21/8d.jpg', '../../ART/Illustration/DiaryComics21/9b.jpg', '../../ART/Illustration/DiaryComics21/9a.jpg'
        , '../../ART/Illustration/DiaryComics21/9c.jpg', '../../ART/Illustration/DiaryComics21/9d.jpg', '../../ART/Illustration/DiaryComics21/9e.jpg', '../../ART/Illustration/DiaryComics21/10a.jpg', '../../ART/Illustration/DiaryComics21/10b.jpg'
        , '../../ART/Illustration/DiaryComics21/10c.jpg', '../../ART/Illustration/DiaryComics21/10d.jpg', '../../ART/Illustration/DiaryComics21/10e.jpg', '../../ART/Illustration/DiaryComics21/11a.jpg', '../../ART/Illustration/DiaryComics21/11b.jpg', '../../ART/Illustration/DiaryComics21/11c.jpg', '../../ART/Illustration/DiaryComics21/12a.jpg', '../../ART/Illustration/DiaryComics21/12b.jpg'
        , '../../ART/Illustration/DiaryComics21/12c.jpg', '../../ART/Illustration/DiaryComics21/12d.jpg', '../../ART/Illustration/DiaryComics21/14a.jpg', '../../ART/Illustration/DiaryComics21/14b.jpg'
        , '../../ART/Illustration/DiaryComics21/14c.jpg', '../../ART/Illustration/DiaryComics21/14d.jpg', '../../ART/Illustration/DiaryComics21/13a.jpg', '../../ART/Illustration/DiaryComics21/13b.jpg'
        , '../../ART/Illustration/DiaryComics21/13c.jpg', '../../ART/Illustration/DiaryComics21/13d.jpg','../../ART/Illustration/DiaryComics21/13e.jpg'
        
,'../../ART/Illustration/DiaryComics21/15a.jpg','../../ART/Illustration/DiaryComics21/15b.jpg','../../ART/Illustration/DiaryComics21/15c.jpg','../../ART/Illustration/DiaryComics21/15d.jpg','../../ART/Illustration/DiaryComics21/15e.jpg','../../ART/Illustration/DiaryComics21/16a.jpg','../../ART/Illustration/DiaryComics21/16b.jpg','../../ART/Illustration/DiaryComics21/16c.jpg','../../ART/Illustration/DiaryComics21/21e.jpg','../../ART/Illustration/DiaryComics21/16d.jpg','../../ART/Illustration/DiaryComics21/17a.jpg','../../ART/Illustration/DiaryComics21/17b.jpg','../../ART/Illustration/DiaryComics21/17c.jpg','../../ART/Illustration/DiaryComics21/17d.jpg','../../ART/Illustration/DiaryComics21/18a.jpg','../../ART/Illustration/DiaryComics21/18b.jpg','../../ART/Illustration/DiaryComics21/18c.jpg','../../ART/Illustration/DiaryComics21/18d.jpg','../../ART/Illustration/DiaryComics21/18e.jpg','../../ART/Illustration/DiaryComics21/19a.jpg','../../ART/Illustration/DiaryComics21/19b.jpg','../../ART/Illustration/DiaryComics21/19c.jpg','../../ART/Illustration/DiaryComics21/19d.jpg','../../ART/Illustration/DiaryComics21/20a.jpg','../../ART/Illustration/DiaryComics21/20b.jpg','../../ART/Illustration/DiaryComics21/20c.jpg','../../ART/Illustration/DiaryComics21/20d.jpg','../../ART/Illustration/DiaryComics21/21a.jpg','../../ART/Illustration/DiaryComics21/21b.jpg','../../ART/Illustration/DiaryComics21/21c.jpg','../../ART/Illustration/DiaryComics21/21d.jpg'
         ,'../../ART/Illustration/DiaryComics21/22a.jpg','../../ART/Illustration/DiaryComics21/22b.jpg','../../ART/Illustration/DiaryComics21/22c.jpg','../../ART/Illustration/DiaryComics21/22d.jpg','../../ART/Illustration/DiaryComics21/23a.jpg','../../ART/Illustration/DiaryComics21/23b.jpg','../../ART/Illustration/DiaryComics21/23c.jpg','../../ART/Illustration/DiaryComics21/23d.jpg','../../ART/Illustration/DiaryComics21/24a.jpg','../../ART/Illustration/DiaryComics21/24b.jpg','../../ART/Illustration/DiaryComics21/24c.jpg','../../ART/Illustration/DiaryComics21/24d.jpg','../../ART/Illustration/DiaryComics21/25a.jpg','../../ART/Illustration/DiaryComics21/25b.jpg','../../ART/Illustration/DiaryComics21/25c.jpg','../../ART/Illustration/DiaryComics21/25d.jpg','../../ART/Illustration/DiaryComics21/26a.jpg','../../ART/Illustration/DiaryComics21/26b.jpg','../../ART/Illustration/DiaryComics21/26c.jpg','../../ART/Illustration/DiaryComics21/26d.jpg','../../ART/Illustration/DiaryComics21/27a.jpg','../../ART/Illustration/DiaryComics21/27b.jpg','../../ART/Illustration/DiaryComics21/27c.jpg','../../ART/Illustration/DiaryComics21/27d.jpg','../../ART/Illustration/DiaryComics21/28a.jpg','../../ART/Illustration/DiaryComics21/28b.jpg','../../ART/Illustration/DiaryComics21/28d.jpg','../../ART/Illustration/DiaryComics21/28c.jpg','../../ART/Illustration/DiaryComics21/28e.jpg','../../ART/Illustration/DiaryComics21/28f.jpg','../../ART/Illustration/DiaryComics21/28h.jpg','../../ART/Illustration/DiaryComics21/28g.jpg','../../ART/Illustration/DiaryComics21/28i.jpg'
         ,'../../ART/Illustration/DiaryComics21/29a.jpg','../../ART/Illustration/DiaryComics21/29b.jpg','../../ART/Illustration/DiaryComics21/29c.jpg','../../ART/Illustration/DiaryComics21/29d.jpg','../../ART/Illustration/DiaryComics21/30a.jpg','../../ART/Illustration/DiaryComics21/30b.jpg','../../ART/Illustration/DiaryComics21/30c.jpg','../../ART/Illustration/DiaryComics21/30d.jpg','../../ART/Illustration/DiaryComics21/31a.jpg','../../ART/Illustration/DiaryComics21/31b.jpg','../../ART/Illustration/DiaryComics21/31c.jpg','../../ART/Illustration/DiaryComics21/31d.jpg','../../ART/Illustration/DiaryComics21/32a.jpg','../../ART/Illustration/DiaryComics21/32b.jpg','../../ART/Illustration/DiaryComics21/32c.jpg','../../ART/Illustration/DiaryComics21/32d.jpg','../../ART/Illustration/DiaryComics21/33a.jpg','../../ART/Illustration/DiaryComics21/33b.jpg','../../ART/Illustration/DiaryComics21/33c.jpg','../../ART/Illustration/DiaryComics21/33d.jpg','../../ART/Illustration/DiaryComics21/34a.jpg','../../ART/Illustration/DiaryComics21/34b.jpg','../../ART/Illustration/DiaryComics21/34c.jpg','../../ART/Illustration/DiaryComics21/34d.jpg','../../ART/Illustration/DiaryComics21/34e.jpg','../../ART/Illustration/DiaryComics21/35b.jpg','../../ART/Illustration/DiaryComics21/35a.jpg','../../ART/Illustration/DiaryComics21/35c.jpg','../../ART/Illustration/DiaryComics21/35d.jpg'
         
         ,'../../ART/Illustration/DiaryComics21/36a.jpg','../../ART/Illustration/DiaryComics21/36b.jpg','../../ART/Illustration/DiaryComics21/36c.jpg','../../ART/Illustration/DiaryComics21/36d.jpg','../../ART/Illustration/DiaryComics21/37a.jpg','../../ART/Illustration/DiaryComics21/37b.jpg','../../ART/Illustration/DiaryComics21/37c.jpg','../../ART/Illustration/DiaryComics21/36e.jpg','../../ART/Illustration/DiaryComics21/38a.jpg','../../ART/Illustration/DiaryComics21/38b.jpg','../../ART/Illustration/DiaryComics21/38c.jpg','../../ART/Illustration/DiaryComics21/38d.jpg','../../ART/Illustration/DiaryComics21/39a.jpg','../../ART/Illustration/DiaryComics21/39b.jpg','../../ART/Illustration/DiaryComics21/39c.jpg','../../ART/Illustration/DiaryComics21/39d.jpg','../../ART/Illustration/DiaryComics21/40a.jpg','../../ART/Illustration/DiaryComics21/40b.jpg','../../ART/Illustration/DiaryComics21/40c.jpg','../../ART/Illustration/DiaryComics21/40d.jpg','../../ART/Illustration/DiaryComics21/41a.jpg','../../ART/Illustration/DiaryComics21/41b.jpg','../../ART/Illustration/DiaryComics21/41c.jpg','../../ART/Illustration/DiaryComics21/41d.jpg','../../ART/Illustration/DiaryComics21/36f.jpg','../../ART/Illustration/DiaryComics21/42b.jpg','../../ART/Illustration/DiaryComics21/42a.jpg','../../ART/Illustration/DiaryComics21/42c.jpg','../../ART/Illustration/DiaryComics21/42d.jpg'
         
         ,'../../ART/Illustration/DiaryComics21/43a.jpg','../../ART/Illustration/DiaryComics21/43b.jpg','../../ART/Illustration/DiaryComics21/43c.jpg','../../ART/Illustration/DiaryComics21/43d.jpg','../../ART/Illustration/DiaryComics21/44a.jpg','../../ART/Illustration/DiaryComics21/44b.jpg','../../ART/Illustration/DiaryComics21/44c.jpg','../../ART/Illustration/DiaryComics21/44d.jpg','../../ART/Illustration/DiaryComics21/45a.jpg','../../ART/Illustration/DiaryComics21/45b.jpg','../../ART/Illustration/DiaryComics21/45c.jpg','../../ART/Illustration/DiaryComics21/45d.jpg','../../ART/Illustration/DiaryComics21/46a.jpg','../../ART/Illustration/DiaryComics21/46b.jpg','../../ART/Illustration/DiaryComics21/46c.jpg','../../ART/Illustration/DiaryComics21/46d.jpg','../../ART/Illustration/DiaryComics21/47a.jpg','../../ART/Illustration/DiaryComics21/47b.jpg','../../ART/Illustration/DiaryComics21/47c.jpg','../../ART/Illustration/DiaryComics21/47d.jpg','../../ART/Illustration/DiaryComics21/48a.jpg','../../ART/Illustration/DiaryComics21/48b.jpg','../../ART/Illustration/DiaryComics21/48c.jpg','../../ART/Illustration/DiaryComics21/48d.jpg','../../ART/Illustration/DiaryComics21/49a.jpg','../../ART/Illustration/DiaryComics21/49b.jpg','../../ART/Illustration/DiaryComics21/49c.jpg','../../ART/Illustration/DiaryComics21/49d.jpg'
        
         
         ,'../../ART/Illustration/DiaryComics21/50a.jpg','../../ART/Illustration/DiaryComics21/50b.jpg','../../ART/Illustration/DiaryComics21/50c.jpg','../../ART/Illustration/DiaryComics21/50d.jpg','../../ART/Illustration/DiaryComics21/51a.jpg','../../ART/Illustration/DiaryComics21/51b.jpg','../../ART/Illustration/DiaryComics21/51c.jpg','../../ART/Illustration/DiaryComics21/51d.jpg','../../ART/Illustration/DiaryComics21/52a.jpg','../../ART/Illustration/DiaryComics21/52b.jpg','../../ART/Illustration/DiaryComics21/52c.jpg','../../ART/Illustration/DiaryComics21/52d.jpg','../../ART/Illustration/DiaryComics21/53a.jpg','../../ART/Illustration/DiaryComics21/53b.jpg','../../ART/Illustration/DiaryComics21/53c.jpg','../../ART/Illustration/DiaryComics21/53d.jpg','../../ART/Illustration/DiaryComics21/54a.jpg','../../ART/Illustration/DiaryComics21/54b.jpg','../../ART/Illustration/DiaryComics21/54c.jpg','../../ART/Illustration/DiaryComics21/54d.jpg','../../ART/Illustration/DiaryComics21/55a.jpg','../../ART/Illustration/DiaryComics21/55b.jpg','../../ART/Illustration/DiaryComics21/55c.jpg','../../ART/Illustration/DiaryComics21/55d.jpg','../../ART/Illustration/DiaryComics21/56a.jpg','../../ART/Illustration/DiaryComics21/56b.jpg','../../ART/Illustration/DiaryComics21/56c.jpg','../../ART/Illustration/DiaryComics21/56d.jpg'
         
         ,'../../ART/Illustration/DiaryComics21/57a.jpg','../../ART/Illustration/DiaryComics21/57b.jpg','../../ART/Illustration/DiaryComics21/57c.jpg','../../ART/Illustration/DiaryComics21/58a.jpg','../../ART/Illustration/DiaryComics21/58b.jpg','../../ART/Illustration/DiaryComics21/58c.jpg','../../ART/Illustration/DiaryComics21/58d.jpg','../../ART/Illustration/DiaryComics21/59a.jpg','../../ART/Illustration/DiaryComics21/59b.jpg','../../ART/Illustration/DiaryComics21/59c.jpg','../../ART/Illustration/DiaryComics21/59d.jpg','../../ART/Illustration/DiaryComics21/60a.jpg','../../ART/Illustration/DiaryComics21/60b.jpg','../../ART/Illustration/DiaryComics21/60c.jpg','../../ART/Illustration/DiaryComics21/60d.jpg','../../ART/Illustration/DiaryComics21/61a.jpg','../../ART/Illustration/DiaryComics21/61b.jpg','../../ART/Illustration/DiaryComics21/61c.jpg','../../ART/Illustration/DiaryComics21/61d.jpg','../../ART/Illustration/DiaryComics21/62a.jpg','../../ART/Illustration/DiaryComics21/62b.jpg','../../ART/Illustration/DiaryComics21/62c.jpg','../../ART/Illustration/DiaryComics21/62d.jpg','../../ART/Illustration/DiaryComics21/63a.jpg','../../ART/Illustration/DiaryComics21/63b.jpg','../../ART/Illustration/DiaryComics21/63c.jpg','../../ART/Illustration/DiaryComics21/63d.jpg'
        
         
         ,'../../ART/Illustration/DiaryComics21/64a.jpg','../../ART/Illustration/DiaryComics21/64b.jpg','../../ART/Illustration/DiaryComics21/64c.jpg','../../ART/Illustration/DiaryComics21/64d.jpg'
         ,'../../ART/Illustration/DiaryComics21/64e.jpg','../../ART/Illustration/DiaryComics21/65b.jpg','../../ART/Illustration/DiaryComics21/65a.jpg','../../ART/Illustration/DiaryComics21/65c.jpg','../../ART/Illustration/DiaryComics21/65d.jpg','../../ART/Illustration/DiaryComics21/66a.jpg','../../ART/Illustration/DiaryComics21/66b.jpg','../../ART/Illustration/DiaryComics21/66c.jpg','../../ART/Illustration/DiaryComics21/66d.jpg','../../ART/Illustration/DiaryComics21/67a.jpg','../../ART/Illustration/DiaryComics21/67b.jpg','../../ART/Illustration/DiaryComics21/67c.jpg','../../ART/Illustration/DiaryComics21/67d.jpg','../../ART/Illustration/DiaryComics21/68a.jpg','../../ART/Illustration/DiaryComics21/68b.jpg','../../ART/Illustration/DiaryComics21/68c.jpg','../../ART/Illustration/DiaryComics21/68d.jpg','../../ART/Illustration/DiaryComics21/68e.jpg','../../ART/Illustration/DiaryComics21/69a.jpg','../../ART/Illustration/DiaryComics21/69b.jpg','../../ART/Illustration/DiaryComics21/69c.jpg','../../ART/Illustration/DiaryComics21/69d.jpg','../../ART/Illustration/DiaryComics21/70a.jpg','../../ART/Illustration/DiaryComics21/70b.jpg','../../ART/Illustration/DiaryComics21/70c.jpg',
         '../../ART/Illustration/DiaryComics21/70d.jpg','../../ART/Illustration/DiaryComics21/71a.jpg','../../ART/Illustration/DiaryComics21/71b.jpg','../../ART/Illustration/DiaryComics21/71c.jpg'
         ,'../../ART/Illustration/DiaryComics21/71e.jpg','../../ART/Illustration/DiaryComics21/71d.jpg','../../ART/Illustration/DiaryComics21/72a.jpg','../../ART/Illustration/DiaryComics21/72c.jpg','../../ART/Illustration/DiaryComics21/72d.jpg','../../ART/Illustration/DiaryComics21/72b.jpg','../../ART/Illustration/DiaryComics21/73a.jpg','../../ART/Illustration/DiaryComics21/73b.jpg','../../ART/Illustration/DiaryComics21/73d.jpg','../../ART/Illustration/DiaryComics21/73c.jpg','../../ART/Illustration/DiaryComics21/74a.jpg','../../ART/Illustration/DiaryComics21/74c.jpg','../../ART/Illustration/DiaryComics21/74d.jpg','../../ART/Illustration/DiaryComics21/74b.jpg',
         
         '../../ART/Illustration/DiaryComics21/75d.jpg','../../ART/Illustration/DiaryComics21/75a.jpg','../../ART/Illustration/DiaryComics21/75b.jpg','../../ART/Illustration/DiaryComics21/75c.jpg'
         ,'../../ART/Illustration/DiaryComics21/75e.jpg','../../ART/Illustration/DiaryComics21/71d.jpg','../../ART/Illustration/DiaryComics21/76a.jpg','../../ART/Illustration/DiaryComics21/76c.jpg','../../ART/Illustration/DiaryComics21/76d.jpg','../../ART/Illustration/DiaryComics21/76b.jpg','../../ART/Illustration/DiaryComics21/77a.jpg','../../ART/Illustration/DiaryComics21/77b.jpg','../../ART/Illustration/DiaryComics21/77d.jpg','../../ART/Illustration/DiaryComics21/77c.jpg','../../ART/Illustration/DiaryComics21/78a.jpg','../../ART/Illustration/DiaryComics21/78c.jpg','../../ART/Illustration/DiaryComics21/78b.jpg','../../ART/Illustration/DiaryComics21/79e.jpg'
         ,
         
         '../../ART/Illustration/DiaryComics21/79d.jpg','../../ART/Illustration/DiaryComics21/79a.jpg','../../ART/Illustration/DiaryComics21/79b.jpg','../../ART/Illustration/DiaryComics21/79c.jpg'
         ,'../../ART/Illustration/DiaryComics21/80a.jpg','../../ART/Illustration/DiaryComics21/80b.jpg','../../ART/Illustration/DiaryComics21/80c.jpg','../../ART/Illustration/DiaryComics21/80d.jpg','../../ART/Illustration/DiaryComics21/81a.jpg','../../ART/Illustration/DiaryComics21/81b.jpg','../../ART/Illustration/DiaryComics21/81c.jpg','../../ART/Illustration/DiaryComics21/81d.jpg','../../ART/Illustration/DiaryComics21/82a.jpg','../../ART/Illustration/DiaryComics21/82b.jpg','../../ART/Illustration/DiaryComics21/82c.jpg','../../ART/Illustration/DiaryComics21/82d.jpg','../../ART/Illustration/DiaryComics21/83a.jpg','../../ART/Illustration/DiaryComics21/83b.jpg'
         ,
         
         '../../ART/Illustration/DiaryComics21/83c.jpg','../../ART/Illustration/DiaryComics21/83c.jpg','../../ART/Illustration/DiaryComics21/84a.jpg','../../ART/Illustration/DiaryComics21/84b.jpg'
         ,'../../ART/Illustration/DiaryComics21/84c.jpg','../../ART/Illustration/DiaryComics21/84d.jpg','../../ART/Illustration/DiaryComics21/85a.jpg','../../ART/Illustration/DiaryComics21/85b.jpg','../../ART/Illustration/DiaryComics21/85c.jpg','../../ART/Illustration/DiaryComics21/85d.jpg','../../ART/Illustration/DiaryComics21/86a.jpg','../../ART/Illustration/DiaryComics21/86b.jpg','../../ART/Illustration/DiaryComics21/86d.jpg','../../ART/Illustration/DiaryComics21/86c.jpg','../../ART/Illustration/DiaryComics21/87a.jpg','../../ART/Illustration/DiaryComics21/87c.jpg','../../ART/Illustration/DiaryComics21/87c.jpg','../../ART/Illustration/DiaryComics21/88a.jpg'
         
         ,'../../ART/Illustration/DiaryComics21/88c.jpg','../../ART/Illustration/DiaryComics21/88d.jpg','../../ART/Illustration/DiaryComics21/88b.jpg','../../ART/Illustration/DiaryComics21/89a.jpg','../../ART/Illustration/DiaryComics21/89b.jpg','../../ART/Illustration/DiaryComics21/89c.jpg','../../ART/Illustration/DiaryComics21/89d.jpg','../../ART/Illustration/DiaryComics21/89e.jpg','../../ART/Illustration/DiaryComics21/89f.jpg','../../ART/Illustration/DiaryComics21/90a.jpg','../../ART/Illustration/DiaryComics21/90b.jpg','../../ART/Illustration/DiaryComics21/90c.jpg','../../ART/Illustration/DiaryComics21/90d.jpg','../../ART/Illustration/DiaryComics21/91a.jpg'
         ,'../../ART/Illustration/DiaryComics21/91b.jpg','../../ART/Illustration/DiaryComics21/91c.jpg','../../ART/Illustration/DiaryComics21/91d.jpg','../../ART/Illustration/DiaryComics21/92a.jpg'
         ,'../../ART/Illustration/DiaryComics21/92b.jpg','../../ART/Illustration/DiaryComics21/92c.jpg','../../ART/Illustration/DiaryComics21/92d.jpg','../../ART/Illustration/DiaryComics21/94a.jpg'
         ,'../../ART/Illustration/DiaryComics21/94b.jpg','../../ART/Illustration/DiaryComics21/94c.jpg','../../ART/Illustration/DiaryComics21/94d.jpg','../../ART/Illustration/DiaryComics21/95a.jpg'
         ,'../../ART/Illustration/DiaryComics21/95b.jpg','../../ART/Illustration/DiaryComics21/95c.jpg','../../ART/Illustration/DiaryComics21/95d.jpg','../../ART/Illustration/DiaryComics21/96a.jpg'
         ,'../../ART/Illustration/DiaryComics21/96b.jpg','../../ART/Illustration/DiaryComics21/96c.jpg','../../ART/Illustration/DiaryComics21/96d.jpg'
         
         
        ];
       
    shuffle(myBox,true);
    
     for(var i=0; i<myBox.length; i++){
        MyImage = loadImage(myBox[i]);
        
        append(img,MyImage);
    }
    
}

function setup(){
    c = createCanvas(windowWidth,3000);
    textFont("Arial");
    textSize(80);
    fill("red");
    noLoop();
   // tint(255, 120);
}

function draw(){
    noFill();
    
   // shuffle(img,true);
    stroke(0);
    
    for(var x=0; x<width; x+=380){
        for(var y=0; y<height; y+=600){
            
            aspect = img[place].height/img[place].width;
            
            iWidth=270;
            iHeight = iWidth * aspect;
            
           // image(img[place],50+x,10+y,245,290);
            //if(img[place].height>img[place].width)
                image(img[place],20+x,40+y,iWidth,iHeight);
            //else image(img[place],20+x,200+y,iWidth,iHeight);
            rect(20+x,40+y,iWidth,iHeight);
           // img[place].drawingContext.strokeStyle();
            
           // button = createButton(img[place], " "," ");
            //button.position(20+x,y+40+iHeight);
           // button.mousePressed(changeStory);
            
            print(img[place]);
            
            
            if(place>=img.length-1)
                place=0; else place++; 
        }   
    }
    
 //  saveCanvas(c, '','jpeg');
    
 // button = createButton('Change Story');
  //button.position(10,10);
  //button.mousePressed(changeStory);
}

function changeStory(){
    background(255);
    shuffle(img,true);
    
   for(var x=0; x<width; x+=380){
        for(var y=0; y<height; y+=600){
            
            aspect = img[place].height/img[place].width;
            
            iWidth=250;
            iHeight = iWidth * aspect;
            
           // image(img[place],50+x,10+y,245,290);
            image(img[place],20+x,40+y,iWidth,iHeight);
            //rect(20+x,40+y,iWidth,iHeight);
            
            if(place>=img.length-1)
                place=0; else place++; 
        }   
    }
}

function unfoldStory(place){
    background(255);
    shuffle(img,true);
    
    if(state==0){}
    
   for(var x=0; x<width; x+=380){
        for(var y=0; y<height; y+=600){
            
            aspect = img[place].height/img[place].width;
            
            iWidth=250;
            iHeight = iWidth * aspect;
            
           // image(img[place],50+x,10+y,245,290);
            image(img[place],20+x,40+y,iWidth,iHeight);
            //rect(20+x,40+y,iWidth,iHeight);
            
            
            
            if(place>=img.length-1)
                place=0; else place++; 
        }   
    }
}


