let counterValue = 0;

const counter = document.querySelector('#value')
const buttonMinus = document.querySelector('button[data-action="decrement"]')
const buttonPlus = document.querySelector('button[data-action="increment"]')

const increment = () => {
  counterValue += 1;

  counter.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  counter.textContent = counterValue;
};


buttonMinus.addEventListener('click', decrement);
buttonPlus.addEventListener('click', increment);