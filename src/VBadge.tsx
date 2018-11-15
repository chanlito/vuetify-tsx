import * as tsx from 'vue-tsx-support';
import { VBadge } from 'vuetify/lib';

import { Colorable, Positionable, Transitionable } from './types';

export default tsx.ofType<Props, Events>().convert(VBadge as any);

type Props = Colorable &
  Positionable &
  Transitionable & {
    mode?: string;
    origin?: string;
    overlap?: boolean;
    value?: any;
  };

type Events = {
  onInput?: any;
};
