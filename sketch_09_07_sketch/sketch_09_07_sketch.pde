size(500,500);

noStroke();
ellipse(300,100,50,100);


stroke(0,0,0);
strokeWeight(3);
line(5,10,320,100);

strokeWeight(7);
stroke(255,255,255);
fill(255,10,23);
rect(50,60,200,100);


//Draw a complex thing
strokeWeight(3);
fill(0,255,255);
beginShape();
vertex(50,100);
vertex(300,200);
vertex(200,300);
vertex(100,150);
vertex(80,300);
endShape();