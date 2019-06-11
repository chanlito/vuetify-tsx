import { ofType } from 'vue-tsx-support';
import { VBreadcrumbs } from 'vuetify/lib';

import { Themeable } from '../types/props';

export default ofType<Props, Events, ScopedSlot>().convert(VBreadcrumbs as any);

type Props = Themeable & {
  divider?: string;
  justifyCenter?: boolean;
  justifyEnd?: boolean;
  large?: boolean;
  items?: Item[];
};

type Events = {};

type ScopedSlot = {
  item: Item;
};

interface Item {
  text: string;
  disabled?: boolean;
  href?: string;
}
