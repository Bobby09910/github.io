// DOM String Init..

const heartItem = document.querySelectorAll(".heart__item");
const heart = document.querySelector(".heart");
const text = document.querySelector(".text");
const btnRect = document.querySelector(".btn-react");
const btnRound = document.querySelector(".btn-round");

let roundItem = 0;

// Arrow Function

const getRandom = (max, min = 0) =>
  Math.floor(Math.random() * (max - min) + min);

const setCurrentSelectedBtn = (e) => {
  if (e.target.className.includes("btn-selected")) return;
  btnRect.classList.toggle("btn-selected");
  btnRound.classList.toggle("btn-selected");
  roundItem = roundItem ? 0 : 50;
  heartBlust();
};

const getRandomAnimation = (index) => {
  let val_0 = getRandom(300, 80