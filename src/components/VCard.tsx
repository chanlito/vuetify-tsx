import { ofType } from 'vue-tsx-support';
import { RouterLinkProps } from 'vue-tsx-support/options/enable-vue-router';

import { Colorable, Measurable } from '../types';

export default ofType<Props>().convert(
  require('vuetify/es5/components/VCard').VCard,
);

type Props = Colorable & Measurable & Partial<RouterLinkProps>;
