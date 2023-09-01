"use strict";
let firstName = "obiora";
firstName = "mark";
console.log(firstName);
//tuple
let fruits;
fruits = [1, 'mango', true];
fruits = [2, 'pawpaw', false];
//tuple array
let employee;
employee = [
    [1, 'obiora'],
    [2, 'mark'],
    [3, 'linus']
];
//union    : you can use type in union
let pid;
pid = 1;
pid = "4";
//enums
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 0] = "up";
    direction1[direction1["down"] = 1] = "down";
    direction1[direction1["left"] = 2] = "left";
    direction1[direction1["right"] = 3] = "right";
})(direction1 || (direction1 = {}));
var direction2;
(function (direction2) {
    direction2[direction2["up"] = 1] = "up";
    direction2[direction2["down"] = 2] = "down";
    direction2[direction2["left"] = 3] = "left";
    direction2[direction2["right"] = 4] = "right";
})(direction2 || (direction2 = {}));
var direction3;
(function (direction3) {
    direction3["up"] = "up";
    direction3["down"] = "down";
    direction3["left"] = "left";
    direction3["right"] = "right";
})(direction3 || (direction3 = {}));
//object
const user = {
    id: 1,
    firstName: 'obiora'
};
const user2 = {
    id: 1,
    firstName: 'obiora'
};
//type assertion/ casting
let cid = "mark";
let customerID = cid;
customerID = 5;
// OR
let uid = "mark";
let userID = uid;
customerID = 5;
//functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(3, 6));
//function without return 
function info(message) {
    console.log(message);
}
info("hello world");
const user3 = {
    id: 1,
    firstName: 'obiora'
};
const add = (x, y) => x + y;
//classes
class person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`; // a method
    }
}
const person1 = new person(1, 'linus mark');
const person2 = new person(2, 'amaka');
console.log(person1, person2);
console.log(person1.register());
//generic: this helps us use placeholders, use this  instead of using type any
function getArrary(items) {
    return new Array().concat(items);
}
let numArray = getArrary([1, 2, 3, 4]);
let strArray = getArrary(['mark', 'john', 'Bob']);
numArray.push(2);
strArray.push('amaka');
// function that detects an even number
function evenNumber(x) {
    if (x % 2 === 0) {
        return true;
    }
    return false;
}
console.log(evenNumber(10));
//function that detects a palindrome
function palindrome(words) {
    const cleanedWords = words.replace(/[\W_]/g, "").toLowerCase();
    const reversedWords = cleanedWords.split("").reverse().join("");
    if (cleanedWords === reversedWords) {
        return true;
    }
    else {
        return false;
    }
}
console.log(palindrome("amma"));
