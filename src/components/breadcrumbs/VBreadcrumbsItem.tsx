import { Disableable, Routable } from '@/shared/types';
import { ofType } from 'vue-tsx-support';
import { VBreadcrumbsItem } from 'vuetify/lib';

export default ofType<Props, Events>().convert(VBreadcrumbsItem as any);

type Props = Disableable & Routable & {};

type Events = {};
