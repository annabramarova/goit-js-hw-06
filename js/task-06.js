const textInput = document.querySelector("#validation-input");
const dataLength = 6;

const toggle = (on, off) => {
    textInput.classList.toggle(on);
    textInput.classList.replace(off, on);
}

const onInputBlur = (event) => {
    if (event.currentTarget.value.length === dataLength) {
        toggle('valid', 'invalid');
    }
        else {
        toggle('invalid', 'valid');
        }
    }


textInput.addEventListener('blur', onInputBlur);