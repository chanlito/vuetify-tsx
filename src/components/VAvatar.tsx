import { Colorable } from '@/shared/types';
import { ofType } from 'vue-tsx-support';
import { VAvatar } from 'vuetify/lib';

export default ofType<Props>().convert(VAvatar as any);

type Props = Colorable & {
  size?: number | string;
  tile?: boolean;
};
