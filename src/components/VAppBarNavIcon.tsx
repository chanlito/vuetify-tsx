import { ofType } from 'vue-tsx-support';
import { VAppBarNavIcon } from 'vuetify/lib';

import { CommonEvents } from '../types/events';

export default ofType<Props, Events>().convert(VAppBarNavIcon as any);

type Props = {
  value?: any;
};

type Events = CommonEvents & {};
