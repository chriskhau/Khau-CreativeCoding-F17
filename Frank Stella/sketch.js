var heightRatio = Math.sqrt(3);

function setup(){
	createCanvas(800,500);
	//background(200);
	
	stroke(255,255,255);
	strokeWeight(1.5);
	fill(38,104,154);

	for(var i=0;i<9;i++){
		if (i <7){
		triangle(300+(i*10),450,500-(i*10),450,400,450-((100-(i*10))*heightRatio));
		}
		else {
			fill(255,255,255);
			triangle(300+(i*10),450,500-(i*10),450,400,450-((100-(i*10))*heightRatio));
		}
	}

	fill(32,33,37);
	
	translate(-40,280*heightRatio);
	rotate(-PI/3);



	for(var i=0;i<9;i++){
		if (i <7){
		triangle(300+(i*10),450,500-(i*10),450,400,450-((100-(i*10))*heightRatio));
		}
		else {
			fill(255,255,255);
			triangle(300+(i*10),450,500-(i*10),450,400,450-((100-(i*10))*heightRatio));
		}
	}

	fill(50,55,93);
	rotate(PI/3);
	translate(400,160*heightRatio);
	rotate(-PI*2/3);

	for(var i=0;i<9;i++){
		if (i <7){
		triangle(300+(i*10),450,500-(i*10),450,400,450-((100-(i*10))*heightRatio));
		}
		else {
			fill(255,255,255);
			triangle(300+(i*10),450,500-(i*10),450,400,450-((100-(i*10))*heightRatio));
		}
	}

	fill(16,90,119);
	rotate(PI*2/3);
	translate(80,-560*heightRatio);
	rotate(PI/3);

	for(var i=0;i<9;i++){
		if (i <7){
		triangle(300+(i*10),450,500-(i*10),450,400,450-((100-(i*10))*heightRatio));
		}
		else {
			fill(255,255,255);
			triangle(300+(i*10),450,500-(i*10),450,400,450-((100-(i*10))*heightRatio));
		}
	}

	fill(54,126,104);
	rotate(-PI/3);
	translate(400,160*heightRatio);
	rotate(PI*2/3);
	//rotate(PI*2/3)
	for(var i=0;i<9;i++){
		if (i <7){
		triangle(300+(i*10),450,500-(i*10),450,400,450-((100-(i*10))*heightRatio));
		}
		else {
			fill(255,255,255);
			triangle(300+(i*10),450,500-(i*10),450,400,450-((100-(i*10))*heightRatio));
		}
	}

	fill(90,94,105);
	rotate(-PI*2/3);
	translate(-40,280*heightRatio);
	rotate(PI);
	for(var i=0;i<9;i++){
		if (i <7){
		triangle(300+(i*10),450,500-(i*10),450,400,450-((100-(i*10))*heightRatio));
		}
		else {
			fill(255,255,255);
			triangle(300+(i*10),450,500-(i*10),450,400,450-((100-(i*10))*heightRatio));
		}
	}


}


function draw(){
	
}