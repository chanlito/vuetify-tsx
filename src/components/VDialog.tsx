import { ofType } from 'vue-tsx-support';
import { VDialog } from 'vuetify/lib';

import {
  Activatable,
  Detachable,
  Themeable,
  Transitionable,
} from '../types/props';

export default ofType<Props, Events>().convert(VDialog as any);

type Props = Activatable &
  Detachable &
  Transitionable &
  Themeable & {
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
