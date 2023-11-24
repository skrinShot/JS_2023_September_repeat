//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let a1 = 'hello';

let a2 = 'owu';

let a3 = 'ua';

let a4 = 1;

let a5 = 10;

let a6 = -999;

let a7 = '123';

let a8 = 3.14;

let a9 = 2.7;

let a10 = 16;

let a11 = true;

let a12 = false;
console.log(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a)

let b = '100';
console.log(typeof b)

let c = true;
console.log(typeof c)


//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let first_name;
first_name = 'Chornous'

let middle_name;
middle_name = 'Dmytro'

let last_name;
last_name = 'Romanovich'

let person = first_name + ' ' + middle_name + ' ' + last_name;
console.log(person)