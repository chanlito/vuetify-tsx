import { ofType } from 'vue-tsx-support';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VTabs').VTabItem,
);

interface Props {}

interface Events {}
