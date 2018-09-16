import { ofType } from 'vue-tsx-support';

import { Themable } from '../types';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VCarousel').VCarousel,
);

type Props = Themable & {
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
