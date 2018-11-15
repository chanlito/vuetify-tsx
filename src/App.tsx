import { component } from 'vue-tsx-support';

import VAlert from './VAlert';
import VApp from './VApp';
import VAvatar from './VAvatar';
import VBadge from './VBadge';
import VBreadcrumbs from './VBreadcrumbs';
import VBtn from './VBtn';
import VBtnToggle from './VBtnToggle';
import VContainer from './VContainer';
import VContent from './VContent';
import VFlex from './VFlex';
import VIcon from './VIcon';
import VLayout from './VLayout';

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
  data: () => ({
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
  }),
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
