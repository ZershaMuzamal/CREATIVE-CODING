let welcomeText = "Welcome to Bath Spa University";
let y;
let waveAmplitude = 20;
let waveFrequency = 0.1;
let clicked = false;
let customFont;
let bgImg;

function preload() {
  // Load the custom font
  customFont = loadFont('PlaywriteHU-VariableFont_wght.ttf');

  // Load the background image
  bgImg = loadImage('BG.jpg'); // Make sure this file is in your project folder
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(customFont);
  textAlign(CENTER, CENTER);
  textSize(48);
  y = height / 2;
}

function draw() {
  // Draw the background image
  background(0); // fallback color
  image(bgImg, 0, 0, width, height);

  fill(255); // brighter text to contrast background
  for (let i = 0; i < welcomeText.length; i++) {
    let letter = welcomeText[i];
    let x = width / 2 - textWidth(welcomeText) / 2 + textWidth(welcomeText.substring(0, i));
    let waveY = y + sin(frameCount * waveFrequency + i) * (clicked ? waveAmplitude : 0);
    text(letter, x, waveY);
  }

  // Smooth slide down
  if (clicked && y < height - 100) {
    y += 2;
  }
}

function mousePressed() {
  clicked = true;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
