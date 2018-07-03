import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { boolean } from '@storybook/addon-knobs';

import Example from './example';

storiesOf('Example', module)
  .add('default', () => (
    <Example />
  ));
