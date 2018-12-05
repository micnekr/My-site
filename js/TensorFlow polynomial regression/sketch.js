//                                variables
let canvas;
let x_vals = [];
let y_vals = [];
const pointWidth = 10;
const learningRate = 0.1;
let guessLine = {}

let optimizer;

function setup() {
  // smallest of windowWidth and windowHeight
  let smallestDimension = min(windowWidth - 100, windowHeight - 100);
  canvas = createCanvas(smallestDimension+1, smallestDimension+1);
  canvas.parent("canvasContainer");
  guessLine.a = tf.variable(tf.scalar(0));
  guessLine.b = tf.variable(tf.scalar(0));
  guessLine.c = tf.variable(tf.scalar(0));
  guessLine.d = tf.variable(tf.scalar(0));
  optimizer = tf.train.adam(learningRate);
}

function draw() {
  background(0);
  stroke(255);
  fill(255);
  for(pointI in x_vals){
    let x = map(x_vals[pointI], -1, 1, 0, width);
    let y = map(y_vals[pointI], 1, -1, 0, height);
    ellipse(x, y, pointWidth, pointWidth);
  }

  let curveX = [];
  for (var x = -1; x <= 1; x+=0.01) {
    curveX.push(x);
  }
  let ys = tf.tidy(function () {
    return predict(curveX);
  })
  let curveY = ys.dataSync();
  ys.dispose();

  noFill();
  beginShape();
  strokeWeight(3);
  stroke(255);
  for (var i = 0; i < curveX.length; i++) {
    let x = map(curveX[i], -1, 1, 0, width);
    let y = map(curveY[i], 1, -1, 0, height);
    vertex(x, y);
  }
  endShape();
  // let x1 = map(xs[0], -1, 1, 0, width);
  // let x2 = map(xs[1], -1, 1, 0, width);
  // let y1 = map(yPoints[0], 1, -1, 0, height);
  // let y2 = map(yPoints[1], 1, -1, 0, height);
  // line(x1, y1, x2, y2);
  // ys.dispose()

  if(x_vals.length > 0){
    optimizer.minimize(diff);
  }
}

function mousePressed() {
  let x = map(mouseX, 0, width, -1, 1);
  let y = map(mouseY, 0, height, 1, -1);
  x_vals.push(x);
  y_vals.push(y);
}

function predict(xArr) {
  const xs = tf.tensor1d(xArr);
  return xs.pow(3).mul(guessLine.a)
  .add(xs.square().mul(guessLine.b))
  .add(xs.mul(guessLine.c))
  .add(guessLine.d);
}

function lossFun(predictions, right) {
  return predictions.sub(right).square().mean();
}

function diff() {
  const ys = tf.tensor1d(y_vals);
  return lossFun(predict(x_vals), ys);
}
