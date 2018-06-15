import React from 'react';

import { storiesOf } from '@storybook/react';

import Input from './index';

storiesOf('Input', module)
  .add('default', () => (
    <div>
      <Input
        type="text"
        label="Name"
      />
      <Input
        type="text"
        label="Name"
        value="Julia"
      />
      <Input
        type="text"
        label="Name"
        placeholder="Input Name"
      />
    </div>
  ))
  .add('disabled', () => (
    <div>
      <Input
        type="text"
        label="Name"
        disabled
      />
    </div>
  ))
  .add('validation', () => (
    <div>
      <Input
        type="text"
        label="Name"
      />
    </div>
  ));
