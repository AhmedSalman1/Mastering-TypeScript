"use strict";
let user = {
    id: 100,
    username: 'Elzero',
    state: true,
    getName() {
        return this.username;
    },
};
user.id = 200;
user.id = '200';
user.state = false;
let client = {
    id: 100,
    username: 'Elzero',
    active: true,
    discount: 10,
    getPrice(price) {
        return price - this.discount;
    },
};
console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
let creature = {
    title: 'Superman',
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: 'Iron',
    origin: 'Krypton',
};
class Player1 {
    constructor(name, type, level, vip) {
        this.name = name;
        this.type = type;
        this.level = level;
        this.vip = vip;
    }
    details() {
        return `${this.vip ? 'VIP ' : ''}${this.name}, Type Is ${this.type} Is ${this.level}`;
    }
}
let player1 = new Player1('Osama', 'Mage', 90, true);
let player2 = new Player1('Shady', 'Archer', '85', false);
let player3 = new Player1('Amr', 'Fighter', 50, true);
let player4 = new Player1('Mahmoud', 'Assassin', 77);
console.log(player1.details());
console.log(player2.details());
console.log(player3.details());
console.log(player4.details());
class Shorten {
    constructor(id, username, title) {
        this.id = id;
        this.username = username;
        this.title = title;
    }
}
let tester1 = new Shorten(100, 'Elzero', 'Developer');
console.log(tester1.id);
console.log(tester1.username);
class Show {
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    constructor(_title) {
        this._title = _title;
    }
}
let tester = new Show('Elzero');
console.log(tester.title);
tester.title = 'Osama';
console.log(tester.title);
class Player {
    constructor(id, title, level) {
        this.id = id;
        this.title = title;
        this.level = level;
    }
    logIn() {
        console.log('Logged In');
    }
    logOut(msg) {
        console.log(msg);
    }
}
let player01 = new Player(100, 'Elzero', 95);
console.log(player01.id);
console.log(player01.title);
console.log(player01.level);
player01.logIn();
player01.logOut('Good Bye');
//# sourceMappingURL=main-3.js.map