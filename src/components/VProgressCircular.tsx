import { ofType } from 'vue-tsx-support';

import { Colorable, Themable } from '../types';

const VProgressCircular = ofType<Props>().convert(
  require('vuetify/es5/components/VProgressCircular').VProgressCircular,
);

export default VProgressCircular;

type Props = Colorable &
  Themable & {
    indeterminate?: boolean;
    rotate?: number;
    size?: number | string;
    value?: any;
    width?: number;
  };
