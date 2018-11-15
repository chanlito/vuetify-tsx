import * as tsx from 'vue-tsx-support';
import { VApp } from 'vuetify/lib';

export default tsx.ofType().convert(VApp as any);
