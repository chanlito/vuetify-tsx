import { RouterLinkProps } from 'vue-tsx-support/options/enable-vue-router';

import { Activatable } from './activatable';
import { Rippleable } from './rippleable';

export type Routable = Activatable &
  Rippleable &
  Partial<RouterLinkProps> & {
    href?: string | object;
    tag?: string;
    target?: string;
    nuxt?: boolean;
  };
