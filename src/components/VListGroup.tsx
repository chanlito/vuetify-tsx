import { ofType } from 'vue-tsx-support';
import { VListGroup } from 'vuetify/lib';

import { CommonEvents } from '../types/events';
import { Activatable, Bootable, Rippleable } from '../types/props';

export default ofType<Props, Events>().convert(VListGroup as any);

type Props = Activatable &
  Bootable &
  Rippleable & {
    activeClass?: string;
    appendIcon?: string;
    group?: string;
    lazy?: boolean;
    noAction?: boolean;
    prependIcon?: string;
    subGroup?: boolean;
    value?: any;
  };

type Events = CommonEvents & {};
