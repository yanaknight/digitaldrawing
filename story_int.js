var myBox;
//var imgBox = [];
var imgBox = [[],[],[],[], [], []];
var imgBox1 = [];
var MyImage;
var place = 0;
var aspect;
var iWidth;
var iHeight;
var button;
var c;
var options = ['alone', 'cat', 'city', 'food', 'drinking', 'hangover'];
var button;
var buttons = [];
var fac = 20; //to space things out
var option = 0;
var imgPosX=20;
var imgPosY=70;
var newImg;
var rand;
var maxHeight = 500;
var runOut=false;
var txt='';
var drink=false;
var time=0;
var timesDrunk=0;

function preload(){
myBox = 
    
    // 1-alone
    ['../../ART/Illustration/DiaryComics21/alone/2a.jpg','../../ART/Illustration/DiaryComics21/alone/3a.jpg','../../ART/Illustration/DiaryComics21/alone/3b.jpg','../../ART/Illustration/DiaryComics21/alone/4b.jpg','../../ART/Illustration/DiaryComics21/alone/4c.jpg','../../ART/Illustration/DiaryComics21/alone/5a.jpg','../../ART/Illustration/DiaryComics21/alone/5b.jpg',
     
    // 2-cat
    '../../ART/Illustration/DiaryComics21/cat/2.jpg','../../ART/Illustration/DiaryComics21/cat/7a.jpg','../../ART/Illustration/DiaryComics21/cat/7b.jpg','../../ART/Illustration/DiaryComics21/cat/10a.jpg','../../ART/Illustration/DiaryComics21/cat/13a.jpg','../../ART/Illustration/DiaryComics21/cat/15a.jpg','../../ART/Illustration/DiaryComics21/cat/15b.jpg', '../../ART/Illustration/DiaryComics21/cat/15c.jpg', '../../ART/Illustration/DiaryComics21/cat/32a.jpg','../../ART/Illustration/DiaryComics21/cat/33e.jpg','../../ART/Illustration/DiaryComics21/cat/39b.jpg','../../ART/Illustration/DiaryComics21/cat/39c.jpg','../../ART/Illustration/DiaryComics21/cat/42c.jpg','../../ART/Illustration/DiaryComics21/cat/44b.jpg','../../ART/Illustration/DiaryComics21/cat/58a.jpg',       
     
     //3-city
    '../../ART/Illustration/DiaryComics21/city/1c.jpg','../../ART/Illustration/DiaryComics21/city/6a.jpg','../../ART/Illustration/DiaryComics21/city/6c.jpg','../../ART/Illustration/DiaryComics21/city/6b.jpg','../../ART/Illustration/DiaryComics21/city/6d.jpg','../../ART/Illustration/DiaryComics21/city/9a.jpg','../../ART/Illustration/DiaryComics21/city/9b.jpg','../../ART/Illustration/DiaryComics21/city/9e.jpg','../../ART/Illustration/DiaryComics21/city/13b.jpg','../../ART/Illustration/DiaryComics21/city/13e.jpg','../../ART/Illustration/DiaryComics21/city/13d.jpg','../../ART/Illustration/DiaryComics21/city/14a.jpg','../../ART/Illustration/DiaryComics21/city/14b.jpg','../../ART/Illustration/DiaryComics21/city/16d.jpg','../../ART/Illustration/DiaryComics21/city/20a.jpg','../../ART/Illustration/DiaryComics21/city/24a.jpg','../../ART/Illustration/DiaryComics21/city/24b.jpg',
     
     //4-food
    '../../ART/Illustration/DiaryComics21/food/2b.jpg', '../../ART/Illustration/DiaryComics21/food/3c.jpg','../../ART/Illustration/DiaryComics21/food/7c.jpg','../../ART/Illustration/DiaryComics21/food/8b.jpg','../../ART/Illustration/DiaryComics21/food/8c.jpg','../../ART/Illustration/DiaryComics21/food/22a.jpg',
'../../ART/Illustration/DiaryComics21/food/29c.jpg','../../ART/Illustration/DiaryComics21/food/32c.jpg','../../ART/Illustration/DiaryComics21/food/34e.jpg','../../ART/Illustration/DiaryComics21/food/35b.jpg','../../ART/Illustration/DiaryComics21/food/40c.jpg','../../ART/Illustration/DiaryComics21/food/48c.jpg','../../ART/Illustration/DiaryComics21/food/48d.jpg',      
     
     //drinking
    '../../ART/Illustration/DiaryComics21/drinking/28a.jpg', '../../ART/Illustration/DiaryComics21/drinking/28g.jpg',  '../../ART/Illustration/DiaryComics21/drinking/38b.jpg', '../../ART/Illustration/DiaryComics21/drinking/38c.jpg', '../../ART/Illustration/DiaryComics21/drinking/38d.jpg',  '../../ART/Illustration/DiaryComics21/drinking/41d.jpg', '../../ART/Illustration/DiaryComics21/drinking/42a.jpg',  '../../ART/Illustration/DiaryComics21/drinking/42d.jpg', '../../ART/Illustration/DiaryComics21/drinking/47c.jpg', '../../ART/Illustration/DiaryComics21/drinking/49b.jpg', '../../ART/Illustration/DiaryComics21/drinking/49c.jpg',      '../../ART/Illustration/DiaryComics21/drinking/52a.jpg', '../../ART/Illustration/DiaryComics21/drinking/52b.jpg', '../../ART/Illustration/DiaryComics21/drinking/53c.jpg', '../../ART/Illustration/DiaryComics21/drinking/62a.jpg', '../../ART/Illustration/DiaryComics21/drinking/62d.jpg', '../../ART/Illustration/DiaryComics21/drinking/87b.jpg','../../ART/Illustration/DiaryComics21/drinking/89d.jpg','../../ART/Illustration/DiaryComics21/drinking/90a.jpg', '../../ART/Illustration/DiaryComics21/drinking/113c.jpg', '../../ART/Illustration/DiaryComics21/drinking/122b.jpg','../../ART/Illustration/DiaryComics21/drinking/122c.jpg',     
     
     // hangover
     '../../ART/Illustration/DiaryComics21/hangover/10e.jpg', '../../ART/Illustration/DiaryComics21/hangover/21b.jpg','../../ART/Illustration/DiaryComics21/hangover/43c.jpg', '../../ART/Illustration/DiaryComics21/hangover/48a.jpg', '../../ART/Illustration/DiaryComics21/hangover/50c.jpg','../../ART/Illustration/DiaryComics21/hangover/51a.jpg','../../ART/Illustration/DiaryComics21/hangover/54a.jpg','../../ART/Illustration/DiaryComics21/hangover/67c.jpg','../../ART/Illustration/DiaryComics21/hangover/67d.jpg',
'../../ART/Illustration/DiaryComics21/hangover/90b.jpg','../../ART/Illustration/DiaryComics21/hangover/90c.jpg','../../ART/Illustration/DiaryComics21/hangover/90d.jpg','../../ART/Illustration/DiaryComics21/hangover/123a.jpg','../../ART/Illustration/DiaryComics21/hangover/123b.jpg','../../ART/Illustration/DiaryComics21/hangover/123c.jpg','../../ART/Illustration/DiaryComics21/hangover/124a.jpg',
        ];
       
   // shuffle(myBox,true);
    
     for(var i=0; i<myBox.length; i++){
        MyImage = loadImage(myBox[i]);
        //img.push(MyImage);
        //imgBox.push(MyImage);
         
         if(i<7) {
             imgBox[0].push(MyImage);
             
         }
         else if(i<22) {
            imgBox[1].push(MyImage);   
         }
         
         else if(i<39) {
            imgBox[2].push(MyImage);   
         }
         
         else if(i<52) {
            imgBox[3].push(MyImage);   
         }
         
         else if(i<74) {
            imgBox[4].push(MyImage);   
         }
         
         else if(i<myBox.length) {
            imgBox[5].push(MyImage);   
         }
    }
   
   /* for(var i=0; i<imgBox.length; i++){
        
        imgBox1.push(imgBox[i]);
    }
    //imgBox1 = imgBox;
     
    */
    print (imgBox);
}

