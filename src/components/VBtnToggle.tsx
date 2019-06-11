import { ofType } from 'vue-tsx-support';
import { VBtnToggle } from 'vuetify/lib';

import { CommonEvents } from '../types/events';
import { Selectable, Themeable } from '../types/props';

export default ofType<Props, Events>().convert(VBtnToggle as any);

type Props = Selectable &
  Themeable & {
    mandatory?: boolean;
    multiple?: boolean;
    value?: any;
  };

type Events = CommonEvents & {};
