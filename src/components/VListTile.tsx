import { ofType } from 'vue-tsx-support';
import { VListTile } from 'vuetify/lib';

import { Activatable, Colorable, Routable, Themeable } from '../types/props';

export default ofType<Props, Events>().convert(VListTile as any);

type Props = Activatable &
  Colorable &
  Themeable &
  Routable & {
    avatar?: boolean;
    inactive?: boolean;
    value?: any;
  };

type Events = {
  onClick: any;
};
