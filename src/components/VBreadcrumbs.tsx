import { ofType } from 'vue-tsx-support';

import { Themable } from '../types';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VBreadcrumbs').VBreadcrumbs,
);

type Props = Themable & {
  divider?: string;
  justifyCenter?: boolean;
  justifyEnd?: boolean;
  large?: boolean;
};

type Events = {};
