import {
  Colorable,
  Disableable,
  Measurable,
  Rippleable,
  Routable,
} from '@/shared/types';
import { ofType } from 'vue-tsx-support';
import { VCard } from 'vuetify/lib';

export default ofType<Props>().convert(VCard as any);

type Props = Colorable &
  Disableable &
  Measurable &
  Rippleable &
  Routable & {
    title?: boolean;
    raised?: boolean;
  };
