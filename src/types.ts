import { RouterLinkProps } from 'vue-tsx-support/options/enable-vue-router';

export type Color =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'white'
  | 'black'
  | 'grey';

export type Colorable = {
  color?: Color;
};

export type Disableable = {
  disabled?: boolean;
};

export type CommonEvents = {
  onBlur: any;
  onChange: any;
  onClick: any;
  onInput: any;
  onKeyup: any;
  onKeydown: any;
};

export type Inputable = {
  appendIcon?: string;
  /** @deprecated */
  appendIconCb?: Function;
  backgroundColor?: string;
  disabled?: boolean;
  height?: number | string;
  hideDetails?: boolean;
  hint?: string;
  label?: string;
  persistentHint?: boolean;
  prependIcon?: string;
  /** @deprecated */
  prependIconCb?: Function;
  readonly?: boolean;
  value?: any;
};

export type Imageable = {
  alt?: string;
  contain?: boolean;
  cover?: boolean;
  gradient?: string;
  lazySrc?: string;
  position?: string;
  sizes?: string;
  src?: string | SrcObject;
  srcset?: string;
};

export interface SrcObject {
  src: string;
  srcset?: string;
  lazySrc: string;
  aspect: number;
}

export type Loadable = {
  loading?: boolean | string;
};

export type Maskable = {
  dontFillMaskBlanks?: boolean;
  mask?: string | object;
  returnMaskedValue?: boolean;
};

export type Measurable = {
  aspectRatio?: string;
  height?: number;
  width?: number;
  maxHeight?: number;
  maxWidth?: number;
};

export type Positionable = {
  absolute?: boolean;
  fixed?: boolean;
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
};

export type Rippleable = {
  ripple?: boolean | object;
};

export type Routable = Rippleable &
  Partial<RouterLinkProps> & {
    href?: string | object;
    tag?: string;
    target?: string;
    nuxt?: boolean;
  };

export type Selectable = {
  id?: string;
  inputValue?: any;
  falseValue?: any;
  trueValue?: any;
  multiple?: boolean;
  label?: string;
};

export type Sizeable = {
  size?: string | number;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  xLarge?: boolean;
};

export type Themable = {
  dark?: boolean;
  light?: boolean;
};

export type Transitionable = {
  mode?: string;
  origin?: string;
  transition?: boolean | string;
};

export type Validatable = {
  error?: boolean;
  errorCount?: number | string;
  errorMessages?: string | string[];
  messages?: string | string[];
  rules?: ((...args: any[]) => boolean | string)[];
  success?: boolean;
  successMessages?: string | string[];
  validateOnBlur?: boolean;
};
