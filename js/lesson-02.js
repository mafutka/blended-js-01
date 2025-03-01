// task-1

/* const styles = ['jazz', 'blues'];
styles.push('rock-n-roll');

styles[1] = 'classic';

console.log(styles); */


// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи код
/* 



function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}

logItems(["ggg", "hhhh"]); */


// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

//task-2

/* const logins = ["Peter", "John", "Igor", "Sasha"];

function checkLogin(array) {
let userName = prompt("enter login");
if (!array.includes(userName)) {
    alert("User not found");
} else {
    alert(`Welcome, ${userName}!`)
}
}

checkLogin(logins) */

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// task-3

/* function calculateAverage(...args) {
let total = 0;
for (const arg of args) {
    total += arg;
}
return total / args.length;
}

console.log(calculateAverage(20, 40, 30, 80)); */

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// task-4

/* function sumAdjacentNumbers(arr) {
    const result = [];
    for (let i = 0; i < arr.length - 1; i++) {
      result.push(arr[i] + arr[i + 1]);
    }
    return result;
  }
  
  const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

  console.log(sumAdjacentNumbers(someArr)); */
  

// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

//task-5

/* const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallestNumber(numbers) {
    let minNumber = numbers[0];
    for (const number of numbers) {
    if (number < minNumber) {
        minNumber = number;
    }
}
    return minNumber;
}

console.log(findSmallestNumber(numbers));
 */

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

//task 7

/* const user = {
     name: "John",
     age: 20,
     hobby: "tenis",
     premium: true,
}; */

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

