import { ofType } from 'vue-tsx-support';

export default ofType().convert(
  require('vuetify/es5/components/Vuetify').default,
) as any;
