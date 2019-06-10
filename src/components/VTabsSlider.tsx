import { Colorable } from '@/shared/types';
import { ofType } from 'vue-tsx-support';
import { VTabsSlider } from 'vuetify/lib';

export default ofType<Props, Events>().convert(VTabsSlider as any);

type Props = Colorable;

interface Events {}
