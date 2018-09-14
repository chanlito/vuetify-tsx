import { ofType } from 'vue-tsx-support';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VToolbar').VToolbarSideIcon,
);

type Props = {};

type Events = {
  onClick: () => void;
};
