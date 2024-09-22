"use strict";
//! Class Type Annotations
//! Class Access Modifiers
//! Class Accessors
//! Class Static Members
//* Don't Use "name, length, call" in Static P name
class User {
    static getCount() {
        console.log(`${this.created} Objects Created`);
    }
    //* _username, _ → convenience only
    constructor(_username, salary, address) {
        this._username = _username;
        this.salary = salary;
        this.address = address;
        User.created++;
        this.msg = function () {
            return `Hello ${this._username} Your Salary is ${this.salary}`;
        };
    }
    sayMsg() {
        return `Hello ${this._username} Your Salary is ${this.salary}`;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
}
User.created = 0;
let userOne = new User('Ahmed', 15000, 'Egypt');
console.log(userOne.username);
userOne.username = 'Ali';
console.log(userOne.username);
console.log(userOne.salary);
console.log(userOne.msg());
console.log(userOne.sayMsg());
let userTwo = new User('Mohamed', 15000, 'Egypt');
let userThree = new User('Mahmoud', 15000, 'Egypt');
let userFour = new User('Hassan', 15000, 'Egypt');
// console.log(User.created);
User.getCount();
class User2 {
    constructor(username, theme, font) {
        this.username = username;
        this.theme = theme;
        this.font = font;
    }
    save() {
        console.log(`Saved`);
    }
    update() {
        console.log('Updated');
    }
}
let userOne1 = new User2('Ahmed', true, 'Arial');
console.log(userOne1.username);
console.log(userOne1.font);
userOne1.save();
userOne1.update();
//! Week 4 - Abstract Classes And Members
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log(`Cooking For Pizza Time Is 30 Min`);
    }
}
class Burger extends Food {
    constructor(title, price, location) {
        super(title);
        this.price = price;
        this.location = location;
    }
    getCookingTime() {
        console.log(`Cooking For Burger Time Is 15 Min`);
    }
}
let pizzaOne = new Pizza('Chicken Pizza', 100);
console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();
//! Polymorphism And Method Override
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log(`Attacking Now`);
    }
}
class Amazon extends Player {
    constructor(name, spears) {
        super(name);
        this.spears = spears;
    }
    attack() {
        // super.attack();
        console.log(`Attacking With Spears`);
        this.spears -= 1;
    }
}
class Barbarian extends Player {
    constructor(name, axeDurability) {
        super(name);
        this.axeDurability = axeDurability;
    }
    attack() {
        // super.attack();
        console.log(`Attacking With axeDurability`);
        this.axeDurability -= 1;
    }
}
let barOne = new Barbarian('Ahmed', 100);
console.log(barOne.name);
barOne.attack();
console.log(barOne.axeDurability);
//! Generics Introduction
function returnNumber(val) {
    return val;
}
function returnString(val) {
    return val;
}
function returnBoolean(val) {
    return val;
}
console.log(returnNumber(100));
console.log(returnString('Ahmed'));
console.log(returnBoolean(true));
//* <> → GenericType
function returnType(val) {
    return val;
}
console.log(returnType(100));
console.log(returnType('Ahmed'));
console.log(returnType(true));
console.log(returnType([1, 2, 3, 4]));
//! Generics Multiple Types
const returnTypeArrowSyntax = (val) => val;
console.log(returnTypeArrowSyntax('Ahmed'));
console.log(returnTypeArrowSyntax([1, 2, 3, 4]));
function testType(val) {
    return `The Value Is ${val} And Type Is ${typeof val}`;
}
console.log(testType('Ahmed'));
console.log(testType([1, 2, 3, 4]));
function multipleTypes(valOne, valTwo) {
    return `The 1st Value Is ${valOne} And 2nd Value Is ${valTwo}`;
}
console.log(multipleTypes('Ahmed', 100));
console.log(multipleTypes([1, 2, 3, 4], 'Ahmed'));
//! Generics Classes
//* T = string → default value
class Person {
    constructor(value) {
        this.value = value;
    }
    show(msg) {
        console.log(`${msg} - ${this.value}`);
    }
}
let personOne = new Person('Ahmed');
console.log(personOne.value);
personOne.show('Message');
let personTwo = new Person(100);
console.log(personTwo.value);
personTwo.show('Message');
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let itemOne = new Collection();
itemOne.add({ itemType: 'Book', title: "You Don't Know JS", isbn: 100 });
itemOne.add({ itemType: 'Book', title: 'Grokking Algorithms', isbn: 101 });
console.log(itemOne);
let itemTwo = new Collection();
itemTwo.add({ itemType: 'Game', title: 'PUBG', style: 'Wars', price: 100 });
itemTwo.add({ itemType: 'Game', title: 'CS:GO', style: 'FPS', price: 200 });
console.log(itemTwo);
