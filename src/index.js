import Example from "./scripts/example";
import food from "./scripts/food";
import level from "./scripts/level";


document.addEventListener("DOMContentLoaded",() => {

// console.log("Hello World");
const main = document.getElementById("main");
new Example(main);

//========================================================
const foodBank = document.getElementById("food-bank");
var currentLevel = 1;

  level[currentLevel].food.forEach(itemName => {
    let li = document.createElement("li");
    let img = document.createElement('img');
    li.innerText = itemName;
    foodBank.appendChild(li);

    if (Object.keys(food).includes(itemName)){
      img.src = food[itemName].img;
      li.appendChild(img);
    }
  })

  //Eat food===================
  const eatButton = document.getElementById("eat-food")
  eatButton.addEventListener("click", function(){ 
    currentLevel += 1
  });
  
  //
});
