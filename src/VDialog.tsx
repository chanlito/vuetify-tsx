import { ofType } from 'vue-tsx-support';
import { VDialog } from 'vuetify/lib';

import { Detachable, Disableable, Transitionable, Themable } from './types';

export default ofType<Props, Events>().convert(VDialog as any);

type Props = Detachable &
  Disableable &
  Transitionable &
  Themable & {
    fullWidth?: boolean;
    fullscreen?: boolean;
    hideOverlay?: boolean;
    lazy?: boolean;
    maxWidth?: string | number;
    noClickAnimation?: boolean;
    origin?: string;
    persistent?: boolean;
    returnValue?: any;
    scrollable?: boolean;
    value?: any;
    width?: string | number;
  };

type Events = {
  onInput: any;
};
