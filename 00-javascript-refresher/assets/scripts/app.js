// import { apiKey, another as different} from "./util.js";
// import what from "./util.js"
// import * as util from './util.js';
// console.log(util.another);
// console.log(util.apiKey);
// console.log(util.default);

// let userMessage = 'Hello World!!!';

// console.log(userMessage);
// console.log(userMessage);

function createGreeting(username, message = 'Hello') {
    // console.log(username);
    // console.log(message);
    return 'Hi, I am ' + username + '. ' + message;
}

const greeting = createGreeting('Han');
console.log(greeting);