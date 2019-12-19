<template>
<div style="font-size: 13px;" >
    <div class="geneldestek" >
            <h2>E-mail Genel Destek</h2>
    </div>
    <div  class="geneldestek1">
            <p style="margin-left: 50px;font-size: 14px;" >Asterisk * ile işaretli alanların doldurulması zorunludur</p>
            <p style="color: grey;font-weight: bold;float: left;margin-left: 50px;" >Inquiry Field</p><p style="color: red;float: left;" >*</p>
            <select class="seciniz" >
                <option value="seçiniz">SEÇİNİZ</option>
                <option value="website">Website</option>
            </select>
    </div>
     <div class="bilgiler" >
            <p style="font-weight: bold;margin-left: -50px;margin-left: 50px;" >Bilgileriniz</p>
            <p style="color: grey;font-weight: bold;float: left;margin-left: 50px;" >Adı</p><p style="color: red;float: left;" >*</p>
            <input type="text" name="adsoyad1" style="float: left;margin-top: 10px;margin-left: 70px;width: 170px;" required>
            <p style="color: grey;font-weight: bold;float: left;margin-left: 20px;" >Soyadı</p><p style="color: red;float: left;" >*</p>
            <input type="text" name="adsoyad1" style="float: left;margin-top: 10px;margin-left: 88px;width: 170px;" required>
            <div class="bilgiler2" >
            <p style="color: grey;font-weight: bold;float: left;margin-left: 50px;" >e-posta</p><p style="color: red;float: left;" >*</p>
            <input type="text" name="adsoyad1" style="float: left;margin-top: 10px;margin-left: 50px;width: 170px;" required>
            <p style="color: grey;font-weight: bold;float: left;margin-left: 20px;" >Posta Kodu</p>
            <input type="text" name="adsoyad1" style="float: left;margin-top: 10px;margin-left: 70px;width: 170px;" required>
            </div>
            <div class="bilgiler3" >
                <p style="color: grey;font-weight: bold;float: left;margin-left: 50px; margin-top: -10px;" >Telefon No</p>
                <input type="text" name="adsoyad1" style="float: left;margin-top: -13px;margin-left: 35px;width: 170px;" required>
                <p style="color: grey;font-weight: bold;float: left;margin-left: 20px; margin-top: -8px;" >Eğer kurumsal müşteri iseniz lütfen tıklayınız.</p>
                <input type="checkbox" name="vehicle1" value="bilgi" style="margin-top: -20px;" ><br>

            </div>
        </div>
        <div class="bilgiler4">
            <p style="color: grey;font-weight: bold;float: left;margin-left: 50px;" >Konu</p><p style="color: red;float: left;" >*</p>
            <input type="text" name="adsoyad1" style="float: left;margin-top: 10px;margin-left: 60px;width: 370px;" required>
        </div>
        <div class="bilgiler5">
            <p style="color: grey;font-weight: bold;float: left;margin-left: 50px;" >Mesaj</p><p style="color: red;float: left;" >*</p>
            <input type="text" name="adsoyad1" style="float: left;margin-top: 10px;margin-left: 60px;width: 370px;height: 100px;" required>

        </div>
        <div class="bilgiler6" >
            <p style="font-weight: bold;margin-left: -50px;margin-left: 50px;" >Dosya Yükle</p><p style=" color: grey; margin-top: -27px;margin-left: 130px;font-size:12px" >opsiyonel</p>
            <p style="color: grey;font-weight: bold;float: left;margin-left: 50px;" >Dosya Ekle</p>
            <input type="text" name="adsoyad1" style="float: left;margin-top: 10px;margin-left: 40px;width: 370px;height: 25px;" required>
            <button style="color:#087CBE;border-radius: 8px;width: 120px;margin-left: 15px;margin-top: 10px;" >TARA</button>
            <button style="color:#087CBE;border-radius: 8px;font-size: 16px;" >+</button>
            <button style="color:gray;border-radius: 8px;font-size: 16px;" >x</button>
            <p style="color:#666666;font-size:12px; margin-left: 150px;" >En fazla 5 dosya ekleyebilirsiniz. Tavsiye edilen dosya boyutu 10MB altındadır.</p>
            <div class="bilgiler7">
                <input type="checkbox" name="vehicle1" value="bilgi" style="margin-top:17px;float: left;" ><br><a href="#" style="float: left;color:#087CBE" > Samsung Gizlilik Sözleşmesini </a><p style="float: left;margin-left:5px;margin-top:0px" >onaylayınız.</p>
            </div>
            <button style="background:rgb(9, 95, 145);color:white;border-radius: 6px;font-weight: bold;margin-top: 30px;margin-left: 50px;height: 30px;" >Onayla > </button>

        </div>
        <img alt="samsung" src="https://images.mix.com/production/3b/a7/3ba70bac7eecbd15aaae8639c553ecb8.jpg" style="width: 115px;margin-top: 0px;margin-left: 30px;float: left;"><p style="color:#b4b4b4;font-size:14px;margin-top: 25px;margin-left: 50px;" >© 2019 SAMSUNG Electronics Co. Ltd. Tüm hakları saklıdır.</p>

</div>
</template>

<style>

.geneldestek{
    font-weight: normal;
    line-height: 28px;
    height: 50px;
    border-bottom: 1px solid #CCCCCC;
    font-size: 24px;
    margin-bottom: 26px;
    padding: 0;
    font-size: 16px;
    margin-top: 50px;
    font-family: monospace;
    margin-left: 50px;
}
.seciniz{
    width: 350px;
    font-size: 12px;
    font-family:arial;
    font-weight: 10;
    margin-top: 10px;
    margin-left: 100px;
    background-color: 	#D3D3D3;
    border-radius: 4px;
}
.bilgiler{
    margin-top: 70px;
}
.bilgiler2{
    margin-top: 70px;
    margin-left: 0px;
}
.bilgiler3{
    margin-top: 150px;
    margin-left: 0px;
    height: 70px;
    border-bottom: 1px solid #CCCCCC;
}
.bilgiler5{
    margin-top: 60px;
    height: 150px;
    border-bottom: 1px solid #CCCCCC;
}
.bilgiler7{
    margin-top: 30px;
    margin-left: 230px;
}
.bilgiler6{
    border-bottom: 1px solid #CCCCCC;
    height: 250px;
}


</style>