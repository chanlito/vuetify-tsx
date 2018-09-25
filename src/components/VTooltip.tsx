import { ofType } from 'vue-tsx-support';

import { Positionable } from '../types';

export default ofType<Props>().convert(
  require('vuetify/es5/components/VTooltip').VTooltip,
);

type Props = Positionable & {};
