import { ofType } from 'vue-tsx-support';

import {
  Colorable,
  CommonEvents,
  Disableable,
  Measurable,
  Themable,
  Validatable,
  Inputable,
} from '../types';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VTextarea').VTextarea,
);

type Props = Colorable &
  Disableable &
  Inputable &
  Measurable &
  Themable &
  Validatable & {
    appendOuterIcon?: Function;
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
    mask?: string | object;
    outline?: boolean;
    name?: string;
    placeholder?: string;
    prefix?: string;
    prependInnerIcon?: string;
    prependInnerIconCb?: Function;
    returnMaskedValue?: boolean;
    reverse?: boolean;
    singleLine?: boolean;
    solo?: boolean;
    soloInverted?: boolean;
    suffix?: string;
    /** @deprecated */
    textarea?: boolean;
    type?: string;
    autoGrow?: boolean;
    noResize?: boolean;
    rowHeight?: number | string;
    rows?: number | string;
  };

type Events = CommonEvents;
