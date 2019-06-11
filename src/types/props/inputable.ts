export type Inputable = {
  appendIcon?: string;
  /** @deprecated */
  appendIconCb?: Function;
  appendOuterIcon?: Function;
  appendOuterIconCb?: Function;
  autofocus?: boolean;
  backgroundColor?: string;
  box?: boolean;
  browserAutocomplete?: string;
  clearable?: boolean;
  clearIcon?: string;
  clearIconCb?: Function;
  counter?: boolean | string | number;
  disabled?: boolean;
  flat?: boolean;
  fullWidth?: boolean;
  height?: number | string;
  hideDetails?: boolean;
  hint?: string;
  label?: string;
  name?: string;
  outline?: boolean;
  persistentHint?: boolean;
  placeholder?: string;
  prefix?: string;
  prependIcon?: string;
  prependInnerIcon?: string;
  prependInnerIconCb?: Function;
  /** @deprecated */
  prependIconCb?: Function;
  readonly?: boolean;
  /** Reverses the input orientation. */
  reverse?: boolean;
  shaped?: boolean;
  singleLine?: boolean;
  /** Bound when using the autocomplete prop. Use the .sync modifier to catch user input from the autocomplete search input */
  searchInput?: any;
  solo?: boolean;
  soloInverted?: boolean;
  suffix?: string;
  text?: boolean;
  type?: string;
  value?: any;
};
