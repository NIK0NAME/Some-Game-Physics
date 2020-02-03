let w = 800;
let h = 600;
let fondo = "#e5e7e9";

let obj;

function setup() {
    createCanvas(w, h);
    obj = new Objeto(w / 2, 50, 50, 50);
}

function draw() {
    clear();
    background(fondo);

    updateEnguine();

    drawEnguine();
}

function drawEnguine() {
    obj.show();
}

function updateEnguine() {
    obj.update();
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        obj.dirX = -1;
        obj.xForce = 0;
        obj.keys.left = true;
        obj.keys.right = false;
    } else if (keyCode === RIGHT_ARROW) {
        obj.dirX = 1;
        obj.xForce = 0;
        obj.keys.left = false;
        obj.keys.right = true;
    } else if (keyCode === UP_ARROW) {
        if (obj.suelo) {
            obj.keys.top = true;
        }
    } else if (keyCode == DOWN_ARROW) {
        obj.keys.down = true;
    }
}

function keyReleased() {
    if (keyCode === LEFT_ARROW) {
        obj.keys.left = false;
    } else if (keyCode === RIGHT_ARROW) {
        obj.keys.right = false;
    }
    return false; // prevent any default behavior
}