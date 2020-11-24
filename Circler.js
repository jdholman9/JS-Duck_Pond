

var wbuff = 15;
var swm_spd = 100;
var dirc = 0;
var dist;

function move2(sm_dirc){
  swim(sm_dirc, swm_spd);
    dist = scan(dirc);
    if(dist <= 70){
      cannon(dirc, dist);
      dirc = dirc - 35;
    }
    if(dirc % 360 == (sm_dirc + 190) % 360){
      dirc = sm_dirc - 10;
    }
    dirc += 5;
}


while(true){
  
  while(loc_x() > wbuff){
    move2(180);
    if(speed() == 0){
      break;
    }
  }
  
  while(loc_y() > wbuff){
    move2(270);
    if(speed() == 0){
      break;
    }
  }
  
  while(loc_x() < 100 - wbuff){
    move2(0);
    if(speed() == 0){
      break;
    }
  }
  
  while(loc_y() < 100 - wbuff){
    move2(90);
    if(speed() == 0){
      break;
    }
  }
  
}
