import React from 'react';
import { Button, ImgTest, throttle } from 'rt-rollup-utils';
import 'rt-rollup-utils/dist/Button/index.css';
import 'rt-rollup-utils/dist/ImgTest/index.css';

function RollupTest() {
  return <>
    <Button text='沙发上'></Button>
    <ImgTest />
  </>
}

export default React.memo(RollupTest);
