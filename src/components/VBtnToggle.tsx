import { ofType } from 'vue-tsx-support';

import { Themable } from '../types';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VBtnToggle').VBtnToggle,
);

type Props = Themable & {
  inputValue?: any;
  mandatory?: boolean;
  multiple?: boolean;
};

type Events = {
  onChange: any;
};
