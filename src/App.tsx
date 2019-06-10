import { component } from 'vue-tsx-support';

import VApp from './components/VApp';
import VContainer from './components/VContainer';
import VContent from './components/VContent';
import VIcon from './components/VIcon';
import VList from './components/VList';
import VListTile from './components/VListTile';
import VListTileAction from './components/VListTileAction';
import VListTileContent from './components/VListTileContent';
import VListTileTitle from './components/VListTileTitle';
import VNavigationDrawer from './components/VNavigationDrawer';
import VToolbar from './components/VToolbar';
import VToolbarSideIcon from './components/VToolbarSideIcon';
import VToolbarTitle from './components/VToolbarTitle';
import VListGroup from './components/VListGroup';

const App = component({
  name: 'App',

  data() {
    return {
      drawer: null as boolean | null,
      menu: [
        {
          icon: 'home',
          label: 'Home',
          to: { name: 'home' },
          exact: true,
        },
        {
          icon: 'dashboard',
          label: 'Components',
          to: { name: 'components' },
          menu: [
            {
              label: 'Alerts',
              to: { name: 'components-alerts' },
            },
            {
              label: 'Avatars',
              to: { name: 'components-avatars' },
            },
            {
              label: 'Breadcrumbs',
              to: { name: 'components-breadcrumbs' },
            },
            {
              label: 'Buttons',
              to: { name: 'components-buttons' },
            },
            {
              label: 'Cards',
              to: { name: 'components-cards' },
            },
          ],
        },
      ],
    };
  },

  methods: {
    updateDrawer(value: boolean) {
      this.drawer = value;
    },

    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },

  render() {
    return (
      <VApp>
        <VToolbar app clippedLeft color="primary">
          <VToolbarSideIcon onClick={this.toggleDrawer} />
          <VToolbarTitle>Vuetify</VToolbarTitle>
        </VToolbar>

        <VContent>
          <VContainer>
            <router-view />
          </VContainer>
        </VContent>

        <VNavigationDrawer
          app
          clipped
          dark
          value={this.drawer}
          onInput={this.updateDrawer}
        >
          <VList color="primary">
            {this.menu.map(
              ({ icon, label, to, exact, menu }) =>
                menu && menu.length ? (
                  <VListGroup noAction value={true}>
                    <VListTile slot="activator" to={to} exact={exact}>
                      <VListTileAction>
                        <VIcon>{icon}</VIcon>
                      </VListTileAction>
                      <VListTileContent>
                        <VListTileTitle>{label}</VListTileTitle>
                      </VListTileContent>
                    </VListTile>

                    {menu.map(subMenu => (
                      <VListTile to={subMenu.to}>
                        <VListTileContent>
                          <VListTileTitle>{subMenu.label}</VListTileTitle>
                        </VListTileContent>
                      </VListTile>
                    ))}
                  </VListGroup>
                ) : (
                  <VListTile to={to} exact={exact}>
                    <VListTileAction>
                      <VIcon>{icon}</VIcon>
                    </VListTileAction>
                    <VListTileContent>
                      <VListTileTitle>{label}</VListTileTitle>
                    </VListTileContent>
                  </VListTile>
                ),
              // menu && menu.length ? (
              //   <VListTile slot="activator" to={to} exact={exact}>
              //     <VListTileAction>
              //       <VIcon>{icon}</VIcon>
              //     </VListTileAction>
              //     <VListTileContent>
              //       <VListTileTitle>{label}</VListTileTitle>
              //     </VListTileContent>
              //   </VListTile>
              // ) : (

              // ),
            )}
          </VList>
        </VNavigationDrawer>
      </VApp>
    );
  },
});

// import AlertExample1 from './examples/alerts/AlertExample1';
// import AvatarExample1 from './examples/avatars/AvatarExample1';
// import BadgeExample1 from './examples/badges/BadgeExample1';
// import BreadcrumbExample1 from './examples/breadcrumbs/BreadcrumbExample1';
// import ButtonExample1 from './examples/buttons/ButtonExample1';
// import ButtonToggleExample1 from './examples/buttons/ButtonToggleExample1';
// import CardExample1 from './examples/cards/CardExample1';
// import Title from './examples/Title';
// import { VApp, VContainer, VContent, VFlex, VLayout } from './index';

// const App = component({
//   name: 'App',
//   render() {
//     return (
//       <VApp>
//         <VContent>
//           <h1 class="title">Hello World</h1>
//           <VContainer>
//             <VLayout justify-center>
//               <Title>Vuetify TSX Components</Title>
//             </VLayout>
//             <VLayout>
//               <VFlex>
//                 <AlertExample1 />
//                 <AvatarExample1 />
//                 <BadgeExample1 />
//                 <BreadcrumbExample1 />
//                 <ButtonExample1 />
//                 <ButtonToggleExample1 />
//                 <CardExample1 />
//               </VFlex>
//             </VLayout>
//           </VContainer>
//         </VContent>
//       </VApp>
//     );
//   },
// });

export default App;
