import { ofType } from 'vue-tsx-support';

import { Colorable, Themable } from '../types';

export default ofType<Props>().convert(
  require('vuetify/es5/components/VToolbar').VToolbar,
);

type Props = Colorable &
  Themable & {
    app?: boolean;
    tabs?: boolean;
    flat?: boolean;
    scrollOffScreen?: boolean;
  };
