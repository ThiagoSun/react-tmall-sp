import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import createStore from './store/createStore';
import {history} from "./store/reducers";
import * as serviceWorker from './serviceWorker';
import App from './container/App';
import createRoutes from './routes/index';

const store = createStore(window.__INITIAL_STATE__);
const routes = createRoutes(store);
const MOUNT_NODE = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <App store={store} routes={routes} history={history} />,
    MOUNT_NODE
  )
};
// Development Tools
// ------------------------------------
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    render();
    // const renderApp = render
    //
    // render = () => {
    //   try {
    //     renderApp()
    //   } catch (e) {
    //     console.error(e)
    //   }
    // }

    // Setup hot module replacement
    module.hot.accept([
        './container/App',
      ], () =>
        setImmediate(() => {
          ReactDOM.unmountComponentAtNode(MOUNT_NODE)
          render()
        })
    )
  }
}

// Let's Go!
// ------------------------------------
if (process.env.NODE_ENV !== 'test') render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
