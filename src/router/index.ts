import Components from '@/views/Components';
import Alerts from '@/views/examples/Alerts';
import Autocompletes from '@/views/examples/Autocompletes';
import Avatars from '@/views/examples/Avatars';
import Breadcrumbs from '@/views/examples/Breadcrumbs';
import Buttons from '@/views/examples/Buttons';
import Cards from '@/views/examples/Cards';
import Timelines from '@/views/examples/Timelines';
import Home from '@/views/Home';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/components',
      name: 'components',
      component: Components,
      children: [
        {
          path: 'alerts',
          name: 'components-alerts',
          component: Alerts,
        },
        {
          path: 'autocompletes',
          name: 'components-autocompletes',
          component: Autocompletes,
        },
        {
          path: 'avatars',
          name: 'components-avatars',
          component: Avatars,
        },
        {
          path: 'breadcrumbs',
          name: 'components-breadcrumbs',
          component: Breadcrumbs,
        },
        {
          path: 'buttons',
          name: 'components-buttons',
          component: Buttons,
        },
        {
          path: 'cards',
          name: 'components-cards',
          component: Cards,
        },
        {
          path: 'timelines',
          name: 'components-timelines',
          component: Timelines,
        },
      ],
    },
  ],
});

export default router;
