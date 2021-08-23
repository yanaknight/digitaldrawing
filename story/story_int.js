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
var imgPosY=80;
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
    ['img/alone/2a.jpg','img/alone/3a.jpg','img/alone/3b.jpg','img/alone/4b.jpg','img/alone/4c.jpg','img/alone/5a.jpg','img/alone/5b.jpg',
     
    // 2-cat
    'img/cat/2.jpg','img/cat/7a.jpg','img/cat/7b.jpg','img/cat/10a.jpg','img/cat/13a.jpg','img/cat/15a.jpg','img/cat/15b.jpg', 'img/cat/15c.jpg', 'img/cat/32a.jpg','img/cat/33e.jpg','img/cat/39b.jpg','img/cat/39c.jpg','img/cat/42c.jpg','img/cat/44b.jpg','img/cat/58a.jpg',       
     
     //3-city
    'img/city/1c.jpg','img/city/6a.jpg','img/city/6c.jpg','img/city/6b.jpg','img/city/6d.jpg','img/city/9a.jpg','img/city/9b.jpg','img/city/9e.jpg','img/city/13b.jpg','img/city/13e.jpg','img/city/13d.jpg','img/city/14a.jpg','img/city/14b.jpg','img/city/16d.jpg','img/city/20a.jpg','img/city/24a.jpg','img/city/24b.jpg',
     
     //4-food
    'img/food/2b.jpg', 'img/food/3c.jpg','img/food/7c.jpg','img/food/8b.jpg','img/food/8c.jpg','img/food/22a.jpg',
'img/food/29c.jpg','img/food/32c.jpg','img/food/34e.jpg','img/food/35b.jpg','img/food/40c.jpg','img/food/48c.jpg','img/food/48d.jpg',      
     
     //drinking
    'img/drinking/28a.jpg', 'img/drinking/28g.jpg',  'img/drinking/38b.jpg', 'img/drinking/38c.jpg', 'img/drinking/38d.jpg',  'img/drinking/41d.jpg', 'img/drinking/42a.jpg',  'img/drinking/42d.jpg', 'img/drinking/47c.jpg', 'img/drinking/49b.jpg', 'img/drinking/49c.jpg',      'img/drinking/52a.jpg', 'img/drinking/52b.jpg', 'img/drinking/53c.jpg', 'img/drinking/62a.jpg', 'img/drinking/62d.jpg', 'img/drinking/87b.jpg','img/drinking/89d.jpg','img/drinking/90a.jpg', 'img/drinking/113c.jpg', 'img/drinking/122b.jpg','img/drinking/122c.jpg',     
     
     // hangover
     'img/hangover/10e.jpg', 'img/hangover/21b.jpg','img/hangover/43c.jpg', 'img/hangover/48a.jpg', 'img/hangover/50c.jpg','img/hangover/51a.jpg','img/hangover/54a.jpg','img/hangover/67c.jpg','img/hangover/67d.jpg',
'img/hangover/90b.jpg','img/hangover/90c.jpg','img/hangover/90d.jpg','img/hangover/123a.jpg','img/hangover/123b.jpg','img/hangover/123c.jpg','img/hangover/124a.jpg',
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
    txt='Lets create a story!! Choose something:'
  
}

function draw(){

    for(var i=0; i<options.length; i++){
        button = createButton(options[i],i+1);
        append(buttons,button);
        button.position((i+0.5)*5*fac, 40);
        button.mousePressed(createStory);
         
    }
    
   text(txt, 20, 10, 600, 20);
     
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
           
            
            noFill();
             txt='';
            
        }
}

function createStory(){
  // print(this.value());
    imgPosX = imgPosX+iWidth+20;
    option = this.value();
    
    if(option == 1)
        { 
            noStroke();
            fill('white');
            rect(10,10,600,40);
            
            if(imgBox[option-1].length>0){
                noFill();
                stroke(0);
                if (runOut) runOut=false;
                rand = int(random(0,imgBox[option-1].length));
                newImg = imgBox[option-1][rand];

                //remove from array - into some other array in case of future deletion
                imgBox[option-1].splice(rand,1);
                txt='';
            }
            else {
                txt = 'Run out of things to say!! Try another option';
                runOut=true;
            }
        }
    
    else if(option==2)
        { 
            noStroke();
            fill('white');
            rect(10,10,600,40);
            
            if(imgBox[option-1].length>0){
                noFill();
                stroke(0);
                if (runOut) {
                    runOut=false;
                }
                rand = int(random(0,imgBox[option-1].length));
                newImg = imgBox[option-1][rand];
                imgBox[option-1].splice(rand,1);
                txt='';
            }
             else {
                txt = 'Run out of things to say!! Try another option';
                runOut=true;
            }
            
        }
    else if(option==3)
        {
            noStroke();
            fill('white');
            rect(10,10,600,40);
            
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
                txt = 'Run out of things to say!! Try another option';
                runOut=true;

            }
        }
    else if(option==4)
        {
            noStroke();
            fill('white');
            rect(10,10,600,40);
        
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
                txt = 'Run out of things to say!! Try another option';
                runOut=true;
            }
        }
    
    else if(option==5)
        {  
            noStroke();
            fill('white');
            rect(10,10,600,40);
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
                txt = 'Run out of things to say!! Try another option';
                runOut=true;
            }
        }
    
      else if(option==6)
        {
            noStroke();
            fill('white');
            rect(10,10,600,40);
           
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
                noFill();
                stroke(0);
                txt = 'You need to drink before you can be hungover!';
            }
            else {
                txt = 'Run out of things to say!! Try another option';
                runOut=true;
               
            }
        } 
   
    
} 



