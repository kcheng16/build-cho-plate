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
var carbMax = level[currentLevel].carbMax;
var carbCount = 0;
var plate = document.getElementById("plate");

let li, img;
level[currentLevel].food.forEach(itemName => {
  li = document.createElement("li");
  li.innerText = itemName;
  li.setAttribute('draggable', true);
  li.setAttribute('class', 'draggable');
  
  img = document.createElement('img');
  
  if (Object.keys(food).includes(itemName)){
    img.src = food[itemName].img;
    li.appendChild(img);
  }
  foodBank.appendChild(li);

  });

  //drag foods============================================
  const draggables = document.querySelectorAll('.draggable');
  
  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  });
  //Drop onto plate======================================
  plate.addEventListener( 'dragover', (e) => {
    e.preventDefault();
    let draggable = document.querySelector('.dragging');
    plate.appendChild(draggable);
  });

  //Eat food================================================
  const eatButton = document.getElementById("eat-food");

  eatButton.addEventListener("click", function(){ 
    if (carbCount <= carbMax){
      currentLevel += 1;
      carbMax = level[currentLevel].carbMax;
      //need to add: empty the plate, reset nutr facts, render food bank
    }
  });
  
  //Clear plate/empty <img>: <li>=========================
  const clearPlate = document.getElementById("clear-plate");

  clearPlate.addEventListener("click", function (){
    plateUl = document.getElementById("plate-ul");
    plate.removeChild(plateUl);
  });

  //=======================================================
});
