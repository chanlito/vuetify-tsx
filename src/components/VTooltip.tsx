import { Positionable } from '@/types';
import { ofType } from 'vue-tsx-support';

export default ofType<Props>().convert(
  require('vuetify/es5/components/VTooltip').VTooltip,
);

type Props = Positionable & {};
