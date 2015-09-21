document.addEventListener("DOMContentLoaded", function() {
  drawBorder();
});


// find our buttons
var buttons = document.getElementsByTagName('button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
   drawRectangle(this.id);
  });
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    if(this.id === "clear") {
      clearCanvas();
    } else {
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
