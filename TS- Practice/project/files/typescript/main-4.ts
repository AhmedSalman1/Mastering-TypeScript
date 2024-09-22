//! 1
// Do Not Edit
type numandstring = number | string;

abstract class Game {
	constructor(public title: string, public price: numandstring) {}
	abstract getLocation(): string;
	abstract getDiscount(): string;
}

// Start Edit And Fix
class RPG extends Game {
	constructor(title: string, public price: numandstring, public rate: number) {
		super(title, price);
	}
	getLocation(): string {
		return `Location`;
	}
	getDiscount(): string {
		return `Discount`;
	}
}

class Action extends Game {
	constructor(title: string, public price: numandstring, public rate: number, public company: string) {
		super(title, price);
	}
	getLocation(): string {
		return `Location`;
	}
	getDiscount(): string {
		return `Discount`;
	}
}
// End Edit And Fix

// Do Not Edit
let gameOne = new RPG('Ys', 100, 10);
let gameTwo = new Action('Uncharted', 90, 15, 'Sony');

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"

console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"

//! 2
// Write Function Code Here
function showTypes<T1 = void, T2 = void, T3 = void>(a?: T1, b?: T2, c?: T3): string {
	return `${a ? a : 'Nothing'} - ${b ? b : 'Nothing'} - ${c ? c : 'Nothing'}`;
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>('String')); // String - Nothing - Nothing
console.log(showTypes<string, number>('String', 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>('String', 100, true)); // String - 100 - true

//! 3
// Write Class Code Here
class Game1<T> {
	constructor(public title: T, public price: number) {}
	getDiscount1(discount: T) {
		console.log(`The Discount Is ${discount}`);
	}
}

// Do Not Edit Here
let gameOne1 = new Game1<string>('Ys', 100);
let gameTwo2 = new Game1<number>(2064, 100); // There's A Game Called "2064"

console.log(gameOne1.title); // "Ys"
console.log(gameOne1.price); // 100
gameOne1.getDiscount1('50'); // "The Discount Is 50"

console.log(gameTwo2.title); // 2064
console.log(gameTwo2.price); // 100
gameTwo2.getDiscount1(80); // "The Discount Is 80"
