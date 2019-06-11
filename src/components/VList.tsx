import { ofType } from 'vue-tsx-support';
import { VList } from 'vuetify/lib';

import {
  Activatable,
  Colorable,
  Denseable,
  Elevatable,
  Measurable,
  Themeable,
} from '../types/props';

export default ofType<Props>().convert(VList as any);

type Props = Activatable &
  Colorable &
  Elevatable &
  Denseable &
  Measurable &
  Themeable & {
    expand?: boolean;
    flat?: boolean;
    nav?: boolean;
    rounded?: boolean;
    shaped?: boolean;
    subheader?: boolean;
    tile?: boolean;
    threeLine?: boolean;
    twoLine?: boolean;
  };
