import { ofType } from 'vue-tsx-support';

import { Transitionable } from '../types';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VCarousel').VCarouselItem,
);

type Props = Transitionable & {
  reverseTransition?: string;
};

type Events = {};
