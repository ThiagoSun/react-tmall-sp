import { injectReducer } from '../../store/reducers';
import React, { lazy } from 'react';

const AsyncComponent = ({ store }) => {
  const StudioRefreshContainer = lazy(() => import(/* webpackChunkName: 'StudioRefresh' */'./containers/StudioRefreshContainer'));
  import(/* webpackChunkName: 'StudioRefresh' */'./modules/studioSearchReducer').then(({ default: studioSearchReducer }) => {
    injectReducer(store, { key: 'studioRefresh', reducer: studioSearchReducer });
  });
  return <StudioRefreshContainer />;
};

export default AsyncComponent;
