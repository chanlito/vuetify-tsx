import { ofType } from 'vue-tsx-support';

import { Colorable, Disableable, Sizeable, Themable } from '../types';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VChip').VChip,
);

type Props = Colorable &
  Disableable &
  Themable &
  Sizeable & {
    close?: boolean;
    label?: boolean;
    outline?: boolean;
    selected?: boolean;
    textColor?: string;
  };

type Events = {};
