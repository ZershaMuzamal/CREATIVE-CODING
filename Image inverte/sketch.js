let img;

function preload() {
  img = loadImage("pic3.jpg"); 
}

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0);
  image(img, 0, 0); // Display image

  let sampledColor = get(mouseX, mouseY); // Sample color at mouse position
  fill(sampledColor);
  ellipse(mouseX, mouseY, 100); // Draw colored circle at mouse
}

