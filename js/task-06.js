const textInput = document.querySelector("#validation-input");
const dataLength = textInput.dataset.length;

function toggle(a, b) {
    textInput.classList.toggle(a);
    textInput.classList.replace(b, a);
}

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(dataLength)) {
        toggle('valid', 'invalid'); 
    }

    else {
        toggle('invalid', 'valid');
    }
}

textInput.addEventListener('blur', onInputBlur);
