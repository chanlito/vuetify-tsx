import * as tsx from 'vue-tsx-support';
import { VTimeline } from 'vuetify/lib';

import { Denseable, Themable } from './types';

export default tsx.ofType<Props, Events>().convert(VTimeline as any);

type Props = Denseable &
  Themable & {
    alignTop?: boolean;
  };

type Events = {};
