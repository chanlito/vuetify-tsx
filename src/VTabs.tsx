import { ofType } from 'vue-tsx-support';
import { VTabs } from 'vuetify/lib';

import { Colorable, Themable } from './types';

export default ofType<Props, Events>().convert(VTabs as any);

type Props = Colorable & Themable & { fixedTabs?: boolean; value?: string };

interface Events {}
