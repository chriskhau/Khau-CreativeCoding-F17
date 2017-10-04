function setup(){
	createCanvas(600,500);
}

function draw(){
	background(200);

	translate(200,100);

	for(var i =0;i<3;i++){
		push();
		translate(100*i,0);
		rotate(PI*i/3);
		rect(-25,-25,50,50);
		pop();
	}
}