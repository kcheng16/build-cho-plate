import food from "./scripts/food";
import level from "./scripts/level";

document.addEventListener("DOMContentLoaded",() => {

//========================================================
const foodBank = document.getElementById("food-bank");
var currentLevel = 1;
var carbMax = level[currentLevel].carbMax;
var carbCount = 0;
var kcal = 0;
var plate = document.getElementById("plate");

//populating food bank==========================
let li, img;
level[currentLevel].food.forEach(itemName => {
  li = document.createElement("li");
  li.setAttribute('draggable', true);
  li.setAttribute('class', 'draggable');
  
  img = document.createElement('img');
  
  if (Object.keys(food).includes(itemName)){
    img.id = `${itemName}`;
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

  //Drop onto plate or food bank======================================
  foodBank.addEventListener('dragover', e => {
    e.preventDefault();
    let draggingEle = document.querySelector('.dragging');
    foodBank.appendChild(draggingEle);
  });
  
  let plateUl = document.getElementById('plate-ul');

  plateUl.addEventListener('dragover', e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  });

  //appending element to plate
  plateUl.addEventListener('drop', e => {
    let draggingEle2 = document.querySelector('.dragging');
    plateUl.appendChild(draggingEle2);
    
    let foodId = draggingEle2.firstChild.id;

    //=====adding carb to counter
    let carbCtDiv = document.getElementsByClassName('carb-count');
    carbCount += food[foodId].carb;
    carbCtDiv[0].innerText = carbCount;

    //=====adding kcal
    let kcalDiv = document.getElementsByClassName('kcal');
    kcal += food[foodId].kcal;
    kcalDiv[0].innerText = kcal;
  });

  //Eat food================================================
  const eatButton = document.getElementById("eat-food");

  eatButton.addEventListener("click", function(){ 
    if (carbCount <= carbMax){
      currentLevel += 1;
      carbMax = level[currentLevel].carbMax;

      //empty the plate===================== 
      clearPlateFunction();

      //clear food bank=====================
      for (let i = foodBank.children.length - 1; i >= 0; i--) {
        foodBank.children[i].remove();
      }
      //set next level 'Carb Max'===================
      carbMaxDiv[0].innerText = carbMax;

      //render food bank===================
      level[currentLevel].food.forEach(itemName => {
        li = document.createElement("li");
        li.setAttribute('draggable', true);
        li.setAttribute('class', 'draggable');
        
        img = document.createElement('img');
        
        if (Object.keys(food).includes(itemName)){
          img.id = `${itemName}`;
          img.src = food[itemName].img;
          li.appendChild(img);
        }
        foodBank.appendChild(li);
        });
      //add draggable===========================
        foodBank.addEventListener('dragover', e => {
        e.preventDefault();
        let draggingEle = document.querySelector('.dragging');
        foodBank.appendChild(draggingEle);
      });
      
      let plateUl = document.getElementById('plate-ul');

      plateUl.addEventListener('dragover', e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      });

      //appending element to plate
      plateUl.addEventListener('drop', e => {
        let draggingEle2 = document.querySelector('.dragging');
        plateUl.appendChild(draggingEle2);
        
        let foodId = draggingEle2.firstChild.id;

        //=====adding carb to counter
        let carbCtDiv = document.getElementsByClassName('carb-count');
        carbCount += food[foodId].carb;
        carbCtDiv[0].innerText = carbCount;

        //=====adding kcal
        let kcalDiv = document.getElementsByClassName('kcal');
        kcal += food[foodId].kcal;
        kcalDiv[0].innerText = kcal;
      });
      //end append + drag=====
    }
  });
  
  //Clear plate/empty <img>: <li>=========================
  const clearPlate = document.getElementById("clear-plate");

  function clearPlateFunction(){
    for (let i = plateUl.children.length - 1; i >= 0; i--) {
      let removed = plateUl.children[i]
      plateUl.children[i].remove();
      foodBank.appendChild(removed);
    }
    carbCount = 0;
    kcal = 0;

    let kcalDiv = document.getElementsByClassName('kcal');
    kcalDiv[0].innerText = kcal;

    let carbCtDiv = document.getElementsByClassName('carb-count');
    carbCtDiv[0].innerText = carbCount;

  };

  clearPlate.addEventListener("click", clearPlateFunction);

  //Carb Max========================================
  const carbMaxDiv = document.getElementsByClassName('carb-max');
  carbMaxDiv[0].innerText = carbMax;
  
  //
});
