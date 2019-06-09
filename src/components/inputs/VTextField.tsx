import {
  Colorable,
  CommonEvents,
  Disableable,
  Inputable,
  Maskable,
  Measurable,
  Themable,
  Validatable,
} from '@/shared/types';
import { ofType } from 'vue-tsx-support';
import { VTextField } from 'vuetify/lib';

export default ofType<Props, Events>().convert(VTextField as any);

type Props = Colorable &
  Disableable &
  Inputable &
  Maskable &
  Measurable &
  Themable &
  Validatable & {
    appendOuterIcon?: Function;
    /** @deprecated */
    appendOuterIconCb?: Function;
    autofocus?: boolean;
    box?: boolean;
    browserAutocomplete?: string;
    clearIcon?: string;
    clearIconCb?: Function;
    clearable?: boolean;
    counter?: boolean | number | string;
    flat?: boolean;
    fullWidth?: boolean;
    loading?: boolean | string;
    outline?: boolean;
    name?: string;
    placeholder?: string;
    prefix?: string;
    prependInnerIcon?: string;
    /** @deprecated */
    prependInnerIconCb?: Function;
    required?: boolean;
    reverse?: boolean;
    singleLine?: boolean;
    solo?: boolean;
    soloInverted?: boolean;
    suffix?: string;
    /** @deprecated */
    textarea?: boolean;
    type?: string;
  };

type Events = CommonEvents;
