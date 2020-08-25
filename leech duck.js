var dirc = Math.random()*360;
var dist;
var rota = -1;

swim(dirc);
while(true){
  dist = scan(dirc);
  while(dist <= 70){
    swim(dirc);
    if(dist < 20){
      cannon(dirc, dist);
    }
    //dirc = dirc - rota*35;
    dist = scan(dirc)
  }
  if(scan(dirc - rota*5) <= 70){
    dirc = dirc - rota*5;
  } else {
    dirc = dirc + rota*5;
  }
  
  if(speed() == 0 & dist > 20){
    swim(Math.random()*360)
  }
}
