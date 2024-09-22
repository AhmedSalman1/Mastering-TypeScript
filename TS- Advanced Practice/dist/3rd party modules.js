"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const product_model_1 = require("./product.model");
const products = [
    { title: 'A Carpet', price: 29.99 },
    { title: 'A Book', price: 10.99 },
];
const newProd = new product_model_1.Product('', -5);
(0, class_validator_1.validate)(newProd).then(errors => {
    if (errors.length > 0) {
        console.log('VALIDATION ERRORS!');
        console.log(errors);
    }
    else {
        console.log(newProd.getInfo());
    }
});
const loadedProducts = (0, class_transformer_1.plainToClass)(product_model_1.Product, products);
for (const prod of loadedProducts) {
    console.log(prod.getInfo());
}
//# sourceMappingURL=3rd%20party%20modules.js.map