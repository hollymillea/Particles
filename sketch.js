let imgURL = './src/image.png';

const PARTICLE_SIZE = 10;
const RESOLUTION = 10;
let img;
let particles = [];


function preload() {
    img = loadImage(imgURL);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    createParticles();
}

function draw() {
    background(40);
    // image(img, 0, 0, width, height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function createParticles() {
    for (let i = 0; i < width; i+=RESOLUTION) {
        for (let j = 0; j < height; j+=RESOLUTION) {

            const [x,y] = getImgCoord(i, j, img);
            const colour = img.get(x, y);

            const particle = new Particle(i + (PARTICLE_SIZE/2), j + (PARTICLE_SIZE/2), colour);
            particles.push(particle);
        }
    }
}

function getImgCoord(x, y, img) {
    // Start with x, y on our screen

    // Multiply a coordinate by ratio to go from coordinate on screen to coordinate on image
    const ratio = img.width / width;

    return [x*ratio, 400+y*ratio];
}

class Particle {
    constructor(x, y, colour) {
        this.x = x;
        this.y = y;
        this.colour = colour;
    }

    update() {

    }

    draw() {
        fill(this.colour);
        noStroke();
        ellipse(this.x, this.y, PARTICLE_SIZE);
    }
}