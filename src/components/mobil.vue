<template>

    <div> 
<hr style="margin-top:-20px"> <!--Horizontal çizgi-->

  <div class="üstmobil">
  <h5 style="color:darkblue; font-weight: bold;"><a href="code.html" class="anasayfayazisi" style="margin-left: 60px; color:#372f2b; font-family:Arial, Helvetica, sans-serif; font-size: 13px; text-decoration: none;" > Anasayfa / </a> ÖNE ÇIKAN MOBİL ÜRÜNLER</h5>
  <h1 style="margin-left: 420px; margin-top: 70px; font-weight: bold;"> ÖNE ÇIKAN MOBİL ÜRÜNLER</h1>
  </div>

<div style="margin-left: 30px; margin-top: 50px;" >
 <p  style="font-size:20px">KATEGORİLER</p> 
</div>
  <hr style="width: 23%; margin-left:25px; margin-top:-10px">

  <b><p style="margin-top:-70px; margin-left: 400px;"> 47 </p></b>
  <p style="margin-top:-63px; margin-left: 430px;">Ürün Var </p>


  <!-- Sıralama Filtresi -->
  <div id="app9">
      <Dropdown
       :options="options"
       v-on:selected="validateSelection"
       v-on:filter="getDropdownValues"
       :disabled="false"
       placeholder="Sırala                                                         > ">
     </Dropdown>
     <br />
   </div>
   <!-- Mobil Sayfasının Vertical Menüsü -->
  <div class="mobilkategori" >
      <div class="mobilmenu" >
          <ul style="list-style-type:none;" >
              <li  class="panel1"><a href="" title="" class="yazimbl" style="color: darkblue; text-decoration: none" >MOBİL</a>
                  <ul style="list-style-type:none;">
                      <li><a href="" title="" class="yazimbl" style="color: darkblue; text-decoration: none; ">ÖNE ÇIKAN MOBİL ÜRÜNLER</a>
                      <ul style="list-style-type:none;" >
                          <li> <a href="#" class="yazimbl" style="text-decoration: none;"> Galaxy M30s  </a></li>
                          <li> <a href="#" class="yazimbl" style="text-decoration: none;"> Galaxy M20 </a></li>
                          <li> <a href="#" class="yazimbl" style="text-decoration: none;"> Galaxy Note10|10+ </a></li>
                          <li> <a href="#" class="yazimbl" style="text-decoration: none;"> Galaxy Watch Active 2 </a></li>
                          <li> <a href="#" class="yazimbl" style="text-decoration: none;"> Galaxy A30s </a></li>
                          <li> <a href="#" class="yazimbl" style="text-decoration: none;"> Galaxy Tab S6 </a></li>
                          <li> <a href="#" class="yazimbl" style="text-decoration: none;"> Galaxy A30 | A50 </a></li>
                          <li> <a href="#" class="yazimbl" style="text-decoration: none;"> Galaxy A20 </a></li>
                          <li> <a href="#" class="yazimbl" style="text-decoration: none;"> Galaxy M10 </a></li>
                          <li> <a href="#" class="yazimbl" style="text-decoration: none;"> Galaxy Tab S5e </a></li>

                      </ul>
                      </li>
                      <li><a href="" title="" class="yazimbl"  style="text-decoration: none;">MOBİL ÜRÜNLER</a></li>
                      
                  </ul>
              
              </li>
              <div class="kapalıkategori">
              <li class=""><a href="" title="" class="yazimbl"  style="text-decoration: none;">TV-AV</a>
                
              </li>
              <li><a href="" title="" class="yazimbl"  style="text-decoration: none;">BEYAZ EŞYA</a>
                 
              </li>
              <li><a href="" title="" class="yazimbl" style="text-decoration: none;">AKSESUAR</a>
                 
              </li>
              <li><a href="" title="" class="yazimbl" style="text-decoration: none;">IT-HAFIZA</a>
               
              </li>
          </div>
              
          </ul>
      </div>
      
      
      <div class="cle"></div>
  </div>



<div class="fiyatfiltre">


<h5 style="margin-left: 35px; margin-top: 53px;">FİYATA GÖRE FİLTRELE</h5> 

<hr style="width: 23%; margin-left:25px;">


<!-- Fiyata Göre Filtreleme Kısmındaki 1.Checkbox -->
<div class="checkboxfiltre">
  <input 
    type="checkbox"
    v-model="toggle"
    true-value="yes"
    false-value="no"
  >
</div> 
<div style="margin-top: -65px;">
    <p style="margin-left: 70px; "> 1000 TL - 1500 TL </p>
</div>
  <!-- Fiyata Göre Filtreleme Kısmındaki 2.Checkbox -->
<div class="checkboxfiltre" style="margin-top:-30px;" >
    <input 
      type="checkbox"
      v-model="toggle"
      true-value="yes"
      false-value="no"
    >
  </div> 
  <p style="margin-left: 70px; margin-top: -50px;"> 1500 TL - 2000 TL </p>
    <!-- Fiyata Göre Filtreleme Kısmındaki 3.Checkbox -->
  <div class="checkboxfiltre" style="margin-top:-30px;">
      <input 
        type="checkbox"
        v-model="toggle"
        true-value="yes"
        false-value="no"
      >
    </div> 
    <p style="margin-left: 70px; margin-top: -50px;"> 2000 TL - 3000 TL </p>
      <!-- Fiyata Göre Filtreleme Kısmındaki 4.Checkbox -->
    <div class="checkboxfiltre" style="margin-top:-30px;">
        <input 
          type="checkbox"
          v-model="toggle"
          true-value="yes"
          false-value="no"
        >
      </div> 
      <p style="margin-left: 70px; margin-top: -50px;"> 3000 TL - 5000 TL </p>
        <!-- Fiyata Göre Filtreleme Kısmındaki 5.Checkbox -->
      <div class="checkboxfiltre" style="margin-top:-30px;">
          <input 
            type="checkbox"
            v-model="toggle"
            true-value="yes"
            false-value="no"
          >
        </div> 
        <p style="margin-left: 70px; margin-top: -50px;"> 5000 TL - 7500 TL </p>
          <!-- Fiyata Göre Filtreleme Kısmındaki 6.Checkbox -->
        <div class="checkboxfiltre" style="margin-top:-30px;">
            <input 
              type="checkbox"
              v-model="toggle"
              true-value="yes"
              false-value="no"
            >
          </div> 
          <p style="margin-left: 70px; margin-top: -50px;"> 7500 TL - 10000 TL </p>
            <!-- Fiyata Göre Filtreleme Kısmındaki 7.Checkbox -->
          <div class="checkboxfiltre" style="margin-top:-30px;">
              <input 
                type="checkbox"
                v-model="toggle"
                true-value="yes"
                false-value="no"
              >
            </div> 
            <p style="margin-left: 70px; margin-top: -50px;"> Üstünde 10000 TL </p>

  </div>



<div class="kategori2"> 

<div  class="responsive">
  
  <div  class="gallery">
    <a target="_blank" href="#">
      <img id="vue-app64"  v-bind:title="message34" src="https://smsoptimizedimages.azureedge.net/0018354_samsung-galaxy-note10-256gb-ay-tozu-grisi_550.jpeg" alt="Mountains" width="250" height="250"/>
       </a>
    <p class="yazilarürün2">
        <a  class="ürünyazirenk"> Samsung Galaxy Note10+ 256GB (Ay Tozu Grisi) </a></p> 
        <div id="vue-app" >
            <h5 style="margin-left: 100px; margin-top: 100px;">11399,00 TL</h5>  
            <button onclick="arttir()" class="button button2" >
              <a v-on:click ="click"  style="text-decoration: none;color: #000;" >  Sepete Ekle </a>
            </button>     
                            
        </div>


  </div>
</div>

<div  class="responsive">
    
  <div  class="gallery">
    <a target="_blank" href="#">
      <img id="vue-app63"  v-bind:title="message33" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjjzmfhNHdXjErsRoF9NotMajLxgTd_bIcN_2JpYd5WuSnxfqf" alt="Mountains" width="250" height="250"/>
        </a>
    <p class="yazilarürün2">
        <a class="ürünyazirenk"> Samsung Galaxy Note10+ 256GB (Duman Siyahı) </a></p>
        <div id="vue-app" >
            <h5 style="margin-left: 100px; margin-top: 100px;">11399,00 TL</h5>  
            
            <button  onclick="arttir()" class="button button2" >
              <a v-on:click ="click"  style="text-decoration: none;color: #000;" >  Sepete Ekle </a>
            </button>       
                            
        </div>
  
  </div>
</div>

<div  class ="responsive">
  
  <div  class="gallery">
    <a target="_blank" href="#">
      <img id="vue-app65"  v-bind:title="message35" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRERS-wTGW3123vYKCqh6KU2Hr3Fnzq2sYw4u0SMcqhrWXJ7y01" alt="Mountains" width="190" height="190" style="margin-top:27px"/>
        </a>
    <p class="yazilarürün2"  style="margin-top:150px">
        <a  class="ürünyazirenk"> Samsung Galaxy Note10+ 256GB (Fildişi Beyazı)
          </a></p>
          <div id="vue-app5" >
              <h5 style="margin-left: 100px; margin-top: 100px;">11399,00 TL</h5> 
              <button onclick="arttir()" class="button button2" >
                <a v-on:click ="click"  style="text-decoration: none;color: #000;" >  Sepete Ekle </a>
              </button>       
              
              <button v-bind:title="message" class="button button3"
              >-</button>
                     
          </div>
        
  
  </div>
</div>
<div class="responsive" >
    <div class="div1">
  <div class="gallery">
    <a target="_blank" href="#">
      <img id="vue-app135"  v-bind:title="message95" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeqeL9DMfxmRAXDCWB9eJygQlf-1_cCcoTsbDOs2QcN4mDA_Dn" alt="Mountains" width="250" height="250"/>
      </a>
    <p class="yazilarürün1">
        <a class="ürünyazirenk"> Samsung Galaxy A50 64GB (Prizma Beyaz) SM-A505F </a></p>
        
        <div id="vue-app18" >
            <h5 style="margin-left: 100px; margin-top: 100px;">2999,00 TL</h5> 
            
            <button onclick="arttir()" class="button button2">
              <a v-on:click ="click" style="text-decoration: none;color: #000;" >  Sepete Ekle </a>
            </button>     
            <button v-bind:title="message" class="button button3" >-</button>                    
        </div>
    
  </div>
</div>
</div>
<div class="responsive">
    <div class="div1">
  <div class="gallery">
    <a target="_blank" href="#">
      <img id="vue-app136"  v-bind:title="message96" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeqeL9DMfxmRAXDCWB9eJygQlf-1_cCcoTsbDOs2QcN4mDA_Dn" alt="Mountains" width="250" height="250"/>
       </a>
    <p class="yazilarürün1">
        <a class="ürünyazirenk"> Samsung Galaxy A50 64GB (Prizma Mavisi)  SM-A505F </a></p>
        <div id="vue-app18" >
            <h5 style="margin-left: 100px; margin-top: 100px;">2999,00 TL</h5> 
            
            <button onclick="arttir()" class="button button2">
              <a v-on:click ="click"  style="text-decoration: none;color: #000;" >  Sepete Ekle </a>
            </button>     
            <button v-bind:title="message" class="button button3" >-</button>                    
        </div>
    
  </div>
</div>
</div>
<div class="responsive">
    <div class="div1">
  <div class="gallery">
    <a target="_blank" href="#">
      <img id="vue-app137"  v-bind:title="message97" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeqeL9DMfxmRAXDCWB9eJygQlf-1_cCcoTsbDOs2QcN4mDA_Dn" alt="Mountains" width="250" height="250"/>
        </a>
    <p class="yazilarürün1">
        <a class="ürünyazirenk"> Samsung Galaxy A50 64GB (Prizma Siyah)  SM-A505F </a></p>
        <div id="vue-app18" >
            <h5 style="margin-left: 100px; margin-top: 100px;">2999,00 TL</h5> 
            
            <button onclick="arttir()" class="button button2">
              <a v-on:click ="click" style="text-decoration: none;color: #000;" >  Sepete Ekle </a>
            </button>     
            <button v-bind:title="message" class="button button3" >-</button>                    
        </div>
    
  </div>
</div>
</div>
<div  class="responsive">
    <div class="div1">
  <div  class="gallery">
    <a target="_blank" href="#">
  <!--
  Mouse ürün resminin üzerine geldiğinde ürünün yazısını göstermesi için her ürüne id verildi.
  Id verilmesinin sebebi her ürünün farklı isimde olması.
  v-bind:title kısımlarında yazan message'lere code.js kısmında  isimler tanımlandı.                                                
  -->
      <img id="vue-app138"  v-bind:title="message98" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7vDU59LakNZiFXngQ6EWuwGvtfi8YgSTJpmNlc7QF-WeLEplO" alt=" " width="200" height="200"/>
        </a>

     <p class="yazilarürün3">
        <a   class="ürünyazirenk"> Samsung Galaxy A30 64GB (Sedef Beyazı)  SM-A305F </a></p>
        <div id="vue-app3" >
            <h5 style=" margin-left: 100px;margin-top: 100px;">2499,00 TL</h5>  
            <button  class="button button2" >
              <a  v-on:click ="click" style="text-decoration: none;color: #000;"> Ürünü İncele </a>
            </button> 

  
