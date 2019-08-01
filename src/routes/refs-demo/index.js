import { injectReducer } from '../../store/reducers';
import React, { lazy } from 'react';

const AsyncComponent = ({ store }) => {
  const RefsDemoContainer = lazy(() => import(/* webpackChunkName: 'RefsDemo' */'./containers/RefsDemoContainer'));
  import(/* webpackChunkName: 'RefsDemo' */'./modules/refsDemo').then(({ default: refsDemoReducer }) => {
    injectReducer(store, { key: 'refsDemo', reducer: refsDemoReducer });
  });
  return <RefsDemoContainer />;
};

export default AsyncComponent;
