//task-1



// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [[1, 2, 3, 4, 5]]


//task-2


// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
//  ];

//  const newArr = data.flatMap(data => data.values);

//  console.log(newArr);
 



//task-3

// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
//  ];

//  const youngPeople = people.some(people => people.age < 20);

//  console.log(youngPeople);
 
//  people.some(people.age < 20);
//  return youngPeople;


//task-13

//   class Person {
//     constructor(obj = {}) {
//         this.name = obj.name;
//         this.age = obj.age;
//         this.gender = obj.gender;
//         this.email = obj.email;
//     }
//     getDetails() {
//         return { name: this.name, age: this.age, gender: this.gender, email: this.email };
//     }
//   }

//   class Employee extends Person {
//     constructor(obj = {}) {
//         super(obj);
//         this.salary = obj.salary;
//         this.department = obj.department;
//     }
//     getEmployeeDetails() {
//         return { name: this.name, age: this.age, gender: this.gender, email: this.email, salary: this.salary, department: this.department}
//     }
//   }

//   const worker = new Employee({})

//   const pers1 = new Person({name: "this.name", age: 10, gender: "this.gemder", email: "this.email"})
//   console.log(pers1. getDetails());

//   const person2 = new Employee({name: "tttttts.name", age: 15, gender: "this.gemder", email: ".email", salary: "salary", department: "this."})
//   console.log(person2. getEmployeeDetails());
  
  

//  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // ##### Крім того, клас `Person` має мати метод ``,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  //  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`,
  //  який повертає об'єкт з ідентифікатором співробітника, 
  // зарплатою та відділом, в якому працює співробітник.