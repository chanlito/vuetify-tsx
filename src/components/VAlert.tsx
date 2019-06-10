import { ofType } from 'vue-tsx-support';
import { VAlert } from 'vuetify/lib';

import { Colorable, Transitionable } from '../shared/types'; // don't use `@/shared/types`

export default ofType<Props, Events>().convert(VAlert as any);

type Props = Colorable &
  Transitionable & {
    dismissible?: boolean;
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
