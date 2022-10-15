const canvasSize = { x: 1920, y: 1080 };
var img;
var icon = {
  pos: { x: 0, y: 0 },
  scale: 1,
  vel: { x: 1, y: 1, scale: 3 },
}

imageTick = () => {
  icon.pos = {
    x: icon.pos.x + icon.vel.x * icon.vel.scale,
    y: icon.pos.y + icon.vel.y * icon.vel.scale
  }

  if (icon.pos.x < 0 || icon.pos.x + img.width * icon.scale > windowWidth) {
    icon.vel.x = -icon.vel.x;
  }
  if (icon.pos.y < 0 || icon.pos.y + img.height * icon.scale > windowHeight) {
    icon.vel.y = -icon.vel.y;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function preload() {
  img = loadImage("assets/dvd-logo.png", "DVD Logo");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  img.filter(INVERT);
}

function draw() {
  background(0);

  image(img, icon.pos.x, icon.pos.y, img.width * icon.scale, img.height * icon.scale);
  imageTick();
}