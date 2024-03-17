// Concatenation : İki farklı veriyi birleştirmek için kullanılır

var firstName= 'Esma Sena'
let surName = ' Yiğit'
var fullname = firstName + surName

//console.log(fullname) // Esma SenaYiğit, no space between Sena and Yiğit
//console.log(firstName+surName) // Esma SenaYiğit, no space between Sena and Yiğit

console.log(fullname) // without space
console.log(firstName+' ' +surName) // Esma Sena Yiğit, with space

// Interpolation : Bir ifadenin içerisine dinamik öğeler eklemek için kullanılır



var age = 14;

console.log(`Hi. My name is ${fullname} and i am ${age} years old`)
// ${} öğesinin içine dinamik öğeler yerleştirilir
// Hi. My name is Esma Sena Yiğit and i am 14 years old