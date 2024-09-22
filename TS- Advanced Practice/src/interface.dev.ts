// type AddFn = (a: number, b: number) => number;
interface AddFn {
	(a: number, b: number): number;
}

let add: AddFn = (n1: number, n2: number) => {
	return n1 + n2;
};

interface No {}

interface Named {
	readonly name: string;
	outputName?: string;
}

interface Greetable extends Named {
	// age: number;

	greet(phrase: string): void;

	op?(): void;
}

class Person implements Greetable, No {
	name: string;
	age = 30;

	constructor(n: string) {
		this.name = n;
	}

	greet(phrase: string) {
		console.log(phrase + ' ' + this.name);
	}
}

// let user1: Greetable = {
// 	name: 'Ahmed',
// 	age: 21,

// 	greet(phrase) {
// 		console.log(phrase + ' ' + this.name);
// 	},
// };

let user1: Greetable = new Person('Ahmed');
// user1.name = 'Ali';

user1.greet('Hi there, I am');
console.log(user1);
