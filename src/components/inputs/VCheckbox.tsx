import {
  Disableable,
  Inputable,
  Loadable,
  Selectable,
  Themable,
  Validatable,
} from '@/shared/types';
import { ofType } from 'vue-tsx-support';
import { VCheckbox } from 'vuetify/lib';

export default ofType<Props, Events>().convert(VCheckbox as any);

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
