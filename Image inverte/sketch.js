let img;

function preload() {
  img = loadImage("pic3.jpg"); 
}

function setup() {
  createCanvas(400, 400);
  noLoop(); // Draw only once since image and filters are static
}

function draw() {
  background(0);
  image(img, 0, 0, width, height); // Display image at full canvas size
  filter(POSTERIZE, 3);            // Reduce color detail
  filter(INVERT);                  // Invert the colors
}
