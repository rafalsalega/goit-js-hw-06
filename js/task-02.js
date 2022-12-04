const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredList = document.querySelector('#ingredients');

for (const item of ingredients) {
  const ingridient = document.createElement('li');
  
  ingridient.textContent = item;
  ingridient.classList.add(`item`);
  ingredList.append(ingridient);
}