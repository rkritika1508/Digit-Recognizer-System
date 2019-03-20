var paint = false;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Tools: Pencil, eraser
// Events: MouseDown, MouseUp, MouseMove, MouseLeave
// Functions: Record Mouse Data, Draw the Mouse Data


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