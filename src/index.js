import food from "./scripts/food";
import level from "./scripts/level";
import {setBackgroundMusic} from "./scripts/background_music";
import {setModal} from "./scripts/modal";

document.addEventListener("DOMContentLoaded",() => {
  setBackgroundMusic()
  setModal()

  //========================================================
  const foodBank = document.getElementById("food-bank");
  var currentLevel = 1;
  var carbMax = level[currentLevel].carbMax;
  var carbCount = 0;
  var kcal = 0;

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
      img.title = `${itemName}`;
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

  //appending food-element to plate================
  plateUl.addEventListener('drop', e => {
    let draggingEle2 = document.querySelector('.dragging');
    plateUl.appendChild(draggingEle2);
    
    if (plateUl.children.length === 5){
      alert("That's a lot of food! Do you need a second plate?");

      let plate2 = document.getElementById('plate2');
      plate2.style = 'display: true';
    }

    if (plateUl.children.length === 9){
      clearPlateFunction()
      alert("Hmm...that answer doesn't seem correct. Let's try again!")
    }
    
    let foodId = draggingEle2.firstChild.id;

    //=====adding carb to counter
    let carbCtDiv = document.getElementsByClassName('carb-count');
    carbCount += food[foodId].carb;
    carbCtDiv[0].innerText = carbCount;

    if (parseInt(carbCtDiv[0].innerText) > carbMax){
      alert('Careful! The carb count is higher than the maximum for this meal.');
    }

    //=====adding kcal
    let kcalDiv = document.getElementsByClassName('kcal');
    kcal += food[foodId].kcal;
    kcalDiv[0].innerText = kcal;

    //======moving meal-goal
    let mealGoal = document.getElementById('meal-goal');

    mealGoal.style.position = "absolute";
    mealGoal.style.left = 76+'%';
    mealGoal.style.top = 20+'%';
    mealGoal.style.width = 22+'vw';
    mealGoal.style.height = 21+'vh';

    //==========adding info to table
    let facts = document.getElementById('facts');
    let newRow = document.createElement('tr');
    let newFood = document.createElement('td');
    let newServing = document.createElement('td');
    let newCalories = document.createElement('td');
    let newCarbs = document.createElement('td');

    newFood.innerText = foodId;
    newServing.innerText = food[foodId].size;
    newCalories.innerText = food[foodId].kcal;
    newCarbs.innerText = food[foodId].carb;

    let newData = [newFood, newServing, newCalories, newCarbs];

    newData.forEach(item => newRow.appendChild(item));

    facts.appendChild(newRow);

  });

  //Eat food================================================
  const eatButton = document.getElementById("eat-food");

  eatButton.addEventListener("click", function(){ 
    let correctAnswer = false

    switch (currentLevel){
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        for (let i = 0; i < plateUl.children.length; i++) {
          correctAnswer = level[currentLevel].answer.includes(plateUl.children[i].children[0].id) && level[currentLevel].answer.length === plateUl.children.length
        }
        correctAnswer ? goToNextLevel() : (clearPlateFunction(), alert("You're so close! Try again"))
        break;

      case 7:
      case 8:
        if (carbCount === carbMax) return goToNextLevel();
        break;

      case 9:
        if (plateUl.children.length === 7 && carbCount === carbMax) return goToNextLevel();
        break;

      default:
        clearPlateFunction()
        return alert("Not quite right. Try again!")
    }
  });
  
  function goToNextLevel(){
    currentLevel += 1;
    carbMax = level[currentLevel].carbMax;

    //============= empty the plate
    clearPlateFunction();

    //==============clear food bank
    for (let i = foodBank.children.length - 1; i >= 0; i--) {
      foodBank.children[i].remove();
    }
    //===========set next level 'Carb Max'
    carbMaxDiv[0].innerText = carbMax;

    //=======change carb tip
    let carbtipimg = document.getElementById('carbtip');

    carbtipimg.src = `images/carbtips/carbct-tip-${currentLevel}.png`;
    
    //=========remove 2nd plate
    let plate2 = document.getElementById('plate2');
    plate2.style = 'display: none';

    //=========display new meal-goal
    let mealGoal = document.getElementById('meal-goal');

    mealGoal.src = `images/meal-goals/meal-goal-${currentLevel}.png`;
    mealGoal.style.top = 38+'%';
    mealGoal.style.left = 35+'%';
    mealGoal.style.width = 30+'vw';
    mealGoal.style.height = 30+'vh';
    
    //==============render food bank
    level[currentLevel].food.forEach(itemName => {
      li = document.createElement("li");
      li.setAttribute('draggable', true);
      li.setAttribute('class', 'draggable');
      
      img = document.createElement('img');
      
      if (Object.keys(food).includes(itemName)){
        img.id = `${itemName}`;
        img.src = food[itemName].img;
        img.title = `${itemName}`;

        li.appendChild(img);
      }
      foodBank.appendChild(li);

      //=========eat food sound (check if audio is on)
      const music = document.getElementById("music")
      let sound = new Audio("images/sounds/chomp.wav");
      
      if (!music.paused){
        sound.volume = 0.3
        sound.play();
      }
      
    });

    //add draggable===========================

    foodBank.addEventListener('dragover', e => {
      e.preventDefault();
      let draggingEle = document.querySelector('.dragging');
      foodBank.appendChild(draggingEle);
    });

    const draggables = document.querySelectorAll('.draggable');

    draggables.forEach(draggable => {
      draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
      });
  
      draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
      });
    });
  }


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

    //=======clear nutrition table
    let nutFact = document.getElementById('facts');
    for (let i = nutFact.children.length - 1; i >= 1; i--) {
      nutFact.children[i].remove()
    }

    //=========remove 2nd plate
    let plate2 = document.getElementById('plate2');
    plate2.style = 'display: none';
  };

  clearPlate.addEventListener("click", clearPlateFunction);

  //Carb Max setting========================================
  const carbMaxDiv = document.getElementsByClassName('carb-max');
  carbMaxDiv[0].innerText = carbMax;
  
});
