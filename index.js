'use strict'

//                       simple function !

// function printMyName(name) {
//     console.log(name);
// }

// printMyName('Alex');



//                      arrow functions !

// if u use more then one argument use pre emphasis
// if u use only one argument u dont need "()";
// example 1: where u use

// const printMyName = (name, age) => {
//     console.log(name, age);
// }

// printMyName('Alex', 30);

// example 2: where u dont use 

// const printMyName = name => {
//     console.log(name);
// }

// printMyName('Alex');

// if u have in arrow function only one commitment to return
// u dont need curly brackets to use as normal arrow function:
 
// const multiply = number => number * 2;

// console.log(multiply(4));



//                  Classes

// class Human {
//     constructor() {
//         this.gender = 'male';
//     }

//     printGender() {
//         console.log(this.gender);
//     }
// }

// class Person extends Human {
//     constructor() {
//         super();
//         this.name = 'Alex';
//         this.gender = 'female';
//     }

//     printMyName() {
//         console.log(this.name);
//     }
// }

// const person = new Person();
// person.printMyName();
// person.printGender();



//                  Classes, Properties & Methods
//                  next generation js syntax

// class Human {
//     gender = 'male';
    
//     printGender = () => {
//         console.log(this.gender);
//     }
// }

// class Person extends Human {
//         name = 'Alex';
//         gender = 'female';

//     printMyName = () => {
//         console.log(this.name);
//     }
// }

// const person = new Person();
// person.printMyName();
// person.printGender();



//                      Spread & Rest operators
//  Spread - used to split up array elements or object properties;
//  Rest - used to merge a list of functions arguments into an array;

//          Spread:

//          arrays:

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4];

// console.log(newNumbers);

// //           objects:

// const person = {
//     name: 'Alex',
//     gender: 'female',
//     surname: 'Jenson'
// };

// const newPerson = {
//     ...person,
//     age: 30
// }

// console.log(newPerson);

//           Rest:

// const filter = (...args) => {
//     return args.filter(el => el === 2);
// }

// console.log(filter(1, 2, 3));



//              Destructuring:
//  Easily extract array elements or object properties and 
//          store them in variables
// Destructuring allows to pull out single element or properties
// and store them in veriables for arrays or objevts

//              arrays:
//      need babel for try out...

// const numbers = [1, 2, 3];
// [num1, , num3] = numbers;
// console.log(num1, num3);

//              objects:
// {name} = {name: 'Alex', age: 30}
//      console.log(name) // Alex
//      console.log(age) // undefined



//                  Reference and Primative Types Refresher

//      primative type numbers, strings, booleans then ever u will re assign
//       or store in another veriable they will copy:

// const number = 1;
// const num2 = number;

// console.log(num2);

//      object and arrays are reference type:
        // the reason for it is that it just copied the pointer and points to the exact
        // same object in memory as person does.
        // So if we change name on person we automatically change it for secondPerson.
        // Now that's important.
        // Keep in mind and it's the same for arrays.

//      example1:

// const person = {
//     name: 'Alex'
// };

// const secondPerson = person;

// person.name = 'Vyto';

// console.log(secondPerson);

//      example2:
//      to copy an object you will need to creat a new object and copy the properties
//      for this we will use spread technics:

// const person = {
//     name: 'Alex'
// };

// const secondPerson = {
//     ...person
// };

// person.name = 'Vyto';

// console.log(secondPerson);



//          Array functions:

// const numbers = [1, 2, 3];

// const doubleNumArray = numbers.map((num) => {
//     return num * 2;
// });

// console.log(numbers);
// console.log(doubleNumArray);