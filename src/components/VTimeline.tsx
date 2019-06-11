import { ofType } from 'vue-tsx-support';
import { VTimeline } from 'vuetify/lib';

import { Denseable, Themeable } from '../types/props';

export default ofType<Props, Events>().convert(VTimeline as any);

type Props = Denseable &
  Themeable & {
    alignTop?: boolean;
  };

type Events = {};
