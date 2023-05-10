let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 3000;
cnv.height = 3000;

let score1 = 0;
let score2 = 0;

let x1 = 100;
let y1 = 150;

let x2 = 2800;
let y2 = 150;

let cubespeed = 40;

let x3 = 1364;
let y3 = 2000;
let cube1move = false;

let x4 = 1364;
let y4 = 2000;
let cube2move = false;

let x5 = 1364;
let y5 = 2000;
let cube3move = false;

let x6 = 1364;
let y6 = 2000;
let cube4move = false;

let x7 = 1364;
let y7 = 2000;
let cube5move = false;

let x8 = 1364;
let y8 = 2000;
let cube6move = false;

let x9 = 1364;
let y9 = 2000;
let cube7move = false;

let x10 = 1364;
let y10 = 2000;
let cube8move = false;

let speed = 100;
let speed2 = 100;
spacepressed = false;

let player1health = 100;
let player2health = 100;

requestAnimationFrame(loop);
function loop() {
  if (spacepressed) {
    x3 += cubespeed;
    y3 -= cubespeed;
  }
  if (x3 > 3600) {
    x3 = -350;
    y3 = Math.random() * 3400 + 350;
  }

  if (spacepressed) {
    x4 -= cubespeed;
    y4 += cubespeed;
  }
  if (x4 < -350) {
    x4 = 3750;
    y4 = Math.random() * 3400 + 350;
  }

  if (spacepressed) {
    x5 += cubespeed;
    y5 += cubespeed;
  }
  if (x5 > 3600) {
    x5 = -350;
    y5 = Math.random() * 3400 + 350;
  }

  if (spacepressed) {
    x6 -= cubespeed;
    y6 -= cubespeed;
  }
  if (x6 < -350) {
    x6 = 3750;
    y6 = Math.random() * 3400 + 350;
  }

  if (spacepressed) {
    y7 -= cubespeed;
  }
  if (y7 < -350) {
    y7 = 3600;
    x7 = Math.random() * 3200 + 350;
  }

  if (spacepressed) {
    y8 += cubespeed;
  }
  if (y8 > 3600) {
    y8 = -350;
    x8 = Math.random() * 3200 + 350;
  }

  if (spacepressed) {
    x9 += cubespeed;
  }
  if (x9 > 3600) {
    x9 = -350;
    y9 = Math.random() * 3200 + 350;
  }

  if (spacepressed) {
    x10 -= cubespeed;
  }
  if (x10 < -350) {
    x10 = 3600;
    y10 = Math.random() * 3200 + 350;
  }

  if (x1 > 3350 || y1 > 3350 || x1 < -100 || y1 < -100) {
    x1 = Math.random() * 3100 + 100;
    y1 = Math.random() * 3100 + 100;
  }
  if (x2 > 3350 || y2 > 3350 || x2 < -100 || y2 < -100) {
    x2 = Math.random() * 3100 + 100;
    y2 = Math.random() * 3100 + 100;
  }

  document.getElementById("player1-health").innerHTML = player1health;
  document.getElementById("player2-health").innerHTML = player2health;

  requestAnimationFrame(loop);
}
requestAnimationFrame(draw);
function draw() {
  // DRAW CANVAS
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height); // Background

  ctx.fillStyle = "blue";
  ctx.fillRect(x1, y1, 100, 100); // Rectangle

  ctx.fillStyle = "red";
  ctx.fillRect(x2, y2, 100, 100);

  ctx.fillStyle = "black";
  ctx.fillRect(x3, y3, 350, 350);
  ctx.fillRect(x4, y4, 350, 350);
  ctx.fillRect(x5, y5, 350, 350);
  ctx.fillRect(x6, y6, 350, 350);
  ctx.fillRect(x7, y7, 350, 350);
  ctx.fillRect(x8, y8, 350, 350);
  ctx.fillRect(x9, y9, 350, 350);
  ctx.fillRect(x10, y10, 350, 350);

  if (x1 + 100 >= x3 && x1 <= x3 + 350 && y1 + 100 >= y3 && y1 <= y3 + 350) {
    player1health = player1health - 1;
  }

  if (x1 + 100 >= x4 && x1 <= x4 + 350 && y1 + 100 >= y4 && y1 <= y4 + 350) {
    player1health = player1health - 1;
  }

  if (x1 + 100 >= x5 && x1 <= x5 + 350 && y1 + 100 >= y5 && y1 <= y5 + 350) {
    player1health = player1health - 1;
  }

  if (x1 + 100 >= x6 && x1 <= x6 + 350 && y1 + 100 >= y6 && y1 <= y6 + 350) {
    player1health = player1health - 1;
  }

  if (x1 + 100 >= x7 && x1 <= x7 + 350 && y1 + 100 >= y7 && y1 <= y7 + 350) {
    player1health = player1health - 1;
  }

  if (x1 + 100 >= x8 && x1 <= x8 + 350 && y1 + 100 >= y8 && y1 <= y8 + 350) {
    player1health = player1health - 1;
  }

  if (x1 + 100 >= x9 && x1 <= x9 + 350 && y1 + 100 >= y9 && y1 <= y9 + 350) {
    player1health = player1health - 1;
  }

  if (
    x1 + 100 >= x10 &&
    x1 <= x10 + 350 &&
    y1 + 100 >= y10 &&
    y1 <= y10 + 350
  ) {
    player1health = player1health - 1;
  }

  if (x2 + 100 >= x3 && x2 <= x3 + 350 && y2 + 100 >= y3 && y2 <= y3 + 350) {
    player2health = player2health - 1;
  }

  if (x2 + 100 >= x4 && x2 <= x4 + 350 && y2 + 100 >= y4 && y2 <= y4 + 350) {
    player2health = player2health - 1;
  }

  if (x2 + 100 >= x5 && x2 <= x5 + 350 && y2 + 100 >= y5 && y2 <= y5 + 350) {
    player2health = player2health - 1;
  }

  if (x2 + 100 >= x6 && x2 <= x6 + 350 && y2 + 100 >= y6 && y2 <= y6 + 350) {
    player2health = player2health - 1;
  }

  if (x2 + 100 >= x7 && x2 <= x7 + 350 && y2 + 100 >= y7 && y2 <= y7 + 350) {
    player2health = player2health - 1;
  }

  if (x2 + 100 >= x8 && x2 <= x8 + 350 && y2 + 100 >= y8 && y2 <= y8 + 350) {
    player2health = player2health - 1;
  }

  if (x2 + 100 >= x9 && x2 <= x9 + 350 && y2 + 100 >= y9 && y2 <= y9 + 350) {
    player2health = player2health - 1;
  }

  if (
    x2 + 100 >= x10 &&
    x2 <= x10 + 350 &&
    y2 + 100 >= y10 &&
    y2 <= y10 + 350
  ) {
    player2health = player2health - 1;
  }

  if (player1health <= -2) {
    ctx.fillStyle = "white";
    ctx.fillRect(x1, y1, 100, 100);
    speed = 0;
    speed2 = 0;
    x1 = 3300;
    y1 = 3300;
    player1health = 0;
    cubespeed = 0;
  }

  if (player2health <= -2) {
    ctx.fillStyle = "white";
    ctx.fillRect(x2, y2, 100, 100);
    speed = 0;
    speed2 = 0;
    x2 = 3300;
    y2 = 3300;
    player2health = 0;
    cubespeed = 0;
  }

  if (player1health === 0) {
    score2 = score2 + 1;
    document.getElementById("score2-in").innerHTML = score2;
    player1health = -1;
  }

  if (player1health === -1) {
    document.getElementById("player1-health").innerHTML = "Game Over!;";
  }

  if (player2health === 0) {
    score1 = score1 + 1;
    document.getElementById("score1-in").innerHTML = score1;
    player2health = -1;
  }

  if (player2health === -1) {
    document.getElementById("player2-health").innerHTML = "Game Over!;";
  }

  // REQUEST ANIMATION FRAME
  requestAnimationFrame(draw);
}

