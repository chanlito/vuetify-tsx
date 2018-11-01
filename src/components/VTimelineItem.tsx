import * as tsx from 'vue-tsx-support';

import { Colorable, Themable } from '../types';

export default tsx
  .ofType<Props, Events>()
  .convert(require('vuetify/es5/components/VTimeline').VTimelineItem);

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