</div>
  
</div>
</div>
</div>
<div  class="responsive">
    <div class="div1">
  <div  class="gallery">
    <a target="_blank" href="#">
      <img id="vue-app139"  v-bind:title="message99" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7vDU59LakNZiFXngQ6EWuwGvtfi8YgSTJpmNlc7QF-WeLEplO" alt=" " width="200" height="200"/>
      
    </a>
    <p class="yazilarürün3">
        <a   class="ürünyazirenk"> Samsung Galaxy A30 64GB (Sedef Mavisi)  SM-A305F </a></p>
        <div id="vue-app3" >
            <h5 style=" margin-left: 100px;margin-top: 100px;">2499,00 TL</h5>  
            <button  class="button button2" >
              <a  v-on:click ="click" style="text-decoration: none;color: #000;"> Ürünü İncele </a>
            </button>    

  <!--
  Favori butonu kalp iconunu içeren - koduyla birlikte eklendi. Ürün isimlerinde olduğu gibi
  favori butonuna mouse üzerine gelince 'Favorilere Ekle' yazması için v-bind:title eklendi.
  Code.js kısmında yazı tanımlandı.                                              
  -->
            
            <button v-bind:title="message" class="button button3" >-</button>                     
        </div>
  
  </div>
</div>
</div>
<div  class="responsive">
    <div class="div1">
  <div  class="gallery">
    <a target="_blank" href="#">
      <img id="vue-app140"  v-bind:title="message100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7vDU59LakNZiFXngQ6EWuwGvtfi8YgSTJpmNlc7QF-WeLEplO" alt="Northern Lights" width="200" height="200"/>
      
    </a>
    <p class="yazilarürün3">
        <a  class="ürünyazirenk" > Samsung Galaxy A30 64GB (Sedef Siyahı)  SM-A305F </a></p>
        <div id="vue-app4" >
            <h5 style="margin-left: 100px; margin-top:100px;">2499,00 TL</h5>  
            <button   class="button button2" >
              <a v-on:click ="click"  style="text-decoration: none;color: #000;" > Ürünü İncele </a>
            </button>   
            <button v-bind:title="message" class="button button3" >-</button>                      
        </div>
    
  </div>
</div> 
</div>
<div  class="responsive">
    <div class="div1">
  <div  class="gallery">
    <a target="_blank" href="#">
      <img id="vue-app141"  v-bind:title="message101" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7vDU59LakNZiFXngQ6EWuwGvtfi8YgSTJpmNlc7QF-WeLEplO" alt="Mountains" width="250" height="250"/>
      
    </a>
    <p class="yazilarürün3" style="margin-top:-8px">
        <a   class="ürünyazirenk"> Samsung Galaxy A30s 64GB Çift SIM Siyah </a></p>
        <div id="vue-app5" >
            <h5 style="margin-left: 100px; margin-top: 100px;">2599,00 TL</h5> 
            <button  class="button button2" >
              <a v-on:click ="click"  style="text-decoration: none;color: #000;" > Ürünü İncele </a>
            </button>       
            <button v-bind:title="message" class="button button3" >-</button>                  
        </div>
      
  
  </div>
</div>
</div>
<div  class="responsive">
    <div class="div1">
  <div  class="gallery">
    <a target="_blank" href="#">
      <img id="vue-app142"  v-bind:title="message102" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuil0bDGA94y1biuVo2_2HQCeKrD2GCVg-infu5rjszemU-oLw" alt="Mountains" width="250" height="250"/>
      
    </a>   
      <p class="yazilarürün5">
        <a   class="ürünyazirenk"> Samsung Galaxy S10e 128GB (Prizma Yeşil) </a></p>
        <div id="vue-app7" >
            <h5 style="margin-left: 100px; margin-top: 100px;">6499,00 TL</h5> 
            
            <button  class="button button2">
              <a v-on:click ="click"  style="text-decoration: none;color: #000;" > Ürünü İncele </a>
            </button>          
            <button v-bind:title="message" class="button button3" >-</button>               
        </div>
  </div>
</div>
</div>
<div class="responsive">
    <div class="div1">
  <div class="gallery">
    <a target="_blank" href="#">
      <img id="vue-app143"  v-bind:title="message103" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtvKCy55Sp0gF99gTYW_tANPuEi598dpbzoy3VIJcfMnajgmQh" alt="Mountains" width="250" height="250"/>
      
    </a>
    <p class="yazilarürün5">
        <a   class="ürünyazirenk"> Samsung Galaxy M20 32GB SM-M205FZBATUR </a></p>
        <div id="vue-app8" >
            <h5 style="margin-left: 100px; margin-top: 100px;">1799,00 TL</h5> 
            
            <button  class="button button2" >
              <a v-on:click ="click" style="text-decoration: none;color: #000;"  > Ürünü İncele </a>
            </button>       
            <button v-bind:title="message" class="button button3" >-</button>                  
        </div>
  
  </div>
</div>
</div>
<div class="responsive">
    <div class="div1">
  <div class="gallery">
    <a target="_blank" href="#">
      <img id="vue-app144"  v-bind:title="message104" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtvKCy55Sp0gF99gTYW_tANPuEi598dpbzoy3VIJcfMnajgmQh" alt="Mountains" width="250" height="250"/>
      
    </a>
    <p class="yazilarürün4" style="margin-top: 10px;">
        <a  class="ürünyazirenk"> Samsung Galaxy M20 32GB SM-M205FDAATUR</a></p>
        <div id="vue-app17" >
            <h5 style="margin-left: 100px; margin-top: 100px;">1799,00 TL</h5> 
            
            <button onclick="arttir()" class="button button2" >
              <a v-on:click ="click" style="text-decoration: none;color: #000;" >  Sepete Ekle </a>
            </button>       
            <button v-bind:title="message" class="button button3" >-</button>                  
        </div>
  </div>
</div>
</div>
<div class="responsive">
    <div class="div1">
  <div class="gallery">
    <a target="_blank" href="#">
      <img id="vue-app145"  v-bind:title="message105" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtvKCy55Sp0gF99gTYW_tANPuEi598dpbzoy3VIJcfMnajgmQh" alt="Mountains" width="250" height="250"/>
    </a>
    <p class="yazilarürün6">
        <a  class="ürünyazirenk"> Samsung Galaxy M30s (Çift SIM) Karbon Siyahı </a></p>
        <div id="vue-app18" >
            <h5 style="margin-left: 100px; margin-top: 100px;">2699,00 TL</h5> 
            
            <button onclick="arttir()" class="button button2">
              <a v-on:click ="click"  style="text-decoration: none;color: #000;" >  Sepete Ekle </a>
            </button>     
            <button v-bind:title="message" class="button button3" >-</button>                    
        </div>
    
  </div>
</div>
</div>
<div class="responsive">
    <div class="div1">
  <div class="gallery">
    <a target="_blank" href="#">
      <img id="vue-app146"  v-bind:title="message106" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtvKCy55Sp0gF99gTYW_tANPuEi598dpbzoy3VIJcfMnajgmQh" alt="Mountains" width="250" height="250"/>
    </a>
    <p class="yazilarürün6">
        <a  class="ürünyazirenk"> Samsung Galaxy M30s (Çift SIM) Pasifik Mavisi </a></p>
        <div id="vue-app18" >
            <h5 style="margin-left: 100px; margin-top: 100px;">2699,00 TL</h5> 
            
            <button onclick="arttir()" class="button button2">
              <a v-on:click ="click"  style="text-decoration: none;color: #000;" >  Sepete Ekle </a>
            </button>     
            <button v-bind:title="message" class="button button3" >-</button>                    
        </div>
    
  </div>
</div>
</div>
<div  class="responsive">
    <div class="div1">
  <div  class="gallery">
    <a target="_blank" href="#">
      <img id="vue-app147"  v-bind:title="message107" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRU6aIjfDVOvx94RJAqKxgA-wfk3AjKuIOe1-7OcrDw0e0qvTAw" alt="Mountains" width="250" height="250"/>
      </a>
    <p class="yazilarürün2">
        <a   class="ürünyazirenk"> Samsung Galaxy Note10 256GB (Ay Tozu Grisi) </a></p> 
        <div id="vue-app" >
            <h5 style="margin-left: 100px; margin-top: 100px;">9899,00 TL</h5>  
            <button onclick="arttir()" class="button button2" >
              <a v-on:click ="click"  style="text-decoration: none;color: #000;" >  Sepete Ekle </a>
            </button>     
                            
        </div>


  </div>
</div>
</div>
<div class="responsive">
    <div class="div1">
  <div  class="gallery">
    <a target="_blank" href="#">
      <img id="vue-app148"  v-bind:title="message108" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjjzmfhNHdXjErsRoF9NotMajLxgTd_bIcN_2JpYd5WuSnxfqf" alt="Mountains" width="250" height="250"/>
      </a>
    <p class="yazilarürün2" >
        <a  class="ürünyazirenk"> Samsung Galaxy Note10 256GB (Duman Siyahı) </a></p>
        <div id="vue-app" >
            <h5 style="margin-left: 100px; margin-top: 100px;">9899,00 TL</h5>  
            
            <button  onclick="arttir()" class="button button2" >
              <a v-on:click ="click" style="text-decoration: none;color: #000;" >  Sepete Ekle </a>
            </button>       
                            
        </div>
  
  </div>
</div>
</div>
</div>


<div class="pagination" style="margin-left: 1200px;">
    <a href="#">&laquo;</a>
    <a href="#">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
    <a href="#">&raquo;</a>
</div>
</div> 
</template>


<style>
/* margin kullanılarak resimler ve ikonların yerleri belirtildi. */
/*Samsung Logo*/
img.sms{
	margin-left:90px;
	margin-top:15px;
}

/*sepet ikonu*/
img.icon2{
	margin-top:-95px;
	margin-left:420px
}
/*Üyelik dropdown ikonu*/
img.icon1{
	margin-top:5px;
	margin-left:450px
}

/*Ücretsiz Kargo İkonu*/
img.a1 {
	margin-left:110px;
}
/*14 gün iade ikonu*/
img.a2 {
	margin-left:230px;
}
/*kargo takibi ikonu*/
img.a3{
	margin-left:220px;
}
/* Ücretsiz Kargo*/
span.b1{
	font-size:13pt;
}
/*14 Gün Koşulsuz İade*/
span.b2{
	font-size:13pt;
}
/*24/7 Kargo Takibi*/
span.b3{
	font-size:13pt;
}

p.text-shop{
	margin-left:430px;
	font-size:10.5pt;
	margin-top:20px

}


  body {
      font-family: Arial, Helvetica, sans-serif;
      line-height: 3em;
    }
 
   /* Ürün bölmelerinin çerçevesiz olarak görünmesi */
  .gallery {
    border: 0px solid #ccc;
  }
  
 /* Ürün bölmelerinin yerleri ve büyüklükleri ayarlandı */
  .responsive {
    padding: 0 6px;
    float: left;
    width: 24.99999%;
    margin-left:80px;
  }
  .responsive0 {
    padding: 0 6px;
    float: left;
    width: 24.99999%;
    margin-left:80px;
  }
/*Ürünlerin bulunduğu kategori*/
  .kategori2{
    margin-top: -300px;
    margin-left: 150px;

  }
  .satirboslugu{

    height: 110px;
  }
  .bosluk{

    line-height: 50px;
  }
  /*Altmenü alanı1*/
  .footer{
    background: #e9e9e9;
    color: #000;
    height: 250px;
    position: relative /* normal şekilde dizilirler */
    
}
.footer.footer-content{
    border: 1 px solid #ccc;
    height: 350px;
    display: flex;  /* soldan sağa yatay olarak esnek şekilde  */


}
.footer  .footer-content .footer-section{
    flex: 1;
    border: 1 px solid #000;
    padding: 25px;

}
/* linklerin öğe işaretleri yok. (Yazıların başlarında yuvarlak veya herhangi bir ikon yok)*/
.altmenu1{
    list-style-type: none;
   
}
.altmenu1-a{
	color: #75787b;
	text-decoration: none;
    display: block; /*Alt satıra geçmesi için*/
    font-family: SamsungOne;
    font-weight: 400;
    font-size: 13px;
    line-height: 1.71;
	
}
/* Alt menünün içindeki linklerin font özelliklerni belirler*/
.site{
    margin-bottom: 0;
    font-family: SamsungOne;
    font-size: 16px;
    line-height: 2.0;
    color: #000;
}

/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/

.footer  .footer-content .footer-section-siteharitası{
    width: 200px;
    padding: 20px;
    position: relative;
    float: left;
}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer  .footer-content .footer-section-siteharitası{
    width: 200px;
    padding: 20px;
    position: relative;
    float: left;


}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer  .footer-content .footer-section-faydalıbilgiler{
    width: 200px;
    padding: 20px;
    position: relative;
    float: left;
}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer  .footer-content .footer-section-destek{
    width: 200px;
    padding: 20px;
    position: relative;
    float: left;

}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer  .footer-content .footer-section-sosyalmedya{
    width: 300px;
    padding: 20px;
    position: relative;
    float: left;

}

