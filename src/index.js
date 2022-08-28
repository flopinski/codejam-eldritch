import "./styles/main.scss";
import blueCards from "./assets/MythicCards/blue/index.js";
import brownCards from "./assets/MythicCards/brown/index.js";
import greenCards from "./assets/MythicCards/green/index.js";
import ancientsData from "./data/ancients";
import blueCardsData from "./data/mythicCards/blue";
import greenCardsData from "./data/mythicCards/green";
import brownCardsData from "./data/mythicCards/brown";
const _ = require("lodash");

let blueVeryEasyArr = [];
let blueEasyArr = [];
let blueHardArr = [];
let blueVeryHardArr = [];
for (const variable in blueCardsData) {
  if (
    blueCardsData[variable].difficulty === "normal" ||
    blueCardsData[variable].difficulty === "easy"
  ) {
    blueEasyArr.push(Object.values(blueCards)[variable]);
  }
  if (
    blueCardsData[variable].difficulty === "normal" ||
    blueCardsData[variable].difficulty === "hard"
  ) {
    blueHardArr.push(Object.values(blueCards)[variable]);
  }
  if (blueCardsData[variable].difficulty === "easy") {
    blueVeryEasyArr.push(Object.values(blueCards)[variable]);
  }
  if (blueCardsData[variable].difficulty === "hard") {
    blueVeryHardArr.push(Object.values(blueCards)[variable]);
  }
}

let greenVeryEasyArr = [];
let greenEasyArr = [];
let greenHardArr = [];
let greenVeryHardArr = [];
for (const variable in greenCardsData) {
  if (
    greenCardsData[variable].difficulty === "normal" ||
    greenCardsData[variable].difficulty === "easy"
  ) {
    greenEasyArr.push(Object.values(greenCards)[variable]);
  }
  if (
    greenCardsData[variable].difficulty === "normal" ||
    greenCardsData[variable].difficulty === "hard"
  ) {
    greenHardArr.push(Object.values(greenCards)[variable]);
  }
  if (greenCardsData[variable].difficulty === "easy") {
    greenVeryEasyArr.push(Object.values(greenCards)[variable]);
  }
  if (greenCardsData[variable].difficulty === "hard") {
    greenVeryHardArr.push(Object.values(greenCards)[variable]);
  }
}

let brownVeryEasyArr = [];
let brownEasyArr = [];
let brownHardArr = [];
let brownVeryHardArr = [];
for (const variable in brownCardsData) {
  if (
    brownCardsData[variable].difficulty === "normal" ||
    brownCardsData[variable].difficulty === "easy"
  ) {
    brownEasyArr.push(Object.values(brownCards)[variable]);
  }
  if (
    brownCardsData[variable].difficulty === "normal" ||
    brownCardsData[variable].difficulty === "hard"
  ) {
    brownHardArr.push(Object.values(brownCards)[variable]);
  }
  if (brownCardsData[variable].difficulty === "easy") {
    brownVeryEasyArr.push(Object.values(brownCards)[variable]);
  }
  if (brownCardsData[variable].difficulty === "hard") {
    brownVeryHardArr.push(Object.values(brownCards)[variable]);
  }
}

const green1 = document.querySelector(".green1");
const green2 = document.querySelector(".green2");
const green3 = document.querySelector(".green3");
const blue1 = document.querySelector(".blue1");
const blue2 = document.querySelector(".blue2");
const blue3 = document.querySelector(".blue3");
const brown1 = document.querySelector(".brown1");
const brown2 = document.querySelector(".brown2");
const brown3 = document.querySelector(".brown3");
const firstStage = document.querySelector(".first-stage");
const secondStage = document.querySelector(".second-stage");
const thirdStage = document.querySelector(".third-stage");

let firstStageArr = [];
let secondStageArr = [];
let thirdStageArr = [];

const azathoth = document.querySelector(".azathoth");
const cthulthu = document.querySelector(".cthulthu");
const iogSothoth = document.querySelector(".iogSothoth");
const shubNiggurath = document.querySelector(".shubNiggurath");

const veryEasy = document.querySelector(".very-easy");
const easy = document.querySelector(".easy");
const normal = document.querySelector(".normal");
const hard = document.querySelector(".hard");
const veryHard = document.querySelector(".very-hard");

