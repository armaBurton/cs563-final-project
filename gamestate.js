//gamestate.js
const chooser = [];
const matches = [];
const gameArr = [];

export const gamestate = async (randomizedGameArr, innerDiv, square) => {
  randomizedGameArr.map((rga) => gameArr.push(rga));
  if (square) {
    if (chooser[0]?.innerDiv.id != innerDiv.id) {
      chooser.push({ innerDiv, square });
      toggleVisibility(innerDiv);
    }

    if (chooser.length === 2) {
      togglePointerEvents();
      console.log(chooser[0].square.dataset.name);
      console.log(chooser[1].square.dataset.name);

      await delay(1000);

      if (chooser[0].square.dataset.name === chooser[1].square.dataset.name) {
        handleMatch(chooser);
      }
      togglePointerEvents();
      toggleMatchPointers();
      chooser.forEach((c) => {
        if (!c.square.classList.contains("match")) toggleVisibility(c.innerDiv);
      });
      purgeArr(chooser);
    }
  }
};

const toggleMatchPointers = () => {
  matches.forEach((id) => {
    document.getElementById(id).style.pointerEvents = "none";
  });
};

const handleMatch = (chooser) => {
  chooser.forEach((c) => {
    c.square.classList.add("match");
    matches.push(c.square.id);
  });

  if (matches.length === 20) {
    winState();
  }
};

const togglePointerEvents = () => {
  console.log("Matches[]:", matches);

  for (let i = 0; i < gameArr.length; i++) {
    const id = `b${i}`;
    const tile = document.getElementById(id);

    if (tile?.style && !tile.classList.contains("match")) {
      tile.style.pointerEvents === "none"
        ? (tile.style.pointerEvents = "auto")
        : (tile.style.pointerEvents = "none");
    }
  }
};

export const toggleVisibility = (innerDiv) => {
  if (!innerDiv.classList.contains("match")) {
    innerDiv.style.opacity === "0"
      ? (innerDiv.style.opacity = "1")
      : (innerDiv.style.opacity = "0");
  } else {
    console.log("Match Found in Toggle Visibility");
  }
};

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const purgeArr = (arr) => {
  while (arr.length > 0) {
    arr.pop();
  }
};

const winState = () => {
  const winModal = document.getElementById("win-state");
  const newGame = document.getElementById("new-game");
  const quit = document.getElementById("quit");
  matches.length === 20
    ? (winModal.style.visibility = "visible")
    : (winModal.style.visibility = "hidden");

  newGame.addEventListener("click", () => {
    window.location.reload(true);
  });

  quit.addEventListener("click", () => {
    winModal.style.visibility = "hidden";
  });
};
