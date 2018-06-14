import React from 'react';

import { storiesOf } from '@storybook/react';

import Input from './index';

storiesOf('Input', module)
  .add('default', () => (
    <Input
      type="text"
      label="Name"
    />
  ))
  .add('disabled', () => <Input disabled />)
  .add('validation', () => <Input />);
