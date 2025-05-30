function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(240);
  let tileSize = 40;

  for (let y = 0; y < height; y += tileSize) {
    for (let x = 0; x < width; x += tileSize) {
      let angle = frameCount * 0.05 + (x + y) * 0.02;
      let px = x + tileSize / 2;
      let py = y + tileSize / 2;

      let c = color(
        100 + 100 * sin(angle),
        50 + 150 * cos(angle),
        150
      );
      rect(x, y, tileSize, tileSize);

      drawSimpleStar(px, py, c);
    }
  }
}

// Simple cross/star shape
function drawSimpleStar(x, y, c) {
  fill(c);
  noStroke();
  rect(x - 2, y - 8, 4, 16); // vertical
  rect(x - 8, y - 2, 16, 4); // horizontal
}

