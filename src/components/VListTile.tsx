import { ofType } from 'vue-tsx-support';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VList').VListTile,
);

type Props = {};

type Events = {
  onClick: any;
};
