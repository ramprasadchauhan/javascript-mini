let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 300);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);

  //   console.log(randIdx);
  //   console.log(randBtn);
  //   console.log(randColor);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function chechAns(idx) {
  console.log("curr level : ", level);

  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over!: Your Score was <b> ${level} </b> <br> press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 400);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  console.log(btn);

  userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);

  chechAns(userSeq.length - 1);
}

let allBtn = document.querySelectorAll(".btn");

for (btn of allBtn) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
