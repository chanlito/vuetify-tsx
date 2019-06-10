import { ofType } from 'vue-tsx-support';
import { VListTile } from 'vuetify/lib';

import { Colorable, Disableable, Routable, Themable } from '../shared/types';

export default ofType<Props, Events>().convert(VListTile as any);

type Props = Colorable &
  Disableable &
  Themable &
  Routable & {
    avatar?: boolean;
    inactive?: boolean;
    value?: any;
  };

type Events = {
  onClick: any;
};
