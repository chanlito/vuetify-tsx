import * as tsx from 'vue-tsx-support';
import { VAvatar } from 'vuetify/lib';

import { Colorable } from './types';

export default tsx.ofType<Props>().convert(VAvatar as any);

type Props = Colorable & {
  size?: number | string;
  tile?: boolean;
};
