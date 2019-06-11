import { ofType } from 'vue-tsx-support';
import { VProgressCircular } from 'vuetify/lib';

import { Colorable, Themeable } from '../types/props';

export default ofType<Props>().convert(VProgressCircular as any);

type Props = Colorable &
  Themeable & {
    indeterminate?: boolean;
    rotate?: number;
    size?: number | string;
    value?: any;
    width?: number;
  };
