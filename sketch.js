var img;

let iconURL = "https://seeklogo.com/images/D/DVD-logo-6E8849CAC0-seeklogo.com.png"
let iconScale = 1;

let iconPosition = { x: 0, y: 0 };
let canvasSize = { x: 1920, y: 1080 };
let velocity = { x: 1, y: 1 }

let velocityScale = 2;

let iconRadius = 10;

function setup() {
  createCanvas(canvasSize.x, canvasSize.y);
  img = createImg(iconURL, "DVD Logo");
  img.hide();
}

function draw() {
  background(100);

  image(img, iconPosition.x, iconPosition.y, img.width * iconScale, img.height * iconScale);

  iconPosition = {
    x: iconPosition.x + velocity.x * velocityScale,
    y: iconPosition.y + velocity.y * velocityScale
  }

  if (iconPosition.x < 0 || iconPosition.x + img.width * iconScale > canvasSize.x) {
    velocity.x = -velocity.x;
  }
  if (iconPosition.y < 0 || iconPosition.y + img.height * iconScale > canvasSize.y) {
    velocity.y = -velocity.y;
  }
}