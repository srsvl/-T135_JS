// Variables and Constants

let name = 'Murat'; // Sadece tanımlandığı scope içinde kullanılabilen değişken
console.log('İsim : ' + name)

var firstName = 'Hakan'; // Global bir değişken, variable isminin üstü çizilmedi
console.log('İsim : ' + firstName);

const pi = 3.14;
console.log('pi sayısı = ' + pi)

name = 'Tarık';
firstName = 'Sena';
var age = 14;
// ister sayısal bir değer olsun, ister metinsel bir ifade olsun, 
//bu variable'ları let ya da var ile tanımlıyorum
//pi = 3; // Assignment to constant variable.

console.log('Yeni isim1 : ' + name) // Yeni isim1 : Tarık
console.log('Yeni isim2 : ' + firstName) // Yeni isim2 : Sena
console.log('Yaş : ' + age)
console.log('pi sayısı : ' + pi) // pi sayısı : 3

/*
    Değişken isimleri a...z ve A...Z gibi harflerle başlayabilir, _ veya $ işareti de kullanılabilir
    Rakamla başlayamaz ama içinde rakam kullanılabilir
    İsimler casesensitive'dir. myname, Myname, myName birbirinden farklı değişkenlere 
    karşılık gelir
    Bu nedenle camelCase yazım metodolojisi tercih edilir

    if, for, while, else gibi anahtar kelimeler değişken adı yapılamaz



*/