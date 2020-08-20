var rota, dirc, dist;


if (Math.random() < 0.5) {
  rota = 1;
} else {
  rota = -1;
}
dirc = 0;
while (true) {
  dist = scan(dirc);
  while (dist <= 70 && speed() != 0) {
    cannon(dirc, dist);
    swim(dirc);
    dist = scan(dirc);
  }
  dirc += rota * 5;
  if (speed() == 0) {
    swim(Math.random() * 360);
  }
}