// Event Listeners & Handlers
document.addEventListener("keydown", keyDown);
document.addEventListener("keydown", keyDown2);
document.addEventListener("keydown", keyHandler);
document.addEventListener("keydown", keydownHandler);

function keyDown(event) {
  if (event.keyCode === 87) {
    y1 -= speed;
  } else if (event.keyCode === 65) {
    x1 -= speed;
  } else if (event.keyCode === 83) {
    y1 += speed;
  } else if (event.keyCode === 68) {
    x1 += speed;
  }
}

function keyDown2(event) {
  if (event.keyCode === 38) {
    y2 -= speed2;
  } else if (event.keyCode === 37) {
    x2 -= speed2;
  } else if (event.keyCode === 40) {
    y2 += speed2;
  } else if (event.keyCode === 39) {
    x2 += speed2;
  }
}

function keydownHandler(event) {
  if (event.code == "Space") {
    spacepressed = true;
  }
}

function keyHandler(event) {
  if (event.code == "Space") {
    cube1move = !cube1move;
  }
}

function keydownHandler(event) {
  if (event.code == "Space") {
    spacepressed = true;
  }
}

function keyHandler(event) {
  if (event.code == "Space") {
    cube2move = !cube2move;
  }
}

function keydownHandler(event) {
  if (event.code == "Space") {
    spacepressed = true;
  }
}

function keyHandler(event) {
  if (event.code == "Space") {
    cube3move = !cube3move;
  }
}

function keydownHandler(event) {
  if (event.code == "Space") {
    spacepressed = true;
  }
}

function keyHandler(event) {
  if (event.code == "Space") {
    cube4move = !cube4move;
  }
}

function keyHandler(event) {
  if (event.code == "Space") {
    cube5move = !cube5move;
  }
}

function keydownHandler(event) {
  if (event.code == "Space") {
    spacepressed = true;
  }
}

function keyHandler(event) {
  if (event.code == "Space") {
    cube6move = !cube6move;
  }
}

function keydownHandler(event) {
  if (event.code == "Space") {
    spacepressed = true;
  }
}

function keyHandler(event) {
  if (event.code == "Space") {
    cube7move = !cube7move;
  }
}

function keydownHandler(event) {
  if (event.code == "Space") {
    spacepressed = true;
  }
}

function keyHandler(event) {
  if (event.code == "Space") {
    cube8move = !cube8move;
  }
}

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  x1 = 100;
  y1 = 150;

  x2 = 2800;
  y2 = 150;

  cubespeed = 40;

  x3 = 1364;
  y3 = 2000;
  cube1move = false;

  x4 = 1364;
  y4 = 2000;
  cube2move = false;

  x5 = 1364;
  y5 = 2000;
  cube3move = false;

  x6 = 1364;
  y6 = 2000;
  cube4move = false;

  x7 = 1364;
  y7 = 2000;
  cube5move = false;

  x8 = 1364;
  y8 = 2000;
  cube6move = false;

  x9 = 1364;
  y9 = 2000;
  cube7move = false;

  x10 = 1364;
  y10 = 2000;
  cube8move = false;

  speed = 100;
  speed2 = 100;
  spacepressed = false;

  player1health = 100;
  player2health = 100;
}
