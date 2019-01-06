import * as tsx from 'vue-tsx-support';
import { VDataTable } from 'vuetify/lib';

import { Themable } from './types';

export default tsx
  .ofType<Props, Events, ScopedSlots>()
  .convert(VDataTable as any);

type Props = Themable & {
  customFilter?: (items: object[], search: string, filter: any) => any[];
  customSort?: (items: object[], index: number, isDescending: boolean) => any[];
  disableInitialSort?: boolean;
  expand?: boolean;
  filter?: (val: object, search: string) => boolean;
  headerKey?: string;
  headerText?: string;
  headers?: any[];
  headersLength?: number;
  hideActions?: boolean;
  hideHeaders?: boolean;
  itemKey?: string;
  items?: any[];
  loading?: boolean | string;
  mustSort?: boolean;
  nextIcon?: string;
  noDataText?: string;
  noResultsText?: string;
  pagination?: any;
  prevIcon?: string;
  rowsPerPageItems?: any[];
  rowsPerPageText?: string;
  search?: any;
  selectAll?: boolean | string;
  sortIcon?: string;
  totalItems?: number;
  value?: any[];
};

type Events = {
  onInput: any;
};

type ScopedSlots = {
  headerCell: any;
  headers: any;
  items: any;
  pageText: any;
};
