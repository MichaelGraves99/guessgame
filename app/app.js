var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
  //generate new colors
  colors = generateRandomColors(6);
  //pick new random color form array
  pickedColor = pickColor();
  //change colors of squares
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial color to squares
  squares[i].style.backgroundColor = colors[i];
  //add click listeners to squares
  squares[i].addEventListener("click", function () {
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = " Correct!!";
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    };
  });
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  //pick a red 
  var r = Math.floor(Math.random() * 256);
  //pick a green
  var g = Math.floor(Math.random() * 256);
  //pick a blue
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}


