import { ofType } from 'vue-tsx-support';

import { Disableable, Routable } from '../types';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VBreadcrumbs').VBreadcrumbsItem,
);

type Props = Disableable & Routable & {};

type Events = {};
