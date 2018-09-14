import { ofType } from 'vue-tsx-support';

export default ofType<Props>().convert(
  require('vuetify/es5/components/VMenu').VMenu,
);

type Props = {
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
};
