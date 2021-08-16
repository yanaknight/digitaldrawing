// Beginnings of the 'Putting all your eggs into one chicken' game, controlled by chicken sound

var mic;
var basket;
var ball;
var score=0;

function setup(){
    createCanvas(600,500);
    mic = new p5.AudioIn();
    mic.start(); 
    basket = new Basket();
    ball = new Ball(mic,basket);
}

//have to touch somewhere FIRST!!!!! cHROME issue
function touchStarted() {
  getAudioContext().resume();
}

function draw(){
    background(200);
    
    ball.update();
    ball.render();
    
    basket.render();
    
    text('Score: '+score, 20,20);
}

function Ball(mic,basket){
    this.h = height;
    this.size = 50;
    this.basket = basket;
    this.y = this.height;
    this.x = width/2;
    
    this.render = function(){
        ellipse(width/2,this.y,this.size,this.size); 
    }
    
    this.update = function(){
        var vol = mic.getLevel();
        this.y = map(vol,0,0.5,height-25,0);
        
        this.testBasket();
    }
    
    this.testBasket = function (){
    
    var bottom = (this.y+this.size/2 > this.basket.y);
    var top = (this.y - this.size/2 < this.basket.y + this.basket.height);
    //var left = (this.x+this.size/2 > this.basket.x);
    //var right = (this.x-this.size/2<this.basket.x+this.basket.width);
  //  print(this.y - this.size/2, this.basket.y + this.basket.height);
      if(top&&bottom){
        //if(this.bad) this.paddle.hit();
        this.basket.score();
        //this.init();
      }
    }
}

function Basket(){
  this.width = 100;
  this.height = 70;
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
    rect(this.x,this.y,this.width,this.height);
    this.color = color(255);
  }
  
}