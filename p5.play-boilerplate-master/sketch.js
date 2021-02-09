var hr,mn,sc;




function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);  
 
 hr = hour();
 mn = minute();
 sc = second();

 scAngle = map(sc,0,60,0,360);

 push();
 rotate(scAngle);
 stroke(255,0,0);
 strokeWeight(7);
 line(0,0,100,0);
 pop();
 
  drawSprites();
}