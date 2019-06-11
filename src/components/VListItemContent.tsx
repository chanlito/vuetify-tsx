import { ofType } from 'vue-tsx-support';
import { VListItemContent } from 'vuetify/lib';

export default ofType().convert(VListItemContent as any);
