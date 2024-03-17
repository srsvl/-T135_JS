// Objects

var öğrenci={

isim : 'Tarık',
soyİsim : 'Yiğit',
age : 19,
isHeStudent : true,
school : 'İstanbul Teknik University'

}

// öğrenci bu örnekte artık variable değil, objedir, dataları objenin içine koyduğumuzda.

console.log('Öğrenci Adı Soyadı : ' + öğrenci.isim + ' ' + öğrenci.soyİsim +
'\nÖğrenci Yaşı : ' + öğrenci.age +
'\nÖğrenci Kaydı Var mı? :' + öğrenci.isHeStudent +'\nOkulu : ' + öğrenci.school )

// Öğrenci Adı Soyadı : Tarık Yiğit
// Öğrenci Yaşı : 19
// Öğrenci Kaydı Var mı? :true
// Okulu : İstanbul Teknik University

öğrenci.isim = 'Esma Sena'
öğrenci.age = 14
öğrenci.school = 'Galatasaray Lisesi'
// Variable'lara bu şekilde yeni değerler atayabiliyoruz

console.log(' ')
console.log(' ')


console.log('Öğrenci Adı Soyadı : ' + öğrenci.isim + ' ' + öğrenci.soyİsim +
'\nÖğrenci Yaşı : ' + öğrenci.age +
'\nÖğrenci Kaydı Var mı? :' + öğrenci.isHeStudent +'\nOkulu : ' + öğrenci.school )

/*
    Öğrenci Adı Soyadı : Esma Sena Yiğit
    Öğrenci Yaşı : 14
    Öğrenci Kaydı Var mı? :true
    Okulu : Galatasaray Lisesi
*/