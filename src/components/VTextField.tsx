import { ofType } from 'vue-tsx-support';
import { VTextField } from 'vuetify/lib';

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

export default ofType<Props, Events>().convert(VTextField as any);

type Props = Activatable &
  Colorable &
  Inputable &
  Loadable &
  Maskable &
  Measurable &
  Themeable &
  Validatable & {};

type Events = CommonEvents & {};
