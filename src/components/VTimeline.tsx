import { Denseable, Themable } from '@/shared/types';
import { ofType } from 'vue-tsx-support';
import { VTimeline } from 'vuetify/lib';

export default ofType<Props, Events>().convert(VTimeline as any);

type Props = Denseable &
  Themable & {
    alignTop?: boolean;
  };

type Events = {};
