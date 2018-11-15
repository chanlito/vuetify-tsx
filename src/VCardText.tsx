import { ofType } from 'vue-tsx-support';
import { VCardText } from 'vuetify/lib';

export default ofType().convert(VCardText as any);
