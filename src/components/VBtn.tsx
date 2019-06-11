import { ofType } from 'vue-tsx-support';
import { VBtn } from 'vuetify/lib';

import { CommonEvents } from '../types/events';
import {
  Activatable,
  Colorable,
  Iconable,
  Loadable,
  Positionable,
  Rippleable,
  Routable,
  Selectable,
  Sizeable,
  Themeable,
} from '../types/props';

export default ofType<Props, Events>().convert(VBtn as any);

type Props = Activatable &
  Colorable &
  Iconable &
  Loadable &
  Positionable &
  Rippleable &
  Routable &
  Selectable &
  Sizeable &
  Themeable & {
    block?: boolean;
    depressed?: boolean;
    fab?: boolean;
    flat?: boolean;
    outline?: boolean;
    round?: boolean;
    type?: 'button' | 'submit';
    text?: boolean;
    value?: any;
  };

type Events = CommonEvents & {};
