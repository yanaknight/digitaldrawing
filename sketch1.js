// my Malevich/Klee transparency experiements

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(225,0,0);
  strokeWeight(3);
  stroke(0);
  line(150,0,200,400);
  line(0,100,400,100);
  fill(255,255,0, 150);
  rect(100,100,150,100);
 
  noFill();
  rect(300,150,70,150);
  strokeWeight(10);
  
  noStroke();
  fill(200,100);
  rect(200,150,150,70);
}