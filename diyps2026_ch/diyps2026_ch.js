var img;
var initials ='ak'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 200; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color


}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1') { //first tool(blue sky)

    background(200, 210, 250)
    
  } else if (toolChoice == '2' ) {  // second tool(christmas tree - branches)
   
    strokeWeight(01);
    triangle(300, 255, 75, 500, 525, 500);
    triangle(300, 150, 125, 345, 475, 345);
    triangle(300, 65, 190, 200, 410, 200);
    fill('green')
    stroke('green')
  
  } else if (toolChoice == '3') { // third tool(christmas tree - stump)
    rect(275, 500, 50, 100);
    stroke('brown')
    fill('brown')
    
  } else if (toolChoice == '4') { // fourth tool(snow)
    
    fill(300);
    strokeWeight(1);
    arc(300, 600, 625, 80, PI, TWO_PI);
    ellipse(10, 50, 10, 10)
    ellipse(69, 300, 10, 10)
    ellipse(77, 193, 10, 10)
    ellipse(273, 25, 10, 10)
    ellipse(198, 199, 10, 10)
    
    ellipse(409, 559, 10, 10)
    ellipse(354, 350, 10, 10)
    ellipse(160, 210, 10, 10)
    ellipse(56, 450, 10, 10)
    ellipse(191, 599, 10, 10)
    
    ellipse(108, 66, 10, 10)
    ellipse(229, 3, 10, 10)
    ellipse(518, 342, 10, 10)
    ellipse(276, 10, 10, 10)
    ellipse(378, 2, 10, 10)
    
    ellipse(468, 123, 10, 10)
    ellipse(405, 34, 10, 10)
    ellipse(460, 73, 10, 10)
    ellipse(358, 181, 10, 10)
    ellipse(385, 2, 10, 10)
    
    ellipse(517, 112, 10, 10)
    ellipse(560, 202, 10, 10)
    ellipse(516, 174, 10, 10)
    ellipse(408, 333, 10, 10)
    ellipse(598, 232, 10, 10)
    
  } else if (toolChoice == '5') { // fifth tool(tinsel 1)

    strokeWeight(20);
    triangle(mouseX, mouseY, pmouseX, pmouseY, pmouseX, pmouseY);
    stroke('red');

  } else if (toolChoice == '6') { // sixth tool(christmas ornament)

    strokeWeight(01);
    stroke('black')
    ellipse(mouseX, mouseY, 50, 50);
    rect(mouseX-12.5, mouseY-37, 25, 15);
    fill(300);
    
  } else if (toolChoice == '7') { // seventh tool(tinsel 2)

    strokeWeight(3);
    line(mouseX, mouseY, pmouseX, pmouseY+10);
    stroke('white')
    
  } else if (toolChoice == '8') { // eighth tool(snowflake)

    stroke(300);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY+40);
    line(mouseX, mouseY, pmouseX, pmouseY-40);
    line(mouseX, mouseY, pmouseX+40, pmouseY);
    line(mouseX, mouseY, pmouseX-40, pmouseY);
    line(mouseX+20, mouseY+20, pmouseX, pmouseY);
    line(mouseX-20, mouseY-20, pmouseX, pmouseY);
    line(mouseX-20, mouseY+20, pmouseX, pmouseY);
    line(mouseX+20, mouseY-20, pmouseX, pmouseY);
  
  } else if (toolChoice == '9') { // ninth tool(presents box)

    stroke('black');
    strokeWeight(1);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 100, 100);
    rect(mouseX-5, mouseY-5, 110, 30);
    
  } else if (toolChoice == '0') { // tenth tool(bow)

    fill(300);
    stroke('black');
    strokeWeight(1);
    triangle(mouseX, mouseY, mouseX-25, mouseY-25, mouseX-25, mouseY+25);
    triangle(mouseX+1, mouseY, mouseX+25, mouseY-25, mouseX+25, mouseY+25);
    rect(mouseX-2, mouseY-2, 5, 5);
    
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
