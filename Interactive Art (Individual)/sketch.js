let stars = [];
let cosmicMode = true;
let maxStars = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  // Background color switch
  background(cosmicMode ? color(10, 12, 30) : color(255, 150, 90));

  // Add stars gradually
  if (stars.length < maxStars && frameCount % 5 === 0) {
    stars.push(new Star(random(width), random(height), cosmicMode));
  }

  // Update and show stars, remove faded
  for (let i = stars.length - 1; i >= 0; i--) {
    stars[i].update();
    stars[i].show();
    if (stars[i].alpha <= 0) stars.splice(i, 1);
  }

  // Connect stars with lines
  strokeWeight(0.7);
  stroke(cosmicMode ? 'rgba(150,200,255,0.15)' : 'rgba(255,170,100,0.25)');
  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      if (dist(stars[i].pos.x, stars[i].pos.y, stars[j].pos.x, stars[j].pos.y) < 120) {
        line(stars[i].pos.x, stars[i].pos.y, stars[j].pos.x, stars[j].pos.y);
      }
    }
  }
}

function mouseClicked() {
  cosmicMode = !cosmicMode;
}

class Star {
  constructor(x, y, mode) {
    this.pos = createVector(x, y);
    this.size = random(5, 12);
    this.alpha = 255;
    this.color = mode
      ? color(200, 220, 255, this.alpha)
      : color(255, 180, 90, this.alpha);
  }

  update() {
    this.alpha -= 1.5;
    this.alpha = max(this.alpha, 0);
    this.color.setAlpha(this.alpha);
  }

  show() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}