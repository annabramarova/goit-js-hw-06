const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

const counter = document.querySelectorAll('#categories>li');
counter.forEach(category => {

  console.log(
  `Category: ${category.firstElementChild.textContent}
  Elements: ${category.lastElementChild.children.length}`
  );
});