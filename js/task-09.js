function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonColorSwitcher = document.querySelector('.change-color');
const result = document.querySelector('.color');
const body = document.querySelector('body');

const changeColor = () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  result.textContent = color;
}

buttonColorSwitcher.addEventListener('click', changeColor)
