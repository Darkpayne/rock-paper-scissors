// selection
var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
// product
var p1 = document.getElementById("p1");
var AI = document.getElementById("ai");
var vs = document.getElementById("vs");
// score keep
var P1score = document.getElementById("p1score");
var P2score = document.getElementById("p2score");
// limit
var limit = document.getElementById("limit");
// input
var input = document.getElementById("input");
// reset
var newGame = document.getElementById("reset");
// games
var game1 = document.getElementById("game1");
var game2 = document.getElementById("game2");
// varaibles
var c;
var score1 = 0;
var score2 = 0;
var winningScore = 10;
var gameOver = false;

function reset() {
  score1 = 0;
  score2 = 0;
  P1score.textContent = 0;
  P2score.textContent = 0;
  gameOver = false;
  p1.innerHTML = `<img src="./asset/0.jpg" class="img-fluid round" alt="" />`;
  AI.innerHTML = `<img src="./asset/0.jpg" class="img-fluid round" alt="" />`;
  vs.innerHTML = `<h1>VS</h1>`;
}

newGame.addEventListener("click", function () {
  reset();
});

input.addEventListener("change", function () {
  limit.textContent = input.value;
  winningScore = input.value;
  reset();
});

function random() {
  c = Math.floor(Math.random() * 3) + 1;
  AI.innerHTML = `<img src="./asset/${c}.jpg" class="img-fluid round" alt="" />`;
}

function win() {
  if (score1 == winningScore || score2 == winningScore) {
    gameOver = true;
  } else {
    random();
  }
}

function rock() {
  win();

  if (!gameOver) {
    if (1 === c) {
      vs.innerHTML = `<h1>DRAW &#128564;</h1>`;
    } else if (3 === c) {
      vs.innerHTML = `<h1>WIN <div>&#128526;</div></h1>`;
      score1++;
      P1score.textContent = score1;
    } else {
      vs.innerHTML = `<h1>LOSE <div>&#129313;</div></h1>`;
      score2++;
      P2score.textContent = score2;
    }
  }
}

function paper() {
  win();
  if (!gameOver) {
    if (2 === c) {
      vs.innerHTML = `<h1>DRAW &#128564;</h1>`;
    } else if (1 === c) {
      vs.innerHTML = `<h1>WIN <div>&#128526;</div></h1>`;
      score1++;
      P1score.textContent = score1;
    } else {
      vs.innerHTML = `<h1>LOSE <div>&#129313;</div></h1>`;
      score2++;
      P2score.textContent = score2;
    }
  }
}
function scissors() {
  win();
  if (!gameOver) {
    if (3 === c) {
      vs.innerHTML = `<h1>DRAW &#128564;</h1>`;
    } else if (2 === c) {
      vs.innerHTML = `<h1>WIN <div>&#128526;</div></h1>`;
      score1++;
      P1score.textContent = score1;
    } else {
      vs.innerHTML = `<h1>LOSE <div>&#129313;</div></h1>`;
      score2++;
      P2score.textContent = score2;
    }
  }
}

s1.addEventListener("click", function (e) {
  rock();
  if (!gameOver) {
    p1.innerHTML = ` <img src="./asset/1.jpg" class="img-fluid round" alt="" />`;
  }
});
s2.addEventListener("click", function (e) {
  paper();
  if (!gameOver) {
    p1.innerHTML = ` <img src="./asset/2.jpg" class="img-fluid round" alt="" />`;
  }
});
s3.addEventListener("click", function (e) {
  scissors();
  if (!gameOver) {
    p1.innerHTML = ` <img src="./asset/3.jpg" class="img-fluid round" alt="" />`;
  }
});
