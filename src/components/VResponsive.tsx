import { ofType } from 'vue-tsx-support';

import { Measurable } from '../types';

export default ofType<Props>().convert(
  require('vuetify/es5/components/VResponsive').VResponsive,
);

type Props = Measurable;
