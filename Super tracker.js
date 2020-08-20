var dirc = 0; // Direction of scanner
var dist; // Distance to opponent
// rotation of scanner
var rota = (Math.random() < .5 ? 1 : -1);
var ran = [10, 35, 70];
var rl = (Math.random() < .5 ? 1 : -1);
var dist_last;

function attack(ran, dist) {
  cannon(dirc, dist);
  if(dist < ran[0]){
    swim(dirc + 180);
  }else if(dist < ran[1]) {
    swim(dirc + rl*90);
  } else {
    swim(dirc, 100);
  }
}

while (true) {
  dist_last = scan(dirc);
  dist = dist_last;
  
  while(dist <= 70){
    dist_last = dist;
    // enemy in range attack
    attack(ran, dist);
    
    dist = scan(dirc);
    
    if (speed() == 0) {
      swim(Math.random() * 360);
      rl = -1*rl;
    }
  } 
  
  // check to one side for enemy otherwise go as normal
  if(dist_last <= 70){
    if(scan(dirc + rota*5) <= 70){
      dirc = dirc + rota*5;
      rota = -1*rota;
    } else {
      dirc = dirc - rota*5;
      rota = -1*rota;
    }
  } else {
    dirc = dirc + rota*5;
  }
  // Move if not moving
  if (speed() == 0) {
      swim(Math.random() * 360);
      rl = -1*rl;
    }
}
