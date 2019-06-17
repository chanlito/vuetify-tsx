import { component } from 'vue-tsx-support';
import VContainer from '@/components/VContainer';
import VFlex from '@/components/VFlex';
import VLayout from '@/components/VLayout';
import VDataTable from '@/components/VDataTable';

interface Header {
  text: string;
  value: string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  class?: string[] | string;
  width?: string;
}

interface Pagination {
  descending?: boolean;
  page?: number;
  rowsPerPage?: number;
  sortBy?: string;
  totalItems?: number;
}

interface Dessert {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  iron: string;
}

const DataTables = component({
  name: 'DataTables',
  data: () => ({
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'left',
        sortable: false,
        value: 'name',
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Iron (%)', value: 'iron' },
    ] as Header[],
    pagination: {
      rowsPerPage: 5,
      sortBy: 'calories',
    } as Pagination,
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%',
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%',
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%',
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%',
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%',
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%',
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%',
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%',
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%',
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%',
      },
    ] as Dessert[],
  }),
  render() {
    return (
      <div>
        <h2 class="display-1 mb-3 font-weight-bold">DataTables</h2>
        <VContainer class="pa-0" grid-list-lg>
          <VLayout>
            <VFlex>
              <VDataTable
                headers={this.headers}
                items={this.desserts}
                class="elevation-1"
                pagination={this.pagination}
                on={{
                  'update:pagination': (pagination: Pagination): void => {
                    this.pagination = pagination;
                  },
                }}
                scopedSlots={{
                  items: (props: { item: Dessert; index: number }) => (
                    <tr>
                      <td>{props.item.name}</td>
                      <td class="text-xs-right">{props.item.calories}</td>
                      <td class="text-xs-right">{props.item.fat}</td>
                      <td class="text-xs-right">{props.item.carbs}</td>
                      <td class="text-xs-right">{props.item.protein}</td>
                      <td class="text-xs-right">{props.item.iron}</td>
                    </tr>
                  ),
                }}
              />
            </VFlex>
          </VLayout>
        </VContainer>
      </div>
    );
  },
});

export default DataTables;
