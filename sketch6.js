var s = 20;
var option = 1;

function setup(){
    createCanvas(windowWidth, windowHeight);
   
    noFill();
}

function draw(){
    
var density = map(mouseX, 0,width, 20, 100);    
     background(255);
    /*for(var i=50;i<width;i+=20){
        ellipse(width/2,height/2,i,i);
    }*/
    
    //part 1
    if(option==1){
        for(var i=0;i<width;i+=density){
            for(var j=0;j<height;j+=density){
                ellipse(i,j,60,60);
            }  
        }
     }
    
    else if(option==2){
    //part 2
    
        for(var i=0;i<width;i+=density){
            for(var j=0;j<height;j+=density){
                line(i,j,i+s,j+s);
                line(i+s,j,i,j+s);
            }
        }
    }
    
    //part 3
    
    else if(option==3){
        for(var i=0;i<width;i+=density){
            for(var j=0;j<height;j+=density){
                line(i,j,width/2,height/2);
            }
        }
}            

    else if(option==4){
    //part 4 
    var count=0;
    for(var i=0;i<width;i+=density){
        for(var j=0;j<height;j+=density){
            strokeWeight(count*0.1);
            ellipse(i,j,20,20);
            count++;
        }  
    }
        strokeWeight(1);
}
    else if(option==5){
    //part 5
     for(var i=0;i<width;i+=density){
        for(var j=0;j<height;j+=density){
            for(var z=0;z<16;z+=4)
                line(i+z,j,i+z,j+12); 
            line(i,j,i+12,j+12);
        }
    }
}        
    
}

function mousePressed(){
    option++;
    if(option > 5) option = 1;
}