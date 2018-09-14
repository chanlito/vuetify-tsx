import { ofType } from 'vue-tsx-support';

import { Measurable } from '../types';

export default ofType<Props>().convert(
  require('vuetify/es5/components/VImg').VImg,
);

type Props = Measurable & {
  aspectRatio?: string;
  contain?: boolean;
  src?: string;
};
