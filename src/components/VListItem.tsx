import { ofType } from 'vue-tsx-support';
import { VListItem } from 'vuetify/lib';

import {
  Activatable,
  Colorable,
  Denseable,
  Routable,
  Selectable,
  Themeable,
} from '../types/props';

export default ofType<Props, Events>().convert(VListItem as any);

type Props = Activatable &
  Colorable &
  Denseable &
  Routable &
  Selectable &
  Themeable & {
    avatar?: boolean;
    inactive?: boolean;
    value?: any;
    twoLine?: boolean;
    threeLine?: boolean;
  };

type Events = {
  onClick: any;
};
