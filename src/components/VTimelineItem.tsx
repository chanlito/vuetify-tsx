import { ofType } from 'vue-tsx-support';
import { VTimelineItem } from 'vuetify/lib';

import { Colorable, Themeable } from '../types/props';

export default ofType<Props, Events>().convert(VTimelineItem as any);

type Props = Colorable &
  Themeable & {
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
