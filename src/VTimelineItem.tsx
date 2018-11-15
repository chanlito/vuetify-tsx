import * as tsx from 'vue-tsx-support';
import { VTimelineItem } from 'vuetify/lib';

import { Colorable, Themable } from './types';

export default tsx.ofType<Props, Events>().convert(VTimelineItem as any);

type Props = Colorable &
  Themable & {
    fillDot?: boolean;
    hideDot?: boolean;
    icon?: string;
    iconColor?: string;
    large?: boolean;
    left?: boolean;
    right?: boolean;
    small?: boolean;
  };

type Events = {};
