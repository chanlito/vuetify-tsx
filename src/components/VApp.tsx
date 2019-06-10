import { ofType } from 'vue-tsx-support';
import { VApp } from 'vuetify/lib';

export default ofType().convert(VApp as any);
