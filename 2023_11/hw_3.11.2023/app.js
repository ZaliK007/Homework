//1.	Есть HTML страница, которая содержит форму с n-ым количеством инпутов.
//        Написать скрипт, который будет при помощи двухнеподвижных кнопок переходить по инпутам,
//        то есть делать их активными (в фокусе); focus()
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