import { Colorable } from '@/shared/types';
import { ofType } from 'vue-tsx-support';
import { RouterLinkProps } from 'vue-tsx-support/options/enable-vue-router';
import { VTab } from 'vuetify/lib';

export default ofType<Props, Events>().convert(VTab as any);

type Props = Colorable & Partial<RouterLinkProps> & { activeClass?: string };

interface Events {}
