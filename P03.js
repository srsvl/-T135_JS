// Veri türleri

// String Data Türü

const sn = 'Mr.'
let name = 'Murat';
var surName = "Yiğit";

console.log(name + ' ' +surName); // Murat Yiğit

// Numbers data tipi

let sayı1 = 123345689;
var sayı2 = 1239000087665343;
const gravity = 9.82;

console.log(sayı1 + ' - ' + sayı2 + ' - ' + gravity) // 123345689 - 1239000087665343 - 9.82

// Mantıksal Data Tipi

let doğruMu = true;
var yanlışMı = false;
// const da yazabiliriz, fakat anlamlı olmayacaktır, 
// çünkü const'ta iki ihtimal yoktur tek ve sabit bir değer vardır

console.log(doğruMu); // true
console.log(yanlışMı); // false

// let, var ve const temel veri tileridir. Bir de özel veri tipleri vardır.



// Özel Veri Tipleri

let tanımsızDeğişken = undefined; // daha sonra tanımlama yapabilmek
var nullVeri = null;

var isHeStudent = false; // şu an öğrenci değil
var studentNumber = null;
let saveYear = undefined;

console.log(studentNumber); // null
console.log(saveYear); // undefined