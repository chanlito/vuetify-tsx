import { ofType } from 'vue-tsx-support';

import {
  Colorable,
  Disableable,
  Measurable,
  Rippleable,
  Routable,
} from '../types';

export default ofType<Props>().convert(
  require('vuetify/es5/components/VCard').VCard,
);

type Props = Colorable &
  Disableable &
  Measurable &
  Rippleable &
  Routable & {
    title?: boolean;
    raised?: boolean;
  };
