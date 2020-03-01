var conY = 0;
var conX = 0;

var conY2 = 0;
var conX2 = 10;


var conY3 = 0;
var conX3 = -10;

let birthday

function setup() {
  createCanvas(800, 450);

birthday = loadSound('partysound_mixdown.mp3');
}

function draw() {
  background(100, 244, 156);
  fill(100, 200, 156);
  textSize(25);
  text('Slide Mouse', 100, 200);
  textSize(25);
  text('To Right', 100, 225);
  text('And Click –>', 100, 250);


 if (mouseX>400) {
  background(255, 244, 156);
  noStroke();
   
  fill(255, 24, 100);
  textSize(100);
  text('happy', 200, 200);
  
  textSize(100);
  text('birthday!!!', 200, 300);
  
  fill(149, 125, 173);
  rect(conX + 3 , conY, 25, 10);
  conY = conY + 6
  conX = conX + 2 
  
  fill(254, 200, 216);
  rect(conX + 150, conY, 25, 10);
  
  fill(250, 80, 80);
  rect(conX2 +100, conY2, 25, 10);
  conY2 = conY2 + 7
  conX2 = conX2 - 1
  
  fill(149, 125, 173);
  rect(conX + 500 , conY, 25, 10);
  
  fill(133, 222, 119);
  rect(conX2 + 150, conY2, 25, 10);
  
  fill(118, 158, 203);
  rect(conX2 + 250, conY2, 25, 10);
  
  fill(255, 180, 71);
  rect(conX2 + 350, conY2, 25, 10);
  
  fill(149, 125, 173);
  rect(conX2 + 450, conY2, 25, 10);
  
  fill(254, 200, 216);
  rect(conX2 + 500, conY2, 25, 10);
  
  fill(133, 222, 119);
  rect(conX + 400, conY, 25, 10);
  
   
  fill(133, 222, 119);
  rect(conX + 600, conY, 25, 10);
   
  fill(250, 80, 80);
  rect(conX + 750, conY, 25, 10);
  
  fill(118, 158, 203);
  rect(conX2 + 650, conY2, 25, 10);
  
  fill(133, 222, 119);
  rect(conX + 550, conY, 25, 10);

  fill(149, 125, 173);
  rect(conX + 600, conY, 25, 10);
  
  fill(255, 180, 71);
  rect(conX + 500, conY, 25, 10);
  
  fill(133, 222, 119);
  rect(conX2 + 450, conY2, 25, 10);
  
  fill(118, 158, 203);
  rect(conX2 + 350, conY2, 25, 10);
   
  
  fill(133, 222, 119);
  rect(conX3 + 150, conY3, 25, 10);
   
  conY3 = conY3+ 10
  conX3 = conX3 + 3 
  
  fill(118, 158, 203);
  rect(conX3 + 250, conY3, 25, 10);
  
  fill(255, 180, 71);
  rect(conX3 + 350, conY3, 25, 10);
  
  fill(149, 125, 173);
  rect(conX3 + 450, conY3, 25, 10);
  
  fill(254, 200, 216);
  rect(conX3 + 500, conY3, 25, 10);
   
   }
  }
  function mousePressed() {
  if (birthday.isPlaying()) {
    // .isPlaying() returns a boolean
    birthday.stop();
} else {
    birthday.play();

  }
}