/* Facebook ikonunun yerini ve büyüklüğünü ayarlıyor.*/
.facebook{
    height: 15%;
    width: -55%;
    padding: 10px;
    position: relative;
    float: left;
}
/* Twitter ikonunun yerini ve büyüklüğünü ayarlıyor.*/
.twitter{
    height: 15%;
    width: -55%;
    padding: 10px;
    position: relative;
    float: left;

}
/* Youtube ikonunun yerini ve büyüklüğünü ayarlıyor.*/
.youtube{
    height: 15%;
    width: -55%;
    padding: 10px;
    position: relative;
    float: left;

}
/* İnstagram ikonunun yerini ve büyüklüğünü ayarlıyor.*/
.instagram{
    height: 15%;
    width: -55%;
    padding: 10px;
    position: relative;
    float: left;

}

/* Bu kısım Telefonlar-Tabletler-Televizyonlar tab'ının bulunduğu divin konumunu belirliyor*/
.container {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-right: 7.5px;
    padding-left: 7.5px;
}


/* Telefonlar-Tabletler-Televizyonlar tab'ını ortalar. */
#shop-homepage-tabs {
    justify-content: center;
    
}
/* Telefonlar-Tabletler-Televizyonlar tab'ının alt çizgisi siler */
.nav-tabs {
    border-bottom: 0px solid #dee2e6;
}
/* Telefonlar-Tabletler-Televizyonlar tab'ını konumlandırıyor. */
.nav {
    display: -ms-flexbox;
    display: flex; /* soldan sağa yatay olarak esnek şekilde  */
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none; /* öğe işaretleri yok. */
}
/*Altmenü alanı2. Footer2 div'i ile oluşturulan alt kısma renklendirme ve boyutlandırma işlemleri yapıldı. */
.footer2{
    background: #3f3f3f;
    color: #000;
    height: 450px;
    position: relative;
}
/* Alt menüde yazılan linklerin font özellikleri belirlendi*/
.altmenu-a{
	color: #ccc;
	text-decoration: none;
    display: block; /*Alt satıra geçmesi için*/
    font-family: SamsungOne;
    font-weight: 400;
    font-size: 13px;
    line-height: 1.71;
	
}

.altmenu{
    list-style-type: none; /* Yazıların başında öğe işaretleri yok.*/
   
}
.footer2  .footer2-content .footer2-section{
    flex: 1;
    border: 1 px solid #000;
    padding: 40px;

}
/*Kredi kartı iconlarının boyutlarını ve yerlerini belirler.*/
/*visa ikon*/
.vısa{
    height: 45px;
    width:60px;
    top:150px;
    position: relative;
    float: left;
}
/*Mastercard ikon*/
.mastercard{
    height: 45px;
    width:60px;
    top:150px;
    position: relative;
    float: left;
}
/*americanexpress ikon*/
.amerıcanexpress{
    height: 45px;
    width:60px;
    top:150px;
    position: relative;
    float: left;
}
/*payu ikon*/
.payu{
    height: 45px;
    width:60px;
    top:150px;
    position: relative;
    float: left;
}

/* Kredi kartı ikonlarının içinde bulunduğu div. Margin div'in konumunu belirliyor */
.footerı2-ımage{
    margin-left: 70px;
}

.footer2-text{
    margin-top: -115px;
    margin-right: 300px;
}
/* footer2-text div'inin içindeki paragrafın yazı tipi, konumu ve büyüklüğünün düzenlemesi.  */
.altmenuyazı{
    color: #929292;
    font-family: SamsungOne;
    font-weight: 400;
    font-size: 12px;
    margin: 5px 0;
    text-align: right;
    
}
.button {
    margin-bottom: 0;
    border-radius: 0 global-radius global-radius 0;
  
  
}
/* Email type'ını içinde bulunduran div.Burada email type'ının konumlandırılması yapıldı. */
.databinding{
    margin-top: 40px;
    margin-left: 900px;

}
/* Altmenuyazı class'ını içinde bulunduran div. Class'ın konumlandırılması yapıldı. */
.footer2-text2{
    margin-top: 0px;
    margin-right: 150px;
}

/* Email kutucuğunun üzerinde bulunan kaydol adlı link.*/
.kaydol{
    list-style-type: none; /* Yazıların başında öğe işaretleri yok.*/
    font-family: SamsungOne; /* Yazı tipi*/
    text-decoration: none; /* Alt yazı yok.*/
    color: #000;
    

}
/* İçinde checkbox ve label bulunduran div. Konumlandırma yapıldı.*/
.robotdegilim{
    background: #fff;
    margin-top: 55px;
    margin-left: 900px;
    height: 70px;
    width: 300px;


}


/* designed by linkine font özellikleri verildi ve konumlandırma yapıldı .*/
.designed-a{
    color: #ccc;
	text-decoration: none;
    display: block; /*Alt satıra geçmesi için*/
    font-family: SamsungOne;
    font-weight: 400;
    font-size: 13px;
    margin-left: 1000px;
    margin-top: 40;
   
    
}
/* designedby class'ının içindeki img class. Burada eklenen resme konumlandırma ve boyutlandırma yapıldı.*/
.kreatif{

    height: 35;
    width: 35;
    margin-left: 1105px;
    margin-top:-35px;
}


/* Reference : https://designmodo.com/create-css3-mega-menu/ */

/* Resetleme */
.nav2,
.nav2 a,
.nav2 ul,
.nav2 li,
.nav2 div,
.nav2 form,
.nav2 input {
	margin: 0;
	padding: 0;
	border: none;
    outline: none;
}


/*Alt çizgiyi kaldırıyor. */
.nav2 a { text-decoration: none; }

.nav2 li { list-style: none; }

/* Menu Container */
.nav2 {
	display: inline-block; /*Yan yana dizilmeleri için*/
	position: relative;
	cursor: default;
    z-index: 500;
}

/* Menü List */
.nav2 > li {
	display: block; /*Alt satıra geçmesi için*/
    float: left;
    
}

/* Menü Links */
.nav2 > li > a {
	position: relative;
	display: block; /*Alt satıra geçmesi için*/
	z-index: 510;
	height: 54px;
	padding: 0 20px;
	line-height: 54px;
	
	font-family: Helvetica, Arial, sans-serif;
	font-size: 12px;
	color: #000000;
	text-shadow: 0 0 1px rgba(0,0,0,.35);

	background: #ffffff;
	border-left: 1px solid white;
	border-right: 1px solid white;


}

.nav2 > li:hover > a { background:white;  }



/* Menu Dropdown */
.nav2 > li > div {
	position: absolute;
	display: block; /*Alt satıra geçmesi için*/
	width: 100%;
	top: 50px;
	left: 0;

	opacity: 0;
	visibility: hidden;
	overflow: hidden;

	background: #ffffff;
	border-radius: 0 0 3px 3px;

}

/* Bu kısımda kategorinin üzerine mouse gelmeden önce alt kategorilerin gizli kalması için gerekli CSS kodları yazıldı.*/
.nav2 > li:hover > div {
	opacity: 1;
	visibility: visible;
	overflow: visible;
}

/* Menu Content Styles */
.nav2 .nav2-column {
	float: left;
	width: 20%;
	padding: 2.5%;
}

.nav2 .nav2-column h3 {
	margin: 20px 0 10px 0;
	line-height: 18px;
	
	font-family: Helvetica, Arial, sans-serif;
	
	font-size: 14px;
	color: #372f2b;
	text-transform: uppercase; /* Yazıyı büyük harflerle göstermesi için */
}
/*Üst kategori*/
.nav2  { color: white; }

.nav2 .nav2-column li a {
	display: block;
	line-height: 26px;
	
	font-family: Helvetica, Arial, sans-serif;
	
	font-size: 13px;
	color: #888888;
}

.nav2 .nav2-column li a:hover { color:white; }

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table; /*Göüntüyü table ile istenilen şekle getirdik*/
   
  }
  /*İç içe olan öğelerin divin yer özellikleri tanımlandı.*/
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    height: 30px;
  }
  /* Modal içindeki kısımların kapsayan alanın şekillendirilmesi.*/
  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
  /* Kalıcı bir başlık içeren modal için bir başlık tanımlar*/
  .modal-header h3 {
    margin-top: 0;
    color: #000;
  }
  /*Metin, görüntüler ve formları yani asıl yerleri içerir*/
  .modal-body {
    margin: 20px 0;
  }
  
  
  /* İl değiştirme modal'ında bulunan ekranı kapatma butonu (X) için gerekli konumlandırma ve boyutlandırma yapıldı.*/
  .modal-default-button {
    color: white;
    background-color: black;
    float: right;
    margin-right:-55px;
    margin-top: -60px;
    border-radius: 20px; /* Yuvarlaklığı belirleme*/
    -moz-border-radius: 10px; /* Yuvarlaklığı belirleme*/
    -webkit-border-radius: 10px; /* Yuvarlaklığı belirleme*/
    
  }



/*Sepet iconunun üzerinde bulunan ve arttir fonksiyonuna bağlı olarak artan buton */
  input[type="button"]{
    width: 30px;
    height: 30px;
    border:none;
    font-size:20px;
    background: white;
    color:#E7E7E7;
    }

    
.button{
   
    border: none;
    color: white;
    margin-left: 40px;
    font-size: 14px ; 
    border-radius: 20px;
    margin-top: 0px; 
    transition-duration: 0.4s; /* Kapatma butonuna bastıktan sonra sayfanın kapanması için gerekli süre*/
    display: inline-block;
    font-family: cursive;
   
}
/* Sepete Ekle butonu*/
.button2 {
    background-color: white; 
    color: black; 
    border: 1px solid #000;
    width: 150px;
    
}
/* Reference: https://www.w3schools.com/css/css3_buttons.asp */
/* Mouse butonun üzerine gelince renk değiştirme */
.button2:hover {
    background-color: #008CBA;
    color: white;
}

.button3 {
    background-color: white; 
    color: black; 
    border: 1px solid #000;
    width: 50px;

    
}
  /* Mouse butonun üzerine gelince renk değiştirme */
.button3:hover {
    background-color: #008CBA;
    color: white;
}

/*menu5 dropdown menüsünün konumlandırılması ve boyutlandırılması */
.menu5{   
    position:absolute;
    z-index: 20; /* Dropdown menünün slider kısmının altında kalmaması için yazıldı.*/
    background: #fff;
    height: 40px;
    width: 50px;
    margin-left:500px;
	margin-top:-90px;
}
/*İçinde uye ol, uye girisi, sifremi unuttum ve istek listesi linklerini barındıran class.*/
.uyegirisi1{
    float: left;
    position: relative;
    transition: all .3s ease 1s;
    margin-bottom:15px;
    margin-left:250px;
    
}
.uyegirisi{
    display: block;
    font-size: 14px;
    color: #000;
    padding: 0 15px;
    line-height: 50px;
    border-right: 1px solid rgba(0, 0, 0, .1);
    
}
/* İçinde üyelik için bulunan 4 linkin kategorisi. Konumlandırılması, boyutlandırılması ve gizliliği ayarlandı.*/
.uyegirisi2{
    background: #fff;
    width: 150px;
    position: absolute;
    margin-top: 35px;
    margin-left: 350px;
   opacity: 0; /*Opaklık*/
   transition: 250ms all; /*Geçiş Süresi*/
   visibility: hidden; /*Gizlilik*/
   position:absolute; 
   z-index:2; /* Kategori Slider menünün altında kalmasın.*/
   border: 1px solid #ccc;
   

}
/*Üye Ol, Üye Girişi, Şifremi Unuttum ve İstek Listesi linklerinin classı*/
.uyegirisi3{
    display: block; /*Alt Satıra Geçmesi için */
    padding: 7px 10px;
    color: #000;
    font-size: 12px;
    text-decoration: none;
    
}

.uyegirisi1:hover .uyegirisi2{
    opacity: 1;
    visibility: visible;
    top: 50px;
}


/*  menu12 adlı div'in içinde bulunan kişisel bilgiler, iletişim bilgileri ve seçenekler 
divleri için alan yükseliği belirtildi. */

.menu12{
    height: 1650px;
}


/* ÜYE OL yazısının font özellikleri belirlendi.*/
.sayfabaslıgı3{
    font-family: "SamsungSharpSans-Regular";
    font-size: 22px;
    font-weight: normal;
    box-sizing: inherit; 
    line-height: 60px;
    text-align: center;  /* Konumlandırma ortada*/  
}
/* Kişisel Bilgiler yazısının font özellikleri belirlendi.*/
.kisiselbilgiler{
   font-family: Georgia, serif;
   text-align: center;
   margin-top: 50px;
}
/* Cinsiyet, Ad ,Soyad, Eposta formlarının içinde bulunduğu div. Boyutlandırma ve konumlandırma yapıldı.*/
.kisiselbilgiler2{
    background-color: #f9f9f9;
    height: 300px;
    width: 1300;
    margin-left: 120px;
}
/* Cinsiyet yazısının font özellikleri.*/
.cinsiyet{
    margin-left: 280px;
    padding: 55;
    width: 30;
}
/*İçinde radio buttonları bulunduran div'in konumlandırılması*/
.buton1{
    margin-top: -70px;
    margin-left: 380px;
}

