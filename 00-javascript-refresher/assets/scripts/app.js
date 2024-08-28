// import { apiKey, another as different} from "./util.js";
// import what from "./util.js"
// import * as util from './util.js';
// console.log(util.another);
// console.log(util.apiKey);
// console.log(util.default);

// let userMessage = 'Hello World!!!';

// console.log(userMessage);
// console.log(userMessage);

// function createGreeting(username, message = 'Hello') {
    // console.log(username);
    // console.log(message);
//     return 'Hi, I am ' + username + '. ' + message;
// }

// const greeting = createGreeting('Han');
// console.log(greeting);

// export default (username, message) => {
//     console.log('Hello');
//     return username + ' ' + message;
// }

// const user = {
//     name: 'Max',
//     age: 34,
//     greet() {
//         console.log('hello');
//         console.log(this.age);
//     }
// };

// console.log(user);
// console.log(user.name);
// user.greet();

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log('Hi!');
//     }
// }

// const user1 = new User('Name', 99);
// console.log(user1);
// user1.greet();

// const hobbies = ['Sports', 'Cooking', 'Reading'];
// console.log(hobbies[0]);

// hobbies.push('Singing');
// console.log(hobbies);

// const index = hobbies.findIndex((item) => {
//     return item === 'Sports';
// });
// console.log(index);

// const editedHobbies = hobbies.map((item) => {
//     return item + '!';
// });
// console.log(editedHobbies);

// const userNameData = ['Max', 'Schwarz'];
// const [firstName, lastName] = userNameData;

// console.log(firstName);
// console.log(lastName);

// const user = {
//     name: 'Max',
//     age: 55,
// }

// const {name: userName, age: userAge} = user;
// console.log(userName);
// console.log(userAge);

const hobbies = ['Sports', 'Cooking'];
const newHobbies = ['Reading'];
const mergedHobbies = [...newHobbies];
console.log(mergedHobbies);


const extendedUser = {
    isAdmin: true,
    ...user,
}
console.log(extendedUser);