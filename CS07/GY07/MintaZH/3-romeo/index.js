// ========= Selected elements =========
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

// =============== Utilities =================
function isCollision(box1, box2) {
  return !(
    box2.y + box2.height < box1.y ||
    box1.x + box1.width < box2.x ||
    box1.y + box1.height < box2.y ||
    box2.x + box2.width < box1.x
  );
}

function random(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

// ========= Application state =========
const arrow = {
  fx: 10,
  fy: 290,
  tx: 30,
  ty: 350,
};
const ball = {
  x: 10,
  y: 290,
  width: 20,
  height: 20,
  vx: 0,    // px/s
  vy: 0,    // px/s
  ay: 0,  // px/s2
  img: new Image(),
};
const windows = [
  { x: 479, y: 122, width: 15, height: 30 },
  { x: 494, y: 240, width: 18, height: 42 },
  { x: 562, y: 240, width: 18, height: 42 },
];
const bush = {
  x: 250,
  y: 200,
  width: 100,
  height: 200,
  img: new Image(),
};
let lovedWindow = 0;
let gameState = 0; // 0-start, 1-moving, 2-hit, 3-missed

// ========= Time-based animation (from the lecture slide) =========
let lastFrameTime = performance.now();

function next(currentTime = performance.now()) {
  const dt = (currentTime - lastFrameTime) / 1000; // seconds
  lastFrameTime = currentTime;

  update(dt); // Update current state
  render(); // Rerender the frame

  requestAnimationFrame(next);
}

function update(dt) {

}

function render() {
  // Background
  ctx.clearRect(0, 0, canvas.width, canvas.height);

}

// ========= Start the loop =========
bush.img.src = "bush.png";
ball.img.src = "ball.png";
next(); 
