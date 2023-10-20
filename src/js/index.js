const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.screen.width;
canvas.height = window.screen.height;

// context.fillStyle = "red";
// context.fillRect(0, 0, canvas.width, canvas.height);

class Sprite {
  constructor({ position, image }) {
    this.position = position;
    this.image = image;
  }
  draw() {
    context.drawImage(this.image, this.position.x, this.position.y);
  }
}

const image = new Image();
image.src = "./src/img/map.png";

const playerImage = new Image();
playerImage.src = "./src/img/playerDown.png";

const backGround = new Sprite({ position: { x: 50, y: -250 }, image: image });

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

function animation() {
  window.requestAnimationFrame(animation);
  backGround.draw();
  context.drawImage(
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
  );
  if (keys.w.pressed) backGround.position.y += 3;

  if (keys.s.pressed) backGround.position.y -= 3;

  if (keys.a.pressed) backGround.position.x += 3;

  if (keys.d.pressed) backGround.position.x -= 3;
}
animation();

window.addEventListener("keydown", (e) => {
  console.log(e.key)
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      console.log("ww");
      break;
    case "a":
      keys.a.pressed = true;
      break;
    case "s":
      keys.s.pressed = true;
      break;
    case "d":
      keys.d.pressed = true;
      break;
  }
});
window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
  }
});
