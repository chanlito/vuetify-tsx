import 'vuetify/src/stylus/app.styl';

import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import App from './App';

Vue.use(Vuetify);

new Vue({
  render: h => h(App),
}).$mount('#app');
