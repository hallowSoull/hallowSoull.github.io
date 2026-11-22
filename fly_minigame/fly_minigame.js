var ballx = 300;
var bally = 300;
var ballSize = 100;
var score =0;
var gameState= "L1";
var img1, img2, img3;

function preload() {

  img1 = loadImage('https://hallowsoull.github.io/fly_minigame/table.png');
    img2 = loadImage('https://hallowsoull.github.io/fly_minigame/turkey.png');
    //img3 = loadImage('https://hallowsoull.github.io/fly_minigame/watermelon.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
   // background(220);
   background(img1);
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  if (gameState=="L4"){
  levelFour();
  } 
  if (gameState=="L5"){
   levelFive(); 
  }
  if (gameState=="L6"){
   levelSix(); 
  }
  if (gameState=="L7"){
  levelSeven();
  } 
  if (gameState=="L8"){
   levelEight(); 
  }
  if (gameState=="L9"){
   levelNine(); 
  }
  
  rect (322, 38, 19, 21);
  text(("Score: " + score), width/2, 55);
  text("Become a fly and sit on as much food as you can!", width/2, 30);
  

} // end draw


function levelOne(){
  
  cursor('fly.png')
  
  rect (260, 541, 76, 25);
  text("Level 1", width/2, height-40);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize){
    ballx = 600(width);
    bally= 600(height);
    score= score +1;
  }
  if(score>1){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
   //ellipse(ballx, bally, ballSize, ballSize); 
   // image(img3, ballx, bally);
   image(img2, ballx, bally, ballSize, ballSize);
  
} // end level one

function levelTwo(){
  // background(220);
  background(img1);
  cursor('fly.png')
  
  rect (260, 541, 76, 25);
  text("Level 2", width/2, height-40);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>6){
// lvel 3
   gameState = "L3";

  }
  
//  line(ballx, bally, mouseX, mouseY);
  // image(img2, ballx, bally, ballSize, ballSize);
} // end level two

function levelThree(){
  // background(220);
   background(img1);
   
   rect (260, 541, 76, 25);
  text("Level 3", width/2, height-40);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>9){
// level 4
//   gameState = "L4";
   

  }
  
//  line(ballx, bally, mouseX, mouseY);
  // image(img2, ballx, bally, ballSize, ballSize);
} // end level three
