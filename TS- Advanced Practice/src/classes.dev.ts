class Department {
	//* static
	static fiscalYear = 2022;

	// private readonly id: string;
	// public name: string;
	//* private employees: string[] = [];
	protected employees: string[] = [];

	constructor(private readonly id: string, public name: string) {
		// this.name = name;
	}

	static createEmployee(name: string) {
		return { name: name };
	}

	describe(this: Department) {
		console.log(`Department (${this.id}): ${this.name}`);
	}

	addEmployee(employee: string) {
		// this.id = 'd2';  // error - readonly
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

class ITDepartment extends Department {
	private static instance: ITDepartment;
	private constructor(id: string, public admins: string[]) {
		super(id, 'IT');
		// this.admins = admins;
	}

	static getInstance() {
		if (this.instance) {
			return this.instance;
		}
		this.instance = new ITDepartment('d2', ['Ahmed']);
		return this.instance;
	}

	addEmployee(name: string) {
		if (name === 'Ahmed') {
			return;
		}
		this.employees.push(name);
	}
}

//* static
const employee1 = Department.createEmployee('Ahmed');
console.log(employee1, Department.fiscalYear);

// const accounting = new Department('d1', 'Accounting');
//! const it = new ITDepartment('d1', ['Ahmed']);
const it = ITDepartment.getInstance();

it.addEmployee('Ahmed');
it.addEmployee('Ali');

// accounting.employees[2] = 'Mohamed'; // private
it.name = 'NEW NAME';

it.describe();
it.printEmployeeInformation();

// const accountingCopy = { describe: accounting.describe };
// const accountingCopy = { name: 'Dummy', describe: accounting.describe };
// accountingCopy.describe();