const difficulties = document.querySelectorAll(".difficulty");
const ancientCards = document.querySelectorAll(".ancient-card");
const deck = document.querySelector(".deck");
const currentStage = document.querySelector(".current-stage");
const lastCard = document.querySelector(".last-card");
const dots = document.querySelectorAll(".dot");

difficulties.forEach((difficulty) => {
  difficulty.addEventListener("click", function () {
    difficulties.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

ancientCards.forEach((ancientCard) => {
  ancientCard.addEventListener("click", function () {
    ancientCards.forEach((card) => card.classList.remove("active"));
    this.classList.add("active");
  });
});

const difficultyContainer = document.querySelector(".difficulty-container");
const shuffleButton = document.querySelector(".shuffle-button");
function showLevels() {
  difficultyContainer.style.display = "flex";
  currentStage.style.display = "none";
  deck.style.display = "none";
  lastCard.style.display = "none";
}
function showShuffleButton() {
  shuffleButton.style.display = "block";
  currentStage.style.display = "none";
  deck.style.display = "none";
  lastCard.style.display = "none";
  shuffleButton.style.display = "block";
  deck.style.backgroundImage = "url('mythicCardBackground.png')";
}

function showDeckContainer() {
  shuffleButton.style.display = "none";
  currentStage.style.display = "flex";
  deck.style.display = "block";
  lastCard.style.display = "block";
  lastCard.style.backgroundImage = "none";
}

ancientCards.forEach((element) => {
  element.addEventListener("click", showLevels);
});

difficulties.forEach((difficulty) => {
  difficulty.addEventListener("click", showShuffleButton);
});

shuffleButton.addEventListener("click", showDeckContainer);

const azathothColors = [1, 2, 1, 2, 3, 1, 2, 4, 0];
const cthulhuColors = [0, 2, 2, 1, 3, 0, 3, 4, 0];
const iogSothothColors = [0, 2, 1, 2, 3, 1, 3, 4, 0];
const shubNiggurathColors = [1, 2, 1, 3, 2, 1, 2, 4, 0];

function addAzathoth() {
  dots.forEach((dot) => {
    dot.textContent = "";
  });
  dots.forEach((dot, index) => {
    dot.textContent = azathothColors[index];
  });
}

function addCthulhu() {
  dots.forEach((dot) => {
    dot.textContent = "";
  });
  dots.forEach((dot, index) => {
    dot.textContent = cthulhuColors[index];
  });
}

function addIogSothoth() {
  dots.forEach((dot) => {
    dot.textContent = "";
  });
  dots.forEach((dot, index) => {
    dot.textContent = iogSothothColors[index];
  });
}

function addShubNiggurath() {
  dots.forEach((dot) => {
    dot.textContent = "";
  });
  dots.forEach((dot, index) => {
    dot.textContent = shubNiggurathColors[index];
  });
}

// после вёрстки и лисенеров

function pickVeryEasyLevel() {
  if (azathoth.classList.contains("active")) {
    let blueCardsArr = _.shuffle(blueVeryEasyArr);
    let brownCardsArr = _.shuffle(brownVeryEasyArr);
    let greenCardsArr = _.shuffle(greenVeryEasyArr);
    while (blueCardsArr.length < 2) {
      for (const variable in blueCardsData) {
        if (blueCardsData[variable].difficulty === "normal") {
          blueCardsArr.push(Object.values(blueCards)[variable]);
        }
      }
    }
    while (greenCardsArr.length < 5) {
      for (const variable in greenCardsData) {
        if (greenCardsData[variable].difficulty === "normal") {
          greenCardsArr.push(Object.values(greenCards)[variable]);
        }
      }
    }
    while (brownCardsArr.length < 9) {
      for (const variable in brownCardsData) {
        if (brownCardsData[variable].difficulty === "normal") {
          brownCardsArr.push(Object.values(brownCards)[variable]);
        }
      }
    }
    blueCardsArr = _.shuffle(blueCardsArr);
    brownCardsArr = _.shuffle(brownCardsArr);
    greenCardsArr = _.shuffle(greenCardsArr);
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 1));
    firstStageArr.push(brownCardsArr.splice(0, 2));
    firstStageArr.push(greenCardsArr.splice(0, 1));

    secondStageArr.push(blueCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 3));
    secondStageArr.push(greenCardsArr.splice(0, 2));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 2));
  }
  if (cthulthu.classList.contains("active")) {
    let blueCardsArr = _.shuffle(blueVeryEasyArr);
    let brownCardsArr = _.shuffle(brownVeryEasyArr);
    let greenCardsArr = _.shuffle(greenVeryEasyArr);
    while (blueCardsArr.length < 2) {
      for (const variable in blueCardsData) {
        if (blueCardsData[variable].difficulty === "normal") {
          blueCardsArr.push(Object.values(blueCards)[variable]);
        }
      }
    }
    while (greenCardsArr.length < 4) {
      for (const variable in greenCardsData) {
        if (greenCardsData[variable].difficulty === "normal") {
          greenCardsArr.push(Object.values(greenCards)[variable]);
        }
      }
    }
    while (brownCardsArr.length < 9) {
      for (const variable in brownCardsData) {
        if (brownCardsData[variable].difficulty === "normal") {
          brownCardsArr.push(Object.values(brownCards)[variable]);
        }
      }
    }
    blueCardsArr = _.shuffle(blueCardsArr);
    brownCardsArr = _.shuffle(brownCardsArr);
    greenCardsArr = _.shuffle(greenCardsArr);
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 2));
    firstStageArr.push(brownCardsArr.splice(0, 2));

    secondStageArr.push(greenCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 3));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 3));
  }

  if (iogSothoth.classList.contains("active")) {
    let blueCardsArr = _.shuffle(blueVeryEasyArr);
    let brownCardsArr = _.shuffle(brownVeryEasyArr);
    let greenCardsArr = _.shuffle(greenVeryEasyArr);
    while (blueCardsArr.length < 2) {
      for (const variable in blueCardsData) {
        if (blueCardsData[variable].difficulty === "normal") {
          blueCardsArr.push(Object.values(blueCards)[variable]);
        }
      }
    }
    while (greenCardsArr.length < 5) {
      for (const variable in greenCardsData) {
        if (greenCardsData[variable].difficulty === "normal") {
          greenCardsArr.push(Object.values(greenCards)[variable]);
        }
      }
    }
    while (brownCardsArr.length < 9) {
      for (const variable in brownCardsData) {
        if (brownCardsData[variable].difficulty === "normal") {
          brownCardsArr.push(Object.values(brownCards)[variable]);
        }
      }
    }
    blueCardsArr = _.shuffle(blueCardsArr);
    brownCardsArr = _.shuffle(brownCardsArr);
    greenCardsArr = _.shuffle(greenCardsArr);
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 1));
    firstStageArr.push(brownCardsArr.splice(0, 2));

    secondStageArr.push(blueCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 3));
    secondStageArr.push(greenCardsArr.splice(0, 2));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 3));
  }

  if (shubNiggurath.classList.contains("active")) {
    let blueCardsArr = _.shuffle(blueVeryEasyArr);
    let brownCardsArr = _.shuffle(brownVeryEasyArr);
    let greenCardsArr = _.shuffle(greenVeryEasyArr);
    while (blueCardsArr.length < 2) {
      for (const variable in blueCardsData) {
        if (blueCardsData[variable].difficulty === "normal") {
          blueCardsArr.push(Object.values(blueCards)[variable]);
        }
      }
    }
    while (greenCardsArr.length < 6) {
      for (const variable in greenCardsData) {
        if (greenCardsData[variable].difficulty === "normal") {
          greenCardsArr.push(Object.values(greenCards)[variable]);
        }
      }
    }
    while (brownCardsArr.length < 8) {
      for (const variable in brownCardsData) {
        if (brownCardsData[variable].difficulty === "normal") {
          brownCardsArr.push(Object.values(brownCards)[variable]);
        }
      }
    }
    blueCardsArr = _.shuffle(blueCardsArr);
    brownCardsArr = _.shuffle(brownCardsArr);
    greenCardsArr = _.shuffle(greenCardsArr);
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 1));
    firstStageArr.push(brownCardsArr.splice(0, 2));
    firstStageArr.push(greenCardsArr.splice(0, 1));

    secondStageArr.push(blueCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 2));
    secondStageArr.push(greenCardsArr.splice(0, 3));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 2));
  }
  firstStageArr = firstStageArr.flat();
  firstStageArr = _.shuffle(firstStageArr);

  secondStageArr = secondStageArr.flat();
  secondStageArr = _.shuffle(secondStageArr);

  thirdStageArr = thirdStageArr.flat();
  thirdStageArr = _.shuffle(thirdStageArr);
  console.log(firstStageArr);
  console.log(secondStageArr);
  console.log(thirdStageArr);
}

