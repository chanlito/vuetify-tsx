import { component } from 'vue-tsx-support';

import VApp from './components/VApp';
import VAppBar from './components/VAppBar';
import VAppBarNavIcon from './components/VAppBarNavIcon';
import VContainer from './components/VContainer';
import VContent from './components/VContent';
import VIcon from './components/VIcon';
import VList from './components/VList';
import VListGroup from './components/VListGroup';
import VListItem from './components/VListItem';
import VListItemContent from './components/VListItemContent';
import VListItemIcon from './components/VListItemIcon';
import VListItemTitle from './components/VListItemTitle';
import VNavigationDrawer from './components/VNavigationDrawer';
import VToolbarTitle from './components/VToolbarTitle';

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
              label: 'Timelines',
              to: { name: 'components-timelines' },
            },
          ],
        },
      ],
    };
  },

  computed: {
    appBarStyle(): { [key: string]: string } {
      return { padding: this.$vuetify.breakpoint.mdAndUp ? '0 12px' : '0' };
    },
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
        <VAppBar app clippedLeft color="primary" dark style={this.appBarStyle}>
          <VAppBarNavIcon onClick={this.toggleDrawer} />
          <VToolbarTitle>Vuetify</VToolbarTitle>
        </VAppBar>

        <VContent>
          <VContainer>
            <router-view />
          </VContainer>
        </VContent>

        <VNavigationDrawer
          app
          clipped
          value={this.drawer}
          onInput={this.updateDrawer}
        >
          <VList dense nav>
            {this.menu.map(({ icon, label, to, exact, menu }) =>
              menu && menu.length ? (
                <VListGroup noAction prependIcon="dashboard" value={true}>
                  <VListItemContent slot="activator">
                    <VListItemTitle>{label}</VListItemTitle>
                  </VListItemContent>

                  {menu.map(subMenu => (
                    <VListItem to={subMenu.to}>
                      <VListItemContent>
                        <VListItemTitle>{subMenu.label}</VListItemTitle>
                      </VListItemContent>
                    </VListItem>
                  ))}
                </VListGroup>
              ) : (
                <VListItem to={to} exact={exact}>
                  <VListItemIcon>
                    <VIcon>{icon}</VIcon>
                  </VListItemIcon>
                  <VListItemContent>
                    <VListItemTitle>{label}</VListItemTitle>
                  </VListItemContent>
                </VListItem>
              ),
            )}
          </VList>
        </VNavigationDrawer>
      </VApp>
    );
  },
});

export default App;
