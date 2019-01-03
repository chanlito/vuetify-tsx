import { ofType } from 'vue-tsx-support';
import { VChip } from 'vuetify/lib';

import {
  Colorable,
  CommonEvents,
  Disableable,
  Sizeable,
  Themable,
} from './types';

export default ofType<Props, Events>().convert(VChip as any);

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

type Events = CommonEvents & {};
