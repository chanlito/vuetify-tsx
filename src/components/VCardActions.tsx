import { ofType } from 'vue-tsx-support';
import { VCardActions } from 'vuetify/lib';

export default ofType().convert(VCardActions as any);
