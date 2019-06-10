import { ofType } from 'vue-tsx-support';
import { VListTileContent } from 'vuetify/lib';

export default ofType().convert(VListTileContent as any);
