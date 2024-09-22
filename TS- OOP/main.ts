// console.log("welcome type script");

// let username: string | number = "Ahmed";
// let isAuth: boolean = false;
// let users: Array<object | string> = [{}, ""]; // | >> union

// function showUser(): void {}

// function getUser(): string {
// 	return "Ahmed Ali";
// }

class Emp {
	private id: number;
	private firstName: string;
	private lastName: string;
	private salary: number;

	constructor(id: number, firstName: string, lastName: string, salary: number) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.salary = salary;
	}

	getId(): number {
		return this.id;
	}

	getFirstName(): string {
		return this.firstName;
	}

	getLastName(): string {
		return this.lastName;
	}

	getSalary(): number {
		return this.salary;
	}

	getName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	setSalary(salary: number): void {
		this.salary = salary;
	}

	getAnnualSalary(): number {
		return this.salary * 12;
	}

	//! ناقلها
	// raiseSalary(percent: number): string {
	// 	const increase = (this.salary * percent) / 100;
	// 	this.salary += increase;
	// 	return `Salary raised by ${percent}%. New salary is: ${this.salary}`;
	// }

	toString(): string {
		return `Employee[id=${this.id},name=${this.getName},salary=${this.salary}]`;
	}

	/*	set EmployeeSalary(salary: number) {
		this.salary = salary;
	}
*/
	/*	get EmployeeSalary(): number {
		return this.EmployeeSalary;
	}
*/
}

const e1 = new Employee(200, "Ahmed", "Ali", 12000);
console.log(emp1.toString());

emp1.setSalary(999);
console.log(emp1.toString());

console.log(`id is: ${emp1.getId}`);
console.log(`firstname is: ${emp1.getFirstName}`);
console.log(`lastname is: ${emp1.getLastName}`);
console.log(`salary is: ${emp1.getSalary}`);

console.log(`name is: ${emp1.getName()}`);
console.log(`annual salary is: ${emp1.getAnnualSalary()}`);

// console.log(emp1.raiseSalary(10));
console.log(emp1.toString());

// emp1.EmployeeSalary = 20000;
// emp1.EmployeeSalary;
// const emp2 = new Employee(201, "Mohamed", "Ali", 10000);
// console.log(emp1);
// console.log(emp2);
