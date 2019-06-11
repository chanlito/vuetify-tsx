import { ofType } from 'vue-tsx-support';
import { VListItemAction } from 'vuetify/lib';

export default ofType().convert(VListItemAction as any);
