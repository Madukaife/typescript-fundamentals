var firstName = "obiora";
firstName = "mark";
console.log(firstName);
//tuple
var fruits;
fruits = [1, 'mango', true];
fruits = [2, 'pawpaw', false];
//tuple array
var employee;
employee = [
    [1, 'obiora'],
    [2, 'mark'],
    [3, 'linus']
];
//union    : you can use type in union
var pid;
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
var user = {
    id: 1,
    firstName: 'obiora'
};
var user2 = {
    id: 1,
    firstName: 'obiora'
};
//type assertion/ casting
var cid = "mark";
var customerID = cid;
customerID = 5;
// OR
var uid = "mark";
var userID = uid;
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
var user3 = {
    id: 1,
    firstName: 'obiora'
};
var add = function (x, y) { return x + y; };
//classes
var person = /** @class */ (function () {
    function person(id, name) {
        this.id = id;
        this.name = name;
    }
    person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return person;
}());
var person1 = new person(1, 'linus mark');
var person2 = new person(2, 'amaka');
console.log(person1, person2);
console.log(person1.register());