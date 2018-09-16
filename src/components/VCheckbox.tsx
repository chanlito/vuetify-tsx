import { ofType } from 'vue-tsx-support';

import {
  Themable,
  Selectable,
  Disableable,
  Validatable,
  Loadable,
  Inputable,
} from '../types';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VCheckbox').VCheckbox,
);

type Props = Disableable &
  Inputable &
  Loadable &
  Selectable &
  Themable &
  Validatable & {
    indeterminate?: boolean;
    indeterminateIcon?: string;
    onIcon?: string;
    offIcon?: string;
    value?: any;
  };

type Events = {
  onInput: any;
};
