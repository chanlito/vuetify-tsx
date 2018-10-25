import * as tsx from 'vue-tsx-support';

import { Disableable, Colorable, Routable, Themable } from '../types';

export default tsx
  .ofType<Props, Events>()
  .convert(require('vuetify/es5/components/VList').VListTile);

type Props = Colorable &
  Disableable &
  Themable &
  Routable & {
    avatar?: boolean;
    inactive?: boolean;
    value?: any;
  };

type Events = {
  onClick: any;
};
