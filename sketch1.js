// my Malevich/Klee transparency experiements

function setup() {
  createCanvas(windowWidth, windowHeight);
    val=random(255);
    bg = color(255,0,0);
}

function draw() {
  background(bg);
  strokeWeight(3);
  stroke(0);
  line(150,0,200,400);
  line(0,100,400,100);
  fill(255,255,0, 150);
  rect(100,100,150,100);
 
  noFill();
  rect(300,150,70,150);
  strokeWeight(10);
  
  if(mouseX<width/2)
       //fill(200,255);
      background(val);
    //else fill(200,100);
  //fill(200,100);
  rect(200,150,150,70);
}