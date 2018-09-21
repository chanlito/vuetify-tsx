import { ofType } from 'vue-tsx-support';

export default ofType<Props>().convert(
  require('vuetify/es5/components/VGrid').VContainer,
);

type Props = {
  'fill-height'?: boolean;
  fluid?: boolean;
};
