var center;
var img;
var x=10;
var s = 250;
var slit;
var imgX;
var vid;

//'../../Dropbox/Between/Remy.mp4',
    
function setup(){
   createCanvas(windowWidth,windowHeight);
    //imageMode(CENTER);
    background(255);
    vid = createVideo([
    '../../ART/Illustration/DiaryComics21/story.ogv','../../ART/Illustration/DiaryComics21/story.ogv']);
   //vid.loop();
    
}

function draw(){
  // background(255);
   // image(vid,0,0);
    var w = vid.width;
    var h = vid.height;
    
    copy(vid,w/2,0,1,h,x,0,1,h);
   
    x=x+1;
    
}

 function mousePressed() {
  vid.loop(); // set the video to loop mode ( and start )
  print("set loop mode");
}