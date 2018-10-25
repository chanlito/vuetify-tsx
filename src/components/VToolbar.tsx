import * as tsx from 'vue-tsx-support';

import { Colorable, Denseable, Themable, Positionable } from '../types';

export default tsx
  .ofType<Props>()
  .convert(require('vuetify/es5/components/VToolbar').VToolbar);

type Props = Colorable &
  Denseable &
  Themable & {
    absolute?: boolean;
    app?: boolean;
    card?: boolean;
    tabs?: boolean;
    flat?: boolean;
    scrollOffScreen?: boolean;
    clippedLeft?: boolean;
    clippedRight?: boolean;
    extended?: boolean;
    extensionHeight?: number | string;
    fixed?: boolean;
    floating?: boolean;
    invertedScroll?: boolean;
    manualScroll?: boolean;
    prominent?: boolean;
    scrollTarget?: string;
    scrollThreshold?: number;
    scrollToolbarOffScreen?: boolean;
  };