.kadınbuton{
    
    margin-left: 120px;
    margin-top: -80px;
    position: relative;
}
.erkekbuton{
    position: relative;
}

/* Ad text'inin boyutlandırılması ve konumlandırılması.*/
.ad{
    margin-left: 30px;
    margin-top: 10px;
    height: 40px;
    width: 400px;
}
/* Adı: yazısının konumlandırılması.*/
.ad1{
    margin-left: 350px;
    float: left;
}
/* * işaretine renk verildi ve konumlandırıldı */
.zorunlualan, .zorunlualan1, .zorunlualan2 , .zorunlualan3 , .zorunlualan6, .zorunlualan7{
    color: red;
    float:right;
    margin-right: 400px;
    
}
/* Soyad text'inin boyutlandırılması ve konumlandırılması.*/
.soyad{
    margin-right: 160px;
    margin-top: 10px;
    height: 40px;
    width: 400px;
}
/* Soyadı: yazısının konumlandırılması.*/
.soyad1{
    margin-left: 350px;
    float: left;
}
/* posta text'inin boyutlandırılması ve konumlandırılması.*/
.posta{
    margin-left: 10px;
    margin-top: 20px;
    height: 40px;
    width: 400px;
}
/* E-posta: yazısının konumlandırılması.*/
.posta1{
    margin-left: 350px;
    float: left;
}
/* İletişim Bilgileri yazısını içinde bulunduran div*/
.iletisimbilgileri{
    font-family: Georgia, serif;
    text-align: center;
    margin-top: 50px;
}
/*Telefon: yazısını ve text'ini içereren div. Boyutlandırma ve konumlandırma yapıldı.*/
 .iletisimbilgileri2{
    background-color: #f9f9f9;
    height: 110;
    width: 1300;
    margin-left: 120px;
}
.text-box single-line{
    white-space: nowrap
}
.telefon{
    margin-left: 10px;
    margin-top: 10px;
    height: 40px;
    width: 400px;
}
.telefon1{
    margin-left: 350px;
    float: left;
}
.secenekler{
    font-family: Georgia, serif;
    text-align: center;
    margin-top: 50px;
}
.secenekler2{
    background-color: #f9f9f9;
    height: 400;
    width: 1300;
    margin-left: 120px;
}
/* İçinde label ve checkbox bulunan divin boyutlandırılması ve konumlandırılması*/
.bültenler1{

    background-color: #fff;
    height: 130px;
    width: 700px;
    margin-left: 420px;
    border-style: solid; 
    border-width: 0.5px;
    border-color: #ccc;
}
/* Bültenler: yazısının konumlandırılması.*/
.bültenler{
    margin-left: 350px;
    float: left;
}
/*Bültenler1 divinin içinde yer alan yazının ait olduğu class'ın font özellikleri */
.bülten2{
    background-color: #f9f9f9;
    height: 200;
    width: 1300;
    font-family: "Georgia, serif"; /*Yazı tipi*/
    font-size: 14px;   
    
}
/*Kullanıcı Sözleşmesi: yazısının font özellikleri, boyutlandırılması ve konumlandırılması.*/
.sözlesme{
    font-family: Georgia, serif;
    margin-top: 50px;
    margin-left: 280px;
    width: 150;
}
/*İçinde link,checkbox bulunduran label.  */
.sözlesme2{
    background-color: #fff;
    height: 100px;
    width: 500px;
    margin-left: 460px;
    top:0;
    border-style: solid; /*Çerçeveyi çizgi ile belirginleştirme*/
    border-width: 0.5px;
    border-color: #ccc;
}
/*Label içindeki link verilen yazının siyah renkte olması*/
.altmenu-sözlesme{
    color: #000;
}
/*Gizlilik Sözleşmesi: yazısının font özellikleri, konumlandırılması ve boyutlandırılması*/
.gizlilik{
    font-family: Georgia, serif;
    margin-top: 50px;
    margin-left: 260px;
    width: 200;
   
}
/* Gizlilik ile ilgili yazının boyurlandırılması ve konumlandırılması. */
.gizlilik2{
    background-color: #fff;
    height: 100px;
    width: 500px;
    margin-left: 440px;
    border-style: solid; /*Çerçeveyi çizgi ile belirginleştirme*/
    border-width: 0.5px;
    border-color: #ccc; 
}
/*Kullanıcı ve Gizlilik Sözleşmesi ile alakalı yazıların rengi*/
.altmenu-sözlesme{
    color: #000;
}
/*Şifre yazısı için gerekli font özellikleri ve konumlandırma*/
.sifre{
    font-family: Georgia, serif;
    text-align: center;
    margin-top: 50px;
}
/* Şifre, Şifre Tekrarı ve Ben robot değilim kısımlarını içeren div'in boyutlandırılıp konumlandırılması*/
.sifre2{
    background-color: #f9f9f9;
    height: 270;
    width: 1300;
    margin-left: 120px;
}
/*Şifre girilmesi için gerekli text*/
.sifree{
    margin-left: 30px;
    margin-top: 10px;
    height: 40px;
    width: 400px;
}
/*Şifre: yazısının konumlandırılması. */
.sifree1{
    margin-left: 350px;
    float: left;
}
/*Şifre tekrarının girilmesi için gerekli text*/
.sifretekrar{
    margin-left: 22px;
    margin-top: 10px;
    height: 40px;
    width: 400px;
}
/*Lütfen şifrenizi tekrar giriniz: yazısının konulandırılması*/
.sifretekrar1{
    margin-left: 200px;
    float: left;
}
/* İçinde checkbox,img ve ben robot değilim label'i olan div.*/
.robotdegilim0{
    background: #fff;
    margin-top: 45px;
    margin-left: 500px;
    height: 70px;
    width: 300px;
    border: 0.1px solid #ccc;
}
/*Robot değilim resminin konumlandırılması ve boyutlandırılması.*/
.robotdegilimresim2{
    height: 60px;
    width: 70px;
    margin-left: 220px;
    margin-top: -65px;
}
/*Kaydet butonunun bulunduğu div.*/
.kaydet{
    margin-left: 600px;
    margin-bottom: 10px;
    
    
    
} 
.kaydeta{
    margin-left: 600px;
    margin-bottom: 10px;
    width:50px ;
    
    
} 
/*Kaydet Linki*/
.kaydet2{
    text-decoration: none;
    color:#ccc;
   
}

/*Sepete Ekle sabitleme butonu*/
.kaydet22{
    text-decoration: none;
    color:#ccc;
    margin-left: -55px;
    margin-top: -10px;
   
}
/*Kaydet butonunun özellikleri. */
.kaydet1{
    background-color: #120a8f ; 
    color: black; 
    border: 1px solid #120a8f ;
    border-radius: 20px;
    padding: 15px 170px;
    
   
}
/*Mouse butonun üzerine gelince yazının ve butonun renklerinin değişmesi.(Hover: mouse işlemi için)*/
.kaydet1:hover{
    background-color: #fff;
    color: #000;
}



.yeniüye1{
    font-size: 20px;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    text-align: center;
    font-weight: 20;
    
}
.yeniüye{
    height: 150px;
    width: 600px;
    margin-left: 100px;
    
}
.yeniüye2{
    margin: 0 0 30px;
    border-top: 1px solid #e6e6e6;
    background-color: #f9f9f9;
    padding: 30px;
    line-height: 22px;
    height: 150px;
    width: 600px;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";;

}
/*Üye Ol butonu*/
.üyeol1{
    background-color: #120a8f ; 
    color: black; 
    border: 2px solid #120a8f ;
    border-radius: 20px;
    padding: 15px 170px;
}
  /*Mouse butonun üzerine gelince butonun rengi değişir*/
  .üyeol1:hover {
    background-color: #fff;
    color: #000;
}
/*Üye Ol butonunu kapsayan div*/
.üyeol{
    margin-left: 100px;
}
/*Üye Ol linki*/
.üyeol2{
    text-decoration: none;
    color:#ccc;
    
}
.üyegirisi1{
    font-size: 20px;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    text-align: center;
    font-weight: 20;
}
.üyegirisi{
    height: 150px;
    width: 600px;
    margin-left: 745px;
    margin-top: -170px;
}
.üyegirisi2{
    border-top: 1px solid #e6e6e6;
    background-color: #f9f9f9;
    padding: 90px;
    line-height: 22px;
    height: 380px;
    width: 600px;
}

/* Email type */
.input-group-field{
    margin-left: 80px;
    margin-top: -50px;
    height: 40px;
    width: 400px;
}

/*Sifre type*/
.input-group-field2{
    margin-left: 80px;
    margin-top: -40px;
    height: 40px;
    width: 400px;
}

/*Checkbox type*/
.input-group-field3{
    margin-left: 100px;
    margin-top: 70px;
}

.benihatırla2{
    margin-left: 120px;
    margin-top: -20px;
}

.sifremiunuttum{
    text-decoration: none;
    color: #000;
    margin-left: 300px;
    
}
/* Link'e renk vermek için yazıldı*/
.sifremiunuttum:visited{
    color: #000;
}
/* Mouse yazının üzerine gelince renk değişikliği */
.sifremiunuttum:hover{
    color: cornflowerblue;
}
.sifremiunuttum1{
    margin-top: -15px;
}
/* İçinde checkbox,img ve label bulunduran div. Konumlandırma yapıldı.*/
.robotdegilim1{
    background: #fff;
    margin-top: 45px;
    margin-left: 100px;
    height: 70px;
    width: 300px;
    border: 0.1px solid #ccc;
}
/*giris butonunu içinde bulunduran div.*/
.giris{
    margin-left: 100px;
    margin-bottom: -30px;
    
}
/*giris linki*/
.giris2{
    text-decoration: none;
    color:#ccc;
}
/*giris butonu*/
.giris1{
    background-color: #120a8f ; 
    color: black; 
    border: 2px solid #120a8f ;
    border-radius: 20px;
    padding: 15px 170px;
    margin-top: 130px;
    
}
/*Mouse'un butonun üzerine gelince renk değiştirmesi*/
.giris1:hover{
    background-color: #fff;
    color: #000;
}
.robotdegilimresim4{
    height: 45px;
    width: 55px;
    margin-left: 230px;
    margin-top: -50px;
}
.altmenüler{
    margin-top: 500px;
}

.sifreunutma{
    margin: 0 0 30px;
    border-top: 1px solid #e6e6e6;
    background-color: #f9f9f9;
    padding: 50px;
    line-height: 22px;
    height: 300px;
    width: 1100px;
    margin-left:180px;
    margin-top: 50px;
}
.sifremiunuttum2{
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    margin-left: 200px;
    margin-top: 10px;
}
.epostaadresi{
    margin-left: 10px;
    margin-top: 25px;
    height: 40px;
    width: 400px;
}
.epostaadresi1{
    margin-left: 160px;
    float: left;
    margin-top: 32px;
}

.robotdegilim2{
    background: #fff;
    margin-top: 45px;
    margin-left: 330px;
    height: 70px;
    width: 300px;
    border: 0.1px solid #ccc;
}
/*Şifremi hatırlat butonunu içinde bulunduran div*/
.sifre5{
    margin-left: 500px;
    margin-bottom: 10px;
    
}
/*Şifremi Hatırlat linki*/
.sifremihatırlat1{
    text-decoration: none;
    color:#ccc;
}
/*Şifremi hatırlat butonu*/
.sifremihatırlat{
    background-color: #120a8f ; 
    color: black; 
    border: 2px solid #120a8f ;
    border-radius: 20px;
    padding: 15px 170px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 15;
    margin-top: 100px;
}
/* Mouse'un butonun üzerine gelince renk değiştirmesi */
.sifremihatırlat:hover{
    background-color: #fff;
    color: #000;
}
.robotdegilimresim3{
    height: 40;
    width: 50;
    margin-left: 20px;
}
.onecıkantv{
    height: 3250px;
}
.breadcrumb{
    margin: 0;
    padding: 5px 10px;
    background-color: transparent;
    display: flex;
    flex-wrap: wrap;
}
.breadcrumb li {
    display: inline-block;
    
}
.anasayfa5{
    font-family:Georgia, 'Times New Roman', Times, serif;
    text-decoration: none;
    color: #000000;
}
.avurunleri{
    color: darkblue;
}
.anasayfa6{
    font-family:Georgia, 'Times New Roman', Times, serif;
    color: #000000;
    text-decoration: none;
}
.kategoriler1{
    position: relative;
    margin: 0 0 10px;
    border-bottom: 1px solid #ddd;
    background: #fff;
    font-size: 18px;
    color: #444;
    cursor: pointer;
    width: 200px;
    margin-left: 80px;
    text-decoration: none;
    margin-top: 110px;
}

