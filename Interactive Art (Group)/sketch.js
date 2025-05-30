// setting up the welcome text and where it should start from
let welcomeText = "Welcome to Bath Spa University";
let welcomeY;
let dropText = false; // this becomes true when we click to drop the welcome text
let customFont;
let bgImage;

// the 3 headings and what should show when you hover on them
let heading1 = "History of Bath Spa";
let heading2 = "About Bath Spa";
let heading3 = "Why Bath Spa";

// The information in text boxes for the headings
let info1 = "Established in the 1800s, Bath Spa University grew from a teacher training college into a thriving creative institution. It has a rich past and continues to evolve.";

let info2 = "Bath Spa is a university where creativity meets learning in a stunning, historic setting. Known for the arts, but it offers much more.";

let info3 = "Students pick Bath Spa because it's inspiring, calm, and filled with creative vibes — perfect for learning and growth.";

function preload() {
  // loads the custom font and the background image before anything else so no error occur
  customFont = loadFont("BebasNeue-Regular.ttf");
  bgImage = loadImage("BG.jpg");
}
//setting up the function for basic stuff
function setup() {
  createCanvas(windowWidth, windowHeight); // screen resizing
  textFont(customFont); // apply the custom font
  textSize(64); // big size for the welcome text
  textAlign(CENTER, CENTER); // centers everything
  welcomeY = -100; // welcome text starts off screen from the top
}

function draw() {
  background(255); // white background so we can see clearly
  // stretch the background image to full screen
  image(bgImage, 0, 0, width, height); 

  // draw the welcome message to be big and centered
  fill(0); // black text
  textSize(64); // reset the text size so it doesn’t change when we hover
  textAlign(CENTER, CENTER); // ensure alignment for welcome text
  text(welcomeText, width / 2, welcomeY); // draw it at current Y position

  // make the welcome text slowly fall down after clicking
  if (dropText && welcomeY < height - 100) {
    welcomeY += 2;
  }

  drawHeadings(); // show the three headings on top
  showTextBoxes(); // show text boxes if hovering
}

function drawHeadings() {
  fill(0); // black text
  textSize(32); // heading font size
  textAlign(CENTER, CENTER); // explicitly center align for headings

  // the 3 headings evenly on the top
  text(heading1, width / 4, 50);
  text(heading2, width / 2, 50);
  text(heading3, (3 * width) / 4, 50);
}

function showTextBoxes() {
  textSize(16); // smaller text size for inside the boxes
  textAlign(CENTER, TOP); // align text to center horizontally and start from top

  let boxWidth = 350; // width of info box
  let boxHeight = 120; // height of info box
  let padding = 10; // padding around the text

  // check if mouse is hovering over each heading, then show the corresponding box using if statements to correspond the text boxes
  if (mouseX > width / 4 - 100 && mouseX < width / 4 + 100 && mouseY > 35 && mouseY < 65) {
    drawBox(width / 4, 90, info1, boxWidth, boxHeight, padding);
  }

  if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > 35 && mouseY < 65) {
    drawBox(width / 2, 90, info2, boxWidth, boxHeight, padding);
  }

  if (mouseX > (3 * width) / 4 - 100 && mouseX < (3 * width) / 4 + 100 && mouseY > 35 && mouseY < 65) {
    drawBox((3 * width) / 4, 90, info3, boxWidth, boxHeight, padding);
  }
}

function drawBox(centerX, y, message, w, h, pad) {
  fill(255); // white box
  stroke(0); // black border
  rect(centerX - w / 2, y, w, h, 10); // draw the box

  noStroke(); // remove border for text
  fill(0); // black text for the text
  textAlign(LEFT, TOP); // Align text to the left and top for proper wrapping

  // The message inside the box with padding
  text(message, centerX - w / 2 + pad, y + pad, w - pad * 2, h - pad * 2);
}

function mousePressed() {
  // once you click anywhere the start dropping the welcome text
  dropText = true;
}

function windowResized() {
  // make sure canvas stays full size even if you resize the window
  resizeCanvas(windowWidth, windowHeight);
}