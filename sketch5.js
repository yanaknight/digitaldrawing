var yPos = 100;


function setup(){
    
    frameRate(15);
}

function draw(){
    background(220);
    
    print(yPos);
    yPos = yPos-1;
    
    if(yPos<0)
    yPos=height;
    
    stroke('red');
    
    line(0,yPos,width,yPos);
}

