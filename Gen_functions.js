/**
 * move randomly without hitting the walls
 * input: dirc (global - direction of scanner)
 *        wbuff (wall buffer 5 is just fine if speed isn't higher than 50)
 *        spd (desired swim speed)
 *        rl (global - rotation of duck circling -- not needed)
 */
function move(wbuff, spd) {
  if(speed() === 0){
    swim(dirc + 180, spd);
    rl = -1*rl;
  }
  if(loc_y() < wbuff){
    swim(Math.random()*180, spd);
    rl = -1*rl;
  }
  if(loc_x() > 100 - wbuff){
    swim(Math.random()*180 + 90, spd);
    rl = -1*rl;
  }
  if(loc_y() > 100 - wbuff){
    swim(Math.random()*180 + 180, spd);
    rl = -1*rl;
  }
  if(loc_x() < wbuff){
    swim(Math.random()*180 + 270, spd);
    rl = -1*rl;
  }
}

/**
 * op_xy opponents x and y coordinates
 * input: dirc (direction in 360 degree angle)
 *        dist (Euclidean distance to opponent from self)
 *        my_xy (my current x and y coordinates)
 */
 function op_xy(dirc, dist, my_x, my_y){
     rad_dirc = dirc*Math.pi()/180
     var op_x = dist*Math.cos(rad_dirc) + my_x
     var op_y = dist*Math.sin(rad_dirc) + my_y
     return([op_x, op_y])
 }
 
 /**
  * eu_dist Euclidean distance between 2 points
  */
 function eu_dist(p1, p2) {
	var x1 = p1[0];
	var y1 = p1[1];
	var x2 = p2[0];
	var y2 = p2[1];
	var xdiff = Math.pow((x2 - x1), 2);
	var ydiff = Math.pow((y2 - y1), 2);
	return(Math.sqrt(xdiff + ydiff));
}
