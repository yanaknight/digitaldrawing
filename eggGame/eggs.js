// Beginnings of the 'Putting all your eggs into one chicken' game, controlled by chicken sound

var mic;
var basket;
var eggs = [];
var score=0;
var img;
var total=5;

function setup(){
    createCanvas(600,600);
    img = loadImage('img/fat_chicken.png');
    mic = new p5.AudioIn();
    mic.start(); 
    basket = new Basket();
    //ball = new Ball(mic,basket);
    
    //total = round(random(3,7));
    
    eggs [0] = new Egg(basket, true);
    
    for(var i=1;i<total;i++){
        eggs [i] = new Egg(basket, false);
    }
}


//have to touch somewhere FIRST!!!!! cHROME issue
function touchStarted() {
  getAudioContext().resume();
}

function draw(){
    background(220);
    
    fill(220,0);
    stroke(2);
    ellipse(width/2,height+10,170,100);
 
    for(var i =0;i<eggs.length;i++){
        eggs[i].update();
        eggs[i].render();
    }
    
    basket.render();
    
    text('Score: '+score, 20,20);
    
     
}


function Egg(basket,active){
    
    this.size = 50;
    this.basket = basket;
    this.active=active;
    this.color = 255;
    
    this.init = function(){
        //this.h = height;
        this.y = this.height;
        if(this.active) {
            this.x = width/2;
            this.color = color(255, 204, 0,100);
        }
        else this.x = random(width/2-this.basket.width/2,width/2+this.basket.width/2);
        
       
    }
    
    this.render = function(){
        noStroke();
        fill(this.color);
        //push();
        //translate(random(width),random(height));
        //rotate(random(TWO_PI));
        ellipse(this.x,this.y,this.size-10,this.size); 
        //pop();
    }
    
    this.update = function(){
        
        if(this.active){
           var vol = mic.getLevel();
            this.y = map(vol,0,0.3,height-26,0);
        
            this.testBasket(); 
        } else this.y = height-26;
        
    }
    
    
    this.eaten = function(){
        //this.color = 220;
        //this.active=false;
        eggs.splice(this,1);
        print(eggs);
    }
    
    this.setActive = function (){
        eggs[0].active = true;
        eggs[0].x = width/2;
        eggs[0].color = color(255, 204, 0,100);
    }
    
    this.testBasket = function (){
    
    //var left = (this.x+this.size/2 > this.basket.x);
        var bottom = this.y+this.size/2 < this.basket.height;
        var top = this.y - this.size/2 < this.basket.height;
    //var right = (this.x-this.size/2<this.basket.x+this.basket.width);
  //  print(this.y - this.size/2, this.basket.y + this.basket.height);
      if(top&&bottom){
        //if(this.bad) this.paddle.hit();
        this.basket.score();
         //this.init();
          print(this.y+this.size/2);
          print(this.y-this.size/2);
          print(this.basket.height);
          //take it from eggs array so its not there and set a new one to be THE egg
          
          //why the f all my eggs are being taken at once?? in batches?? I want one by one.
          this.eaten();
          if(eggs.length>0) this.setActive(); this.init();
      }
    }
    
    this.init();
}

function Basket(){
  this.width = 150;
  this.height = 120;
  this.speed = 15;
  this.x = width/2-this.width/2;
  this.y = 0;
  this.color = color(0);

  
  this.score = function(){
    this.color = color(0,255,0);
   // this.width+=2;
    score++;
  }
  
  this.hit = function(){
    this.color = color(255,0,0);
    this.width-=5;
  //  lives--;
  }
  
  this.render = function(){
    fill(this.color);
    image(img,this.x,this.y,this.width,this.height);
    this.color = color(255);
  }
  
}