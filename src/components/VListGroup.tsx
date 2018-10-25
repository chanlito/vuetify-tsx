import * as tsx from 'vue-tsx-support';

export default tsx
  .ofType<Props>()
  .convert(require('vuetify/es5/components/VList').VListGroup);

type Props = {
  activeClass?: string;
  appendIcon?: string;
  disabled?: boolean;
  group?: string;
  lazy?: boolean;
  noAction?: boolean;
  prependIcon?: string;
  subGroup?: boolean;
  value?: any;
};
