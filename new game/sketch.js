let sf = 1;
let points = [];
let color = 0;
let mx = 0;
let my = 0;
function setup() {
    createCanvas(500, 500)

}

function draw() {
    background(200)
    noStroke()

    

   translate(width/2, height/2);
   if (mouseIsPressed) {
    points.push(new Point(Math.floor(mouseX / sf)-width/2, Math.floor(mouseY / sf)-height/2, color))
    }  
   scale(sf);
  
   //draw
    for (let i = 0; i < points.length; i++) {
        fill(points[i].color);
        square(Math.floor(points[i].x), Math.floor(points[i].y), 1)
    }
    translate(-width/2, -height/2);

}

function mouseWheel(e) {
  
    if (e.delta > 0)
        sf *= 1.05;
    else
        sf *= 0.95;
 
    //move the square according to the vertical scroll amount
    //uncomment to block page scrolling
    //return false;
}

class Point {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
}

function setColor(c) {
    color = c;
}