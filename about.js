const canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");
const totalflowers = 108;
const flowerArray = [];
const flowerImage = new Image();
flowerImage.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tenstickers.in%2Fstickers%2Fred-hibiscus-flower-kit-flower-wall-sticker-A27294&psig=AOvVaw0D9B7uBiyPwUv-hToJmU4-&ust=1719487630744000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCPD34eSU-YYDFQAAAAAdAAAAABAE"
flowerImage.addEventListener("load", () => {
    for (let i = 0; i < totalFlowers; i++) {
        flowerArray.push(new flower());
    }
    render();
});

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    flowerArray.forEach(flower => flower.animate());
    window.requestAnimationFrame(render());
}
window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});
class Flower {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = (Math.random() * canvas.height * 2) - canvas.height;
        this.w = 25 + Math.random() * 15;
        this.h = 20 + Math.random() * 10;
        this.opacity = this.w / 40;
        this.flip = Math.random();
        this.xSpeed = 1.5 + Math.random() * 2; 
        this.ySpeed = 1 + Math.random();
        this.flipSpeed = Math.random() * 0.03;
    }
    draw() {
        if (this.y > canvas.height || this.x > canvas.width) {
            this.x = -flowerImage.width;
            this.y = (Math.random() * canvas.height * 2) - canvas.height;
            this.xSpeed = 1.5 + Math.random() * 2;
            this.ySpeed = 1 + Math.random;
            this.flip = Math.random();
        }
    }
    ctx.globalAlpha() = this.opacity;
    ctx.drawImage(flowerImage, this.x, this.y,
        this.w * (0.6 + (Math.abs(Math.cos(this.flip)) / 3)),
        this.h * (0.8 + (Math.abs(Math.sin(this.flip)) / 5))
    );

}
animate(){
    this.w += this.xSpeed;
    this.y += this.ySpeed;
    this.flip += this.flipSpeed;
    this.draw();
}
