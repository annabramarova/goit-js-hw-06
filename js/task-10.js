function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
  inputNumbers: document.querySelector('#controls>input'),
}

const createBoxes = (amount) => {
  const addedEl = [];
  for (let i = 0; i < amount; i+=1) {
    const div = document.createElement('div');
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
		div.style.background = getRandomHexColor()
    addedEl.push(div);
  }
  return addedEl;
}

const destroyBoxes = () => {
  refs.boxes.innerHTML = '';
}

refs.createBtn.addEventListener('click', () => {
  let addedBoxs = createBoxes(refs.inputNumbers.value);
  refs.boxes.append(...addedBoxs);
});

refs.destroyBtn.addEventListener('click', destroyBoxes);

