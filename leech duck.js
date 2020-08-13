var dirc = 0;
var dist;
var rota = -1;

swim(0,100);
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
