interface Shape {
	getArea(): number;
	getPerimeter(): number;
	showDetails(): void;
}

class Rectangle implements Shape {
	private length: number;
	private width: number;

	constructor(length: number, width: number) {
		this.length = length;
		this.width = width;
	}

	getArea(): number {
		return this.length * this.width;
	}

	getPerimeter(): number {
		return (this.width + this.length) * 2;
	}

	showDetails(): void {
		console.log(
			`Rectangle Area is ${this.getArea()} \n Rectangle Perimeter is ${this.getPerimeter()}`
		);
	}
}

const rect = new Rectangle(10, 20);
rect.showDetails();
