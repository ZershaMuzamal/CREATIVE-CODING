let yOffset = 0;
let direction = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(180, 230, 255); // sky

  // Animate vertical bounce
  yOffset += direction * 0.5;
  if (yOffset > 10 || yOffset < -10) direction *= -1;

  // Body
  fill("pink");
  ellipse(200, 250 + yOffset, 100, 140); 

  // Head
  ellipse(200, 150 + yOffset, 120, 120); 

  // Eyes
  fill(255);
  ellipse(180, 145 + yOffset, 30, 40);
  ellipse(220, 145 + yOffset, 30, 40); 

  // Pupils
  fill(0);
  ellipse(180, 145 + yOffset, 10, 10); 
  ellipse(220, 145 + yOffset, 10, 10); 

  // Antennas
  stroke(0);
  strokeWeight(1);
  line(170, 100 + yOffset, 150, 60 + yOffset);
  line(230, 100 + yOffset, 250, 60 + yOffset);
  fill(255, 100, 150);
  ellipse(150, 60 + yOffset, 15, 15); 
  ellipse(250, 60 + yOffset, 15, 15); 
  

  // Smile
  fill(0);
  arc(200, 170 + yOffset, 50, 20, 0, PI); 

  // Teeth
  fill(255); 
  rect(190, 170 + yOffset, 5, 10, 2); 
  rect(205, 170 + yOffset, 5, 10, 2); 

  // Arms
  fill("pink");
  ellipse(140, 250 + yOffset, 20, 50); 
  ellipse(260, 250 + yOffset, 20, 50); 

  // Legs
  rect(180, 310 + yOffset, 15, 40, 5); 
  rect(205, 310 + yOffset, 15, 40, 5); 
}

