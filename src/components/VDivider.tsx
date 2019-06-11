import { ofType } from 'vue-tsx-support';
import { VDivider } from 'vuetify/lib';

import { Themeable } from '../types/props';

export default ofType<Props>().convert(VDivider as any);

type Props = Themeable & {
  inset?: boolean;
  vertical?: boolean;
};