.kategoriler{
    width: 430px;
    margin-top: -3100px;
}
.kategoriler2{
    margin-left: 50px;
    margin-top: 20px;


}
.panel2{
    text-decoration: none;
    color: #000;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.panel2:hover{
    color: rgb(42, 42, 173);
}
.fıyat1{
    list-style-type: none;
    text-decoration: none;
    margin-left: 90px;
    border-bottom: 1px solid #ddd;
    width: 220px;
}
.fıyat2{
    color: #444;
}
.fıyat2:hover{
    color: #444;
}
.fıyat3{
    margin-left: 100px;
}
.onecıkanbaslık{
    margin-top: 50px;
    margin-left: 400px;
    font-size: 40px;
    width: 700px;
    font-weight: bold;
}
.onecıkanbaslık1{
    margin-left: 400px;
    font-weight: bold;
    
}
.onecıkanbaslık2{
    margin-left: 420px;
    margin-top: -50px;
}
.example2{
    margin-left: 1100px;
    margin-top: -40px;
    height: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    border: 1px solid white;
    
}

.urunler1{
    margin-left: 400px;
    margin-top: 80px;
    width: 300px;
}
.urunler2{
    margin-left: 800px;
    margin-top:-305px;
    width: 300px;
}
.panel5{
    padding: 0 18px;
    background-color: white;
    display: none;
    overflow: hidden;
}

#verticle {
    border-left: 1px solid #ccc;
    height: 200px;
    position: absolute;
    left: 25%;
    margin-left: -2px;
    margin-top: -60px;
}
.mserisi-ozellikler1{
    margin-left: 150px;
    margin-top: -550px;
}
.mserisi-ozellikler2{
    margin-left: 550px;
    margin-top: -110px;
}
.mserisi-ozellikler3{
    margin-left: 900px;
    margin-top: -110px;
}
.mserisi-ozellikler4{
    margin-left: 1200px;
    margin-top: -110px;
}
.uekranp1{
    margin-top: -1400px;
    margin-left: 300px;
}
.tasarım1{
    margin-top: 1000px;
    font-size: 55px;
    font-weight: bold;
    margin-left: 370px;
}
.tasarım2{
    margin-left: 350px;
    margin-top: 50px;
}
.uclukamera{
    width: 400px;
    height: 600px;
    margin-top: 100px;
    margin-left: 150px;
}
.uclukamera3{
    margin-left: 750px;
    margin-top: -650px;
}
.ultragenis{
    width: 900px;
    font-size: 80px;
    font-weight: bold;
    margin-left: 350px;
}
.ultragenis2{
    margin-top: 100px;
    margin-left: 350px;
    font-size: 16px;
}

.ultragenis4{
    background:url(https://images.samsung.com/is/image/samsung/tr-feature---184096045) ;
    height: 90px;
    width: 90px;
    margin-left: 600px;
    margin-top: 80px;
}
.ultragenis5{

    height: 90px;
    width: 90px;
    margin-left: 200px;
    margin-top: 80px;
}
.odakkamera{
    width: 1000px;
    font-size: 80px;
    font-weight: bold;
    margin-left:300px;
    margin-top: 100px;
}
.odakacik{

    height: 90px;
    width: 90px;
    margin-left: 780px;
    margin-top: 60px;
}
.odakkapali{

    height: 90px;
    width: 90px;
    margin-left: 600px;
    margin-top: -135px;
}
.güc{
    width: 800;
    color: #636363;
    font-size: 10px;
    margin-left: 300px;
    margin-right: 300px;
}
.parmakizi2{
    margin-left: 200px;
    margin-top: -100px;
    width: 300px;
}
.parmakizi{
    margin-left: 100px;
}
.yuztanıma2{
    width: 300px;
    margin-left:200px;
    margin-top: -100px;
}
/*Açılır kapanır footer */
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
    opacity: 0;
}
.mserisi-ozellik17{
    background: #f7f7f7;
    height: 800px;
    width: 1350px;
    margin-left: 100px;
    margin-top: 50px;
}
.fiyat{
    position: fixed;
    bottom: 0;
    background:white;
    width: 100%;
    margin-top: 150px;
    height: 100px;
}
.anaekran{
    margin-top: 100px;
    margin-left:200px;
    width: 400px;
}
.anakeran2{
    
    margin-top: 300px;
    margin-left: 270px;
    width: 300px;
}
.anaekran3{
    
    width: 400px;
    margin-top: -400px;
    margin-left: 800px;
}
.anaekran4{
   
    width: 400px;
    margin-left: 800px;
    margin-top: 200px;
}
/*Galaxy m serisi detay sayfasındaki açılır kapanır div için oluşturulan buton*/
.accordion3{
    background: #f7f7f7;
    color: #f7f7f7;
    cursor: pointer;
    padding: 5px;
    width: 250px;
    text-align: left;
    border: 0.5px solid white;
    outline: none;
    transition: 0.4s;
    font: 15px Lato, sans-serif;
    text-decoration: none;
    list-style-type: none;
    margin-left: 600px;
    margin-top: -150px;
}

.mserisiozellik18{
    background: #E7E7E7;
    width:1350px ;
    height: 4300px;
    margin-left: 80px;
}
#mserisi-ozellikler19{
    height: 100px;
    width: 1350px;
    margin-left: 100px;
    margin-top: 0px;
    background:#E7E7E7 ;
}
#sarb{
    list-style-type: none;
    text-decoration: none;
}
#sarb:hover{
    text-decoration: none;
}

.html, .body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0; padding: 0;
    font-family: sans-serif;
    text-align: center;
  }
  .slider-container { 
    margin-left: -350px;
    overflow: hidden; 
    width: 400px; height: 400px; 
    position: absolute; top: 50%; left: 50%; 
    transform: translate(-50%, -50%);
  }

  
  .navigator { 
      text-align: center; 
      display: inline-block;
      margin: 15px auto; 
      overflow: hidden;
      padding-bottom: 10px;
      height: 700px;
      width: 120px;
     }

  .navigator li { 
    
    color: #ecf0f1; 
    border-radius: 0%; 
    padding: 7px 11px; 
    margin: 0 10px; cursor: pointer;
    box-shadow: 0 3px 17px rgba(0,0,0,.3);
    transition: all .32s ease;
    position: relative;
    
  
  }    

  #app50 >ul li:hover{

    border: 1px solid #000;
  }


.active:after {
content: "\2796"; /* Unicode character for "minus" sign (-) */
}

.galaxym{

height: 2000px;
}



.mobilsag{
margin-top: -750px;
margin-left: 600px;
width: 800px;
height: 800px;
}

.mobilbtns{
background-color: white;
width: 170px;
height: 80px;
border: 1px solid #ccc;
}
.mobilbtns1{
background-color: white;
width: 170px;
height: 80px;
border: 1px solid blue;
}

.mobilbtns:hover{

border: 1px solid black;
}
.mobilbtns2{
background-color: white;
width: 530px;
height: 80px;
border: 1px solid blue;
}

.mobilbtns3{
background-color: white;
width: 530px;
height: 80px;
border: 1px solid #ccc;
}
.mobilbtns3:hover{

border: 1px solid black;

}


.mobilbtns4{
background-color: white;
width: 450px;
height: 80px;
border: 1px solid #ccc;
}
.mobilbtns4:hover{

border: 1px solid black;

}


.renkbtns{

width: 170px;
height: 190px;
background-color: white;
border: 1px solid #ccc;


}

.renkbtns:hover{

border: 1px solid black;

}
.renkbtns1{

width: 170px;
height: 190px;
background-color: white;
border: 1px solid blue;

}
.nasilcalisilir{

color: #888888;
}


img.d1 {

margin-left:120px;
width: 50px;
height: 50px;
}
/*14 gün iade ikonu*/
img.d3 {
margin-top: -100px;
margin-left:60px;
width: 40px;
height: 40px;
}
/*kargo takibi ikonu*/
img.d5{
margin-top: -190px;
margin-left:400px;
width: 40px;
height: 40px;
}
/* Ücretsiz Kargo*/
span.d2{
font-size:8pt;
margin-left: 90px;

}
/*14 Gün Koşulsuz İade*/
span.d4{
font-size:8pt;
margin-left: 210px;
margin-bottom: 300px;
}
/*24/7 Kargo Takibi*/
span.d6{
font-size:8pt;
margin-left: 370px;
}

p.text-shop1{
margin-left:370px;
font-size:8pt;
margin-top:20px

}


/*Devam Butonu*/
.button4 {
    background-color: white; 
    color: blue; 
    border: 1px solid blue;
    width: 140px;
    
}
.button4:hover {
    background-color: darkblue;
    color: white;
    
}




/* margin kullanılarak resimler ve ikonların yerleri belirtildi. */
/*Samsung Logo*/
img.sms{
	margin-left:90px;
	margin-top:15px;
}

/*sepet ikonu*/
img.icon2{
	margin-top:-95px;
	margin-left:420px
}
/*Üyelik dropdown ikonu*/
img.icon1{
	margin-top:5px;
	margin-left:450px
}

/*Ücretsiz Kargo İkonu*/
img.a1 {
	margin-left:110px;
}
/*14 gün iade ikonu*/
img.a2 {
	margin-left:230px;
}
/*kargo takibi ikonu*/
img.a3{
	margin-left:220px;
}
/* Ücretsiz Kargo*/
span.b1{
	font-size:13pt;
}
/*14 Gün Koşulsuz İade*/
span.b2{
	font-size:13pt;
}
/*24/7 Kargo Takibi*/
span.b3{
	font-size:13pt;
}

p.text-shop{
	margin-left:430px;
	font-size:10.5pt;
	margin-top:20px

}


  body {
      font-family: Arial, Helvetica, sans-serif;
      line-height: 3em;
    }
 
   /* Ürün bölmelerinin çerçevesiz olarak görünmesi */
  .gallery {
    border: 0px solid #ccc;
  }
  
 /* Ürün bölmelerinin yerleri ve büyüklükleri ayarlandı */
  .responsive {
    padding: 0 6px;
    float: left;
    width: 24.99999%;
    margin-left:60px;
  }


  .responsive0 {
    padding: 0 6px;
    float: left;
    width: 24.99999%;
    margin-left:80px;
  }
 
/*Ürünlerin bulunduğu kategori*/

.kategori0{
    margin-top: 50px;
   

  }
  .kategori2{
    margin-top: -1100px;
    height: 3450px;
    margin-left:350px;
    width: 1000px;
   

  }

  .kategori3{
    margin-top: -850px;
    height: 3450px;
    margin-left:350px;
    width: 1000px;
   

  }
  .satirboslugu{

    height: 110px;
  }
  .bosluk{

    line-height: 50px;
  }

  .bosluk1{

    line-height: 100px;
  }
  /*Altmenü alanı1*/
  .footer{
    background: #e9e9e9;
    color: #000;
    height: 250px;
    position: relative; /* normal şekilde dizilirler */
    
}
.footer.footer-content{
    border: 1 px solid #ccc;
    height: 350px;
    display: flex;  /* soldan sağa yatay olarak esnek şekilde  */


}
.footer  .footer-content .footer-section{
    flex: 1;
    border: 1 px solid #000;
    padding: 25px;

}
/* linklerin öğe işaretleri yok. (Yazıların başlarında yuvarlak veya herhangi bir ikon yok)*/
.altmenu1{
    list-style-type: none;
   
}
.altmenu1-a{
	color: #75787b;
	text-decoration: none;
    display: block; /*Alt satıra geçmesi için*/
    font-family: SamsungOne;
    font-weight: 400;
    font-size: 13px;
    line-height: 1.71;
	
}
/* Alt menünün içindeki linklerin font özelliklerni belirler*/
.site{
    margin-bottom: 0;
    font-family: SamsungOne;
    font-size: 16px;
    line-height: 2.0;
    color: #000;
}

/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/

.footer  .footer-content .footer-section-siteharitası{
    width: 200px;
    padding: 20px;
    position: relative;
    float: left;
}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer  .footer-content .footer-section-siteharitası{
    width: 200px;
    padding: 20px;
    position: relative;
    float: left;


}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer  .footer-content .footer-section-faydalıbilgiler{
    width: 200px;
    padding: 20px;
    position: relative;
    float: left;
}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer  .footer-content .footer-section-destek{
    width: 200px;
    padding: 20px;
    position: relative;
    float: left;

}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer  .footer-content .footer-section-sosyalmedya{
    width: 300px;
    padding: 20px;
    position: relative;
    float: left;

}

/* Facebook ikonunun yerini ve büyüklüğünü ayarlıyor.*/
.facebook{
    height: 15%;
    width: -55%;
    padding: 10px;
    position: relative;
    float: left;
}
/* Twitter ikonunun yerini ve büyüklüğünü ayarlıyor.*/
.twitter{
    height: 15%;
    width: -55%;
    padding: 10px;
    position: relative;
    float: left;

}
/* Youtube ikonunun yerini ve büyüklüğünü ayarlıyor.*/
.youtube{
    height: 15%;
    width: -55%;
    padding: 10px;
    position: relative;
    float: left;

}
/* İnstagram ikonunun yerini ve büyüklüğünü ayarlıyor.*/
.instagram{
    height: 15%;
    width: -55%;
    padding: 10px;
    position: relative;
    float: left;

}

/* Bu kısım Telefonlar-Tabletler-Televizyonlar tab'ının bulunduğu divin konumunu belirliyor*/
.container {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-right: 7.5px;
    padding-left: 7.5px;
}


