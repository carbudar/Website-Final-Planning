let rectWidth = 100;
let xPos = rectWidth / 2;
let xSpeed = 2;

let circleR = 100;
let xPosCircle = circleR / 2;
let xSpeedCircle = 3;

let triX1, triY1, triX2, triY2, triX3, triY3;
let xPosTri = 50; // Initial x-position of the triangle
let xSpeedTri = 4; // Speed of the triangle

function setup() {
  createCanvas(1500, 400);
  noStroke();

}

function draw() {
	background(50)

  rectWidth = map(mouseX, 0, width, 100, 200);

    // triangle positions
	triX1 = 50
	triY1 = map(mouseX,0,width,height-120,height-170)
	triX2 = map(mouseX,0,width,0,0-50);
	triY2 = height - 20;
	triX3 = map(mouseX,0,width,100,150);
	triY3 = height - 20;

  // square
  push();
  fill(30, 131, 232);
  blendMode(OVERLAY)
  rectMode(CENTER);
  rect(xPos, height / 2, rectWidth, rectWidth);
  xPos += xSpeed;

  if (xPos + rectWidth / 2 >= width || xPos - rectWidth / 2 <= 0) {
    xSpeed *= -1;
  }
  pop();

  //circle
  push();

  fill(235, 14, 91);
  blendMode(OVERLAY)
  ellipse(xPosCircle, 75, rectWidth, rectWidth);
  xPosCircle += xSpeedCircle;

  if (xPosCircle + rectWidth / 2 >= width || xPosCircle - rectWidth / 2 <= 0) {
    xSpeedCircle *= -1;
  }
  pop();

  //triangle
  push()
  fill(252, 186, 3)
	blendMode(OVERLAY)
  triangle(
    triX1 + xPosTri,
    triY1,
    triX2 + xPosTri,
    triY2,
    triX3 + xPosTri,
    triY3
  );

  // Update xPosTri
  xPosTri += xSpeedTri;

  // Reverse direction if the triangle reaches canvas edges
  if (xPosTri + triX3 >= width || xPosTri + triX2 <= 0) {
    xSpeedTri *= -1;
  }

  pop();


  //cursor
  let cursorSize = map(mouseX,0,width,50,30)
  push()
  fill(200)
  blendMode(DIFFERENCE)
  ellipse(mouseX, mouseY, cursorSize, cursorSize);

  pop()
}
