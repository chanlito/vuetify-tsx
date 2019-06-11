import { ofType } from 'vue-tsx-support';
import { VCard } from 'vuetify/lib';

import {
  Activatable,
  Colorable,
  Loadable,
  Measurable,
  Rippleable,
  Routable,
} from '../types/props';

export default ofType<Props>().convert(VCard as any);

type Props = Activatable &
  Colorable &
  Loadable &
  Measurable &
  Rippleable &
  Routable & {
    hover?: boolean;
    outlined?: boolean;
    raised?: boolean;
    title?: string;
  };