/* Telefonlar-Tabletler-Televizyonlar tab'ını ortalar. */
#shop-homepage-tabs {
    justify-content: center;
    
}
/* Telefonlar-Tabletler-Televizyonlar tab'ının alt çizgisi siler */
.nav-tabs {
    border-bottom: 0px solid #dee2e6;
}
/* Telefonlar-Tabletler-Televizyonlar tab'ını konumlandırıyor. */
.nav {
    display: -ms-flexbox;
    display: flex; /* soldan sağa yatay olarak esnek şekilde  */
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none; /* öğe işaretleri yok. */
}
/*Altmenü alanı2. Footer2 div'i ile oluşturulan alt kısma renklendirme ve boyutlandırma işlemleri yapıldı. */
.footer2{
    background: #3f3f3f;
    color: #000;
    height: 450px;
    position: relative;
}
/* Alt menüde yazılan linklerin font özellikleri belirlendi*/
.altmenu-a{
	color: #ccc;
	text-decoration: none;
    display: block; /*Alt satıra geçmesi için*/
    font-family: SamsungOne;
    font-weight: 400;
    font-size: 13px;
    line-height: 1.71;
	
}

.altmenu{
    list-style-type: none; /* Yazıların başında öğe işaretleri yok.*/
   
}
.footer2  .footer2-content .footer2-section{
    flex: 1;
    border: 1 px solid #000;
    padding: 40px;

}
/*Kredi kartı iconlarının boyutlarını ve yerlerini belirler.*/
/*visa ikon*/
.vısa{
    height: 45px;
    width:60px;
    top:150px;
    position: relative;
    float: left;
}
/*Mastercard ikon*/
.mastercard{
    height: 45px;
    width:60px;
    top:150px;
    position: relative;
    float: left;
}
/*americanexpress ikon*/
.amerıcanexpress{
    height: 45px;
    width:60px;
    top:150px;
    position: relative;
    float: left;
}
/*payu ikon*/
.payu{
    height: 45px;
    width:60px;
    top:150px;
    position: relative;
    float: left;
}

/* Kredi kartı ikonlarının içinde bulunduğu div. Margin div'in konumunu belirliyor */
.footerı2-ımage{
    margin-left: 70px;
}

.footer2-text{
    margin-top: -115px;
    margin-right: 300px;
}
/* footer2-text div'inin içindeki paragrafın yazı tipi, konumu ve büyüklüğünün düzenlemesi.  */
.altmenuyazı{
    color: #929292;
    font-family: SamsungOne;
    font-weight: 400;
    font-size: 12px;
    margin: 5px 0;
    text-align: right;
    
}
.button {
    margin-bottom: 0;
    border-radius: 0 global-radius global-radius 0;
  
  
}
/* Email type'ını içinde bulunduran div.Burada email type'ının konumlandırılması yapıldı. */
.databinding{
    margin-top: 40px;
    margin-left: 900px;

}
/* Altmenuyazı class'ını içinde bulunduran div. Class'ın konumlandırılması yapıldı. */
.footer2-text2{
    margin-top: 0px;
    margin-right: 150px;
}

/* Email kutucuğunun üzerinde bulunan kaydol adlı link.*/
.kaydol{
    list-style-type: none; /* Yazıların başında öğe işaretleri yok.*/
    font-family: SamsungOne; /* Yazı tipi*/
    text-decoration: none; /* Alt yazı yok.*/
    color: #000;
    

}
/* İçinde checkbox ve label bulunduran div. Konumlandırma yapıldı.*/
.robotdegilim{
    background: #fff;
    margin-top: 55px;
    margin-left: 900px;
    height: 70px;
    width: 300px;


}


/* designed by linkine font özellikleri verildi ve konumlandırma yapıldı .*/
.designed-a{
    color: #ccc;
	text-decoration: none;
    display: block; /*Alt satıra geçmesi için*/
    font-family: SamsungOne;
    font-weight: 400;
    font-size: 13px;
    margin-left: 1000px;
    margin-top: 40;
   
    
}
/* designedby class'ının içindeki img class. Burada eklenen resme konumlandırma ve boyutlandırma yapıldı.*/
.kreatif{

    height: 35;
    width: 35;
    margin-left: 1105px;
    margin-top:-35px;
}


/* Reference : https://designmodo.com/create-css3-mega-menu/ */

/* Resetleme */
.nav2,
.nav2 a,
.nav2 ul,
.nav2 li,
.nav2 div,
.nav2 form,
.nav2 input {
	margin: 0;
	padding: 0;
	border: none;
    outline: none;
    

}


/*Alt çizgiyi kaldırıyor. */
.nav2 a { text-decoration: none; }

.nav2 li { list-style: none; }

/* Menu Container */
.nav2 {
	display: inline-block; /*Yan yana dizilmeleri için*/
	position: relative;
	cursor: default;
    z-index: 500;

}

/* Menü List */
.nav2 > li {
	display: block; /*Alt satıra geçmesi için*/
    float: left;
    
}

/* Menü Links */
.nav2 > li > a {
	position: relative;
	display: block; /*Alt satıra geçmesi için*/
	z-index: 510;
	height: 54px;
	padding: 0 20px;
	line-height: 54px;
	
	font-family: Helvetica, Arial, sans-serif;
	font-size: 12px;
	color: #000000;
	text-shadow: 0 0 1px rgba(0,0,0,.35);

	background: #ffffff;
	border-left: 1px solid white;
	border-right: 1px solid white;


}

.nav2 > li:hover > a { background:white;  }



/* Menu Dropdown */
.nav2 > li > div {
	position: absolute;
	display: block; /*Alt satıra geçmesi için*/
	width: 100%;
	top: 50px;
	left: 0;

	opacity: 0;
	visibility: hidden;
	overflow: hidden;

	background: #ffffff;
	border-radius: 0 0 3px 3px;

}

/* Bu kısımda kategorinin üzerine mouse gelmeden önce alt kategorilerin gizli kalması için gerekli CSS kodları yazıldı.*/
.nav2 > li:hover > div {
	opacity: 1;
	visibility: visible;
	overflow: visible;
}

/* Menu Content Styles */
.nav2 .nav2-column {
	float: left;
	width: 20%;
	padding: 2.5%;
}

.nav2 .nav2-column h3 {
	margin: 20px 0 10px 0;
	line-height: 18px;
	
	font-family: Helvetica, Arial, sans-serif;
	
	font-size: 14px;
	color: #372f2b;
	text-transform: uppercase; /* Yazıyı büyük harflerle göstermesi için */
}
/*Üst kategori*/
.nav2  { color: white; }

.nav2 .nav2-column li a {
	display: block;
	line-height: 26px;
	
	font-family: Helvetica, Arial, sans-serif;
	
	font-size: 13px;
	color: #888888;
}

.nav2 .nav2-column li a:hover { color:white; }

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table; /*Göüntüyü table ile istenilen şekle getirdik*/
   
  }
  /*İç içe olan öğelerin divin yer özellikleri tanımlandı.*/
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    height: 30px;
  }
  /* Modal içindeki kısımların kapsayan alanın şekillendirilmesi.*/
  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
  /* Kalıcı bir başlık içeren modal için bir başlık tanımlar*/
  .modal-header h3 {
    margin-top: 0;
    color: #000;
  }
  /*Metin, görüntüler ve formları yani asıl yerleri içerir*/
  .modal-body {
    margin: 20px 0;
  }
  
  
  /* İl değiştirme modal'ında bulunan ekranı kapatma butonu (X) için gerekli konumlandırma ve boyutlandırma yapıldı.*/
  .modal-default-button {
    color: white;
    background-color: black;
    float: right;
    margin-right:-55px;
    margin-top: -60px;
    border-radius: 20px; /* Yuvarlaklığı belirleme*/
    -moz-border-radius: 10px; /* Yuvarlaklığı belirleme*/
    -webkit-border-radius: 10px; /* Yuvarlaklığı belirleme*/
    
  }



/*Sepet iconunun üzerinde bulunan ve arttir fonksiyonuna bağlı olarak artan buton */
  input[type="button"]{
    width: 30px;
    height: 30px;
    border:none;
    font-size:20px;
    background: white;
    color:#E7E7E7;
    }

    
.button{
   
    border: none;
    color: white;
    margin-left: 40px;
    font-size: 14px ; 
    border-radius: 20px;
    margin-top: 0px; 
    transition-duration: 0.4s; /* Kapatma butonuna bastıktan sonra sayfanın kapanması için gerekli süre*/
    display: inline-block;
    font-family: cursive;
   
}
/* Sepete Ekle butonu*/
.button2 {
    background-color: white; 
    color: black; 
    border: 1px solid #000;
    width: 140px;
    
}

/*Devam Butonu*/
.button4 {
    background-color: white; 
    color: blue; 
    border: 1px solid blue;
    width: 140px;
    
}
.button4:hover {
    background-color: darkblue;
    color: white;
    
}

/* Reference: https://www.w3schools.com/css/css3_buttons.asp */
/* Mouse butonun üzerine gelince renk değiştirme */
.button2:hover {
    background-color: #008CBA;
    color: white;
}

.button3 {
    background-color: white; 
    color: black; 
    border: 1px solid #000;
    width: 41px;
    margin-left: 200px;
    margin-bottom: -45px;
    
    
}
  /* Mouse butonun üzerine gelince renk değiştirme */
.button3:hover {
    background-color: #008CBA;
    color: white;
}

/*menu5 dropdown menüsünün konumlandırılması ve boyutlandırılması */
.menu5{   
    position:absolute;
    z-index: 20; /* Dropdown menünün slider kısmının altında kalmaması için yazıldı.*/
    background: #fff;
    height: 40px;
    width: 50px;
    margin-left:500px;
	margin-top:-90px;
}
/*İçinde uye ol, uye girisi, sifremi unuttum ve istek listesi linklerini barındıran class.*/
.uyegirisi1{
    float: left;
    position: relative;
    transition: all .3s ease 1s;
    margin-bottom:15px;
    margin-left:250px;
    
}
.uyegirisi{
    display: block;
    font-size: 14px;
    color: #000;
    padding: 0 15px;
    line-height: 50px;
    border-right: 1px solid rgba(0, 0, 0, .1);
    
}
/* İçinde üyelik için bulunan 4 linkin kategorisi. Konumlandırılması, boyutlandırılması ve gizliliği ayarlandı.*/
.uyegirisi2{
    background: #fff;
    width: 150px;
    position: absolute;
    margin-top: 35px;
    margin-left: 350px;
   opacity: 0; /*Opaklık*/
   transition: 250ms all; /*Geçiş Süresi*/
   visibility: hidden; /*Gizlilik*/
   position:absolute; 
   z-index:2; /* Kategori Slider menünün altında kalmasın.*/
   border: 1px solid #ccc;
   

}
/*Üye Ol, Üye Girişi, Şifremi Unuttum ve İstek Listesi linklerinin classı*/
.uyegirisi3{
    display: block; /*Alt Satıra Geçmesi için */
    padding: 7px 10px;
    color: #000;
    font-size: 12px;
    text-decoration: none;
    
}

.uyegirisi1:hover .uyegirisi2{
    opacity: 1;
    visibility: visible;
    top: 50px;
}


/*  menu12 adlı div'in içinde bulunan kişisel bilgiler, iletişim bilgileri ve seçenekler 
divleri için alan yükseliği belirtildi. */

.menu12{
    height: 1650px;
}


/* ÜYE OL yazısının font özellikleri belirlendi.*/
.sayfabaslıgı3{
    font-family: "SamsungSharpSans-Regular";
    font-size: 22px;
    font-weight: normal;
    box-sizing: inherit; 
    line-height: 60px;
    text-align: center;  /* Konumlandırma ortada*/  
}
/* Kişisel Bilgiler yazısının font özellikleri belirlendi.*/
.kisiselbilgiler{
   font-family: Georgia, serif;
   text-align: center;
   margin-top: 50px;
}
/* Cinsiyet, Ad ,Soyad, Eposta formlarının içinde bulunduğu div. Boyutlandırma ve konumlandırma yapıldı.*/
.kisiselbilgiler2{
    background-color: #f9f9f9;
    height: 300px;
    width: 1300;
    margin-left: 120px;
}
/* Cinsiyet yazısının font özellikleri.*/
.cinsiyet{
    margin-left: 280px;
    padding: 55;
    width: 30;
}
/*İçinde radio buttonları bulunduran div'in konumlandırılması*/
.buton1{
    margin-top: -70px;
    margin-left: 380px;
}

.kadınbuton{
    
    margin-left: 120px;
    margin-top: -80px;
    position: relative;
}
.erkekbuton{
    position: relative;
}

