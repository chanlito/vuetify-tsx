import { ofType } from 'vue-tsx-support';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VTextarea').VTextarea,
);

type Props = {};

type Events = {};
