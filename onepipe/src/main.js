import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import Buefy from 'buefy'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  // router,
  created() {
    AOS.init();
  },
  render: h => h(App),
}).$mount('#app')
