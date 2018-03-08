const func = require('./demo_com');

console.log("Hello World");
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);
func.print();