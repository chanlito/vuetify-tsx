import { ofType } from 'vue-tsx-support';
import { VAvatar } from 'vuetify/lib';

import { Colorable } from '../shared/types';

export default ofType<Props>().convert(VAvatar as any);

type Props = Colorable & {
  size?: number | string;
  tile?: boolean;
};
