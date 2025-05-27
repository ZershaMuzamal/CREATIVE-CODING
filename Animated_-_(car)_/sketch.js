let carX;
function setup() {
  createCanvas(400, 400);
  carX = -240; // Start the car off-screen to the left
}
function draw() {
  // Sky blue background
  background(135, 206, 235); 

  // Drawing of the road
  fill(50); // Dark gray
  rect(0, 300, width, 100);

  // Drawing the dashed white line in the middle
  stroke(255);
  strokeWeight(4);
  //Using for loop to make many dashes in the road
  for (let x = 0; x < width; x += 100) {
    line(x, 350, x + 20, 350);
  }
  noStroke();

  // Draw the car moving automatically
  drawMercedes(carX, 280);
  carX += 2; // Speed of the car

  // Reset the car position when it goes off screen
  if (carX > width) {
    carX = -240;
  }
  
  // Draw the sun
  fill(255, 223, 0);
  ellipse(60, 60, 60, 60);
}

function drawMercedes(x, y) {
  // Car body
  fill(192);
  rect(x, y, 240, 50, 15);

  // Roof
  rect(x + 60, y - 30, 120, 30, 10);

  // Windows
  fill(180, 220, 255);
  rect(x + 70, y - 25, 40, 25, 5);
  rect(x + 130, y - 25, 40, 25, 5);

  // Wheels
  fill(0);
  ellipse(x + 60, y + 50, 40, 40);
  ellipse(x + 180, y + 50, 40, 40);

  // Logo (simple white dot)
  fill(255);
  ellipse(x + 120, y + 25, 8, 8);
}