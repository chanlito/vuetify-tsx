import { Colorable, Positionable, Transitionable } from '@/shared/types';
import { ofType } from 'vue-tsx-support';
import { VBadge } from 'vuetify/lib';

export default ofType<Props, Events>().convert(VBadge as any);

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
