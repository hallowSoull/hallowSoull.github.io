function setup() {
createCanvas(600, 600);
}


function draw() {
background(247,230,270);
for (var y = 0; y < height+45; y += 40) {
fill(255, 140);
ellipse(0, y, 40, 40);
}
for (var x = 0; x < width+45; x += 40) {
fill(255, 140);
ellipse(x, 0, 40, 40);
}


//back hair
fill(155,118,85);
arc(70, 110, 150, 210, 0, HALF_PI,radians(90));
arc(300, 140, 400, 350, PI, TWO_PI+HALF_PI);
arc(185, 190, 190, 300, QUARTER_PI, PI+QUARTER_PI);
arc(300, 270, 300, 300, QUARTER_PI, PI+QUARTER_PI);
arc(320, 246, 300, 350, 0, HALF_PI);

//body
fill(255,218,185);
ellipse(278, 180, 300, 300);
rect(50, 450, 150, 300);
rect(390, 450, 150, 300);

noStroke();

//front hair
fill(155,118,85);
arc(120, 70, 200, 280, 0, HALF_PI);
arc(450, 120, 100, 340, QUARTER_PI, PI+QUARTER_PI);
arc(400, 60, 160, 210, QUARTER_PI, PI+QUARTER_PI);
arc(172, 26, 300, 200, 0, HALF_PI);
arc(450, 126, 100, 500, 0, HALF_PI);

//shirt
fill(250);
rect(140, 370, 300, 300);
arc(140, 470, 180, 200, PI, TWO_PI+HALF_PI);
arc(450, 470, 180, 200, PI, TWO_PI);


//neck
fill(255,218,185);
rect(250, 300, 70, 70);
arc(285, 370, 150, 150, 0,  radians(180));

//eyes
fill(55,75,5);
ellipse(220, 180, 20, 35);
ellipse(320, 180, 20, 35);

//mouth
fill(55,18,5);
ellipse(250, 250, 50, 50);
ellipse(300, 250, 50, 50);
fill(255,218,185);
ellipse(250, 240, 50, 50);
ellipse(300, 240, 50, 50);
}
