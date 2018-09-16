import { ofType } from 'vue-tsx-support';

import { Colorable, Positionable, Transitionable } from '../types';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VBadge').VBadge,
);

type Props = Colorable &
  Positionable &
  Transitionable & {
    mode?: string;
    origin?: string;
    overlap?: boolean;
    value?: any;
  };

type Events = {
  onInput?: any;
};
