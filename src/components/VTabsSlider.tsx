import { ofType } from 'vue-tsx-support';

import { Colorable } from '../types';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VTabs').VTabsSlider,
);

type Props = Colorable;

interface Events {}
