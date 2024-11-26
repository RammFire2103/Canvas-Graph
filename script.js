const canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d"),
  canvasWrapper = document.querySelector(".canvas-wrapper");

var computedStyle = getComputedStyle(canvasWrapper);

function resizeCanvas() {
  elementHeight = canvasWrapper.clientHeight; // height with padding
  elementWidth = canvasWrapper.clientWidth;

  elementHeight -=
    parseFloat(computedStyle.paddingTop) +
    parseFloat(computedStyle.paddingBottom) +
    4;
  elementWidth -=
    parseFloat(computedStyle.paddingLeft) +
    parseFloat(computedStyle.paddingRight);

  console.log(elementHeight);

  canvas.width = elementWidth;
  canvas.height = elementHeight;
}

resizeCanvas();

ctx.beginPath();
ctx.arc(80, 100, 56, (3 / 4) * Math.PI, (1 / 4) * Math.PI, true);
ctx.fill(); // *14
ctx.moveTo(40, 140);
ctx.lineTo(20, 40);
ctx.lineTo(60, 100);
ctx.lineTo(80, 20);
ctx.lineTo(100, 100);
ctx.lineTo(140, 40);
ctx.lineTo(120, 140);
ctx.stroke(); // *22
