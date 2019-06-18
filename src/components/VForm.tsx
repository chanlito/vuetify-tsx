import { ofType } from 'vue-tsx-support';
import { VForm } from 'vuetify/lib';

export default ofType<Props>().convert(VForm as any);

type Props = {
  ref?: string;
  'v-model'?: any;
  'lazy-validation'?: boolean;
  value?: boolean;
};
