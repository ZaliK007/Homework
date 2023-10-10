let age = prompt('Введите возраст')
if (age <= 2){
   console.log('ребенок')
}
else if (age <= 18){
   console.log('подросток')
}
else if (age <= 60){
   console.log('взрослый')
}
else if (age > 60){
   console.log('пенсионер')
}



let num = prompt('Введите число от 0 до 9')
if (num == 0){
    console.log(')')
}
else if (num == 1){
    console.log('!')
}
else if (num == 2){
    console.log('@')
}
else if (num == 3){
    console.log('#')
}
else if (num == 4){
    console.log('$')
}
else if (num == 5){
    console.log('%')
}
else if (num == 6){
    console.log('^')
}
else if (num == 7){
    console.log('&')
}
else if (num == 8){
    console.log('*')
}
else if (num == 9){
    console.log('(')
}



let year = prompt('Ввeдите дату')
if (year % 400 ===0 ){
   console.log(year + ' год - високосный');
}

 if  (year % 100 === 0 ) {
    console.log(year + ' год - невисокосный');
}
if (year % 4 === 0){
    console.log(year + ' год - високосный');
}
else {
    console.log(year + 'год — невисокосный');
}



let summa = prompt('Введите сумму')
let valuta = prompt('Введите валюту (eur, uan, azn)')

let eur = 0.000078
let uan = 0.003003
let azn = 0.000139

if (valuta = eur){
    console.log(summa * eur)
}
else if (valuta = uan){
    console.log(summa * uan)
}
else if (valuta = azn){
    console.log(summa * azn)
}



let circle_num = prompt('Введите длину окружности')
let square_num = prompt('Введите периметр квадрата')

if (circle_num < square_num){
    console.log('Может поместиться в кдадрат')
}
else if (circle_num >= square_num){
    console.log('Не может поместиться в квадрат')
}