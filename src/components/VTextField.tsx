import { ofType } from 'vue-tsx-support';
import { VTextField } from 'vuetify/lib';

import {
  Colorable,
  CommonEvents,
  Disableable,
  Inputable,
  Maskable,
  Measurable,
  Themable,
  Validatable,
} from '../shared/types';

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
    autocomplete?: 'on' | 'off';
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
    on?: {
      change?: (value: string) => any;
      'click:append'?: (event: MouseEvent) => any;
      'click:append-outer'?: (event: MouseEvent) => any;
      'click:clear'?: (event: MouseEvent) => any;
      'click:prepend'?: (event: MouseEvent) => any;
      'click:prepend-inner'?: (event: MouseEvent) => any;
      input?: (value: string) => any;
      'update:error'?: (changed: boolean) => any;
    };
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
