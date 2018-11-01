import * as tsx from 'vue-tsx-support';

import { Denseable, Themable } from '../types';

export default tsx
  .ofType<Props, Events>()
  .convert(require('vuetify/es5/components/VTimeline').VTimeline);

type Props = Denseable &
  Themable & {
    alignTop?: boolean;
  };

type Events = {};
