import { ofType } from 'vue-tsx-support';
import { VList } from 'vuetify/lib';

import { Colorable, Denseable, Themable } from '../shared/types';

export default ofType<Props>().convert(VList as any);

type Props = Colorable &
  Denseable &
  Themable & {
    expand?: boolean;
    subheader?: boolean;
    twoLine?: boolean;
    threeLine?: boolean;
  };
