function setup(){
	createCanvas(600,500);
}
function draw(){

	background(200);
	translate(200,200);
	rect(-25,-25,50,50);

	push();
	translate(100,0);
	rotate(PI/3);

	rect(-25,-25,50,50);
	pop();

	push();
	translate(200,0);
	rotate(PI*2/3);

	rect(-25,-25,50,50);
	pop();



}