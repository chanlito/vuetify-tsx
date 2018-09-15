import { ofType } from 'vue-tsx-support';

import { Measurable, Imageable } from '../types';

export default ofType<Props>().convert(
  require('vuetify/es5/components/VCard').VCardMedia,
);

type Props = Imageable & Measurable & {};
