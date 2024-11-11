let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  let numBubbles = 100; 

  let i = 0;
  while (i < numBubbles) {
    let x = random(width);
    let y = random(height);
    let size = random(50); // Random size bubbles
    bubbles.push({ x, y, size });
    i++;
    
  }
}

function draw() {
  background(0,8,20); // Warna Background
  for (let bubble of bubbles) {
    drawBubble(bubble.x, bubble.y, bubble.size);
  }
}

function drawBubble(x, y, size) {
  fill(150,150,0,200);
  ellipse(x, y, size, size);
  fill(255,255,255,10);
  ellipse(x, y, size * 0.7, size * 0.7);
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}