import { ofType } from 'vue-tsx-support';

import { Color } from '../types';

export default ofType<Props>().convert(
  require('vuetify/es5/components/VBtn').VBtn,
);

interface Props {
  block?: boolean;
  color?: Color;
  type?: 'submit';
  loading?: boolean;
  disabled?: boolean;
}