function pickEasyLevel() {
  if (azathoth.classList.contains("active")) {
    let blueCardsArr = _.shuffle(blueEasyArr);
    let brownCardsArr = _.shuffle(brownEasyArr);
    let greenCardsArr = _.shuffle(greenEasyArr);
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 1));
    firstStageArr.push(brownCardsArr.splice(0, 2));
    firstStageArr.push(greenCardsArr.splice(0, 1));

    secondStageArr.push(blueCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 3));
    secondStageArr.push(greenCardsArr.splice(0, 2));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 2));
  }
  if (cthulthu.classList.contains("active")) {
    let blueCardsArr = _.shuffle(blueEasyArr);
    let brownCardsArr = _.shuffle(brownEasyArr);
    let greenCardsArr = _.shuffle(greenEasyArr);
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 2));
    firstStageArr.push(brownCardsArr.splice(0, 2));

    secondStageArr.push(greenCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 3));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 3));
  }

  if (iogSothoth.classList.contains("active")) {
    let blueCardsArr = _.shuffle(blueEasyArr);
    let brownCardsArr = _.shuffle(brownEasyArr);
    let greenCardsArr = _.shuffle(greenEasyArr);
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 1));
    firstStageArr.push(brownCardsArr.splice(0, 2));

    secondStageArr.push(blueCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 3));
    secondStageArr.push(greenCardsArr.splice(0, 2));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 3));
  }

  if (shubNiggurath.classList.contains("active")) {
    let blueCardsArr = _.shuffle(blueEasyArr);
    let brownCardsArr = _.shuffle(brownEasyArr);
    let greenCardsArr = _.shuffle(greenEasyArr);
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 1));
    firstStageArr.push(brownCardsArr.splice(0, 2));
    firstStageArr.push(greenCardsArr.splice(0, 1));

    secondStageArr.push(blueCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 2));
    secondStageArr.push(greenCardsArr.splice(0, 3));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 2));
  }
  firstStageArr = firstStageArr.flat();
  firstStageArr = _.shuffle(firstStageArr);

  secondStageArr = secondStageArr.flat();
  secondStageArr = _.shuffle(secondStageArr);

  thirdStageArr = thirdStageArr.flat();
  thirdStageArr = _.shuffle(thirdStageArr);
  console.log(firstStageArr);
  console.log(secondStageArr);
  console.log(thirdStageArr);
}

