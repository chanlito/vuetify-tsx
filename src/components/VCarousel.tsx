import { ofType } from 'vue-tsx-support';
import { VCarousel } from 'vuetify/lib';

import { Themeable } from '../types/props';

export default ofType<Props, Events>().convert(VCarousel as any);

type Props = Themeable & {
  cycle?: boolean;
  delimiterIcon?: string;
  hideControls?: boolean;
  hideDelimiters?: boolean;
  interval?: string | number;
  nextIcon?: string | boolean;
  prevIcon?: string | boolean;
  value?: number;
};

type Events = {
  onInput: any;
};
