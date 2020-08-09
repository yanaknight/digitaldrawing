var option = 1; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}
 

function draw() {
  background(255);
  noFill();  
var density = map(mouseX, 0, width, 20, 100);    
    
    // Option 1 xxxxxx
if (option == 1){    
    
    for(var x=100; x<=width-100; x+=density)
  {
    for (var y=100; y<=height-100; y+=density){
        line(x-5,y-5,x+5,y+5);
        line(x+5,y-5,x-5,y+5);
    }
  }
}
    // Option 2 vanishing point
    
else if(option==2){
    for(var x=50; x<=width-50; x+=density)
  {
    for (var y=50; y<=height-50; y+=density){
        line(x,y,width/2,height/2);
    }
  }
}
    // Option 3 circles   
else if (option==3){    
    for(var x=50; x<=width-50; x+=density)
  {
    for (var y=50; y<=height-50; y+=density){
        ellipse(x,y,100,100);
    }
  } 
}
    
// Option 4   circles with colour or width change
else if (option==4){     
    var count = 0;
    for(var x=50; x<=width-50; x+=density)
  {
    for (var y=50; y<=height-50; y+=density){
        strokeWeight(count*0.1);
        ellipse(x,y,40,40);
        count++;
    }
      
  } 
}
    
// Option 5   marks, crossed over 
else if (option==5){
     for(var x=100; x<=width-100; x+=density)
  {
    for (var y=100; y<=height-100; y+=density){
      for (var i=0; i<16;i+=4){
        line(x+i,y,x+i,y+12);
    }
        line(x,y,x+12,y+12);
    }
  }
}
    
    if(mouseIsPressed) option++;
    if(option>5) option =1;
}