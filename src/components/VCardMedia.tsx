import { Imageable, Measurable } from '@/shared/types';
import { ofType } from 'vue-tsx-support';
import { VCardMedia } from 'vuetify/lib';

export default ofType<Props>().convert(VCardMedia as any);

type Props = Imageable & Measurable & {};
