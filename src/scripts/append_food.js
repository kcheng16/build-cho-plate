//appending food-element to plate================
export const makeFoodAppendable = () => {
  let plateUl = document.getElementById('plate-ul');
  
  plateUl.addEventListener('drop', e => {
    let draggingEle2 = document.querySelector('.dragging');
    plateUl.appendChild(draggingEle2);
  
    if (plateUl.children.length > 4){
      alert("There's too much food! Do you need a second plate?");
  
      let plate2 = document.getElementById('plate2');
      plate2.style = 'display: true';
    }
    
    let foodId = draggingEle2.firstChild.id;
  
    addCarbToCounter()
    addtoKcal()
    
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
  
  })}
  
//=====adding carb to counter
const addCarbToCounter = () => {
  let carbMax = level[currentLevel].carbMax;
  let carbCount = 0;
  
  let carbCtDiv = document.getElementsByClassName('carb-count');
  carbCount += food[foodId].carb;
  carbCtDiv[0].innerText = carbCount;
  
  if (parseInt(carbCtDiv[0].innerText) > carbMax){
    alert('Careful! The carb count is higher than the maximum for this meal.');
  }
}

//=====adding kcal
const addtoKcal = () => {
  let kcal = 0;
  let kcalDiv = document.getElementsByClassName('kcal');
  kcal += food[foodId].kcal;
  kcalDiv[0].innerText = kcal;
}

