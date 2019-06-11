import { ofType } from 'vue-tsx-support';
import { VBadge } from 'vuetify/lib';

import { CommonEvents } from '../types/events';
import { Colorable, Positionable, Transitionable } from '../types/props';

export default ofType<Props, Events>().convert(VBadge as any);

type Props = Colorable &
  Positionable &
  Transitionable & {
    overlap?: boolean;
    value?: any;
  };

type Events = CommonEvents & {};
