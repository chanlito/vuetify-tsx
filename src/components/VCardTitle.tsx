import { ofType } from 'vue-tsx-support';

export default ofType<Props>().convert(
  require('vuetify/es5/components/VCard').VCardTitle,
);

type Props = {
  primaryTitle?: boolean;
};
