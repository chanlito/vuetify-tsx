import { ofType } from 'vue-tsx-support';
import { VToolbarSideIcon } from 'vuetify/lib';

export default ofType<Props, Events>().convert(VToolbarSideIcon as any);

type Props = {};

type Events = {
  onClick: () => void;
};
