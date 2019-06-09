import { Transitionable } from '@/shared/types';
import { ofType } from 'vue-tsx-support';
import { VCarouselItem } from 'vuetify/lib';

export default ofType<Props, Events>().convert(VCarouselItem as any);

type Props = Transitionable & {
  reverseTransition?: string;
};

type Events = {};
