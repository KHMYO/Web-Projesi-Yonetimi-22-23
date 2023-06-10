class OrnekSinif {

    /*
    Değişkenler
    
    Özellikler
    
    Yapıcı metod
    
    Normal Metodlar
    */
    isim;
    sayi;
    #deger;

    /*
    1.Adım  Yapıcı metod 
    "constructor" ifadesi kullanılır.
    Önemli : Javascript metod overload desteklemez.
    */
    /*
        2.Adım : 
            Değişkenlerin tanımlanması.
            Aksi belirtilmedikçe her değişken ve metod public olarak nitelendirilir.
            Private metod ve değişken oluşturmak için ismin başıan "#" sembolü eklenir.
                örnek : #sayi
    */

    constructor(metin) {
        this.isim = "Ahmet";
        this.sayi = 5;
        this.#deger = true;
        if (metin === undefined) {

            console.log("Ornek sınıfın boş yapıcı metodu çalıştı.")

        } else {

            console.log(metin);
        }

    }
    /**
     * 
     *  3.Adım : Getter ve Setter ayarları
     *      Önemli : Getter ve setter lar metod gibi tanımlanmalarına karşın değişken gibi kullanıllırlar.
     */


    get Deger() {
        return this.#deger;
    }


    set Deger(value) {
        this.#deger = value;
    }

    /*
        4.Adım : 
            Metod tanımlamaları 
            
    
    */

     Metod1() {
        console.log("Bu boş bir metottur.");
    }

    Metod2(metin){
        console.log(metin);

    }

    #Metod3(){

        console.log("private metod");
    }

}