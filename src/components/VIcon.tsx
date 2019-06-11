import { ofType } from 'vue-tsx-support';
import { VIcon } from 'vuetify/lib';

import {
  Activatable,
  Colorable,
  Positionable,
  Sizeable,
  Themeable,
} from '../types/props';

export default ofType<Props>().convert(VIcon as any);

type Props = Activatable & Colorable & Themeable & Positionable & Sizeable & {};
