var dirc;
var rl = -1;
var wbuff = 2;




/**
 * Describe this function...
 */
function attackRam() {
  cannon(dirc, scan(dirc));
  if(scan(dirc,20) < 10){
    swim(dirc);
  }else if(scan(dirc) < 40) {
    swim(dirc);
  } else {
    swim(dirc);
  }
  dirc = dirc + 35;
}


function walls() {
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
  walls();
  if (scan(dirc) <= 20){
    attackRam();
  } else if(scan(dirc) < 100){
    swim(dirc);
    dirc = dirc + 50;
  }
  dirc = dirc - 5;
}