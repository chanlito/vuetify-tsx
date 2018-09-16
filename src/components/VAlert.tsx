import { ofType } from 'vue-tsx-support';

import { Colorable, Transitionable } from '../types';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VAlert').VAlert,
);

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
