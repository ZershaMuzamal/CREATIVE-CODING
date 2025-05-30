let font;

function preload() {
  font = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Regular.otf');
}

function setup() {
  createCanvas(400, 400);
  background(0);

  let text1 = 'BATH SPA';
  let text2 = 'UNIVERSITY';

  let fontSize1 = 55;
  let fontSize2 = 50;
  let startX = 20;
  let startY1 = 140;
  let startY2 = 230;

  // Draw solid letters first for clarity
  fill(255);
  noStroke();
  textFont(font);
  textSize(fontSize1);
  text(text1, startX, startY1 ); // +15 to adjust vertical baseline
  textSize(fontSize2);
  text(text2, startX, startY2);

  // Get points for squiggles, reduce sampleFactor for less density
  let points1 = font.textToPoints(text1, startX, startY1, fontSize1, { sampleFactor: 0.15 });
  let points2 = font.textToPoints(text2, startX, startY2, fontSize2, { sampleFactor: 0.15 });

  strokeWeight(2);

  // Draw squiggles on top of letters, only once per point
  for (let pt of points1) {
    drawSquiggle(pt.x, pt.y);
  }
  for (let pt of points2) {
    drawSquiggle(pt.x, pt.y);
  }
}

function drawSquiggle(x, y) {
  stroke(180, 220, 255, 180); // light blue-ish, transparent
  noFill();
  beginShape();
  let px = x;
  let py = y;
  for (let i = 0; i < 10; i++) {
    vertex(px, py);
    px += random(-1, 1);
    py += random(-1, 1);
  }
  endShape();
}