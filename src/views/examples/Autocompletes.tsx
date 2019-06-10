import VAutocomplete from '@/components/VAutocomplete';
import VAvatar from '@/components/VAvatar';
import VChip from '@/components/VChip';
import VListTileAvatar from '@/components/VListTileAvatar';
import VListTileContent from '@/components/VListTileContent';
import VListTileSubTitle from '@/components/VListTileSubTitle';
import VListTileTitle from '@/components/VListTileTitle';
import { component } from 'vue-tsx-support';

const Autocompletes = component({
  name: 'Autocompletes',
  data: () => {
    const srcs = {
      1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    };

    return {
      selected: null as any,
      items: [
        { id: 1, name: 'Test-1' },
        { id: 2, name: 'Test-2' },
        { id: 3, name: 'Test-3' },
      ],
      friends: ['Sandra Adams', 'Britta Holt'],
      people: [
        { header: 'Group 1' },
        { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
        { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
        { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
        { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
        { divider: true },
        { header: 'Group 2' },
        { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
        { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
        { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
        { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] },
      ],
    };
  },
  methods: {
    remove(item: any): void {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    },
  },
  render() {
    return (
      <div>
        <h2 class="display-1 mb-3 font-weight-bold">Autocomplete</h2>
        <VAutocomplete
          v-model={this.selected}
          items={this.items}
          item-text="name"
          // item-text={(value: any): string => value.name}
          return-object
          label="Tests"
          clearable
        />
        <span>
          Selected ID:{' '}
          {this.selected !== null ? this.selected.id : 'Nothing selected'}
        </span>
        <h2 class="display-1 mb-3 font-weight-bold">
          Autocomplete Scoped-Slots
        </h2>
        <VAutocomplete
          v-model={this.friends}
          items={this.people}
          box
          chips
          color="blue-grey lighten-2"
          label="Select"
          item-text="name"
          item-value="name"
          multiple
          scopedSlots={{
            selection: data => (
              <VChip
                selected={data.selected}
                close
                class="chip--select-multi"
                onInput={() => this.remove(data.item)}
              >
                <VAvatar>
                  <img src={data.item.avatar} />
                </VAvatar>
                {data.item.name}
              </VChip>
            ),
            item: data => {
              if (typeof data.item !== 'object') {
                return <VListTileContent v-text={data.item} />;
              } else {
                return [
                  <VListTileAvatar>
                    <img src={data.item.avatar} />
                  </VListTileAvatar>,
                  <VListTileContent>
                    <VListTileTitle>{data.item.name}</VListTileTitle>
                    <VListTileSubTitle>{data.item.group}</VListTileSubTitle>
                  </VListTileContent>,
                ];
              }
            },
          }}
        />
      </div>
    );
  },
});

export default Autocompletes;