function setup(){
    c = createCanvas(windowWidth,3000);
    textFont("Arial");
    textSize(20);
    fill("blue");
    stroke(3);
    //noLoop();
    
    noFill();
    
    for(var i=0; i<imgBox.length; i++){
       shuffle(imgBox[i],true); 
    }
    
    var int1 = int(random(0,imgBox.length));
    var int2 = int(random(0,imgBox[int1].length));
    
    var first = imgBox[int1][int2];
    
    imgBox[int1].splice(int2,1);
    
    var int3 = int(random(0,imgBox[int1].length));
    
    var second = imgBox[int1][int3];
   
    imgBox[int1].splice(int3,1);
        
    aspect = first.height/first.width;
    iWidth=270;
    iHeight = iWidth * aspect;

    image(first,imgPosX,imgPosY,iWidth,iHeight);
    rect(imgPosX,imgPosY,iWidth,iHeight);
    
    imgPosX=iWidth+20;
    
    aspect = second.height/second.width;
    iHeight = iWidth * aspect;
    
    image(second,imgPosX+20,imgPosY,iWidth,iHeight);
    rect(imgPosX+20,imgPosY,iWidth,iHeight);
    
    imgPosX=iWidth+20;
   // print(imgPosX);
  
}

function draw(){

    for(var i=0; i<options.length; i++){
        //text(options[i], (i+0.5)*5*fac, 40);
        button = createButton(options[i],i+1);
        append(buttons,button);
        button.position((i+0.5)*5*fac, 40);
        button.mousePressed(createStory);
         
    }
    
   text(txt, 20, 20, 600, 20);
     
    if(option > 0)
        { 
 
       //     if(imgBox[option-1].length>0){
            if(!runOut&&newImg.width>1){
                aspect = newImg.height/newImg.width;
                iWidth=270;
                iHeight = iWidth * aspect;

                if(imgPosX > windowWidth-300) {
                    imgPosX = 0; 
                    imgPosY = imgPosY+maxHeight+20;   
                }

                
                image(newImg,imgPosX+20,imgPosY,iWidth,iHeight);
                rect(imgPosX+20,imgPosY,iWidth,iHeight);

             
            } else if (runOut||newImg.width<=1){
                iWidth=1;
                aspect = newImg.height/newImg.width;
                iHeight = iWidth * aspect;

                if(imgPosX > windowWidth-300) {
                    imgPosX = 0; 
                    imgPosY = imgPosY+maxHeight+20;   
                }


                image(newImg,imgPosX+20,imgPosY,iWidth,iHeight);
                
                
               
                
            }
            
            
            
            /*while(millis()<time+1000)
              {
                  
              }*/
           
            
            noFill();
             txt='';
            
        }
   //  else if(option==0){txt='Lets create a story!!'}
    
    
        
}

