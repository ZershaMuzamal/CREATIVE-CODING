function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Sky blue background
  background(135, 206, 235); 

  // Draw the main 2-way road
  fill(50); // Dark gray road
  rect(0, 300, width, 100);

  // Draw dashed white line in the middle of the road
  stroke(255);
  strokeWeight(4);
  for (let x = 0; x < width; x += 60) {
    line(x, 350, x + 20, 350);
  }
  noStroke();

  // Draw the car
  drawMercedes(width / 2 - 120, 310);

  // Draw the sun
  fill(255, 223, 0);
  ellipse(60, 60, 60, 60);
}

function drawMercedes(x, y) {
  // Sleek silver body
  fill(192); // Light grey/silver
  rect(x, y, 240, 50, 15); // Rounded corners

  // Roof
  rect(x + 60, y - 30, 120, 30, 10);

  // Windows (slightly tinted blue)
  fill(180, 220, 255);
  rect(x + 70, y - 25, 40, 25, 5);
  rect(x + 130, y - 25, 40, 25, 5);

  // Wheels
  fill(0);
  ellipse(x + 60, y + 50, 40, 40);
  ellipse(x + 180, y + 50, 40, 40);

  // Simple Mercedes star logo (just a white dot for simplicity)
  fill(255);
  ellipse(x + 120, y + 25, 8, 8);
}

