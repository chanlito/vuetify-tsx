import { Measurable } from '@/shared/types';
import { ofType } from 'vue-tsx-support';
import { VResponsive } from 'vuetify/lib';

export default ofType<Props>().convert(VResponsive as any);

type Props = Measurable;
