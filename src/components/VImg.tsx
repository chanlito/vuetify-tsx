import { Measurable } from '@/shared/types';
import { ofType } from 'vue-tsx-support';
import { VImg } from 'vuetify/lib';

export default ofType<Props>().convert(VImg as any);

type Props = Measurable & {
  aspectRatio?: string;
  contain?: boolean;
  src?: string;
};
