//var x = 50;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(200);
}

function draw(){
    
    
    
   // x=width/2;
 /*   line(x, 0, width/2, height/2);
    x+=50;
    line(x, 0, width/2, height/2);
    x+=50;
    line(x, 0, width/2, height/2);
    x+=50;
    line(x, 0, width/2, height/2);
    x+=50;
    line(x, 0, width/2, height/2);
    x+=50;
    line(x, 0, width/2, height/2);
    x+=50;
    line(x, 0, width/2, height/2);
    x+=50;
    line(x, 0, width/2, height/2);
    x+=50;
    line(x, 0, width/2, height/2);
    x+=50;
    line(x, 0, width/2, height/2);
    x+=50;
    line(x, 0, width/2, height/2);
    x+=50;
    line(x, 0, width/2, height/2);
    x+=50;
    line(x, 0, width/2, height/2);
    x+=50;
    line(x, 0, width/2, height/2);
    x+=50;
    line(x, 0, width/2, height/2);
    x+=50;
    line(x, 0, width/2, height/2);
    */
   /* for(var i=0; i<width; i+=50)
        line(x+i, 0, width/2, height/2);*/
    for(var x=50;x<width;x+=50){
        line(x, 0, width/2, height/2);
        line(width/2, height/2, x, height);   
    }
    
    for(i=0;i<width;i++){
        stroke(i/width*255);
        line(i,0,i,height);
    }
    
        
} 