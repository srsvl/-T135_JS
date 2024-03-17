let name = 'Murat';
var age = 44;
var occupation = 'Instructor';
var maaş = '1000';

console.log(typeof age); // number
console.log(typeof name); // string
//console.log(occupation); // Instructor
console.log(typeof occupation); // string
let prim = maaş*0.10;
console.log(maaş + prim); // 1000100 like a String. String is strong(dominant)!!!
// !!! above variable 'maaş' is String

var sayıMaaş = Number(maaş); // This is a data-casting operation
console.log(typeof sayıMaaş);
let metinYaş = String(age); // This is a data-casting operation
console.log(typeof metinYaş);

age = String(age);
console.log(typeof age);


let prim2 = sayıMaaş*0.10;
console.log(sayıMaaş + prim2); // 1100 a calculation