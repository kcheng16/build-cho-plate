import Example from "./scripts/example";
import starch from "./scripts/starch";
import level from "./scripts/level";


document.addEventListener("DOMContentLoaded",() => {

console.log("Hello World");
const main = document.getElementById("main");
new Example(main);

//======================================
const foodBank = document.getElementById("food-bank");
// var currentLevel = 1

  level.level1.food.forEach(itemName => {
    let li = document.createElement("li");
    let img = document.createElement('img');
    li.innerText = itemName;
    foodBank.appendChild(li);

    console.log(img);
    if (Object.keys(starch).includes(itemName)){
      img.src = starch[itemName].img;
      console.log(starch[itemName].img);
      li.appendChild(img);
    }
  })
});
