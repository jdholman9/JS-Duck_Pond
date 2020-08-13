var dirc; // Cannon angle
var rl = -1; // Used to determine rotation direction
var ran = [5, 35, 60]; // attack ranges
var wbuff = 5; // Desired wall buffer
var rota = -1; // rotation of scanner

/**
 * attack function:  what to do when scan is picked up
 */
function attack() {
  cannon(dirc, scan(dirc));
  if(scan(dirc) < ran[0]){
    swim(dirc + 180);
  }else if(scan(dirc) < ran[1]) {
    swim(dirc + rl*90);
  } else {
    swim(dirc, 100);
  }
  dirc = dirc - rota*35;
}


function move() {
  if(speed() === 0){
    swim(dirc + 180);
    rl = -1*rl;
  }
  if(loc_y() < wbuff){
    swim(Math.random()*180);
    rl = -1*rl;
  }
  if(loc_x() > 100 - wbuff){
    swim(Math.random()*180 + 90);
    rl = -1*rl;
  }
  if(loc_y() > 100 - wbuff){
    swim(Math.random()*180 + 180);
    rl = -1*rl;
  }
  if(loc_x() < wbuff){
    swim(Math.random()*180 + 270);
    rl = -1*rl;
  }
}



dirc = Math.random() * 360;
swim(dirc);
if(Math.random() < 0.5){
  rl = 1;
}


while(true){
  move();
  if (scan(dirc) <= ran[2]) {
    attack();
  }
  dirc = dirc + rota*5;
}
