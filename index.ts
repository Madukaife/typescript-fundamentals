let firstName: string = "obiora"
firstName = "mark"

console.log(firstName);

//tuple
let fruits: [number, string, boolean]
fruits = [1, 'mango', true]
fruits = [2, 'pawpaw', false]


//tuple array
let employee: [number, string][]

employee = [
    [1, 'obiora'],
    [2, 'mark'],
    [3, 'linus']
]
 
//union    : you can use type in union
let pid: string | number
pid = 1
pid = "4"

//enums
enum direction1{
    up,
    down,
    left,
    right
}
enum direction2{
    up = 1,
    down= 2,
    left = 3,
    right = 4
}

enum direction3{
    up = 'up',
    down = 'down',
    left = 'left',
    right = 'right'
}

//object
const user: {
    id: number,
    firstName: string,
} = {
    id: 1,
    firstName: 'obiora'
}

// or you can declare it using type, u can use type in union too;
type user = {
   readonly id: number,  // using readonly, this way you can only read the value without changing the value
    firstName: string
    age?: number   // using optional to decelare type
}
const user2: user = {
    id: 1,
    firstName: 'obiora'
}

//type assertion/ casting
let cid: any = "mark"
let customerID = <number>cid
customerID = 5

// OR
let uid: any = "mark"
let userID = uid as number
customerID = 5


//functions
function addNum(x: number, y: number): number{
    return x + y
}
console.log(addNum(3, 6));

//function without return 
function info(message: number | string): void {
    console.log(message)
}
info("hello world")

//interface  : note that you cant use interface in unio but you can use type
interface userInterface {
    id: number,
    firstName: string
}
const user3: userInterface = {
    id: 1,
    firstName: 'obiora'
} 


//using interface with function
interface mathFunc{
    (x: number, y: number): number
}

const add: mathFunc = (x: number, y: number): number => x + y;

interface personInterface {
    id: number,
    firstName: string
    register(): string
}



//classes

class person {
  private  id: number // using private, public and protected properties to decide how an element can be accessed globally or locally
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is now registered`;  // a method
    }
}
const person1 = new person(1, 'linus mark')
const person2 = new person(2, 'amaka')

console.log(person1, person2);
console.log(person1.register());


//generic: this helps us use placeholders, use this  instead of using type any
function getArrary<T>(items: T[]): T[] {
   return new Array().concat(items) 
}
let numArray = getArrary<number>([1, 2, 3, 4])

let strArray = getArrary<string>(['mark', 'john', 'Bob'])

numArray.push(2)
strArray.push('amaka')

// function that detects an even number
function evenNumber(x: number): boolean {
    if (x % 2 === 0) {
return true
    }
    return false
}
console.log(evenNumber(10))


//function that detects a palindrome
function palindrome(words: string): boolean {
    const cleanedWords:string = words.replace(/[\W_]/g, "").toLowerCase();
  
    const reversedWords = cleanedWords.split("").reverse().join("");
  
    if (cleanedWords === reversedWords) {
      return true;
    } else {
      return false;
    }
    
}
console.log(palindrome("amma"))

  
