var paint = false;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Tools: Pencil, eraser
// Events: MouseDown, MouseUp, MouseMove, MouseLeave
// Functions: Record Mouse Data (addClick), Draw the Mouse Data


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
container.addEventListener("mouseup", MouseUp);

// Mouse Move Event
function MouseMove(event) {
	if(paint) {
		addClick(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, true);
		redraw();
	}
};
container.addEventListener("mousemove", MouseMove);

//Mouse Leave Event
function MouseLeave(event) {
	paint = false;
}
container.addEventListener("mouseleave", MouseLeave);

// Add Click function which records the mouse data
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();

function addClick(x, y, dragging) {
	clickX.push(x);
	clickY.push(y);
	clickDrag.push(dragging);
}


//References:
// https://www.html5canvastutorials.com/labs/html5-canvas-paint-application/
// http://codetheory.in/creating-a-paint-application-with-html5-canvas/
// https://enlight.nyc/projects/web-paint/
// http://www.primaryobjects.com/2011/10/05/creating-a-simple-paint-app-with-html5-canvas-and-javascript/
// http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/
// https://code.tutsplus.com/tutorials/how-to-create-a-web-based-drawing-application-using-canvas--net-14288