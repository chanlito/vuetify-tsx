import { ofType } from 'vue-tsx-support';
import { VCheckbox } from 'vuetify/lib';

import {
  Activatable,
  Inputable,
  Loadable,
  Selectable,
  Themeable,
  Validatable,
} from '../types/props';

export default ofType<Props, Events>().convert(VCheckbox as any);

type Props = Activatable &
  Inputable &
  Loadable &
  Selectable &
  Themeable &
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
