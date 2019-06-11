import { ofType } from 'vue-tsx-support';
import { VAlert } from 'vuetify/lib';

import { CommonEvents } from '../types/events';
import { Colorable, Iconable, Transitionable } from '../types/props';

export default ofType<Props, Events>().convert(VAlert as any);

type Props = Colorable &
  Iconable &
  Transitionable & {
    dismissible?: boolean;
    outline?: boolean;
    type?: 'success' | 'info' | 'warning' | 'error';
    value?: any;
  };

type Events = CommonEvents & {};
