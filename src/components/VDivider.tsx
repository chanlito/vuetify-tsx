import { ofType } from 'vue-tsx-support';

import { Themable } from '../types';

export default ofType<Props>().convert(
  require('vuetify/es5/components/VDivider').VDivider,
);

type Props = Themable & {
  inset?: boolean;
  vertical?: boolean;
};
