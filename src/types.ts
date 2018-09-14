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

export type Measurable = {
  height?: number;
  width?: number;
  maxHeight?: number;
  maxWidth?: number;
};

export type Routable = Partial<RouterLinkProps>;

export type Themable = {
  dark?: boolean;
  light?: boolean;
};
