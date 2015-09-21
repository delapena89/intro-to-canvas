document.addEventListener("DOMContentLoaded", function() {
  drawBorder();
});


// find our buttons
var buttons = document.getElementsByTagName('button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    if(this.id === "clear") {
      clearCanvas();
    } else if(this.id ==="fib") {
      drawFibonacci(this.id);
    } else{
      drawRectangle(this.id);
    }
  });
}



function clearCanvas() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
    context.clearRect(0,0, canvas.width, canvas.height);
    drawBorder();
}

function drawRectangle(color) {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var randomX = Math.floor(Math.random() *(250 - 10 + 1)) * 1;
  var randomY = Math.floor(Math.random() *(250 - 10 + 1)) * 1;
  var randomHeight = Math.floor(Math.random() *(100 - 10 + 1)) * 1;
  var randomWidth = Math.floor(Math.random() *(100 - 10 + 1)) * 1;
    context.fillStyle = color;
    context.fillRect(randomX, randomY, randomWidth, randomHeight);
}


function drawBorder(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
    var size = { x: canvas.width, y: canvas.height };
    context.strokeStyle = 'blue';
    context.strokeRect(0,0, size.x, size.y);
}


var pixel_size = canvas.width/50;

function drawPixel(x,y,color) {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
    context.fillStyle = randomColor();
    context.fillRect(x*pixel_size,y*pixel_size, pixel_size, pixel_size);
}

function drawRow(rowNumber, rowLength) {
  for (var i = 0; i <rowLength; i++) {
    drawPixel(rowNumber, i,"green");
  }
}

function drawFibonacci() {
  for (rowNumber = 0; rowNumber < 15; rowNumber++) {
    var rowLength = fib(rowNumber);
    drawRow(rowNumber,rowLength, 'orange');
  }
}

function fib(x) {
  if (x === 0) {
    return 0;
  } else if(x === 1) {
    return 1;
  } else {
    return fib(x-1)+fib(x-2);
  }
}



var hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

function randomColor() {
  var color = ["#"];
  for (var i = 0; i < 6; i++) {
    var randomDigit = hex[Math.floor(Math.random()* hex.length)];
    color.push(randomDigit);
  }
  return color.join('');
}






// print number from 0-100 non recursively
function printNumber(number) {
  for (var i = 1; i < number; i++) {
    console.log(i);
    return 1;
  }
}

// pring numbers for 0-100 recursively
function printTo(number) {
  if (number === 0) {
    console.log(number);
  } else {
    console.log(number);
    number = number - 1;
    printTo(number);
  }
}

function fizzbuzz(number) {
  // break when number= 0
  if(number === 0) {
    // breakcase
    return -1;
  }
  var output = "";
  // do this until break
  if (number %3 === 0)output += 'fizz';
  if (number %5 === 0)output += 'buzz';

  console.log(output || number);
  fizzbuzz(number -1);

}





