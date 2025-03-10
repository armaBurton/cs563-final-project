// import dndMonsters from "./data.js"; // oringal monster list, had some monsters without images and that wouldn't work for my memory game.
import filteredMonsterList from "./filteredMonsterList.js";

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
  console.log(gameArr);
};

const listRandomizor = () => {
  while (gameArr.length > 0) {
    const index = randoNumbo(gameArr.length);
    randomizedGameArr.push(gameArr[index]);
    gameArr.splice(index, 1);
  }
  console.log(randomizedGameArr);
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
    // square.setAttribute("dataset", `${randomizedGameArr[i].name}`);
    square.dataset.name = `${randomizedGameArr[i].name}`;
    square.addEventListener("click", () => toggleVisibility(innerDiv, square));
  }
};

const toggleVisibility = (innerDiv, square) => {
  console.log("click");
  innerDiv.style.opacity === "0"
    ? (innerDiv.style.opacity = "1")
    : (innerDiv.style.opacity = "0");

  console.log(square.dataset.name);
};

createGameList();
listRandomizor();
listRandomizor();
listRandomizor();
loadImages();

// After filtering the orginal list I queried the server again and then added the monster
// image urls to the monster list to make linking images later a bit quicker, I could have
// done this at the time of filtering, but I hadn't thought about it yet

// const fetchImageURL = async () => {
//   for (const monster of filteredMonsterList) {
//     const url = `https://www.dnd5eapi.co${monster.url}`;
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
//       const json = await response.json();
//       monster.image = json.image;
//     } catch (e) {
//       console.error(e.message);
//     }
//   }
//   console.log(filteredMonsterList);
// };

// fetchImageURL();

// I discovered that many of the monsters in the API did not have images so I created this function to
// check with the API. Any monster that came back and didn't have a key called 'image' gets removed
// from the original list. I then printed the new list to the console and saved it as 'filterdMonsterList.js'

// const removeMonstersWithoutImages = async () => {
//   //   const monster = dndMonsters;
//   for (let i = 0; i < monsterData.length; i++) {
//     const monster = monsterData[i];
//     const url = `https://www.dnd5eapi.co${monster.url}`;
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
//       const json = await response.json();
//       console.log(json);
//       if (!json.hasOwnProperty("image")) {
//         console.log(`${monsterData[i].name} has no image...removing from list`);
//         monsterData.splice(i, 1);
//         i--;
//       }
//       console.log(json.image);
//     } catch (e) {
//       console.error(e.message);
//     }
//   }
//   console.log(monsterData);
// };
// removeMonstersWithoutImages();
