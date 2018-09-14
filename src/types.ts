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

export type CommonEvents = {
  onBlur: any;
  onChange: any;
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

export type Themable = {
  dark?: boolean;
  light?: boolean;
};
