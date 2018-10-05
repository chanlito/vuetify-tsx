import { ofType } from 'vue-tsx-support';

import { Colorable, Themable } from '../types';

const VProgressLinear = ofType<Props>().convert(
  require('vuetify/es5/components/VProgressLinear').VProgressLinear,
);

export default VProgressLinear;

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
