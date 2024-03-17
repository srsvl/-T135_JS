// Bir satırlık yorum yazmak istediğimizde bu yapıdaki gibi kullanım gerekir 

/*
    yorum satırlarımız 
    birden fazla olacaksa 
    bu yapıyı kullanarak yorumlarımızı yazabiliriz

*/

// console.log kullanımı
/*
    bir variable'ın değerini yazdırmak istediğimizde
    console.log kullanımını yaparız 

*/

console.log("Murat");
console.log('Yiğit');







console.log('') // Bir satırlık boşluk bırakır
console.log('Hello World')

// Değişken yazdırma
let name='Ali Yaz'
console.log(name);

let sayı1 = 20;
let sayı2 = 30;

console.log(sayı1+sayı2); // 50
console.log('sayı1' + 'sayı2'); // sayı1sayı2
//console.log(sayı1sayı2); // is not defined, hata verir
console.log(20+30); // 50
console.log('30' +'20'); // 3020

console.log('Sn. ' + name +' Hoşgeldiniz') // Sn. Ali Yaz Hoşgeldiniz

name = 'Murat Yiğit'
console.log('Sn. ' + name +' Hoşgeldiniz') // Sn. Murat Yiğit Hoşgeldiniz

// \n ==> alt satıra geçme

console.log('Wise Quarter\nHave a nice day');

// \t bir tab boşluk bırakır
console.log('Wise Quarter\t\tHave a nice day')

/*
    Konsola tek satırda kod yazarak, aşağıdaki çıktıyı alınız

    Hello World
    "Hello World"

*/
console.log('Hello World\n"Hello World"')