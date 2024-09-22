import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

import { Product } from './product.model';

const products = [
	{ title: 'A Carpet', price: 29.99 },
	{ title: 'A Book', price: 10.99 },
];

//! class-validator
const newProd = new Product('', -5);
validate(newProd).then(errors => {
	if (errors.length > 0) {
		console.log('VALIDATION ERRORS!');
		console.log(errors);
	} else {
		console.log(newProd.getInfo());
	}
});

//! class-transformer
const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
	console.log(prod.getInfo());
}

// const p1 = new Product('Book', 19.99);

//*
// import _ from 'lodash';

// declare var GLOBAL: any; //! global variable from index.html

// console.log(_.shuffle([1, 2, 3]));

// console.log(GLOBAL);
