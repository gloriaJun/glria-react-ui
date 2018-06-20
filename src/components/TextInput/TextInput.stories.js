import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

import GrTextInput from '../index';

storiesOf('TextInput', module)
  .add('default', () => (
    <div>
      <GrTextInput
        label="Text"
        onChange={action('onChange')}
      />
      <GrTextInput
        type="email"
        label="E-mail"
      />
      <GrTextInput
        type="url"
        label="URL"
      />
    </div>
  ))
  .add('disabled', () => {
    const disabled = boolean('disabled', true);

    return (
      <div>
        <h6 className="story-title">default</h6>
        <GrTextInput
          placeholder={disabled ? 'disabled' : 'Input Name'}
          disabled={disabled}
        />
        <h6 className="story-title">with value</h6>
        <GrTextInput
          label="Name"
          value="This is Value"
          disabled={disabled}
        />
      </div>
    );
  })
  .add('helper text', () => (
    <GrTextInput helperText="This is helper text" />
  ))
  .add('icon', () => (
    <GrTextInput icon="account_circle" />
  ))
  .add('validation', () => (
    <div>
      <GrTextInput
        label="Name"
      />
    </div>
  ));
