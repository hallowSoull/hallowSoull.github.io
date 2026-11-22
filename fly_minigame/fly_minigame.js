var ballx = 300;
var bally = 300;
var ballSize = 200;
var score =0;
var gameState= "L1";
var img1, img2, img3, img4, img5, img6, img7;

function preload() {

  img1 = loadImage('https://hallowsoull.github.io/fly_minigame/table.png');
    img2 = loadImage('https://hallowsoull.github.io/fly_minigame/turkey.png');
    img3 = loadImage('https://hallowsoull.github.io/fly_minigame/watermelon.png');
    img4 = loadImage('https://hallowsoull.github.io/fly_minigame/bag.png');
    img5 = loadImage('https://hallowsoull.github.io/fly_minigame/console.png');
    //img6 = loadImage('https://hallowsoull.github.io/fly_minigame/strawb.png');
    //img7 = loadImage('https://hallowsoull.github.io/fly_minigame/trash.png');
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
  
  
  rect (322, 38, 19, 21);
  text(("Score: " + score), width/2, 55);
  text("Become a fly and sit on as much food as you can!", width/2, 30);
  

} // end draw


function levelOne(){
  
  cursor('fly.png')
  
  rect (260, 541, 76, 25);
  text("Level 1", width/2, height-40);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>0){
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
  
  cursor('fly.png')
  
  
  rect (260, 541, 76, 25);
  text("Level 2", width/2, height-40);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>1){
// level 3
   gameState = "L3";

  }
  
// line(ballx, bally, mouseX, mouseY);
   image(img3, ballx, bally, ballSize, ballSize);
} // end level two

function levelThree(){
  // background(220);
   
   
   rect (260, 541, 76, 25);
  text("Level 3", width/2, height-40);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>2){
// level 4
   gameState = "L4";
   

  }
  
//  line(ballx, bally, mouseX, mouseY);
   image(img4, ballx, bally, ballSize, ballSize);
} // end level three

function levelFour(){
  // background(220);
   
   
   rect (260, 541, 76, 25);
  text("Level 4", width/2, height-40);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>3){
// level 5
   gameState = "L5";
   

  }
  
//  line(ballx, bally, mouseX, mouseY);
   image(img5, ballx, bally, ballSize, ballSize);
} // end level four

function levelFive(){
  // background(220);
   
   
   rect (260, 541, 80, 25);
  text("The end!", width/2, height-40);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>4){
// end 
   // gameState = "L6";

  }
  
//  line(ballx, bally, mouseX, mouseY);
   image(img6, ballx, bally, ballSize, ballSize);
} // end level five
