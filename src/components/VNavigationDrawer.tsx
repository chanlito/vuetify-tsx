import { ofType } from 'vue-tsx-support';

import { Themable } from '../types';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VNavigationDrawer').VNavigationDrawer,
);

type Props = Themable & {
  absolute?: boolean;
  app?: boolean;
  clipped?: boolean;
  disableResizeWatcher?: boolean;
  disableRouteWatcher?: boolean;
  fixed?: boolean;
  floating?: boolean;
  height?: number | string;
  hideOverlay?: boolean;
  miniVariant?: boolean;
  miniVariantWidth?: number | string;
  mobileBreakPoint?: number | string;
  permanent?: boolean;
  right?: boolean;
  stateless?: boolean;
  temporary?: boolean;
  touchless?: boolean;
  value?: any;
  width?: number | string;
};

type Events = {
  onInput: any;
};
