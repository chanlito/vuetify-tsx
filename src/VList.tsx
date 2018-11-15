import * as tsx from 'vue-tsx-support';
import { VList } from 'vuetify/lib';

import { Colorable, Denseable, Themable } from './types';

export default tsx.ofType<Props>().convert(VList as any);

type Props = Colorable &
  Denseable &
  Themable & {
    expand?: boolean;
    subheader?: boolean;
    twoLine?: boolean;
    threeLine?: boolean;
  };