/* Ad text'inin boyutlandırılması ve konumlandırılması.*/
.ad{
    margin-left: 30px;
    margin-top: 10px;
    height: 40px;
    width: 400px;
}
/* Adı: yazısının konumlandırılması.*/
.ad1{
    margin-left: 350px;
    float: left;
}
/* * işaretine renk verildi ve konumlandırıldı */
.zorunlualan, .zorunlualan1, .zorunlualan2 , .zorunlualan3 , .zorunlualan6, .zorunlualan7{
    color: red;
    float:right;
    margin-right: 400px;
    
}
/* Soyad text'inin boyutlandırılması ve konumlandırılması.*/
.soyad{
    margin-right: 160px;
    margin-top: 10px;
    height: 40px;
    width: 400px;
}
/* Soyadı: yazısının konumlandırılması.*/
.soyad1{
    margin-left: 350px;
    float: left;
}
/* posta text'inin boyutlandırılması ve konumlandırılması.*/
.posta{
    margin-left: 10px;
    margin-top: 20px;
    height: 40px;
    width: 400px;
}
/* E-posta: yazısının konumlandırılması.*/
.posta1{
    margin-left: 350px;
    float: left;
}
/* İletişim Bilgileri yazısını içinde bulunduran div*/
.iletisimbilgileri{
    font-family: Georgia, serif;
    text-align: center;
    margin-top: 50px;
}
/*Telefon: yazısını ve text'ini içereren div. Boyutlandırma ve konumlandırma yapıldı.*/
 .iletisimbilgileri2{
    background-color: #f9f9f9;
    height: 110;
    width: 1300;
    margin-left: 120px;
}
.text-box single-line{
    white-space: nowrap
}
.telefon{
    margin-left: 10px;
    margin-top: 10px;
    height: 40px;
    width: 400px;
}
.telefon1{
    margin-left: 350px;
    float: left;
}
.secenekler{
    font-family: Georgia, serif;
    text-align: center;
    margin-top: 50px;
}
.secenekler2{
    background-color: #f9f9f9;
    height: 400;
    width: 1300;
    margin-left: 120px;
}
/* İçinde label ve checkbox bulunan divin boyutlandırılması ve konumlandırılması*/
.bültenler1{

    background-color: #fff;
    height: 130px;
    width: 700px;
    margin-left: 420px;
    border-style: solid; 
    border-width: 0.5px;
    border-color: #ccc;
}
/* Bültenler: yazısının konumlandırılması.*/
.bültenler{
    margin-left: 350px;
    float: left;
}
/*Bültenler1 divinin içinde yer alan yazının ait olduğu class'ın font özellikleri */
.bülten2{
    background-color: #f9f9f9;
    height: 200;
    width: 1300;
    font-family: "Georgia, serif"; /*Yazı tipi*/
    font-size: 14px;   
    
}
/*Kullanıcı Sözleşmesi: yazısının font özellikleri, boyutlandırılması ve konumlandırılması.*/
.sözlesme{
    font-family: Georgia, serif;
    margin-top: 50px;
    margin-left: 280px;
    width: 150;
}
/*İçinde link,checkbox bulunduran label.  */
.sözlesme2{
    background-color: #fff;
    height: 100px;
    width: 500px;
    margin-left: 460px;
    top:0;
    border-style: solid; /*Çerçeveyi çizgi ile belirginleştirme*/
    border-width: 0.5px;
    border-color: #ccc;
}
/*Label içindeki link verilen yazının siyah renkte olması*/
.altmenu-sözlesme{
    color: #000;
}
/*Gizlilik Sözleşmesi: yazısının font özellikleri, konumlandırılması ve boyutlandırılması*/
.gizlilik{
    font-family: Georgia, serif;
    margin-top: 50px;
    margin-left: 260px;
    width: 200;
   
}
/* Gizlilik ile ilgili yazının boyurlandırılması ve konumlandırılması. */
.gizlilik2{
    background-color: #fff;
    height: 100px;
    width: 500px;
    margin-left: 440px;
    border-style: solid; /*Çerçeveyi çizgi ile belirginleştirme*/
    border-width: 0.5px;
    border-color: #ccc; 
}
/*Kullanıcı ve Gizlilik Sözleşmesi ile alakalı yazıların rengi*/
.altmenu-sözlesme{
    color: #000;
}
/*Şifre yazısı için gerekli font özellikleri ve konumlandırma*/
.sifre{
    font-family: Georgia, serif;
    text-align: center;
    margin-top: 50px;
}
/* Şifre, Şifre Tekrarı ve Ben robot değilim kısımlarını içeren div'in boyutlandırılıp konumlandırılması*/
.sifre2{
    background-color: #f9f9f9;
    height: 270;
    width: 1300;
    margin-left: 120px;
}
/*Şifre girilmesi için gerekli text*/
.sifree{
    margin-left: 30px;
    margin-top: 10px;
    height: 40px;
    width: 400px;
}
/*Şifre: yazısının konumlandırılması. */
.sifree1{
    margin-left: 350px;
    float: left;
}
/*Şifre tekrarının girilmesi için gerekli text*/
.sifretekrar{
    margin-left: 22px;
    margin-top: 10px;
    height: 40px;
    width: 400px;
}
/*Lütfen şifrenizi tekrar giriniz: yazısının konulandırılması*/
.sifretekrar1{
    margin-left: 200px;
    float: left;
}
/* İçinde checkbox,img ve ben robot değilim label'i olan div.*/
.robotdegilim0{
    background: #fff;
    margin-top: 45px;
    margin-left: 500px;
    height: 70px;
    width: 300px;
    border: 0.1px solid #ccc;
}
/*Robot değilim resminin konumlandırılması ve boyutlandırılması.*/
.robotdegilimresim2{
    height: 60px;
    width: 70px;
    margin-left: 220px;
    margin-top: -65px;
}
/*Kaydet butonunun bulunduğu div.*/
.kaydet{
    margin-left: 600px;
    margin-bottom: 10px;
    
    
} 
/*Kaydet Linki*/
.kaydet2{
    text-decoration: none;
    color:#ccc;
   
}
/*Kaydet butonunun özellikleri. */
.kaydet1{
    background-color: #120a8f ; 
    color: black; 
    border: 1px solid #120a8f ;
    border-radius: 20px;
    padding: 15px 170px;
    
   
}
/*Mouse butonun üzerine gelince yazının ve butonun renklerinin değişmesi.(Hover: mouse işlemi için)*/
.kaydet1:hover{
    background-color: #fff;
    color: #000;
}

/*Üye Girişi Sayfasındaki başlık*/
.sayfabaslıgı1{
    font-family: "SamsungSharpSans-Regular";
    font-size: 22px;
    font-weight: normal;
    box-sizing: inherit;
    line-height: 60px;
    text-align: center;
    
}
.yeniüye1{
    font-size: 20px;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    text-align: center;
    font-weight: 20;
    
}
.yeniüye{
    height: 150px;
    width: 600px;
    margin-left: 100px;
    
}
.yeniüye2{
    margin: 0 0 30px;
    border-top: 1px solid #e6e6e6;
    background-color: #f9f9f9;
    padding: 30px;
    line-height: 22px;
    height: 150px;
    width: 600px;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";;

}
/*Üye Ol butonu*/
.üyeol1{
    background-color: #120a8f ; 
    color: black; 
    border: 2px solid #120a8f ;
    border-radius: 20px;
    padding: 15px 170px;
}
  /*Mouse butonun üzerine gelince butonun rengi değişir*/
  .üyeol1:hover {
    background-color: #fff;
    color: #000;
}
/*Üye Ol butonunu kapsayan div*/
.üyeol{
    margin-left: 100px;
}
/*Üye Ol linki*/
.üyeol2{
    text-decoration: none;
    color:#ccc;
    
}
.üyegirisi1{
    font-size: 20px;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    text-align: center;
    font-weight: 20;
}
.üyegirisi{
    height: 150px;
    width: 600px;
    margin-left: 745px;
    margin-top: -170px;
}
.üyegirisi2{
    border-top: 1px solid #e6e6e6;
    background-color: #f9f9f9;
    padding: 90px;
    line-height: 22px;
    height: 380px;
    width: 600px;
}

/* Email type */
.input-group-field{
    margin-left: 80px;
    margin-top: -50px;
    height: 40px;
    width: 400px;
}

/*Sifre type*/
.input-group-field2{
    margin-left: 80px;
    margin-top: -40px;
    height: 40px;
    width: 400px;
}

/*Checkbox type*/
.input-group-field3{
    margin-left: 100px;
    margin-top: 70px;
}

.benihatırla2{
    margin-left: 120px;
    margin-top: -20px;
}

.sifremiunuttum{
    text-decoration: none;
    color: #000;
    margin-left: 300px;
    
}
/* Link'e renk vermek için yazıldı*/
.sifremiunuttum:visited{
    color: #000;
}
/* Mouse yazının üzerine gelince renk değişikliği */
.sifremiunuttum:hover{
    color: cornflowerblue;
}
.sifremiunuttum1{
    margin-top: -15px;
}
/* İçinde checkbox,img ve label bulunduran div. Konumlandırma yapıldı.*/
.robotdegilim1{
    background: #fff;
    margin-top: 45px;
    margin-left: 100px;
    height: 70px;
    width: 300px;
    border: 0.1px solid #ccc;
}
/*giris butonunu içinde bulunduran div.*/
.giris{
    margin-left: 100px;
    margin-bottom: -30px;
    
}
/*giris linki*/
.giris2{
    text-decoration: none;
    color:#ccc;
}
/*giris butonu*/
.giris1{
    background-color: #120a8f ; 
    color: black; 
    border: 2px solid #120a8f ;
    border-radius: 20px;
    padding: 15px 170px;
    margin-top: 130px;
    
}
/*Mouse'un butonun üzerine gelince renk değiştirmesi*/
.giris1:hover{
    background-color: #fff;
    color: #000;
}
.robotdegilimresim4{
    height: 45px;
    width: 55px;
    margin-left: 230px;
    margin-top: -50px;
}
.altmenüler{
    margin-top: 500px;
}

.sifreunutma{
    margin: 0 0 30px;
    border-top: 1px solid #e6e6e6;
    background-color: #f9f9f9;
    padding: 50px;
    line-height: 22px;
    height: 300px;
    width: 1100px;
    margin-left:180px;
    margin-top: 50px;
}
.sifremiunuttum2{
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    margin-left: 200px;
    margin-top: 10px;
}
.epostaadresi{
    margin-left: 10px;
    margin-top: 25px;
    height: 40px;
    width: 400px;
}
.epostaadresi1{
    margin-left: 160px;
    float: left;
    margin-top: 32px;
}

.robotdegilim2{
    background: #fff;
    margin-top: 45px;
    margin-left: 330px;
    height: 70px;
    width: 300px;
    border: 0.1px solid #ccc;
}
/*Şifremi hatırlat butonunu içinde bulunduran div*/
.sifre5{
    margin-left: 500px;
    margin-bottom: 10px;
    
}
/*Şifremi Hatırlat linki*/
.sifremihatırlat1{
    text-decoration: none;
    color:#ccc;
}
/*Şifremi hatırlat butonu*/
.sifremihatırlat{
    background-color: #120a8f ; 
    color: black; 
    border: 2px solid #120a8f ;
    border-radius: 20px;
    padding: 15px 170px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 15;
    margin-top: 100px;
}
/* Mouse'un butonun üzerine gelince renk değiştirmesi */
.sifremihatırlat:hover{
    background-color: #fff;
    color: #000;
}
.robotdegilimresim3{
    height: 40;
    width: 50;
    margin-left: 20px;
}

.mobilmenu ul{
    list-style-type: none;

    

}
.mobilmenu ul a{
    color: black;
    

}


.yazilarürün{
    margin-top:160px ;
    margin-left:40px;
    font-weight: bold;
    

}
.yazilarürün1{
    margin-top:170px ;
    margin-left:40px;
    font-weight: bold;
    

}

