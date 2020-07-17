import React from 'react';
import { Button, ImgTest } from 'rt-rollup-utils';
import 'rt-rollup-utils/dist/index.css';

function RollupTest() {
  return <>
    <Button text='沙发上'></Button>
    <ImgTest />
  </>
}

export default React.memo(RollupTest);
