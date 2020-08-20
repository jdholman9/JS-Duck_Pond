
var dirc = 0;
var rota = 1;
var rl = 1;
var ran = [10, 35, 70]

/**
 * attack function:  what to do when scan is picked up
 * input: ran list of 3 distances (close, medium, far)
 *        dirc (global - direction of scan)
 *        rl (global - rotation of scanner)
 *        rota (global - rotation of duck around enemy)
 */
function attack(ran) {
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


while(true){
  if(scan(dirc) < 70){
    attack(ran)
  }
  if(speed() == 0){
    swim(Math.random()*360)
    rl = -1*rl;
  }
  dirc += rota*5
}
