"use strict";
class Game {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
class RPG extends Game {
    constructor(title, price, rate) {
        super(title, price);
        this.price = price;
        this.rate = rate;
    }
    getLocation() {
        return `Location`;
    }
    getDiscount() {
        return `Discount`;
    }
}
class Action extends Game {
    constructor(title, price, rate, company) {
        super(title, price);
        this.price = price;
        this.rate = rate;
        this.company = company;
    }
    getLocation() {
        return `Location`;
    }
    getDiscount() {
        return `Discount`;
    }
}
let gameOne = new RPG('Ys', 100, 10);
let gameTwo = new Action('Uncharted', 90, 15, 'Sony');
console.log(gameOne.title);
console.log(gameOne.price);
console.log(gameOne.rate);
console.log(gameOne.getDiscount());
console.log(gameOne.getLocation());
console.log(gameTwo.title);
console.log(gameTwo.price);
console.log(gameTwo.rate);
console.log(gameTwo.company);
console.log(gameTwo.getDiscount());
console.log(gameTwo.getLocation());
function showTypes(a, b, c) {
    return `${a ? a : 'Nothing'} - ${b ? b : 'Nothing'} - ${c ? c : 'Nothing'}`;
}
console.log(showTypes());
console.log(showTypes('String'));
console.log(showTypes('String', 100));
console.log(showTypes('String', 100, true));
class Game1 {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getDiscount1(discount) {
        console.log(`The Discount Is ${discount}`);
    }
}
let gameOne1 = new Game1('Ys', 100);
let gameTwo2 = new Game1(2064, 100);
console.log(gameOne1.title);
console.log(gameOne1.price);
gameOne1.getDiscount1('50');
console.log(gameTwo2.title);
console.log(gameTwo2.price);
gameTwo2.getDiscount1(80);
//# sourceMappingURL=main-4.js.map