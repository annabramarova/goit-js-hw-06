const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const liArray = [];

ingredients.forEach(ingredient => {
  const ingredientRef = document.createElement('li');
  ingredientRef.classList.add("item");
  ingredientRef.textContent = ingredient;
  liArray.push(ingredientRef);
});

list.append(...liArray);
