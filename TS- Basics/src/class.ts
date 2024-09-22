//! Class Type Annotations
//! Class Access Modifiers
//! Class Accessors
//! Class Static Members
//* Don't Use "name, length, call" in Static P name

class User {
	private static created: number = 0;
	static getCount(): void {
		console.log(`${this.created} Objects Created`);
	}

	msg: () => string;
	//* _username, _ → convenience only
	constructor(private _username: string, public salary: number, public readonly address: string) {
		User.created++;

		this.msg = function () {
			return `Hello ${this._username} Your Salary is ${this.salary}`;
		};
	}
	sayMsg() {
		return `Hello ${this._username} Your Salary is ${this.salary}`;
	}
	get username(): string {
		return this._username;
	}
	set username(value: string) {
		this._username = value;
	}
}

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

//! Class Implements Interface
interface Settings1 {
	theme: boolean;
	font?: string;
	save(): void;
}

class User2 implements Settings1 {
	constructor(public username: string, public theme: boolean, public font: string) {}
	save(): void {
		console.log(`Saved`);
	}
	update(): void {
		console.log('Updated');
	}
}

let userOne1 = new User2('Ahmed', true, 'Arial');
console.log(userOne1.username);
console.log(userOne1.font);
userOne1.save();
userOne1.update();

//! Week 4 - Abstract Classes And Members
abstract class Food {
	constructor(public title: string) {}
	abstract getCookingTime(): void;
}

class Pizza extends Food {
	constructor(title: string, public price: number) {
		super(title);
	}
	getCookingTime(): void {
		console.log(`Cooking For Pizza Time Is 30 Min`);
	}
}

class Burger extends Food {
	constructor(title: string, public price: number, public location: string) {
		super(title);
	}
	getCookingTime(): void {
		console.log(`Cooking For Burger Time Is 15 Min`);
	}
}

let pizzaOne = new Pizza('Chicken Pizza', 100);
console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();

//! Polymorphism And Method Override
class Player {
	constructor(public name: string) {}
	attack(): void {
		console.log(`Attacking Now`);
	}
}

class Amazon extends Player {
	constructor(name: string, public spears: number) {
		super(name);
	}
	override attack(): void {
		// super.attack();
		console.log(`Attacking With Spears`);
		this.spears -= 1;
	}
}

class Barbarian extends Player {
	constructor(name: string, public axeDurability: number) {
		super(name);
	}
	override attack(): void {
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
function returnNumber(val: number): number {
	return val;
}

function returnString(val: string): string {
	return val;
}

function returnBoolean(val: boolean): boolean {
	return val;
}

console.log(returnNumber(100));
console.log(returnString('Ahmed'));
console.log(returnBoolean(true));

//* <> → GenericType
function returnType<T>(val: T): T {
	return val;
}

console.log(returnType<number>(100));
console.log(returnType<string>('Ahmed'));
console.log(returnType<boolean>(true));
console.log(returnType<number[]>([1, 2, 3, 4]));

//! Generics Multiple Types
const returnTypeArrowSyntax = <T>(val: T): T => val;
console.log(returnTypeArrowSyntax<string>('Ahmed'));
console.log(returnTypeArrowSyntax<number[]>([1, 2, 3, 4]));

function testType<T>(val: T): string {
	return `The Value Is ${val} And Type Is ${typeof val}`;
}
console.log(testType<string>('Ahmed'));
console.log(testType<number[]>([1, 2, 3, 4]));

function multipleTypes<T, S>(valOne: T, valTwo: S): string {
	return `The 1st Value Is ${valOne} And 2nd Value Is ${valTwo}`;
}
console.log(multipleTypes<string, number>('Ahmed', 100));
console.log(multipleTypes<number[], string>([1, 2, 3, 4], 'Ahmed'));

//! Generics Classes
//* T = string → default value
class Person<T = string> {
	constructor(public value: T) {}
	show(msg: T): void {
		console.log(`${msg} - ${this.value}`);
	}
}

let personOne = new Person('Ahmed');
console.log(personOne.value);
personOne.show('Message');

let personTwo = new Person<number | string>(100);
console.log(personTwo.value);
personTwo.show('Message');

//! Generics And Interfaces
interface Book {
	itemType: string;
	title: string;
	isbn: number;
}

interface Game {
	itemType: string;
	title: string;
	style: string;
	price: number;
}

class Collection<T> {
	public data: T[] = [];
	add(item: T): void {
		this.data.push(item);
	}
}

let itemOne = new Collection<Book>();
itemOne.add({ itemType: 'Book', title: "You Don't Know JS", isbn: 100 });
itemOne.add({ itemType: 'Book', title: 'Grokking Algorithms', isbn: 101 });
console.log(itemOne);

let itemTwo = new Collection<Game>();
itemTwo.add({ itemType: 'Game', title: 'PUBG', style: 'Wars', price: 100 });
itemTwo.add({ itemType: 'Game', title: 'CS:GO', style: 'FPS', price: 200 });
console.log(itemTwo);
