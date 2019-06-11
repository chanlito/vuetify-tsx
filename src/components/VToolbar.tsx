import { ofType } from 'vue-tsx-support';
import { VToolbar } from 'vuetify/lib';

import {
  Applicationable,
  Colorable,
  Denseable,
  Positionable,
  Scrollable,
  Themeable,
} from '../types/props';

export default ofType<Props>().convert(VToolbar as any);

type Props = Applicationable &
  Colorable &
  Denseable &
  Positionable &
  Scrollable &
  Themeable & {
    card?: boolean;
    tabs?: boolean;
    flat?: boolean;
    scrollOffScreen?: boolean;
    clippedLeft?: boolean;
    clippedRight?: boolean;
    extended?: boolean;
    extensionHeight?: number | string;
    floating?: boolean;
    invertedScroll?: boolean;
    manualScroll?: boolean;
    prominent?: boolean;
    scrollToolbarOffScreen?: boolean;
  };
