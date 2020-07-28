var dirc;
var rl = -1;
var rang = [25, 70];
var wbuff = 10;


/**
 * Describe this function...
 */
function attackRam() {
  cannon(dirc, scan(dirc));
  if(scan(dirc) < rang[0]) {
    swim(dirc, 100);
  } else {
    swim(dirc);
  }
  dirc = dirc - 50;
}


function move() {
  if(speed() == 0){
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


while (true) {
  move();
  if (scan(dirc) <= rang[1]) {
    attackRam();
  }
  dirc = dirc + 5;
}
