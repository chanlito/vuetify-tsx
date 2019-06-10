import {
  VAutocomplete,
  VAvatar,
  VChip,
  VListTileAvatar,
  VListTileContent,
  VListTileSubTitle,
  VListTileTitle,
} from '@/components';
import { component } from 'vue-tsx-support';
import SubTitle from '../SubTitle';

const AutocompleteExample2 = component({
  data: () => {
    const srcs = {
      1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    };

    return {
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
        <SubTitle>Autocomplete Scoped-Slots</SubTitle>
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

export default AutocompleteExample2;
