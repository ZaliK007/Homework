let inputs = document.getElementsByTagName('input');
let index = 0;

function left() {
    if (index > 0) {
        index--;
    }
    inputs[index].focus();
}
function right() {
    if (index < inputs.length - 1) {
        index++;
    }
    inputs[index].focus();
}