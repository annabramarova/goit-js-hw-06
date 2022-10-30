const textInput = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

const makeInputName = event => {
    output.textContent = event.currentTarget.value;

    if (event.target.value === '') {
        output.textContent = 'Anonymous'
    }
};

textInput.addEventListener('input', makeInputName);