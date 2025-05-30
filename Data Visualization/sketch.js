let data = [
  { color: 'Blue', value: 12, hex: '#6495ED' },
  { color: 'Pink', value: 8, hex: '#FF69B4' },
  { color: 'Purple', value: 6, hex: '#9370DB' },
  { color: 'Black', value: 4, hex: '#333333' }
];

let maxValue;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(16);
  maxValue = max(data.map(d => d.value));
}

function draw() {
  background(250);

  // Canvas heading
  fill(50);
  textSize(28);
  textAlign(CENTER, TOP);
  text("Favorite Colors Survey Results", width / 2, 30); // top padding = 30px
let margin = 80;
let spacing = (width - 2 * margin) / (data.length - 1);
let yOffset = height / 2 + 40;

for (let i = 0; i < data.length; i++) {
  let x = margin + i * spacing;
  let y = yOffset;
  let size = map(data[i].value, 0, maxValue, 50, 150);
  // Hover detection
  let d = dist(mouseX, mouseY, x, y);
  let isHovering = d < size / 2;

  // Draw circle
  noStroke();
  fill(data[i].hex);
  ellipse(x, y, size);

  // Color label
  fill(30);
  textSize(16);
  textAlign(CENTER, TOP);
  text(data[i].color, x, y + size / 2 + 10);

  // Votes on hover
  if (isHovering) {
    fill(0);
    text(`${data[i].value} votes`, x, y - size / 2 - 20);
    }
  }
}

