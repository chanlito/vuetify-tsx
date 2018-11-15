import { ofType } from 'vue-tsx-support';
import { VCardTitle } from 'vuetify/lib';

export default ofType<Props>().convert(VCardTitle as any);

type Props = {
  primaryTitle?: boolean;
};
