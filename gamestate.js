//gamestate.js
const chooser = [];
const matches = [];

export const gamestate = async (randomizedGameArr, innerDiv, square) => {
  if (square) {
    if (chooser[0]?.innerDiv.id != innerDiv.id) {
      chooser.push({ innerDiv, square });
      toggleVisibility(innerDiv, square);
    }

    if (chooser.length === 2) {
      //   console.log(chooser[0], chooser[1].innerDiv.id);

      await togglePointerEvents();

      //   console.log("Time Out");
      await delay(2000);
      //   console.log("Time In");

      if (chooser[0].square.dataset.name === chooser[1].square.dataset.name) {
        await handleMatch(chooser);
      }
      await togglePointerEvents();
      //   console.log(chooser[0].square.dataset.name);
      //   console.log(chooser[1].square.dataset.name);
      chooser.forEach((c) => toggleVisibility(c.innerDiv, c.square));
      purgeArr(chooser);
    }
  }
  //   console.log(randomizedGameArr);
};

const handleMatch = async (chooser) => {
  chooser.forEach(async (c) => {
    // console.log(c);
    await c.innerDiv.classList.add("match");
  });
};

const togglePointerEvents = async () => {
  //   const gridUnits = document.querySelectorAll(".grid-unit");
  //   gridUnits.forEach((el) => {
  //     if (!el.classList.contains("match")) {
  //       //   console.log(el.classList);
  //       //   console.log("No Match");
  //       const bit = window.getComputedStyle(el);
  //       console.log(bit)
  //       //   console.log(currentPointerEvents);
  //       currentPointerEvents === "none"
  //         ? (el.style.pointerEvents = "auto")
  //         : (el.style.pointerEvents = "none");
  //     }
  //   });
};

export const toggleVisibility = (innerDiv, square) => {
  //   console.log("innerDiv: ", innerDiv.classList);
  if (!innerDiv.classList.contains("match")) {
    innerDiv.style.opacity === "0"
      ? (innerDiv.style.opacity = "1")
      : (innerDiv.style.opacity = "0");
  }
  //   console.log("toggleVisibility: ", square.dataset.name);
};

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const purgeArr = (arr) => {
  while (arr.length > 0) {
    arr.pop();
  }
};