function pickNormalLevel() {
  if (azathoth.classList.contains("active")) {
    let blueCardsArr = _.shuffle(Object.values(blueCards));
    let brownCardsArr = _.shuffle(Object.values(brownCards));
    let greenCardsArr = _.shuffle(Object.values(greenCards));
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 1));
    firstStageArr.push(brownCardsArr.splice(0, 2));
    firstStageArr.push(greenCardsArr.splice(0, 1));

    secondStageArr.push(blueCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 3));
    secondStageArr.push(greenCardsArr.splice(0, 2));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 2));
  }
  if (cthulthu.classList.contains("active")) {
    let blueCardsArr = _.shuffle(Object.values(blueCards));
    let brownCardsArr = _.shuffle(Object.values(brownCards));
    let greenCardsArr = _.shuffle(Object.values(greenCards));
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 2));
    firstStageArr.push(brownCardsArr.splice(0, 2));

    secondStageArr.push(greenCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 3));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 3));
  }

  if (iogSothoth.classList.contains("active")) {
    let blueCardsArr = _.shuffle(Object.values(blueCards));
    let brownCardsArr = _.shuffle(Object.values(brownCards));
    let greenCardsArr = _.shuffle(Object.values(greenCards));
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 1));
    firstStageArr.push(brownCardsArr.splice(0, 2));

    secondStageArr.push(blueCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 3));
    secondStageArr.push(greenCardsArr.splice(0, 2));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 3));
  }

  if (shubNiggurath.classList.contains("active")) {
    let blueCardsArr = _.shuffle(Object.values(blueCards));
    let brownCardsArr = _.shuffle(Object.values(brownCards));
    let greenCardsArr = _.shuffle(Object.values(greenCards));
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 1));
    firstStageArr.push(brownCardsArr.splice(0, 2));
    firstStageArr.push(greenCardsArr.splice(0, 1));

    secondStageArr.push(blueCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 2));
    secondStageArr.push(greenCardsArr.splice(0, 3));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 2));
  }
  firstStageArr = firstStageArr.flat();
  firstStageArr = _.shuffle(firstStageArr);

  secondStageArr = secondStageArr.flat();
  secondStageArr = _.shuffle(secondStageArr);

  thirdStageArr = thirdStageArr.flat();
  thirdStageArr = _.shuffle(thirdStageArr);
  console.log(firstStageArr);
  console.log(secondStageArr);
  console.log(thirdStageArr);
}

