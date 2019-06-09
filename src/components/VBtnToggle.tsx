import { Themable } from '@/shared/types';
import { ofType } from 'vue-tsx-support';
import { VBtnToggle } from 'vuetify/lib';

export default ofType<Props, Events>().convert(VBtnToggle as any);

type Props = Themable & {
  inputValue?: any;
  mandatory?: boolean;
  multiple?: boolean;
  value?: any;
};

type Events = {
  onChange: any;
  onInput: any;
};
