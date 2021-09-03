var charizard,charizard1Img,charizard2Img,charizard3Img;
var charizard4Img,charizard5Img,charizard6Img,charizard7Img,charizard8Img,charizardImg;
var blastoise,blastoiseImg,blastoise1Img,blastoise2Img,blastoise3Img,blastoise4Img
var bgImg;
var script,scriptImg,battleImg;
var gameState = 0;
var playerCount;
var player;
var form;
var game;
var gameStateBg = "form"
var pokemon;
function preload(){
charizardImg = loadAnimation("charizard1.png","charizard2.png")
charizard1Img = loadAnimation("charizard1.png","charizard2.png")
charizard2Img = loadAnimation("charizard3.png","charizard4.png")
charizard3Img = loadAnimation("charizard5.png","charizard6.png")
charizard4Img = loadAnimation("charizaed7.png","charizard8.png")
blastoiseImg = loadAnimation("blast.png","blast1.png")
blastoise1Img = loadAnimation("blast.png","blast1.png")
blastoise2Img = loadAnimation("blast2.png","blast3.png")
blastoise3Img = loadAnimation("blast4.png","blast5.png")
blastoise4Img = loadAnimation("blast6.png","blast7.png")
bgImg = loadImage("loadingscreen.png")
scriptImg = loadImage("pokemon.png");
battleImg = loadImage("battlebackground.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
   database = firebase.database();
  //  game = new Game();
  //  game.getState();
  //  game.start();
  game = new Game();
  game.start();
  
}

function draw() {
  //background(255,255,255); 
  
  if (gameState === 1&& playerCount === 2){
    game.play()
  }

  // if(keyDown("RIGHT_ARROW")){
  //   charizard.changeAnimation("right",charizard3Img)
  //   charizard.x = charizard.x + 10
    
  //     }
  //     if(keyDown("LEFT_ARROW")){
  //       charizard.changeAnimation("left",charizard2Img)
  //       charizard.x = charizard.x - 10


        
  //     }
  //     if(keyDown ("UP_ARROW")){
  //       charizard.changeAnimation("up",charizard4Img)
  //       charizard.y = charizard.y - 10
    
  //     }
  //     if(keyDown ("DOWN_ARROW")){
  //       charizard.changeAnimation("down",charizard1Img)
  //       charizard.y = charizard.y + 10
   
  //     }
  // drawSprites();
}
function keyPressed(){
 
}
