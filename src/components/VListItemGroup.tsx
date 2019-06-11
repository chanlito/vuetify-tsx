import { ofType } from 'vue-tsx-support';
import { VListItemGroup } from 'vuetify/lib';

import { CommonEvents } from '../types/events';

export default ofType<Props, Events>().convert(VListItemGroup as any);

type Props = {
  value?: any;
};

type Events = CommonEvents & {};
