import { ofType } from 'vue-tsx-support';

import {
  Colorable,
  Disableable,
  Positionable,
  Themable,
  Sizeable,
} from '../types';

export default ofType<Props>().convert(
  require('vuetify/es5/components/VIcon').VIcon,
);

type Props = Colorable & Disableable & Themable & Positionable & Sizeable & {};
