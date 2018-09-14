import { ofType } from 'vue-tsx-support';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VTabs').VTabsItems,
);

interface Props {}

interface Events {}
