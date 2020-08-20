
var dirc = 0;
var rota = (Math.random() < .5 ? 1 : -1);
var rl = (Math.random() < .5 ? 1 : -1);
var ran = [10, 35, 70];
var dist;

/**
 * attack function:  what to do when scan is picked up
 * input: ran list of 3 distances (close, medium, far)
 *        dirc (global - direction of scan)
 *        rl (global - rotation of duck around enemy)
 *        rota (global - rotation of scanner)
 */
function attack(ran, dist) {
  cannon(dirc, dist);
  if(dist < ran[0]){
    swim(dirc + 180);
  }else if(dist < ran[1]) {
    swim(dirc + rl*90);
  } else {
    swim(dirc, 100);
  }
  dirc = dirc - rota*35;
}


while(true){
  dist = scan(dirc);
  if(dist < 70){
    attack(ran, dist)
  }
  if(speed() == 0){
    swim(Math.random()*360)
    rl = -1*rl;
  }
  dirc += rota*5
}
