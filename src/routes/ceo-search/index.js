import { injectReducer } from '../../store/reducers';
import React, { lazy } from 'react';

const AsyncComponent = ({ store }) => {
  const CEOSearchContainer = lazy(() => import(/* webpackChunkName: 'ceo-search' */'./containers/CEOSearchContainer'));
  import(/* webpackChunkName: 'ceo-search' */'./modules/ceoSearch').then(({ default: ceoSearchReducer }) => {
    injectReducer(store, { key: 'ceoSearch', reducer: ceoSearchReducer });
  });
  return <CEOSearchContainer />;
};

export default AsyncComponent;
