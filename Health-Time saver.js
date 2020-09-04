var dirc, dist, wbuff, swm_spd, tm_arnd, rota;

dirc = 180;
wbuff = 17;
swm_spd = 100;
tm_arnd = 0;
rota = 1;

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
  
  while(getX() > wbuff){
    move2(180);
    if(speed() == 0){
      break;
    }
  }
  
  while(getY() > wbuff){
    move2(270);
    if(speed() == 0){
      break;
    }
  }
  
  while(getX() < 100 - wbuff){
    move2(0);
    if(speed() == 0){
      break;
    }
  }
  
  while(getY() < 100 - wbuff){
    move2(90);
    if(speed() == 0){
      break;
    }
  }
  tm_arnd += 1;
  while(tm_arnd == 4){
    dist = scan(dirc);
    while(dist <= 70){
      swim(dirc, swm_spd);
      if(dist < 10){
        cannon(dirc, dist);
      }
      dist = scan(dirc)
      if(speed() == 0 & dist > 20){
        dirc = dirc + 180;
      }
    }
    if(scan(dirc - rota*5) <= 70){
      dirc = dirc - rota*5;
    } else {
      dirc = dirc + rota*5;
    }
    
    if(speed() == 0 & dist > 20){
      swim(Math.random()*360, swm_spd)
    }
  }
}
