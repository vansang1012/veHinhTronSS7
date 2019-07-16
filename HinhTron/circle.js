let canvas, ctx, _circle;
let Circle = function (x, y, radius) {
    this.x = x;
    this.y = y;
    this.speedX=20;
    this.speedY=20;
    this.radius = radius;
    this.getRandomColor=function () {
        let red=this.getRandomHex();
        let green=this.getRandomHex();
        let blue=this.getRandomHex();
        return "rgb("+ red + ',' + green + ',' + blue + ")";
    }
    this.getRandomHex=function () {
        return Math.floor(Math.random()*255);
    }

    this.draw = function () {

        let radius = Math.round(Math.random() * 100);
        let x=Math.random()*canvas.width;
        let y=Math.random()*canvas.height;
        let color=this.getRandomColor();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle=color;
        ctx.fill();
    }
    this.kiemTraBien=function () {
        if(this.x+this.radius>=canvas.width||this.x-this.radius<=0){
            this.speedX-=this.speedX;
        }if(this.y+this.radius>=canvas.height||this.y-this.radius<=0){
            this.speedY-=this.speedY;
        }
    }
    this.move=function () {
        this.x+=this.speedX;
        this.y+=this.speedY;
    }
}
