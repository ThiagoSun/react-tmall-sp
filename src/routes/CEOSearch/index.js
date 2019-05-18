import { injectReducer } from '../../store/reducers';
import React, { lazy } from 'react';

const AsyncComponent = ({ store }) => {
  const CEOSearchContainer = lazy(() => import(/* webpackChunkName: 'CEOSearch' */'./containers/CEOSearchContainer'));
  import(/* webpackChunkName: 'CEOSearch' */'./modules/ceoSearch').then(({ default: ceoSearchReducer }) => {
    injectReducer(store, { key: 'ceoSearch', reducer: ceoSearchReducer });
  });
  return <CEOSearchContainer />;
};

export default AsyncComponent;
