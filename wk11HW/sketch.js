var rectangles = [];
var step = 1;
var moveRect;
var slider;

function setup() {
	slider = createSlider(5, 500, 250, 100);
	createCanvas(800, 800);
	moveRect = true;

	var button = select('#button');

	for(var i=0; i<1000; i++) {
		rectangles.push(new Rectangle(random(width), random(height),
		 40, random(255), 200, random(255), random(300)))
	}

	button.mousePressed(stopMove);
}

function draw() {
	background('pink');
	for(var i=0; i<1000; i++) {

		if(moveRect==true){
			rectangles[i].move();
		} 

		rectangles[i].show();
	}	

}

function Rectangle(x, y, r, g, b, a, h) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.g = g;
	this.b = b;
	this.a = a;
	this.w = slider.value();
	this.h = h;

	this.show = function() {
		strokeWeight(10);
		fill(this.r, this.b, this.g, this.a);
		rect (this.x, this.y, slider.value(), this.h);
	}

	this.move = function() {
		this.x += step;
		this.y += step;

		if(this.x > 700) {
			step =-1;
		}
		if(this.x < 100) {
			step =1
		}
		if(this.y > 700) {
			step =-1;
		}
		if(this.y < 100) {
			step =1;
		}
	}
}

function stopMove() {
	if(moveRect == true) {
		moveRect = false;
	} else {
		moveRect = true;
	}
	
	
}


