import { ofType } from 'vue-tsx-support';
import { VAvatar } from 'vuetify/lib';

import { Colorable, Sizeable } from '../types/props';

export default ofType<Props>().convert(VAvatar as any);

type Props = Colorable &
  Sizeable & {
    tile?: boolean;
  };
