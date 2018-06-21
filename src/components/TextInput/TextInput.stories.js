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
        <h2 className="story-title">default</h2>
        <GrTextInput
          placeholder={disabled ? 'disabled' : 'Input Name'}
          disabled={disabled}
        />
        <h2 className="story-title">with value</h2>
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
