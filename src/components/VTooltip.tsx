import { Positionable } from '@/shared/types';
import { ofType } from 'vue-tsx-support';
import { VTooltip } from 'vuetify/lib';

export default ofType<Props>().convert(VTooltip as any);

type Props = Positionable & {};
