import { injectReducer } from '../../store/reducers';
// import CounterContainer from './containers/CounterContainer';
// import counterReducer from './modules/counter';
import React, { lazy } from 'react';

const AsyncComponent = ({ store }) => {
  const CounterContainer = lazy(() => import(/* webpackChunkName: 'counter' */'./containers/CounterContainer'));
  import(/* webpackChunkName: 'counter' */'./modules/counter').then(({ default: counterReducer }) => {
    injectReducer(store, { key: 'counter', reducer: counterReducer });
  });
  return <CounterContainer />;
};

export default AsyncComponent;
