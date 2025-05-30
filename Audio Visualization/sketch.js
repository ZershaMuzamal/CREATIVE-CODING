let mic;
let colors = ["#2E8B57",  // Sea green
"#3CB371",  // Medium sea green
"#20B2AA",  // Light sea green
"#66CDAA",  // Medium aquamarine
"#98FB98"   // Pale green
]
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  mic = new p5.AudioIn();
//gets the audio from the microphone
  mic.start();
}
function draw() {
  let micLevel = mic.getLevel() *height * 3;
  //so it increases when the audio is in the mic
  fill(random(colors));
  circle(mouseX, mouseY, micLevel);
}