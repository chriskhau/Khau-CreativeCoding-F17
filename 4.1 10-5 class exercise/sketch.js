var time;
var time2;

function setup(){
	createCanvas(600,600);
}

function draw(){
	translate(300,300);
	time = frameCount %30;
	time2 = frameCount %180;
	createArc(time,time2);


}
function createArc(time,time2){
	noFill();
	for(var i=0;i<50;i++){
		strokeWeight(i%3);
		arc(0,0,15*time,15*time,0+time2,PI/2+time2);
	}
	background(255);

}