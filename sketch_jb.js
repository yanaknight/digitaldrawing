var s=10;
var option=1;


function setup() {
createCanvas(700,700);

   

}

function draw() {
    background(90,100,130);
    var p=map(mouseX,0,width,50,100);
//for (var x=0;x<width; x+=20){
    //for (var y=0;y<height; y+=20){
       // line (y,y,y+s,x+s)    
       // line (x,x,y+s,x+s)      
    //    line (x,x,y+s,x+s)      
    //}
    //} 
 
//part 1
    if(option==1){
        stroke(0)
        strokeWeight(1)
        
for (var x=0;x<width;x+=20){
  for (var y=0;y<height;y+=20){
        line (s,s,x+x,y+s);    
        line (x,s,y,s)       
    }
    }    
     
    }
    else if(option==2){
         //part 2
    stroke(0);
    strokeWeight(1);
 for(var x=0;x<width;x+=10){
    for (var y=0;y<height;y+=10){
       line (x, y, width/2, height/2) 
         
    }
    }      
    stroke(255, 204, 0, 50);
    strokeWeight(5);
    
    
     for(var x=20;x<width;x+=p){
    for (var y=20;y<height;y+=p){
       line (x, y, width/2, height/2) 
         
    }
    }  
     stroke(255, 20, 90, 50);
    strokeWeight(7);
    
    for(var x=20;x<width;x+=p){
    for (var y=20;y<height;y+=p){
       line (x, y, width/2, height/2) 
         
    }
    }  
    } 
    else if(option==3){
        
        for(var x=20;x<width;x+=p){
            for (var y=20;y<height;y+=p){
                
                ellipse(x,y,p,p)
    }
    }  
    }
    
    
   
 }    

function mousePressed(){
    option++;
if(option > 3) option=1;
}

