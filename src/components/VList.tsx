import * as tsx from 'vue-tsx-support';

import { Colorable, Denseable, Themable } from '../types';

export default tsx
  .ofType<Props>()
  .convert(require('vuetify/es5/components/VList').VList);

type Props = Colorable &
  Denseable &
  Themable & {
    expand?: boolean;
    subheader?: boolean;
    twoLine?: boolean;
    threeLine?: boolean;
  };
