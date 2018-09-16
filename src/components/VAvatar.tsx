import { ofType } from 'vue-tsx-support';

import { Colorable } from '../types';

export default ofType<Props>().convert(
  require('vuetify/es5/components/VAvatar').VAvatar,
);

type Props = Colorable & {
  size?: number | string;
  tile?: boolean;
};
