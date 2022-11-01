const inputScroller = document.querySelector('#font-size-control');
const abracadabra = document.querySelector('#text')

const fontSizeChanger = e => {
abracadabra.style.fontSize = `${e.currentTarget.value}px`
}

inputScroller.addEventListener('input', fontSizeChanger);
