import { ofType } from 'vue-tsx-support';
import { VAppBar } from 'vuetify/lib';

import {
  Applicationable,
  Collapseable,
  Colorable,
  Denseable,
  Positionable,
  Scrollable,
  Themeable,
} from '../types/props';

export default ofType<Props>().convert(VAppBar as any);

type Props = Applicationable &
  Collapseable &
  Colorable &
  Denseable &
  Positionable &
  Scrollable &
  Themeable & {
    card?: boolean;
    clippedLeft?: boolean;
    clippedRight?: boolean;
    extended?: boolean;
    extensionHeight?: number | string;
    fixed?: boolean;
    flat?: boolean;
    floating?: boolean;
    invertedScroll?: boolean;
    manualScroll?: boolean;
    prominent?: boolean;
    scrollOffScreen?: boolean;
    scrollToolbarOffScreen?: boolean;
    tabs?: boolean;
  };
