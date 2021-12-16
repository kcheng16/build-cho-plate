[Build-CHO-Plate Live Link](https://kcheng16.github.io/cho-plate-project/)

# Background:
'Build CHO-Plate!' is a simple interactive game where users are able to interact with to build a healthy meal plate exploring carbohydrate counting for diabetics. 

Users will be given a plate, and a bank of selected foods, a carbohydrate counter, and carbohydrate count limit. The user will select from the bank of foods and add it onto the plate. This event which will alter the carbohydrate counter according to the selected foods carbohydrate count. Users will continue to build their plate as they desire trying not to exceed the carbohydrate count limit. Once the user submits their plate with the carbohydrate counter under the count limit, the nutrition facts would be displayed about the plate. Additional levels will reveal a differnt food bank and different carbohydrtae count limit. 

# Functionality & MVP:

In 'CHO-Plate', users will be able to:
-Select food from the food bank to add onto their plate.
-Reveal food name and nutrition facts on the selected food item.
-Reveal nutrition facts about their created food plate.
-Count the amount of carbohydrates on their food plate.
-Start over with a new plate and reset their plate's carbohydrate count.

In addition, this project will include:
-Instructions on how to play the game.
-Tips on carb-counting.
-Dictionary of simple food items and their respective carb-count.
-README.md

### Wireframes:
![wireframe](https://user-images.githubusercontent.com/88124383/146305765-faa00fab-0bac-4049-b918-cf456a7d5607.jpg)

# Technologies:
-Javascript: Code and manipulate DOM
-HTML: structure the webpage
-CSS: style the page
-Webpack: bundle and transpile JavaScript code
-npm: manage project dependencies

# Implementation Timeline:
Day 1: Set-up project and webpack. Begin adding information to the database. Create Food object containing food keys and their respective values. Build a levels array containing level object with respective values (foods, choMax, etc).

Day 2: Implement underlying game-play logic/event listeners ensuring buttons are working correctly. Make sure data is being rendered correctly:
-select and add foods to plate, change CHO count, update nutrition facts, remove food from food bank
-reset plate

Day 3: Continue implementing game-play logic, and connect database information to its corresponding food item:
-display and sum plate nutrition information.

Day 4: If not already complete, continue completing interactons:
-carb-counting tips
-instructions
Begin page styling with CSS.

Day 5: Continue styling with CSS.

Day 6: Complete styling using CSS.

Day 7: Deploy project onto GitHub page, ensure correct link and references applied.
