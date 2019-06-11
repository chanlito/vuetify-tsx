import { ofType } from 'vue-tsx-support';
import { VProgressLinear } from 'vuetify/lib';

import { Colorable, Themeable } from '../types/props';

export default ofType<Props>().convert(VProgressLinear as any);

type Props = Colorable &
  Themeable & {
    active?: boolean;
    backgroundColor?: string;
    backgroundOpacity?: number | string;
    bufferValue?: number | string;
    height?: number | string;
    indeterminate?: boolean;
    query?: boolean;
    value?: any;
  };
