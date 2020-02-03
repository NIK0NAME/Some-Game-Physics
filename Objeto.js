class Objeto {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = "#3498db";
        this.xForce = 0;
        this.yForce = 0;
        this.dirX = 0;
        this.dirY = 1;
        this.aceleration = 0.2;
        this.particulases = [];
        this.keys = {
            left: false,
            right: false,
            top: false,
            down: false
        }
        this.suelo = false;

        this.jump = false;
        this.jumpCounter = 0;
    }

    show() {
        noStroke();
        fill(this.color);
        rect(this.x, this.y, this.w, this.h);

        this.particulases.forEach((elem, i) => {
            elem.show();
        });

    }

    jump() {

    }

    update() {
        this.calcularFuerzas();

        this.x += this.xForce * this.dirX * this.aceleration;
        this.y += this.yForce * this.dirY;

        this.colisiones();
    }

    actualizarParticulas() {
        this.particulases.forEach((elem, i) => {

        });
    }

    colisiones() {
        this.suelo = false;
        if (this.y + this.h > 500) {
            this.suelo = true;
            this.y = 500 - this.h;
        }
    }

    calcularFuerzas() {
        if (this.xForce > 0) {
            if (this.suelo) {
                this.xForce -= 2.0;
            } else {
                this.xForce -= 0.5;
            }
        }

        if (!this.suelo) {
            this.yForce += 0.5;
        }

        if (this.suelo && this.keys.top) {
            this.yForce = 5;
            obj.dirY = -1;
            this.keys.top = false;
            this.jump = true;
        }

        if (this.keys.down) {
            this.keys.down = false;
            this.x += 50 * this.dirX;
        }

        if (this.jump) {
            this.jumpCounter++;
            if (this.jumpCounter > 18) {
                this.jumpCounter = 0;
                this.dirY = 1;
                this.jump = false;
                this.yForce = 0.4;
            }
        }

        if ((this.keys.left || this.keys.right) && this.xForce < 30) {
            /*if (this.suelo) {
                this.xForce += 2.30;
            } else {
                this.xForce += 4.30;
            }*/
            if (this.suelo) {
                this.xForce += 3.30;
            } else {
                this.xForce += 1.30;
            }
        }

        if (this.xForce <= 0) {
            this.xForce = 0;
            this.particulases = [];
        }
    }

}