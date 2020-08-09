function setup() {
   createCanvas(windowWidth, windowHeight);
    stroke(255,0,0);
}

function draw() {
   
    //var col = map(mouseX, 0, width, 0, 255);
    //fill(col);
    //if(mouseX < width/2)
    //    stroke(255,0,0);
    //else stroke(0);
    
if(mouseIsPressed)
 //ellipse(mouseX, mouseY, 80, 80);
    line(mouseX,mouseY,pmouseX,pmouseY);
}