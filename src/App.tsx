import { component } from 'vue-tsx-support';

import VAlert from './VAlert';
import VApp from './VApp';
import VAutocomplete from './VAutocomplete';
import VAvatar from './VAvatar';
import VBadge from './VBadge';
import VBreadcrumbs from './VBreadcrumbs';
import VBtn from './VBtn';
import VBtnToggle from './VBtnToggle';
import VChip from './VChip';
import VContainer from './VContainer';
import VContent from './VContent';
import VFlex from './VFlex';
import VIcon from './VIcon';
import VLayout from './VLayout';
import VListTileAvatar from './VListTileAvatar';
import VListTileContent from './VListTileContent';
import VListTileSubTitle from './VListTileSubTitle';
import VListTileTitle from './VListTileTitle';

const Title = component({
  render() {
    return (
      <h1 class="display-1 font-weight-bold mb-4">{this.$slots.default}</h1>
    );
  },
});

const SubTitle = component({
  render() {
    return <h2 class="title font-weight-bold my-5">{this.$slots.default}</h2>;
  },
});

const App = component({
  name: 'App',
  data: () => {
    const srcs = {
      1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    };

    return {
      autocomplete: {
        selected: null as any,
        items: [
          {
            id: 1,
            name: 'Test-1',
          },
          {
            id: 2,
            name: 'Test-2',
          },
          {
            id: 3,
            name: 'Test-3',
          },
        ],
      },
      breadcrumbs: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
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
      <VApp>
        <VContent>
          <VContainer>
            <VLayout justify-center>
              <Title>Vuetify TSX Components</Title>
            </VLayout>
            <VLayout>
              <VFlex>
                <SubTitle>Alert</SubTitle>
                <VAlert color="success" value={true}>
                  Awesome!
                </VAlert>
                <VAlert value={true}>Oh !@#$!</VAlert>
                <SubTitle>Autocomplete</SubTitle>
                <VAutocomplete
                  v-model={this.autocomplete.selected}
                  items={this.autocomplete.items}
                  item-text="name"
                  // item-text={(value: any): string => value.name}
                  return-object
                  label="Tests"
                  clearable
                />
                <span>
                  Selected ID:{' '}
                  {this.autocomplete.selected !== null
                    ? this.autocomplete.selected.id
                    : 'Nothing selected'}
                </span>

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
                            <VListTileSubTitle>
                              {data.item.group}
                            </VListTileSubTitle>
                          </VListTileContent>,
                        ];
                      }
                    },
                  }}
                />

                <SubTitle>Avatar</SubTitle>
                <VAvatar size={50}>
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Avatar Image"
                  />
                </VAvatar>
                <VAvatar size={50} tile>
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Avatar Image"
                  />
                </VAvatar>
                <SubTitle>Badge</SubTitle>
                <VBadge left>
                  <span slot="badge">6</span>
                  <VIcon large>shopping_cart</VIcon>
                </VBadge>
                <VBadge color="accent" overlap>
                  <span slot="badge">99</span>
                  <VIcon large>mail</VIcon>
                </VBadge>
                <SubTitle>Breadcrumbs</SubTitle>
                <VBreadcrumbs items={this.breadcrumbs} divider=">" />
                <VBreadcrumbs
                  items={this.breadcrumbs}
                  divider=">"
                  scopedSlots={{
                    item: (props: any) => [
                      <a href={props.item.href}>{props.item.text}</a>,
                    ],
                  }}
                />
                {/** @deprecated 'default slot' is deprecated, use ':items and scoped slot "item"' instead */}
                {/* <VBreadcrumbs>
                  <VBreadcrumbsItem>WTF</VBreadcrumbsItem>
                  <VBreadcrumbsItem>WTF 2</VBreadcrumbsItem>
                  <VBreadcrumbsItem>WTF 3</VBreadcrumbsItem>
                </VBreadcrumbs> */}
                <SubTitle>Button</SubTitle>
                <VBtn color="primary">Click Me!</VBtn>
                <VBtn depressed>Click Me!</VBtn>
                <VBtn outline>Click Me!</VBtn>
                <VBtn flat>Click Me!</VBtn>
                <SubTitle>Button Tobble</SubTitle>
                <VBtnToggle>
                  <VBtn>
                    <VIcon>format_align_left</VIcon>
                  </VBtn>
                  <VBtn>
                    <VIcon>format_align_center</VIcon>
                  </VBtn>
                  <VBtn>
                    <VIcon>format_align_right</VIcon>
                  </VBtn>
                </VBtnToggle>
                <SubTitle>Card</SubTitle>
              </VFlex>
            </VLayout>
          </VContainer>
        </VContent>
      </VApp>
    );
  },
});

export default App;
