let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0, 50);

  if (mouseIsPressed) {
    particles.push(new Particle(mouseX, mouseY));
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.move();
    p.show();
    if (p.alpha < 0) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.size = random(20, 40);
    this.alpha = 255;
    this.col = color(random(200, 255), random(150, 255), random(200, 255));
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 3;
  }

  show() {
    fill(this.col.levels[0], this.col.levels[1], this.col.levels[2], this.alpha);
    ellipse(this.x, this.y, this.size);
  }
}