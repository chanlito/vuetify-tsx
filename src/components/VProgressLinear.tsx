import { Colorable, Themable } from '@/shared/types';
import { ofType } from 'vue-tsx-support';
import { VProgressLinear } from 'vuetify/lib';

export default ofType<Props>().convert(VProgressLinear as any);

type Props = Colorable &
  Themable & {
    active?: boolean;
    backgroundColor?: string;
    backgroundOpacity?: number | string;
    bufferValue?: number | string;
    height?: number | string;
    indeterminate?: boolean;
    query?: boolean;
    value?: any;
  };
