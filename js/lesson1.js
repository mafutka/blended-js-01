//задача 1

// let number = Number(prompt("10"));
//if (number === 10) {
    //alert('вірно')
//} else {
  //  alert('невірно')
//}

// задача 2

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min > 0 && min < 15) {
   // alert(`${min} входить в першу чверть`);
//} else if (min > 15 && min < 30) {
   //alert(`${min} входить в другу чверть`);
//} else if (min > 30 && min < 45) {
   // alert(`${min} входить в третю чверть`)
//} else if (min > 45 && min <= 59) {
   // alert(`${min} входить в четверту чверть`)
//} else {alert('error')}

// задача 3

/*let num = prompt ('put number from 1 to 4');
let result;
switch (num) {
    case 1:
        result = 'winter';
        break;
    case 2:
        result = 'spring';
        break;
    case 3:
        result = 'summer';
        break;
    case 4:
        result = 'fall';
        break;
}

console.log(result);*/


// задача 4

/*let value = Number(prompt('введіть число'));
if (isNaN(value)) {
    alert('error')
} else {
    const hours = String(Math.floor(value / 60)).padStart(2, '0');
    const minutes = String(value % 60).padStart(2, '0');
   
    console.log(`${hours} : ${minutes}`);
}*/

// задача 5

/*let login = prompt("Введіть логін:");
if (login === "Адмін") {
    let password = prompt("Введіть пароль:");
    if (password === "1111") {
        alert("Добрий день!");
    } else {
        alert("Невірний пароль!");
    }
} else {
    alert("Скасовано");
}*/

//задача 6

// let number = 0;
//while (number <= 20) {
   // console.log(number);
   // number++
//}

/*function getNumbers(min, max) {
    let sumPairs = 0; 
    for (let i = max; i >= min; i--) { 
        console.log(i); 
        if (i % 2 === 0) { 
            sumPairs += i; 
        }
    }
    return sumPairs; 
}


let result = getNumbers(15, 40);
console.log("Сума парних чисел:", result);
*/


// задача 8

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// задача 9


// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).


//задача 10

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.
