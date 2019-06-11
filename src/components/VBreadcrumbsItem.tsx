import { ofType } from 'vue-tsx-support';
import { VBreadcrumbsItem } from 'vuetify/lib';

import { Activatable, Routable } from '../types/props';

export default ofType<Props, Events>().convert(VBreadcrumbsItem as any);

type Props = Activatable & Routable & {};

type Events = {};
