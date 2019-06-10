import { ofType } from 'vue-tsx-support';
import { VListTileAction } from 'vuetify/lib';

export default ofType().convert(VListTileAction as any);
