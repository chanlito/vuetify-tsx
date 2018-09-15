import { ofType } from 'vue-tsx-support';

import {
  Colorable,
  CommonEvents,
  Disableable,
  Measurable,
  Themable,
} from '../types';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VTextField').VTextField,
);

type Props = Colorable &
  Disableable &
  Measurable &
  Themable & {
    appendIcon?: string;
    appendIconCb?: Function;
    appendOuterIcon?: Function;
    appendOuterIconCb?: Function;
    autofocus?: boolean;
    backgroundColor?: string;
    box?: boolean;
    browserAutocomplete?: string;
    clearIcon?: string;
    clearIconCb?: Function;
    clearable?: boolean;
    counter?: boolean | number | string;
    error?: boolean;
    errorCount?: string | number;
    errorMessages?: string;
    flat?: boolean;
    fullWidth?: boolean;
    hideDetails?: boolean;
    hint?: string;
    label?: string;
    loading?: boolean | string;
    mask?: string | object;
    messages?: string | string[];
    outline?: boolean;
    persistentHint?: boolean;
    name?: string;
    placeholder?: string;
    prefix?: string;
    prependIcon?: string;
    prependIconCb?: Function;
    prependInnerIcon?: string;
    prependInnerIconCb?: Function;
    readonly?: boolean;
    returnMaskedValue?: boolean;
    reverse?: boolean;
    rules?: ((...args: any[]) => boolean | string)[];
    singleLine?: boolean;
    solo?: boolean;
    soloInverted?: boolean;
    success?: boolean;
    successMessages?: string | string[];
    suffix?: string;
    /** @deprecated */
    textarea?: boolean;
    type?: string;
    validateOnBlur?: boolean;
    value?: any;
  };

type Events = CommonEvents;
