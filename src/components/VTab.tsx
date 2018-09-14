import { ofType } from 'vue-tsx-support';
import { RouterLinkProps } from 'vue-tsx-support/options/enable-vue-router';

import { Colorable } from '../types';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VTabs').VTab,
);

type Props = Colorable & Partial<RouterLinkProps> & { activeClass?: string };

interface Events {}