function pickHardLevel() {
  if (azathoth.classList.contains("active")) {
    let blueCardsArr = _.shuffle(blueHardArr);
    let brownCardsArr = _.shuffle(brownHardArr);
    let greenCardsArr = _.shuffle(greenHardArr);
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 1));
    firstStageArr.push(brownCardsArr.splice(0, 2));
    firstStageArr.push(greenCardsArr.splice(0, 1));

    secondStageArr.push(blueCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 3));
    secondStageArr.push(greenCardsArr.splice(0, 2));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 2));
  }
  if (cthulthu.classList.contains("active")) {
    let blueCardsArr = _.shuffle(blueHardArr);
    let brownCardsArr = _.shuffle(brownHardArr);
    let greenCardsArr = _.shuffle(greenHardArr);
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 2));
    firstStageArr.push(brownCardsArr.splice(0, 2));

    secondStageArr.push(greenCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 3));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 3));
  }

  if (iogSothoth.classList.contains("active")) {
    let blueCardsArr = _.shuffle(blueHardArr);
    let brownCardsArr = _.shuffle(brownHardArr);
    let greenCardsArr = _.shuffle(greenHardArr);
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 1));
    firstStageArr.push(brownCardsArr.splice(0, 2));

    secondStageArr.push(blueCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 3));
    secondStageArr.push(greenCardsArr.splice(0, 2));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 3));
  }

  if (shubNiggurath.classList.contains("active")) {
    let blueCardsArr = _.shuffle(blueHardArr);
    let brownCardsArr = _.shuffle(brownHardArr);
    let greenCardsArr = _.shuffle(greenHardArr);
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 1));
    firstStageArr.push(brownCardsArr.splice(0, 2));
    firstStageArr.push(greenCardsArr.splice(0, 1));

    secondStageArr.push(blueCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 2));
    secondStageArr.push(greenCardsArr.splice(0, 3));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 2));
  }
  firstStageArr = firstStageArr.flat();
  firstStageArr = _.shuffle(firstStageArr);

  secondStageArr = secondStageArr.flat();
  secondStageArr = _.shuffle(secondStageArr);

  thirdStageArr = thirdStageArr.flat();
  thirdStageArr = _.shuffle(thirdStageArr);
  console.log(firstStageArr);
  console.log(secondStageArr);
  console.log(thirdStageArr);
}
function pickVeryHardLevel() {
  if (azathoth.classList.contains("active")) {
    let blueCardsArr = _.shuffle(blueVeryHardArr);
    let brownCardsArr = _.shuffle(brownVeryHardArr);
    let greenCardsArr = _.shuffle(greenVeryHardArr);
    while (blueCardsArr.length < 2) {
      for (const variable in blueCardsData) {
        if (blueCardsData[variable].difficulty === "normal") {
          blueCardsArr.push(Object.values(blueCards)[variable]);
        }
      }
    }
    while (greenCardsArr.length < 5) {
      for (const variable in greenCardsData) {
        if (greenCardsData[variable].difficulty === "normal") {
          greenCardsArr.push(Object.values(greenCards)[variable]);
        }
      }
    }
    while (brownCardsArr.length < 9) {
      for (const variable in brownCardsData) {
        if (brownCardsData[variable].difficulty === "normal") {
          brownCardsArr.push(Object.values(brownCards)[variable]);
        }
      }
    }
    blueCardsArr = _.shuffle(blueCardsArr);
    brownCardsArr = _.shuffle(brownCardsArr);
    greenCardsArr = _.shuffle(greenCardsArr);
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 1));
    firstStageArr.push(brownCardsArr.splice(0, 2));
    firstStageArr.push(greenCardsArr.splice(0, 1));

    secondStageArr.push(blueCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 3));
    secondStageArr.push(greenCardsArr.splice(0, 2));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 2));
  }
  if (cthulthu.classList.contains("active")) {
    let blueCardsArr = _.shuffle(blueVeryHardArr);
    let brownCardsArr = _.shuffle(brownVeryHardArr);
    let greenCardsArr = _.shuffle(greenVeryHardArr);
    while (blueCardsArr.length < 2) {
      for (const variable in blueCardsData) {
        if (blueCardsData[variable].difficulty === "normal") {
          blueCardsArr.push(Object.values(blueCards)[variable]);
        }
      }
    }
    while (greenCardsArr.length < 4) {
      for (const variable in greenCardsData) {
        if (greenCardsData[variable].difficulty === "normal") {
          greenCardsArr.push(Object.values(greenCards)[variable]);
        }
      }
    }
    while (brownCardsArr.length < 9) {
      for (const variable in brownCardsData) {
        if (brownCardsData[variable].difficulty === "normal") {
          brownCardsArr.push(Object.values(brownCards)[variable]);
        }
      }
    }
    blueCardsArr = _.shuffle(blueCardsArr);
    brownCardsArr = _.shuffle(brownCardsArr);
    greenCardsArr = _.shuffle(greenCardsArr);
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 2));
    firstStageArr.push(brownCardsArr.splice(0, 2));

    secondStageArr.push(greenCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 3));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 3));
  }

  if (iogSothoth.classList.contains("active")) {
    let blueCardsArr = _.shuffle(blueVeryHardArr);
    let brownCardsArr = _.shuffle(brownVeryHardArr);
    let greenCardsArr = _.shuffle(greenVeryHardArr);
    while (blueCardsArr.length < 2) {
      for (const variable in blueCardsData) {
        if (blueCardsData[variable].difficulty === "normal") {
          blueCardsArr.push(Object.values(blueCards)[variable]);
        }
      }
    }
    while (greenCardsArr.length < 5) {
      for (const variable in greenCardsData) {
        if (greenCardsData[variable].difficulty === "normal") {
          greenCardsArr.push(Object.values(greenCards)[variable]);
        }
      }
    }
    while (brownCardsArr.length < 9) {
      for (const variable in brownCardsData) {
        if (brownCardsData[variable].difficulty === "normal") {
          brownCardsArr.push(Object.values(brownCards)[variable]);
        }
      }
    }
    blueCardsArr = _.shuffle(blueCardsArr);
    brownCardsArr = _.shuffle(brownCardsArr);
    greenCardsArr = _.shuffle(greenCardsArr);
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 1));
    firstStageArr.push(brownCardsArr.splice(0, 2));

    secondStageArr.push(blueCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 3));
    secondStageArr.push(greenCardsArr.splice(0, 2));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 3));
  }

  if (shubNiggurath.classList.contains("active")) {
    let blueCardsArr = _.shuffle(blueVeryHardArr);
    let brownCardsArr = _.shuffle(brownVeryHardArr);
    let greenCardsArr = _.shuffle(greenVeryHardArr);
    while (blueCardsArr.length < 2) {
      for (const variable in blueCardsData) {
        if (blueCardsData[variable].difficulty === "normal") {
          blueCardsArr.push(Object.values(blueCards)[variable]);
        }
      }
    }
    while (greenCardsArr.length < 6) {
      for (const variable in greenCardsData) {
        if (greenCardsData[variable].difficulty === "normal") {
          greenCardsArr.push(Object.values(greenCards)[variable]);
        }
      }
    }
    while (brownCardsArr.length < 8) {
      for (const variable in brownCardsData) {
        if (brownCardsData[variable].difficulty === "normal") {
          brownCardsArr.push(Object.values(brownCards)[variable]);
        }
      }
    }
    blueCardsArr = _.shuffle(blueCardsArr);
    brownCardsArr = _.shuffle(brownCardsArr);
    greenCardsArr = _.shuffle(greenCardsArr);
    firstStageArr = [];
    secondStageArr = [];
    thirdStageArr = [];
    firstStageArr.push(blueCardsArr.splice(0, 1));
    firstStageArr.push(brownCardsArr.splice(0, 2));
    firstStageArr.push(greenCardsArr.splice(0, 1));

    secondStageArr.push(blueCardsArr.splice(0, 1));
    secondStageArr.push(brownCardsArr.splice(0, 2));
    secondStageArr.push(greenCardsArr.splice(0, 3));

    thirdStageArr.push(brownCardsArr.splice(0, 4));
    thirdStageArr.push(greenCardsArr.splice(0, 2));
  }
  firstStageArr = firstStageArr.flat();
  firstStageArr = _.shuffle(firstStageArr);

  secondStageArr = secondStageArr.flat();
  secondStageArr = _.shuffle(secondStageArr);

  thirdStageArr = thirdStageArr.flat();
  thirdStageArr = _.shuffle(thirdStageArr);
  console.log(firstStageArr);
  console.log(secondStageArr);
  console.log(thirdStageArr);
}

