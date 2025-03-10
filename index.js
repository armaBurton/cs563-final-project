import dndMonsters from "./data.js";

const randoNumbo = () => {
    return Math.floor(Math.random() * dndMonsters.length)
}

console.log(dndMonsters[randoNumbo()])