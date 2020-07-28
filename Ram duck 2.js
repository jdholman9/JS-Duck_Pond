var dirc;
var rl = -1;
var wbuff = 5;
var low_health = 30;
var ran = [25, 45, 70];




/**
 * Describe this function...
 */
function attackRam() {
  cannon(dirc, scan(dirc));
  if(scan(dirc) < ran[0]) {
    swim(dirc, 100);
  } else {
    swim(dirc);
  }
  dirc = dirc - 50;
}


function attack() {
  cannon(dirc, scan(dirc));
  if(scan(dirc, 20) < ran[0]){
    swim(dirc + 180);
  }else if(scan(dirc) < ran[1]) {
    swim(dirc + rl*95);
  } else {
    swim(dirc);
  }
  dirc = dirc - 35;
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


while (health() > low_health) {
  move();
  if (scan(dirc) <= ran[2]) {
    attackRam();
  }
  dirc = dirc + 5;
}


while(true){
  move();
  if(scan(dirc) <= ran[2]){
    attack();
  }
  dirc = dirc + 5;
}