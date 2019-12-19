<template>

<div> 

<!-- içerik -->
<div>
<div style="margin-top:50px;">
    <hr style="margin-top:0px;" > 
    <h5 style="color: grey; text-decoration: none; margin-left: 45px; font-family:'Times New Roman', Times, serif"> Home / Erişilebilirlik / Web Erişilebilirliği / <b>Arama</b> </h5>
    <hr style="margin-top:-30px;"> 

</div>
     <h3 style="color:black; margin-left:65px; margin-top: 10px;">Erişilebilirlik</h3>

<!-- web erisebilirliği ve c ler -->
 <h5 style="margin-left: 1100px; margin-top: -65px;"> WEB ERİŞİLEBİLİRLİĞİ</h5>

<!--Yazılar ve fotoğraflar-->
  <div class="arama_image" style="margin-left:20px; margin-top:-15px">
    <picture>
        <source srcset="//images.samsung.com/is/image/samsung/p5/tr/accessibility/web-accessibility/images/web_accessibility_mobile.png?$ORIGIN_PNG$" media="(max-width:768px)">
        <img alt="Bir dizüstü bilgisayar ekranında, engelli 2 kadın, 1 erkek ve 1 çocuk yan yana gülümseyerek durmakta ve ekranın üzerinde göz, kulak, el ve beyin simgesi görüntülenmektedir." data-src-mobile="//images.samsung.com/is/image/samsung/p5/tr/accessibility/web-accessibility/images/web_accessibility_mobile.png?$ORIGIN_PNG$" src="//images.samsung.com/is/image/samsung/p5/tr/accessibility/web-accessibility/images/web_accessibility_pc.png?$ORIGIN_PNG$" data-src-pc="//images.samsung.com/is/image/samsung/p5/tr/accessibility/web-accessibility/images/web_accessibility_pc.png?$ORIGIN_PNG$" class="js-img-src">
    <h1 class="shop-header__title contrast-target" data-font-size-pc="64" data-font-size-mo="70" style="margin-top:-250px ; font-size:60px ; margin-left:150px">Web Erişilebilirliği</h1>
    </picture>
        
   </div>
<div style="height:85px; width:1440px; background-color:black ; margin-top:185px ; margin-left:20px"> 
        <a style="margin-left: 150px; color:white; margin-top:-50px; text-decoration:none" href="/Navigasyon"> <h5 class="global" style="margin-left: 150px; margin-top:-25px"> GLOBAL NAVİGASYON  </h5>
        <a href="/Erisilebilirlik" style="color:white" > <h5 class="arama" style="margin-left: 600px; margin-top: -68px;  color:white;">  ARAMA  </h5>
        <a href="/Baglantiyiatla" style="color:black"><h5 class="baglantı" style="margin-left: 950px; margin-top: -68px;  color:white ">  BAĞLANTIYI ATLA  </h5> </a>
        </a>
        </a>
</div>     
        <h1 style="margin-left: 500px; margin-top: 80px; color: black; font-size: 45px;" ><b>Arama Kılavuzu</b></h1>
        <p  style="margin-left: 560px; font-size: 15px;"> Web Sitemizde Arama Kullanımı </p>

     <h2 style="margin-top: 150px; margin-left: 400px; color: black; font-size:30px"><b>Küresel Navigasyon Çubuğumuzdaki aramanın kullanımı</b></h2>
<div style="margin-left:750px">  
       <h3> ADIM 1</h3>
      </div>
      <p style="margin-left:400px"> Küresel Navigasyon Çubuğundaki aramaya odaklanmak için var olan tüm menü seçeneklerini geçmek için Tab   </p> 
      <p style="margin-left:600px; margin-top:-35px"> tuşuna basın, “Arama katmanını aç” düğmesini vurgulayın ve Enter tuşuna basın.  </p> 
     
    


</div>
 <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" class="imaget" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" >&#10094; </a>
    <a class="next" @click="next" >&#10095; </a>

  </div>




</div>
</template>


<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [ 
        "https://images.samsung.com/is/image/samsung/p5/tr/accessibility/web-accessibility/images/search_01_01_pc.jpg?$ORIGIN_JPG$",
        "https://images.samsung.com/is/image/samsung/p5/tr/accessibility/web-accessibility/images/search_01_02_pc.jpg?$ORIGIN_JPG$",
        "https://images.samsung.com/is/image/samsung/p5/tr/accessibility/web-accessibility/images/search_01_03_pc.jpg?$ORIGIN_JPG$",
        "https://images.samsung.com/is/image/samsung/p5/tr/accessibility/web-accessibility/images/search_01_04_pc.jpg?$ORIGIN_JPG$",
        "https://images.samsung.com/is/image/samsung/p5/tr/accessibility/web-accessibility/images/search_01_05_pc.jpg?$ORIGIN_JPG$",
        "https://images.samsung.com/is/image/samsung/p5/tr/accessibility/web-accessibility/images/search_01_06_pc.jpg?$ORIGIN_JPG$"
      ],
      
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide1();
  },

  methods: {
    startSlide1: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>
<style  scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 1.0s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}


.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

.imaget{
  height:500px;
  width:85%;
  margin-left:120px;
}

.prev , .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color:white;
  background-color: grey;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
  margin-top:1100px;
}

.next {
  right:0;
}

.prev {
  left:0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}

</style>
