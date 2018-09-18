import { ofType } from 'vue-tsx-support';

export default ofType<Props>().convert(
  require('vuetify/es5/components/VGrid').VLayout,
);

type Props = {
  column?: boolean;
  row?: boolean;
  wrap?: boolean;
};
