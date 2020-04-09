// We only need to import the modules necessary for initial render
import Home from './Home';
import Counter from './Counter';
import CEOSearch from './CEOSearch';
import RefsDemo from './refs-demo';
import StudioRefresh from './studio-refresh';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ([
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/counter',
    exact: true,
    component: Counter
  },
  {
    path: '/ceo-search',
    exact: true,
    component: CEOSearch
  },
  {
    path: '/refs-demo',
    exact: true,
    component: RefsDemo
  },
  {
    path: '/studio-refresh',
    exact: true,
    component: StudioRefresh
  }
]);

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
