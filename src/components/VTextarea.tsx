import { ofType } from 'vue-tsx-support';
import { VTextarea } from 'vuetify/lib';

import { CommonEvents } from '../types/events';
import {
  Activatable,
  Colorable,
  Inputable,
  Loadable,
  Maskable,
  Measurable,
  Themeable,
  Validatable,
} from '../types/props';

export default ofType<Props, Events>().convert(VTextarea as any);

type Props = Activatable &
  Colorable &
  Inputable &
  Loadable &
  Maskable &
  Measurable &
  Themeable &
  Validatable & {
    /** @deprecated */
    textarea?: boolean;
    autoGrow?: boolean;
    noResize?: boolean;
    rowHeight?: number | string;
    rows?: number | string;
  };

type Events = CommonEvents & {};
