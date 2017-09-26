
function setup(){
	createCanvas(600,500);
	console.log("screen works!");

}
function draw(){
	//background(200,200,200);
	background(200);
	noStroke();
	if (mouseX > width/2){
		fill(0,0,255);
		rect(width/2,0,width/2,height);
	}
	if (mouseX == 500){
		fill(255,255,0);
		rect(0,0,width,height);
	}
	if (mouseX < width/2 && mouseY <= height*1/3){
		if(mouseIsPressed){
			fill(0,255,255);
			rect(0,0,width/2,height*1/3);
		}
	}
	if (mouseX < width/2 && mouseY > height*1/3){
		fill(255,0,0);
		rect(0,height*1/3,width/2,height*2/3);
	}
}
	





/*
	var myDistance = dist(mouseX,mouseY,pmouseX,pmouseY);

	strokeWeight(myDistance);
	stroke(myDistance);

	if(mouseIsPressed){
		line(mouseX,mouseY,pmouseX,pmouseY);
	}
*/
/*
function mouseDragged(){
	noStroke();
	ellipse(mouseX,mouseY,50,50);

}
*/