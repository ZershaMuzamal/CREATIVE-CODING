function setup() {
  createCanvas(400, 400);
  noLoop(); // No animation
}

function draw() {
  background(180, 230, 255); // sky
  fill(60, 180, 75);
  rect(0, 350, width, 50); // grass

  // butterfly body
  fill(50);
  rect(195, 180, 10, 60, 5);
  ellipse(200, 170, 20); // head

  // wings (static angle)
  let angle = PI / 6; // You can adjust this for more or less spread
  drawWing(160, 200, angle);
  drawWing(240, 200, -angle);

  // antennae
  stroke(50); strokeWeight(2);
  line(195, 160, 185, 140);
  line(205, 160, 215, 140);
}

function drawWing(x, y, a) {
  push();
  translate(x, y);
  rotate(sin(a) * 0.5); // Wing tilt (based on angle)
  noStroke();
  fill(255, 150, 200);
  ellipse(0, 0, 60, 80);
  fill(200, 100, 255);
  ellipse(0, 20, 50, 60);
  pop();
}