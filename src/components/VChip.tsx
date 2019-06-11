import { ofType } from 'vue-tsx-support';
import { VChip } from 'vuetify/lib';

import { CommonEvents } from '../types/events';
import { Activatable, Colorable, Sizeable, Themeable } from '../types/props';

export default ofType<Props, Events>().convert(VChip as any);

type Props = Activatable &
  Colorable &
  Themeable &
  Sizeable & {
    close?: boolean;
    label?: boolean;
    outline?: boolean;
    selected?: boolean;
    textColor?: string;
  };

type Events = CommonEvents & {};
