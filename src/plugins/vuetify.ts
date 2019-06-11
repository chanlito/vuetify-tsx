import '@mdi/font/css/materialdesignicons.css';

import { VuetifyUseOptions } from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import Vuetify from 'vuetify/lib';
import Vue from 'vue';

Vue.use(Vuetify);

const options: VuetifyUseOptions = {
  theme: {
    themes: {
      light: {
        primary: colors.deepPurple.base,
      },
    },
  },
};

export default new (Vuetify as any)(options);
