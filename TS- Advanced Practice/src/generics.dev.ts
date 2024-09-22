const names: Array<string> = ['Ahmed', 'Ali']; // string[]
// names[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('This is done');
		reject('Something went wrong');
	}, 2000);
});

// promise.then(data => {
// 	data.split(' ');
// });

//! Generic: (extends object or anything) → Constraints
function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Ahmed' }, { age: 21 });
// mergedObj.name;
console.log(mergedObj.age);

// const mergedObj2 = merge({ name: 'Ahmed' }, 30); // error
// console.log(mergedObj2.name);

//! 1
interface Lengthy {
	length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let description = 'Got no value.';
	if (element.length === 1) {
		description = 'Got 1 element.';
	} else if (element.length > 1) {
		description = 'Got ' + element.length + ' elements.';
	}
	return [element, description];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
console.log(countAndDescribe([]));
// console.log(countAndDescribe(10)); // error

//! 2
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
	return obj[key];
}

console.log(extractAndConvert({ name: 'Ahmed' }, 'name'));

//! Generic Classes
//! object is tricky to use here avoid it,  use with primitives
class DataStorage<T extends string | number | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) {
			return;
		}
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}

const textStorage = new DataStorage<string>();
// textStorage.addItem(10);  // error
textStorage.addItem('Ahmed');
textStorage.addItem('Ali');
textStorage.removeItem('Ahmed');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
console.log(numberStorage.getItems());

//! Tricky
// const objStorage = new DataStorage<object>();
// const ahmedObj = { name: 'Ahmed' };
// objStorage.addItem(ahmedObj);
// objStorage.addItem({ name: 'Ali' });

// //! wrong ↓   because JS(ref) doesn't get address and remove the last element
// // objStorage.removeItem({ name: 'Ahmed' });
// objStorage.removeItem(ahmedObj); // correct

// console.log(objStorage.getItems());

//! Generic Utility Types
interface CourseGoal {
	title: string;
	description: string;
	completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
	let courseGoal: Partial<CourseGoal> = {};
	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntil = date;
	return courseGoal as CourseGoal;
}

const newNames: Readonly<string[]> = ['Ahmed', 'Ali'];
// newNames.push('Mohamed');
// newNames.pop();
