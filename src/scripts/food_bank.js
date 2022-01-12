import level from "./level";
import food from "./food";

//populating food bank==========================
export const populateFoodBank = (currentLevel) => {
  const foodBank = document.getElementById("food-bank");
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
}


//drag foods============================================
export const makeFoodDraggable = () => {
  const draggables = document.querySelectorAll('.draggable');
  
  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  })
}

  //Drop onto plate or food bank======================================
export const makeFoodDroppable = () => {
  let foodBank = document.getElementById("food-bank");

  foodBank.addEventListener('dragover', e => {
    e.preventDefault();
    let draggingEle = document.querySelector('.dragging');
    foodBank.appendChild(draggingEle);
  });
  
  let plateUl = document.getElementById('plate-ul');

  plateUl.addEventListener('dragover', e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  })
}

