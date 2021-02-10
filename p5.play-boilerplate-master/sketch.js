var hr,mn,sc;
var scAngle,mnAngle,hrAngle;




function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
 
 hr = hour();
 mn = minute();
 sc = second();

 scAngle = map(sc,0,60,0,360);
 mnAngle = map(mn,0,60,0,360);
 hrAngle = map(hr,0,12,0,360);

 translate(250,250);
 push();
 rotate(scAngle);
 stroke(255,0,0);
 strokeWeight(7);
 line(0,0,200,0);
 pop();
 
// translate(250,250);
 push();
 rotate(mnAngle);
 stroke(0,255,0);
 strokeWeight(7);
 line(0,0,150,0);
 pop();
 
// translate(250,250);
 push();
 rotate(hrAngle);
 stroke(0,0,255);
 strokeWeight(7);
 line(0,0,100,0);
 pop();

  drawSprites();
}