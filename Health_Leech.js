var dirc, hlth, dist;


dirc = Math.random() * 360;
while (true) {
  hlth = health();
  dist = scan(dirc);
  while (dist <= 70) {
    cannon(dirc, dist);
    swim(dirc);
    dist = scan(dirc);
    if (health() <= hlth - 5) {
      dirc = Math.random() * 360;
      swim(dirc);
    } else {
      hlth = health();
    }
  }
  if (scan(dirc - 5) <= 70) {
    dirc = dirc - 5;
  } else {
    dirc = dirc + 5;
  }
  if (speed() == 0 && dist > 70) {
    swim(Math.random() * 360);
  }
}
