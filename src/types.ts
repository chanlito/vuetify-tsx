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

export type Imageable = {
  contain?: boolean;
  cover?: boolean;
  gradient?: string;
  lazySrc?: string;
  position?: string;
  sizes?: string;
  src?: string;
  srcset?: string;
};

export type Measurable = {
  aspectRatio?: string;
  height?: number;
  width?: number;
  maxHeight?: number;
  maxWidth?: number;
};

export type Positionable = {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
};

export type Rippleable = {
  ripple?: boolean;
};

export type Routable = Partial<RouterLinkProps>;

export type Sizeable = {
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
  transition?: boolean | string;
};
