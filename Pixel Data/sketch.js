let img;

function preload() {
  img = loadImage("pixil.jpg");
}

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0);
  image(img, 0, 0);

  let sampledColor = get(mouseX, mouseY);
  fill(sampledColor);
  ellipse(mouseX, mouseY, 100);
}
