import { ofType } from 'vue-tsx-support';
import { VNavigationDrawer } from 'vuetify/lib';

import {
  Applicationable,
  Measurable,
  Positionable,
  Themeable,
} from '../types/props';

export default ofType<Props, Events>().convert(VNavigationDrawer as any);

type Props = Applicationable &
  Measurable &
  Positionable &
  Themeable & {
    clipped?: boolean;
    disableResizeWatcher?: boolean;
    disableRouteWatcher?: boolean;
    floating?: boolean;
    hideOverlay?: boolean;
    miniVariant?: boolean;
    miniVariantWidth?: number | string;
    mobileBreakPoint?: number | string;
    permanent?: boolean;
    stateless?: boolean;
    temporary?: boolean;
    touchless?: boolean;
    value?: any;
  };

type Events = {
  onInput: any;
};
