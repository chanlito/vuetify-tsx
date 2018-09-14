import { ofType } from 'vue-tsx-support';

import { Colorable, Themable } from '../types';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VTabs').VTabs,
);

type Props = Colorable & Themable & { fixedTabs?: boolean; value?: string };

interface Events {}
