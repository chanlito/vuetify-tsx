import { ofType } from 'vue-tsx-support';
import { VBreadcrumbsItem } from 'vuetify/lib';

import { Disableable, Routable } from './types';

export default ofType<Props, Events>().convert(VBreadcrumbsItem as any);

type Props = Disableable & Routable & {};

type Events = {};
