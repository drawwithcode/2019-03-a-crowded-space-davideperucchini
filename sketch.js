var allMySquares = [];
var amountOfSquares = 80;
var backgroundColor = 40;

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < amountOfSquares; i++) {
    //mySquares instance
    var tempx = random() * windowWidth;
    var tempy = random() * windowHeight;
    var diameter = 40;

    var tempSquare = new Square(tempx, tempy, diameter);

    allMySquares.push(tempSquare);
  }
}

function draw() {
  background(backgroundColor);

  //text settings
  text("CLICK TO CHOOSE THE BACKGROUND GREY YOU PREFER", windowWidth / 2, windowHeight / 2)
  textAlign(CENTER, CENTER)
  textSize(18);
  textFont("Helvetica")

  for (var i = 0; i < allMySquares.length; i++) {

    var tempSquare = allMySquares[i];
    tempSquare.move();
    tempSquare.display();

  }
}

function mouseClicked() {
  //set the variable to a random grey between 40 and 200
  backgroundColor = color(random(200));
}

function Square(_x, _y, _diameter) {
  //Square properties
  this.size = _diameter;
  this.x = _x;
  this.y = _y;
  this.speed = 20;
  this.color = "#F7CAC9";

  var xIncrease = 1;
  var yIncrease = 1;


  this.move = function() {

    this.x += xIncrease * this.speed;
    this.y += yIncrease * this.speed;

    //vertical bouncing
    if (this.y > windowHeight || this.y < 0) {
      yIncrease = -yIncrease;
    }

    //horizontal bouncing
    if (this.x > windowWidth || this.x < 0) {
      xIncrease = -xIncrease;
    }
  }

  this.display = function() {
    fill(this.color);
    push();
    //squares
    translate(this.x, this.y);
    rect(0, 0, this.size, this.size);
    //circles
    fill("ffffff");
    ellipse(this.x / 5, this.y / 5, this.size / 3);

    pop();
  }
}
