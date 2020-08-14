var dirc = 0; // Cannon angle
var dist;
var rl = -1; // Used to determine rotation direction
//var ran = [5, 35, 60]; // attack ranges
var wbuff = 5; // Desired wall buffer
var rota = -1; // rotation of scanner



function move() {
  if(speed() == 0){
    swim(dirc + 180);
    rl = -1*rl;
  }
  if(getY() < wbuff){
    swim(Math.random()*180);
    rl = -1*rl;
  }
  if(getX() > 100 - wbuff){
    swim(Math.random()*180 + 90);
    rl = -1*rl;
  }
  if(getY() > 100 - wbuff){
    swim(Math.random()*180 + 180);
    rl = -1*rl;
  }
  if(getX() < wbuff){
    swim(Math.random()*180 + 270);
    rl = -1*rl;
  }
}



// Jackle 
while(health() > 90){
  move();
  dist = scan(dirc);
  if(dist <= 70){
    cannon(dirc, dist);
    if(dist <= 30){
      swim(dirc+120);
    }
    dirc = dirc - rota*35;
  }
  dirc = dirc + rota*5;
}

// Hide
while(true){
  dist = scan(dirc);
  if(dist <= 70){
    swim(dirc, 100);
    if(dist < 30){
      cannon(dirc, dist);
    }
    dirc = dirc - rota*35;
  }
  dirc = dirc + rota*5;
}
