import { ofType } from 'vue-tsx-support';
import { VAutocomplete } from 'vuetify/lib';
import { Inputable } from './types';

export default ofType<Props>().convert(VAutocomplete as any);

type Props = Inputable & {
  items: any[];
};
