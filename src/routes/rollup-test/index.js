import React, { lazy } from 'react';

const AsyncComponent = ({ store, ...props }) => {
  const RollupTestContainer = lazy(() => import(/* webpackChunkName: 'RollupTest' */'./RollupTest'));
  return <RollupTestContainer {...props} />;
};

export default AsyncComponent;
