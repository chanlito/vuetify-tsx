import { ofType } from 'vue-tsx-support';
import { VImg } from 'vuetify/lib';

import { Measurable } from './types';

export default ofType<Props>().convert(VImg as any);

type Props = Measurable & {
  aspectRatio?: string;
  contain?: boolean;
  src?: string;
};
