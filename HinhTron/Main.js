_circle = new Circle();
setInterval("start()", 3000);

function start() {
    canvas = document.getElementById("myCanVas");
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 10; i++) {
        _circle.draw();
    }
    _circle.move();
    _circle.kiemTraBien();
}
