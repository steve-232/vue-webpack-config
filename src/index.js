import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store/store';

library.add(faHome, faInfo);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
