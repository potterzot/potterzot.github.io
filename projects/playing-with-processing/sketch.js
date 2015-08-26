// define variables here so they are available to all functions
var gratio = 1.618;

new p5.Element('div');


function preload() {
  // async load of data or image files
  // img = loadImage('');
}

function setup() {
  // put setup code here
  createCanvas(870, 400);

  // settings
  fill(0, 0, 0, 2); // rgba
  textFont("sans");
  
  noLoop(); // should be the last line. Stops draw() function from being cont called
}

function draw() {
  // put drawing code here
 
  // comic box
  for (var i=0; i<3; i++) {
    rect(i*290,0,280,300); // x, y, w, h
  }
 
  // first panel
  translate(0, 0); //x, y
 
  textAlign(LEFT);
  text("Dude! Are you going to Economicon this year?", 10, 10, 100, 100); 
  
  textAlign(RIGHT);
  text("Yeah, and I've totally got my chainsaw ready.", 270, 100, 100, 200); 
  
  fill(50);
  rect(90,190,100,100);
  textSize(12);
  stroke(255,0,0);
  textAlign(CENTER);
  text("Economicon", 140, 215); 
  
  // second panel
  translate(290, 0);
  
  stroke(0);
  textAlign(LEFT);
  text("...", 10,30);
  
  textAlign(RIGHT);
  text("...", 270,120);

  // third panel
  translate(290, 0);
  textAlign(CENTER);
  text("Economics geek communication problems", 140,125,200,200);  
}

function mousePressed() {
  // what happens when the mouse is pressed?
  
}




