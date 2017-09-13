void setup(){
  size(600,600);
}

void draw(){
  background(200);
  if (mouseX < width/2 && mouseY < height*2/3){
    rect(0,0,width/2,height*2/3);
    fill(#5118F0);
  }
  if (mouseX > width/2){
    rect(width/2,0,width/2,height);
    fill(#FF0000);
  }
    if (mouseX == width*3/4){
    background(#ECFF1F);
  }
  if (mouseX < width/2 && mouseY > height*2/3){
    background(200);
    if (mousePressed == true){
      rect(0,height*2/3,width/2,height*1/3);
      fill(#00F9FF);
    }
  }
}
/*
void mousePressed(){
  ellipse(mouseX,mouseY,20,30);
  fill(#5625E3);
}

void mouseReleased(){
  rect(mouseX,mouseY,20,30);
}
void mouseDragged(){
  ellipse(mouseX,mouseY,10,10);
}
void mouseMoved(){
ellipse(mouseX,mouseY,30,30);
fill(mouseX);
}

void keyPressed(){
  if (key == 'a'){
    ellipse(50,30,40,40);
  }
  if (key == 's'){
    rect(100,100,20,80);
  } 
  println(key);
}
*/