function showUpLastCard() {
  console.log(lastCard.style.backgroundImage);
  if (thirdStageArr.length !== 0) {
    if (firstStageArr.length > 0) {
      lastCard.style.backgroundImage = `url(${
        firstStageArr[firstStageArr.length - 1]
      })`;
      firstStageArr.pop();
    } else if (firstStageArr.length === 0 && secondStageArr.length > 0) {
      lastCard.style.backgroundImage = `url(${
        secondStageArr[secondStageArr.length - 1]
      })`;
      secondStageArr.pop();
    } else if (
      firstStageArr.length === 0 &&
      secondStageArr.length === 0 &&
      thirdStageArr.length > 0
    ) {
      lastCard.style.backgroundImage = `url(${
        thirdStageArr[thirdStageArr.length - 1]
      })`;
      thirdStageArr.pop();
    }
  }
  if (thirdStageArr.length === 0) {
    deck.style.backgroundImage = "none";
  }
}

function reduceDotValue() {
  if (
    lastCard.style.backgroundImage.includes("brown") &&
    brown1.textContent > 0
  ) {
    brown1.textContent = brown1.textContent - 1;
  } else if (
    lastCard.style.backgroundImage.includes("brown") &&
    brown1.textContent <= 0 &&
    brown2.textContent > 0
  ) {
    brown2.textContent = brown2.textContent - 1;
  } else if (
    lastCard.style.backgroundImage.includes("brown") &&
    brown1.textContent <= 0 &&
    brown2.textContent <= 0 &&
    brown3.textContent > 0
  ) {
    brown3.textContent = brown3.textContent - 1;
  } else if (
    lastCard.style.backgroundImage.includes("blue") &&
    blue1.textContent > 0
  ) {
    blue1.textContent = blue1.textContent - 1;
  } else if (
    lastCard.style.backgroundImage.includes("blue") &&
    blue1.textContent <= 0 &&
    blue2.textContent > 0
  ) {
    blue2.textContent = blue2.textContent - 1;
  } else if (
    lastCard.style.backgroundImage.includes("blue") &&
    blue1.textContent <= 0 &&
    blue2.textContent <= 0 &&
    blue3.textContent > 0
  ) {
    blue3.textContent = blue3.textContent - 1;
  } else if (
    lastCard.style.backgroundImage.includes("green") &&
    green1.textContent > 0
  ) {
    green1.textContent = green1.textContent - 1;
  } else if (
    lastCard.style.backgroundImage.includes("green") &&
    green1.textContent <= 0 &&
    green2.textContent > 0
  ) {
    green2.textContent = green2.textContent - 1;
  } else if (
    lastCard.style.backgroundImage.includes("green") &&
    green1.textContent <= 0 &&
    green2.textContent <= 0 &&
    green3.textContent > 0
  ) {
    green3.textContent = green3.textContent - 1;
  }
}

function highlightEmptyStages() {
  if (
    brown1.textContent <= 0 &&
    blue1.textContent <= 0 &&
    green1.textContent <= 0
  ) {
    firstStage.classList.add("done");
  }
  if (
    brown2.textContent <= 0 &&
    blue2.textContent <= 0 &&
    green2.textContent <= 0
  ) {
    secondStage.classList.add("done");
  }
  if (
    brown3.textContent <= 0 &&
    blue3.textContent <= 0 &&
    green3.textContent <= 0
  ) {
    thirdStage.classList.add("done");
  }
}

deck.addEventListener("click", showUpLastCard);
deck.addEventListener("click", reduceDotValue);
deck.addEventListener("click", highlightEmptyStages);

veryEasy.addEventListener("click", pickVeryEasyLevel);
easy.addEventListener("click", pickEasyLevel);
normal.addEventListener("click", pickNormalLevel);
hard.addEventListener("click", pickHardLevel);
veryHard.addEventListener("click", pickVeryHardLevel);

azathoth.addEventListener("click", addAzathoth);
cthulthu.addEventListener("click", addCthulhu);
iogSothoth.addEventListener("click", addIogSothoth);
shubNiggurath.addEventListener("click", addShubNiggurath);
