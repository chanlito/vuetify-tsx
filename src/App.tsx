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
              label: 'Autocompletes',
              to: { name: 'components-autocompletes' },
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
            {
              label: 'DataTables',
              to: { name: 'components-data-tables' },
            },
            {
              label: 'Timelines',
              to: { name: 'components-timelines' },
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
            {this.menu.map(({ icon, label, to, exact, menu }) =>
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
            )}
          </VList>
        </VNavigationDrawer>
      </VApp>
    );
  },
});

export default App;
