import * as tsx from 'vue-tsx-support';
import { VAlert } from 'vuetify/lib';

import { Colorable, Transitionable } from './types';

export default tsx.ofType<Props, Events>().convert(VAlert as any);

type Props = Colorable &
  Transitionable & {
    dismissable?: boolean;
    icon?: string;
    mode?: string;
    origin?: string;
    outline?: boolean;
    type?: 'success' | 'info' | 'warning' | 'error';
    value?: any;
  };

type Events = {
  onInput?: any;
};
