"use strict";
let arr = [1, [true], ['Hi', ['Hello', 10]]];
console.log(arr);
const printInConsole = (...args) => {
    args.forEach(arg => {
        console.log(`The Value Is ${arg} And Type Is ${typeof arg}`);
    });
    return 'Done';
};
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole('A', 'B', 'C'));
console.log(printInConsole(true, false, false, true, true));
//# sourceMappingURL=main-1.js.map