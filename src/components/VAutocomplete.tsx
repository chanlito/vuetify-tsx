import { Component as VueComponent } from 'vue';
import { ofType } from 'vue-tsx-support';
import { VAutocomplete } from 'vuetify/lib';

import { Colorable, Inputable } from '../shared/types';

export default ofType<Props, Events, ScopedSlot>().convert(
  VAutocomplete as any,
);

type Props = Colorable &
  Inputable & {
    'v-model'?: any;
    items: any[];
    'item-text': string | ((value: any) => string);
    multiple?: boolean;
    chips?: boolean;
  };

type Events = {};

type ScopedSlot = {
  selection: Selection;
  item: any;
};

type Selection = {
  parent: VueComponent;
  item: any;
  index: number;
  selected: boolean;
  disabled: boolean;
};
