import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Anasayfa from './Anasayfa.vue'
import Slider from './Slider.vue'
import Detay from './Detay.vue'
import Detay1 from './Detay1.vue'
import Mobil from './Mobil.vue'
import Eposta from './Eposta.vue'
import CanlıDestek from './CanlıDestek.vue'
import Kampanyalar from './Kampanyalar.vue'
import Tel from './Tel.vue'
import Tv from './Tv.vue'
import Baglantiyiatla from './Baglantiyiatla.vue'
import Navigasyon from './Navigasyon.vue'
import Uyegirisi from './Uyegirisi.vue'
import Uyeol from './Uyeol.vue'
import Galaxy from './Galaxy.vue'
import Erisilebilirlik from './Erisilebilirlik.vue'
import SSS from './SSS.vue'
import Sifremiunuttum from './Sifremiunuttum.vue'
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {path: '/', component: Anasayfa},
  {path: '/Slider', component: Slider},
  {path: '/Detay1', component: Detay1},
  {path: '/Mobil', component: Mobil},
  {path: '/Eposta', component: Eposta},
  {path: '/Kampanyalar', component: Kampanyalar},
  {path: '/Tel', component: Tel},
  {path: '/Tv', component: Tv},
  {path: '/Erisilebilirlik', component: Erisilebilirlik},
  {path: '/Baglantiyiatla', component: Baglantiyiatla},
  {path: '/Navigasyon', component: Navigasyon},
  {path: '/Uyegirisi', component: Uyegirisi},
  {path: '/Galaxy', component: Galaxy},
  {path: '/Detay', component: Detay},
  {path: '/Uyeol', component: Uyeol},
  {path: '/CanlıDestek', component: CanlıDestek},
  {path: '/SSS', component: SSS},
  {path: '/Sifremiunuttum', component: Sifremiunuttum},


]

new Vue({
  el: '#app50',
  data: {
    activeSlide: 1
  },
  computed: {
    styleObject: function() {
      const width = 0 - ((this.activeSlide-1) * 700)
      return {
        transform: 'translateX('+width+'px)'
      }
    }
  },
  methods: {
    changeSlide: function(num) {
      this.activeSlide = num
    },
    nextSlide: function() { 
      if(this.activeSlide < 5) this.activeSlide++
    },
    prevSlide: function() {
      if(this.activeSlide > 1) this.activeSlide--
    }
  }
})


const router = new VueRouter ({
  routes,
  mode:'history'
})



new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

