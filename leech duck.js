var dirc, dist, rota, swm_spd;

dirc = Math.random()*360;
rota = 1;
swm_spd = 30;

swim(dirc, swm_spd);
while(true){
  dist = scan(dirc);
  while(dist <= 70){
    swim(dirc, swm_spd);
    if(dist < 10){
      cannon(dirc, dist);
    }
    dist = scan(dirc)
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
