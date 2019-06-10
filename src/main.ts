import 'vuetify/src/stylus/app.styl';

import Vue from 'vue';
import { VuetifyUseOptions } from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import Vuetify from 'vuetify/lib';

import App from './App';
import router from './router';

Vue.use(Vuetify, {
  theme: {
    primary: colors.orange,
    accent: colors.deepPurple.base,
  },
} as VuetifyUseOptions);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