function createStory(){
  // print(this.value());
    imgPosX = imgPosX+iWidth+20;
    //print(imgPosX);
    option = this.value();
    
    if(option == 1)
        { 
            
            if(imgBox[option-1].length>0){
                if (runOut) runOut=false;
                rand = int(random(0,imgBox[option-1].length));
                newImg = imgBox[option-1][rand];

                //remove from array - into some other array in case of future deletion
                imgBox[option-1].splice(rand,1);
            }
            else {
                //text('Run out of things to say!! Try another option', 20, 20);
                txt = 'Run out of things to say!! Try another option';
                runOut=true;
                //newImg='';
            }
        }
    
    else if(option==2)
        { 
            if(imgBox[option-1].length>0){
                if (runOut) {
                    runOut=false;
                }
                rand = int(random(0,imgBox[option-1].length));
                newImg = imgBox[option-1][rand];
                imgBox[option-1].splice(rand,1);
            }
             else {
                //text('Run out of things to say!! Try another option', 20, 20);
                txt = 'Run out of things to say!! Try another option';
                runOut=true;
                //newImg='';
            }
            
        }
    else if(option==3)
        {
            if(imgBox[option-1].length>0){
                if (runOut) runOut=false;
                rand = int(random(0,imgBox[option-1].length));
                newImg = imgBox[option-1][rand];
                imgBox[option-1].splice(rand,1);
            }
            else {
                //text('Run out of things to say!! Try another option', 20, 20);
                txt = 'Run out of things to say!! Try another option';
                runOut=true;
                //newImg='';
            }
        }
    else if(option==4)
        {
            noStroke();
            fill('white');
            rect(10,20,600,40);
        
            if(imgBox[option-1].length>0){
                noFill();
                stroke(0);
                if (runOut) runOut=false;
                rand = int(random(0,imgBox[option-1].length));
                newImg = imgBox[option-1][rand];
                imgBox[option-1].splice(rand,1);
                txt='';
            }
            else {
                //text('Run out of things to say!! Try another option', 20, 20);
                txt = 'Run out of things to say!! Try another option';
                runOut=true;
                //newImg='';
            }
        }
    
    else if(option==5)
        {  
            noStroke();
            fill('white');
            rect(10,20,600,40);
            timesDrunk ++;
        
            if(imgBox[option-1].length>0 && timesDrunk<3){
                noFill();
                stroke(0);
                if (runOut) runOut=false;
                drink=true;
                rand = int(random(0,imgBox[option-1].length));
                newImg = imgBox[option-1][rand];
                imgBox[option-1].splice(rand,1);
                txt='';
            }
            else if(imgBox[option-1].length>0 && timesDrunk==3){
                noFill();
                stroke(0);
                drink=true;
                newImg = createImage(1,1);
                
                txt = 'You are drinking too much. You need food!';
                timesDrunk=0;
            }
            else {
                //text('Run out of things to say!! Try another option', 20, 20);
                txt = 'Run out of things to say!! Try another option';
                runOut=true;
                //newImg='';
            }
        }
    
      else if(option==6)
        {
            
           
            if(imgBox[option-1].length>0 && drink){
                noFill();
                stroke(0);
                if (runOut) runOut=false;
                rand = int(random(0,imgBox[option-1].length));
                newImg = imgBox[option-1][rand];
                imgBox[option-1].splice(rand,1);
            }
            else if (imgBox[option-1].length>0 && !drink){
                newImg = createImage(1,1);
                //time=millis();
                // print('time is '+time);
                
                
                
                    txt = 'You need to drink before you can be hungover!';
                 //   print('millis is '+millis());   
                   //} 
          
                
            }
            else {
                //text('Run out of things to say!! Try another option', 20, 20);
                txt = 'Run out of things to say!! Try another option';
                runOut=true;
                //newImg='';
               
            }
        } 
   
    
} 



