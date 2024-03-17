/*
    Kitap ürününde KDV oranı 0%
    Gıda ürününde KDV oranı 1%
    Temizlik ürününde KDV oranı 8%
    Teknoloji ürününde KDV oranı 18%


    Bir markete giren Murat
    Bir adet Java kitabı(280$), 2 adet camsil(100$), 1 adet Usb alıyor(180$)
    Fatura tutarını hesaplayan kodu yazınız

*/

var kitap = 280;
var camsil = 50;
var usb = 180;

//const faturaTutarı = (kitap + (2*camsil+(2*camsil*0.08)) + (usb+(usb*0.18)));
const faturaTutarı = (kitap + (2*camsil*1.08) + (usb*1.18));

console.log('Fatura Tutarı : ' + faturaTutarı) // Fatura Tutarı : 600.4