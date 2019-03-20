console.log("Done");
var paint = false;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.font = '40pt Calibri';
ctx.fillStyle = 'blue';
ctx.fillText('Hello', canvas.offsetLeft, canvas.offsetTop);
console.log(canvas.offsetLeft);
console.log(canvas.offsetTop);


var container = document.getElementById('paint');
//Mouse Down Event
function MouseDown(event) {
	var mouseX = event.pageX - this.offsetLeft;
	var mouseY = event.pageY - this.offsetTop;
	paint = true;
	addClick(mouseX, mouseY);
	redraw();
};
container.addEventListener("mousedown", MouseDown);

// Mouse Up Event
function MouseUp(event) {
	paint = false;
};

// Pencil, eraser
// Events: MouseDown, MouseUp, MouseMove, MouseLeave
// Record Mouse Data, Draw the Mouse Data
// We have to track the coordinates of the cursor and if the key is pressed we need to draw on the canvas