.yazilarürün2{
    margin-top:120px ;
    margin-left:30px;
    font-weight: bold;
    

}
.yazilarürün3{
    margin-top:140px ;
    margin-left:40px;
    font-weight: bold;
    

}
.yazilarürün4{
    margin-top:163px ;
    margin-left:40px;
    font-weight: bold;
    

}
.yazilarürün5{
    margin-top:-8px ;
    margin-left:40px;
    font-weight: bold;
    

}
.yazilarürün6{
    margin-top:10px ;
    margin-left:40px;
    font-weight: bold;
    

}
.ürünyazirenk{
    color:black;

}
  h1.app9 {
    font-weight: 50;
    font-size: 1.0em;
}
  p.app9 {
    font-size: .8em;
    color: #000;
    
}

  #app9{
    margin-left:1050px ;
    margin-top: -60px;
}


  .checkboxfiltre{

    margin-left: 45px;

}

  .div1{

    margin-top: 70px;
}

  .pagination a {
    color:blue;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    margin-top: 800px;
 
}
  
  .pagination a.active {

    color: black;
}
  
  .pagination a:hover:not(.active) {background-color: #ddd;}

  .yazimbl:hover{
    color:#2a52be;

}


  .onecıkantv{
    height: 3250px;
}
.breadcrumb{
    margin: 0;
    padding: 5px 10px;
    background-color: transparent;
    display: flex;
    flex-wrap: wrap;
}
.breadcrumb li {
    display: inline-block;
    
}
.anasayfa5{
    font-family:Georgia, 'Times New Roman', Times, serif;
    text-decoration: none;
    color: #000000;
}
.avurunleri{
    color: darkblue;
}
.anasayfa6{
    font-family:Georgia, 'Times New Roman', Times, serif;
    color: #000000;
    text-decoration: none;
}
.kategoriler1{
    position: relative;
    margin: 0 0 10px;
    border-bottom: 1px solid #ddd;
    background: #fff;
    font-size: 18px;
    color: #444;
    cursor: pointer;
    width: 200px;
    margin-left: 80px;
    text-decoration: none;
    margin-top: 110px;
}

/* Style the accordion panel. Note: hidden by default */
.panel {
    padding: 0 18px;
    background-color: white;
    overflow: hidden;
    text-decoration: none;
    margin-left: -20px;
}
.panel1{
    list-style-type: none;
    text-decoration: none;
    margin-left: -15px;
 

}
.kategoriler{
    width: 430px;
    margin-top: -3100px;
}
.kategoriler2{
    margin-left: 50px;
    margin-top: 20px;


}
.panel2{
    text-decoration: none;
    color: #000;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.panel2:hover{
    color: rgb(42, 42, 173);
}
.fıyat1{
    list-style-type: none;
    text-decoration: none;
    margin-left: 90px;
    border-bottom: 1px solid #ddd;
    width: 220px;
}
.fıyat2{
    color: #444;
}
.fıyat2:hover{
    color: #444;
}
.fıyat3{
    margin-left: 100px;
}
.onecıkanbaslık{
    margin-top: 50px;
    margin-left: 400px;
    font-size: 40px;
    width: 700px;
    font-weight: bold;
}
.onecıkanbaslık1{
    margin-left: 400px;
    font-weight: bold;
    
}
.onecıkanbaslık2{
    margin-left: 420px;
    margin-top: -50px;
}
.example2{
    margin-left: 1100px;
    margin-top: -40px;
    height: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    border: 1px solid white;
    
}

.urunler1{
    margin-left: 400px;
    margin-top: 80px;
    width: 300px;

    
   
}
.urunler2{
    margin-left: 800px;
    margin-top:-305px;
    width: 300px;
}
.panel4{
    padding: 0 18px;
    background-color: white;
    display: none;
    overflow: hidden;
}



    .html, .body {
        width: 100%;
        height: 100%;
        overflow: hidden;
        margin: 0; padding: 0;
        font-family: sans-serif;
        text-align: center;
      }
      .slider-container { 
        margin-left: -350px;
        overflow: hidden; 
        width: 400px; height: 400px; 
        position: absolute; top: 50%; left: 50%; 
        transform: translate(-50%, -50%);
      }

      .navigator { 
          text-align: center; 
          display: inline-block;
          margin: 15px auto; 
          overflow: hidden;
          padding-bottom: 10px;
          height: 700px;
          width: 120px;
         }

      .navigator li { 
        
        color: #ecf0f1; 
        border-radius: 0%; 
        padding: 7px 11px; 
        margin: 0 10px; cursor: pointer;
        box-shadow: 0 3px 17px rgba(0,0,0,.3);
        transition: all .32s ease;
        position: relative;
        
      
      }    
  
      #app50 >ul li:hover{

        border: 1px solid #000;
      }


.active:after {
    content: "\2796"; /* Unicode character for "minus" sign (-) */
}

.galaxym{

    height: 2000px;
}



.mobilsag{
    margin-top: -750px;
    margin-left: 600px;
    width: 800px;
    height: 800px;
}

.mobilbtns{
    background-color: white;
    width: 170px;
    height: 80px;
    border: 1px solid #ccc;
}
.mobilbtns1{
    background-color: white;
    width: 170px;
    height: 80px;
    border: 1px solid blue;
}

.mobilbtns:hover{

    border: 1px solid black;
}
.mobilbtns2{
    background-color: white;
    width: 530px;
    height: 80px;
    border: 1px solid blue;
}

.mobilbtns3{
    background-color: white;
    width: 530px;
    height: 80px;
    border: 1px solid #ccc;
}
.mobilbtns3:hover{

    border: 1px solid black;

}


.mobilbtns4{
    background-color: white;
    width: 450px;
    height: 80px;
    border: 1px solid #ccc;
}
.mobilbtns4:hover{

    border: 1px solid black;

}


.renkbtns{

    width: 170px;
    height: 190px;
    background-color: white;
    border: 1px solid #ccc;
    

}

.renkbtns:hover{

    border: 1px solid black;

}
.renkbtns1{

    width: 170px;
    height: 190px;
    background-color: white;
    border: 1px solid blue;

}
.nasilcalisilir{

    color: #888888;
}


img.d1 {
    
    margin-left:120px;
    width: 50px;
    height: 50px;
}
/*14 gün iade ikonu*/
img.d3 {
    margin-top: -100px;
    margin-left:60px;
    width: 40px;
    height: 40px;
}
/*kargo takibi ikonu*/
img.d5{
    margin-top: -190px;
    margin-left:400px;
    width: 40px;
    height: 40px;
}
/* Ücretsiz Kargo*/
span.d2{
    font-size:8pt;
    margin-left: 90px;
    
}
/*14 Gün Koşulsuz İade*/
span.d4{
    font-size:8pt;
    margin-left: 210px;
    margin-bottom: 300px;
}
/*24/7 Kargo Takibi*/
span.d6{
    font-size:8pt;
    margin-left: 370px;
}

p.text-shop1{
	margin-left:370px;
	font-size:8pt;
	margin-top:20px

}


#verticle {
    border-left: 1px solid #ccc;
    height: 200px;
    position: absolute;
    left: 25%;
    margin-left: -2px;
    margin-top: -60px;
}
.mserisi-ozellikler1{
    margin-left: 150px;
    margin-top: 120px;
}
.mserisi-ozellikler2{
    margin-left: 550px;
    margin-top: -110px;
}
.mserisi-ozellikler3{
    margin-left: 900px;
    margin-top: -110px;
}
.mserisi-ozellikler4{
    margin-left: 1200px;
    margin-top: -110px;
}
.uekranp1{
    margin-top: -1400px;
    margin-left: 300px;
}
.tasarım1{
    margin-top: 1000px;
    font-size: 55px;
    font-weight: bold;
    margin-left: 370px;
}
.tasarım2{
    margin-left: 350px;
    margin-top: 50px;
}
.uclukamera{
    width: 400px;
    height: 600px;
    margin-top: 100px;
    margin-left: 150px;
}
.uclukamera3{
    margin-left: 750px;
    margin-top: -650px;
}
.ultragenis{
    width: 900px;
    font-size: 80px;
    font-weight: bold;
    margin-left: 350px;
}
.ultragenis2{
    margin-top: 100px;
    margin-left: 350px;
    font-size: 16px;
}

.ultragenis4{
    background:url(https://images.samsung.com/is/image/samsung/tr-feature---184096045) ;
    height: 90px;
    width: 90px;
    margin-left: 600px;
    margin-top: 80px;
}
.ultragenis5{

    height: 90px;
    width: 90px;
    margin-left: 200px;
    margin-top: 80px;
}
.odakkamera{
    width: 1000px;
    font-size: 80px;
    font-weight: bold;
    margin-left:300px;
    margin-top: 100px;
}
.odakacik{

    height: 90px;
    width: 90px;
    margin-left: 780px;
    margin-top: 60px;
}
.odakkapali{

    height: 90px;
    width: 90px;
    margin-left: 600px;
    margin-top: -135px;
}
.güc{
    width: 800;
    color: #636363;
    font-size: 10px;
    margin-left: 300px;
    margin-right: 300px;
}
.parmakizi2{
    margin-left: 200px;
    margin-top: -100px;
    width: 300px;
}
.parmakizi{
    margin-left: 100px;
}
.yuztanıma2{
    width: 300px;
    margin-left:200px;
    margin-top: -100px;
}
/*Açılır kapanır footer */
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
    opacity: 0;
}
.mserisi-ozellik17{
    background: #f7f7f7;
    height: 800px;
    width: 1350px;
    margin-left: 100px;
    margin-top: 50px;
}
.fiyat{
    position: fixed;
    bottom: 0;
    background: #ffff;
    width: 100%;
    margin-top: 150px;
}
.anaekran{
    margin-top: 100px;
    margin-left:200px;
    width: 400px;
}
.anakeran2{
    
    margin-top: 300px;
    margin-left: 270px;
    width: 300px;
}
.anaekran3{
    
    width: 400px;
    margin-top: -400px;
    margin-left: 800px;
}
.anaekran4{
   
    width: 400px;
    margin-left: 800px;
    margin-top: 200px;
}
/*Galaxy m serisi detay sayfasındaki açılır kapanır div için oluşturulan buton*/
.accordion3{
    background: #f7f7f7;
    color: #f7f7f7;
    cursor: pointer;
    padding: 5px;
    width: 250px;
    text-align: left;
    border: 0.5px solid white;
    outline: none;
    transition: 0.4s;
    font: 15px Lato, sans-serif;
    text-decoration: none;
    list-style-type: none;
    margin-left: 600px;
    margin-top: -150px;
}

.mserisiozellik18{
    background: #E7E7E7;
    width:1350px ;
    height: 4300px;
    margin-left: 80px;
}
#mserisi-ozellikler19{
    height: 100px;
    width: 1350px;
    margin-left: 100px;
    margin-top: 0px;
    background:#E7E7E7 ;
}
#sarb{
    list-style-type: none;
    text-decoration: none;
}
#sarb:hover{
    text-decoration: none;
}
.panel5{
    padding: 0 18px;
    background-color: white;
    display: none;
    overflow: hidden;
}

/* 
.img-fluid {
    max-width: 100%;
    height: auto;
}
a img {
    opacity: 0.99;
}
a img {
    border: none;
}
img {
    vertical-align: middle;
    border-style: none;
} */

img.n10:hover{

    -webkit-filter: opacity(50%) ;

  }



/*telefon destek css */
.telefon1{
    margin-left:5px;
    width: 1000px;
}
.telefon4{

    border: 0px solid #808080;
    height: 750px;
    width: 95%;
    margin-left: 20px;

}
.telefon5{
    margin-left: 80px;
    margin-top: -70px;
    
}
.accordion4{
    cursor: pointer;
    outline: none;
    transition: 0.4s;
    font: 15px Lato, sans-serif;
    width: 200px;
    
}
.panel4{
    padding: 0 18px;
    background-color: white;
    display: none;
	overflow: hidden;
}
.canlıdestek2{
    margin-left: 80px;
    margin-top: -50px;
}
.eposta2{
    margin-left: 80px;
    margin-top: -45px;
}
.footer{
    background: #e9e9e9;
    color: #000;
    height: 250px;
    width: 2000;
    position: relative;
    margin-right: 500px;
    
    
    
}
/*yeni footer*/
.footer3{
    background: #e9e9e9;
    color: #000;
    height: 350px;
    width: 100%;
    position: relative; /* normal şekilde dizilirler */
   
}
.footer3.footer-content{
    border: 1 px solid #ccc;
    height: 350px;
    display: flex;  /* soldan sağa yatay olarak esnek şekilde  */


}
.footer3  .footer-content .footer-section{
    flex: 1;
    border: 1 px solid #000;
    padding: 25px;

}
.footer3  .footer-content .footer-section-siteharitası{
    width: 200px;
    padding: 50px;
    position: relative;
    float: left;
    margin-left: 75px;
    margin-top: 50px;
}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer3  .footer-content .footer-section-siteharitası{
    width: 200px;
    padding: 20px;
    position: relative;
    float: left;
    margin-top: 50px;


}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer3  .footer-content .footer-section-faydalıbilgiler{
    width: 200px;
    padding: 20px;
    position: relative;
    float: left;
    margin-top: 50px;
}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer3  .footer-content .footer-section-destek{
    width: 200px;
    padding: 20px;
    position: relative;
    float: left;
    margin-top: 50px;

}
/* Alt menüyü içeren footer kısmında ki divlerin yerlerini , büyüklüklerini belirler.*/
.footer3  .footer-content .footer-section-sosyalmedya{
    width: 300px;
    padding: 20px;
    position: relative;
    float: left;
    margin-top: 50px;

}
.fhak{
    background: #e9e9e9;
    color: #000;
    height: 80px;
    width: 100%;
    font-size: 12px;
    line-height: 12px;


}
.altmenüler{
    border: 1px solid #808080;
    margin-top: -20px;

}
.altmenu2{
    list-style-type: none;
   
}
.altmenu2-a{
	color: #696969;
	text-decoration: none;
    display: block; /*Alt satıra geçmesi için*/
    font-family: SamsungOne;
    font-weight: 400;
    font-size: 13px;
    line-height: 1.71;
	
}
.footer4{
    background: #525252;;
    color: #000;
    height: 70px;
    position: relative;
}
.facebook1{

    height: 42px;
    width: 42px;
    margin-left: 300px;
    -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}
.twitter1{
 
    height: 42px;
    width: 42px;

}
.instagram1{

    height: 42px;
    width: 42px;

}
.youtube1{

    height: 42px;
    width: 42px;

}

/* sayfa açılışında gelen sayfanın css */
.blockOverlay{
    background-color:#fff !important;
}
.blockMsg {
    border: 0px !important;
}
#ana {
	width: 100%;	
	margin-top: auto;
	margin-bottom: auto;
	height: 400px;
	margin-right: auto;
	margin-left: auto;
	position: absolute;
	top: 50%;
	/*margin-top: -200px;*/ /* yüksekliğin yarısı */
	text-align: center;
	background-color: #fff;
}

#icorta {
	height: 400px;
	width: 400px;
	margin-top: 0px;
	margin-right: auto;
	margin-bottom: 0px;
	margin-left: auto;
}
</style>

<script>


</script> 


