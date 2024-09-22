"use strict";
// let num = 10;
// num = 'Ahmed';
// console.log(num);
// console.log(Math.floor(8.5));
// let age = 20;
// if (age > 18) {
// 	console.log('Hello');
// } else {
// 	console.log(age.repeat(3));
// }
let theName = 'Ahmed';
let theAge = 21;
let hire = true;
let allMen = 'Ahmed Ali';
// let all: any;
// let allVars;   # any by default
theName = 'Ali';
allMen = 100;
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
console.log(typeof add(2, 3));
let all = 'Ahmed';
all = 'a';
all = 10;
all = true;
let myFriends = ['Ahmed', 'Ali', 'Mohamed'];
for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i].repeat(3));
}
let arrayOne = [1, 2, 3];
let arrayTwo = ['a', 'b', 'c'];
let arrayThree = [1, 2, 3, 'a', 'b', 'c'];
// compiler will help you
let arrayTest = [1, 2, 3, 'a', 'b', 'c', ['D', 'E'], [true, false], true, false];
let arrayFour = [1, 2, 'a', 'b', ['D', 'E'], [true, false], true];
let showMsg = true;
function showDetails(name, age, salary) {
    let test = 10;
    if (showMsg) {
        return `Hello ${name}, your age is ${age} and your salary is ${salary}, test variable ${test}`;
    }
    return `No Data`;
}
console.log(showDetails('Ahmed', 21, 2000));
//! ? → optional  and  optional must be the last parameter
function showData(name = 'Un', age, country) {
    return `${name} - ${age} - ${country}`;
}
console.log(showData(undefined, 21));
function addAll(...nums) {
    let result = 0;
    // for (let i = 0; i < nums.length; i++) {
    // 	result += nums[i];
    // }
    nums.forEach(num => {
        result += num;
    });
    return result;
}
console.log(addAll(1, 2, 3, 4, 5.5, +true));
const addNum = function (num1, num2) {
    return num1 + num2;
};
console.log(addNum(10, 20));
const addWithArrow = (num1, num2) => num1 + num2;
console.log(addWithArrow(10, 20));
var theAlias = 'Ahmed';
theAlias = 'Ali';
let stn = 10;
stn = 'ali';
function getActions(btns) {
    console.log(`Action For Button Up Is ${btns.up}`);
    console.log(`Action For Button Right Is ${btns.right}`);
    console.log(`Action For Button Down Is ${btns.down}`);
    console.log(`Action For Button Left Is ${btns.left}`);
}
getActions({ up: 'Jump', right: 'Run', down: 'Crouch', left: 'Walk', x: true });
function compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(compare(20, 20));
console.log(compare(20, 15));
console.log(compare(20, 30));
// let myNumber: nums = 100; //! error
// let article: [number, string, boolean] = [1, 'T One', true];
let article = [1, 'T One', true];
article = [2, 'T Two', false];
// article.push(100); //! error
console.log(article);
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
//! Void and Never
function logging(msg) {
    console.log(msg);
    return; //* return type is void
}
console.log(logging('Iam Ahmed'));
console.log('Test');
//! Never → doesn't return anything
const fail = (msg) => {
    throw new Error(msg);
    return;
};
function alwaysLog(name) {
    while (true) {
        console.log(name);
    }
    // return; //* return type is never
}
// alwaysLog('Ahmed');
console.log('Test');
//! Enums P1 → Organize your code
// const KIDS = 15;
// const EASY = 9;
// const MEDIUM = 6;
// const HARD = 3;
// const enum Difficulty {
// 	Kids = 15,
// 	Easy = 9,
// 	Medium = 6,
// 	Hard = 3,
// }
// let lvl: string = 'Easy';
// if (lvl === 'Easy') {
// 	console.log(`The Level Is ${lvl} And Num of Secs Is ${Difficulty.Easy}`);
// } else if (lvl === 'Medium') {
// 	console.log(`The Level Is ${lvl} And Num of Secs Is ${Difficulty.Medium}`);
// }
//! Enums P2
function getHardSeconds() {
    return 3;
}
var Kids;
(function (Kids) {
    Kids[Kids["Five"] = 25] = "Five";
    Kids[Kids["Seven"] = 20] = "Seven";
    Kids[Kids["Ten"] = 15] = "Ten";
})(Kids || (Kids = {}));
var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["Kid"] = 15] = "Kid";
    Difficulty[Difficulty["Easy"] = 9] = "Easy";
    Difficulty[Difficulty["Medium"] = 6] = "Medium";
    Difficulty[Difficulty["Hard"] = getHardSeconds()] = "Hard";
})(Difficulty || (Difficulty = {}));
let lvl = 'Easy';
if (lvl === 'Easy') {
    console.log(`The Level Is ${lvl} And Num of Secs Is ${Difficulty.Medium}`);
}
if (lvl === 'Easy') {
    console.log(`The Level Is ${lvl} And Num of Secs Is ${Difficulty.Hard}`);
}
//! Type Assertion
//! TypeScript Is Not Performing Any check To ↓
//! Make Sure Type Assertion Is Valid
// // let myImg = document.getElementById('my-img') as HTMLImageElement;
// let myImg = <HTMLImageElement>document.getElementById('my-img');
// console.log(myImg.src);
// let data: any = 1000;  //! error
let data = '1000';
console.log(data.repeat(3));
function getNews(btns) {
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
    console.log(`Hello ${btns.five}`);
}
getNews({ one: 'String', two: 100, three: true, five: true });
//! Type Annotations With Object
let myObject = {
    username: 'Ahmed',
    id: 100,
    // hire: true,
    skills: {
        one: 'HTML',
        two: 'CSS',
    },
};
// myObject.username = 'Ali'; //! error readonly
myObject.id = 101;
myObject.hire = false;
console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);
let user1 = {
    id: 123,
    username: 'Ahmed',
    country: 'Egypt',
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome: () => `Welcome ${user1.username}`,
    getDouble: n => n * 2,
};
// user.username = 'Ali';
// console.log(user);
console.log(user1.id);
console.log(user1.sayHello());
console.log(user1.sayWelcome());
console.log(user1.getDouble(100));
function getData(data) {
    console.log(`Id Is ${data.id}`);
    console.log(`Username Is ${data.username}`);
    console.log(`Country Is ${data.country}`);
}
let userSettings = {
    theme: true,
    font: 'Arial',
    // sidebar: false,
    external: true,
};
let employee = {
    id: 100,
    name: 'Ahmed',
    country: 'Egypt',
    role: 'Manager',
    protect: true,
};
console.log(employee.id);
