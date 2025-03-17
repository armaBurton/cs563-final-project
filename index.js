// oringal monster list, had some monsters without images and that wouldn't work for my memory game.
import filteredMonsterList from "./filteredMonsterList.js";
import { gamestate } from "./gamestate.js";

const randoNumbo = (size) => {
  return Math.floor(Math.random() * size);
};

const gameArr = [];
const randomizedGameArr = [];

const createGameList = () => {
  for (let i = 0; i < 10; i++) {
    const monster = filteredMonsterList[randoNumbo(filteredMonsterList.length)];
    if (gameArr.includes(monster)) {
      i--;
    } else {
      gameArr.push(monster);
      gameArr.push(monster);
    }
  }
};

const listRandomizor = async (randomizeMe) => {
  const tempArr = [];

  while (randomizeMe.length > 0) {
    const index = randoNumbo(randomizeMe.length);
    tempArr.push(randomizeMe[index]);
    randomizeMe.splice(index, 1);
  }

  // purge randomizeGameArr
  while (randomizedGameArr > 0) {
    randomizedGameArr.pop();
  }

  // repopulate randomizeGameArr
  tempArr.map((t) => randomizedGameArr.push(t));
};

const loadImages = () => {
  for (let i = 0; i < randomizedGameArr.length; i++) {
    const square = document.getElementById(`b${i + 1}`);
    const innerDiv = document.getElementById(`p${i + 1}`);
    innerDiv.style.opacity = "1";
    square.style.backgroundSize = "cover";
    square.style.backgroundPosition = "center";
    square.style.backgroundRepeat = "none";
    square.style.backgroundImage = `url(
        'https://www.dnd5eapi.co${randomizedGameArr[i].image}'
        )`;
    square.dataset.name = `${randomizedGameArr[i].name}`;
    square.addEventListener("click", () =>
      gamestate(randomizedGameArr, innerDiv, square)
    );
  }
};

createGameList();
await listRandomizor(gameArr);
await listRandomizor(randomizedGameArr);
await listRandomizor(randomizedGameArr);
loadImages();
