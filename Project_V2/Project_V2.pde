float x= int(random(21,979));
float y = int(random(21,979));
float x_speed = int(random(5,15));
float y_speed =int(random(5,15));
int currColor1 =int(random(1,4));
float x2= int(random(21,979));
float y2= int(random(21,979));
float x2_speed = int(random(5,15));
float y2_speed =int(random(5,15));
int currColor2=int(random(1,4));
float currRadius = 40;
float xOld;
float yOld;


int points = 0;
float time=0;
float time2=0;
int randColor;


void makeRectangle(){
  
}

void fillColor(int currColor){
    if (currColor == 1){
      fill(255,0,0);
    }
    else if(currColor == 2){
      fill(0,255,0);
    }
    else{
      fill(0,0,255);
    }
}

void setup(){
  size(1000,1000);
}

void draw(){
  background(200);
  //ball1 and ball2 movement
    x = x+x_speed;
    y = y+y_speed;
    x2 = x2+x2_speed;
    y2 = y2+y2_speed;
  if (x >=width-20 || x <= 20){
    x_speed = -x_speed;
    currColor1= int(random(1,4));
  }
  if (y >= height-20 || y <= 20){
    y_speed = -y_speed;
    currColor1= int(random(1,4));
  }
  
  if (x2 >=width-20 || x2 <= 20){
    x2_speed = -x2_speed;
    currColor2= int(random(1,4));
  }
  if (y2 >= height-20 || y2 <= 20){
    y2_speed = -y2_speed;
    currColor2 = int(random(1,4));
  }
  fillColor(currColor1);
  ellipse(x,y,currRadius,currRadius);
  fillColor(currColor2);
  ellipse(x2,y2,currRadius,currRadius);
 
  if (sqrt(sq(x-x2)+sq(y-y2))<=currRadius){
    if (currColor1 == currColor2){
        if(currRadius <320){
          currRadius*=2;
        }else{
          currRadius=40;
        }
      x= int(random(21,979));
      y = int(random(21,979));
      x2= int(random(21,979));
      y2= int(random(21,979));
      x_speed = int(random(5,15));
      y_speed =int(random(5,15));
      x2_speed = int(random(5,15));
      y2_speed =int(random(5,15));
      
      
    }
    else{
      currRadius = 0;
      println("Game Over");

    }
  }
  time = millis()-time2;
  if(mousePressed && (sqrt(sq(mouseX-x)+sq(mouseY-y))<=currRadius)){
    time2 = millis();
    xOld=x;
    yOld=y;
    x_speed = (mouseX -x)/time * 10;
    y_speed = (mouseY -y)/time * 10;
    x = mouseX;
    y = mouseY;
    
  }
  if(mousePressed && (sqrt(sq(mouseX-x2)+sq(mouseY-y2))<=currRadius)){
    time2 = millis();
    xOld=x2;
    yOld=y2;
    x2_speed =  (mouseX -x2)/time *10;
    y2_speed = (mouseY -y2)/time *10;
    x2 = mouseX;
    y2 = mouseY;

  }
  
  /*
  time = millis()-time2;
  if (mousePressed && ((mouseX >= x-40)&&(mouseX<= x+40) && (mouseY >= y-40)&&(mouseY <= y+40))){
     x= int(random(21,979));
    y = int(random(21,979));
    x_speed = int(random(5,15));
    y_speed = int(random(5,15));
    points+=(10-time/1000);
    time2 = millis();
    println(points);
  }
 */
}