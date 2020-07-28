var dist = [0,0];
var dif_dis;
var deg = [0,0,0];
var dif_deg;
var cur_health = 180;




function quickscan() {
  for (var i = 0; i < 16; i++) {
    if (scan(i * 20, 20) <= 70) {
      cannon(i * 20, scan(i * 20, 20));
    }
  }
}


function snipe(){
  deg[0] = -1;
  while(deg[0] == -1){
    for(count = 0; count <= 18; count++){
      if(scan(count*20, 20) < 70){
        deg[0] = count*20 - 20;
      }
    }
  }
  deg[1] = deg[0];
  while(scan(deg[1], 4) >= 100){
    deg[1] = deg[1] + 4;
    dist[0] = scan(deg[1], 4);
  }
  if(dist[0] < 30){
    cannon(deg[1], scan(deg[1], 1))
  } else {
    deg[2] = deg[1] - 20;
    while(scan(deg[2], 1) >= 70 && (deg[2] - deg[1]) < 35){
      deg[2] = deg[2] + 1;
      dist[1] = scan(deg[2], 1);
    }
    dif_deg = deg[2] - deg[1];
    dif_dist = dist[1] - dist[0];
      
    cannon(deg[2] + dif_deg, scan(deg[2]) + dif_dist);
  }
}




while (true) {
  while (loc_x() < 50 && loc_y() > 50) {
    swim(315, 100);
    quickscan();
  }
  stop();
  quickscan();
  while (loc_x() < 90 && loc_y() < 90) {
    swim(45, 100);
    quickscan();
  }
  stop();
  cur_health = health();
  while(cur_health == health()){
    snipe();
  }
  while (loc_x() > 50 && loc_y() > 50) {
    swim(225, 100);
    quickscan();
  }
  stop();
  quickscan();
  while (loc_x() < 90 && loc_y() > 10) {
    swim(315, 100);
    quickscan();
  }
  stop();
  cur_health = health();
  while(cur_health == health()){
    snipe();
  }
  while (loc_x() > 50 && loc_y() < 50) {
    swim(135, 100);
    quickscan();
  }
  stop();
  quickscan();
  while (loc_x() > 10 && loc_y() > 10) {
    swim(225, 100);
    quickscan();
  }
  stop();
  cur_health = health();
  while(cur_health == health()){
    snipe();
  }
  while (loc_x() < 50 && loc_y() < 50) {
    swim(45, 100);
    quickscan();
  }
  stop();
  quickscan();
  while (loc_x() > 10 && loc_y() < 90) {
    swim(135, 100);
    quickscan();
  }
  stop();
  cur_health = health();
  while(cur_health == health()){
    snipe();
  }
}