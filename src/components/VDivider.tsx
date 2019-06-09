import { Themable } from '@/shared/types';
import { ofType } from 'vue-tsx-support';
import { VDivider } from 'vuetify/lib';

export default ofType<Props>().convert(VDivider as any);

type Props = Themable & {
  inset?: boolean;
  vertical?: boolean;
};
