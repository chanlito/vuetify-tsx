import * as tsx from 'vue-tsx-support';

export default tsx
  .ofType()
  .convert(require('vuetify/es5/components/VList').VListTileAction);
