class Ball {
    constructor(x, y, size) {
        this.x = x
        this.y = y
        this.width = size
        this.height = size
    }
    draw() {
        this.y = this.y + 5
        circle(this.x, this.y, this.width)
    }
}
class Box {
    constructor(x, y, size) {
        this.x = x
        this.y = y
        this.width = size
        this.height = size
    }
    draw() {
        square(this.x, this.y, this.width)
    }
}
function setup() {
    ball = new Ball(30, 0, 10)
    box = new Box(mouseX, mouseY, 20)
    score = 0
    createCanvas(500, 500)
}
function isCollide(objA, objB) {
    return !(
        ((objA.y + objA.height) < (objB.y)) ||
        (objA.y > (objB.y + objB.height)) ||
        ((objA.x + objA.width) < objB.x) ||
        (objA.x > (objB.x + objB.width))
    );
}
function draw() {
    document.getElementById("score").innerHTML = score;
    background(255)
    ball.draw()
    box.x = mouseX
    box.y = mouseY
    box.draw()
    if (ball.y > 500) {
        ball.x = random(0, 500)
        ball.y = 0
    }
    if (isCollide(ball,box)) {
        ball.x = random(0, 500)
        ball.y = 0
        score = score + 1
        console.log(score)
    }
}