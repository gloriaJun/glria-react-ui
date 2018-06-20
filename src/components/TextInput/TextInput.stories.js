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
  .add('value', () => (
    <GrTextInput
      type="text"
      label="Name"
      value="Julia"
    />
  ))
  .add('placeholder', () => (
    <GrTextInput
      type="text"
      label="Name"
      placeholder="Input Name"
    />
  ))
  .add('disabled', () => {
    const disabled = boolean('disabled', true);

    return (
      <GrTextInput
        type="text"
        label="Name"
        placeholder={disabled ? 'disabled' : 'Input Name'}
        disabled={disabled}
      />
    );
  });
// .add('icon', () => (
//   <div>
//     <TextInput
//       type="text"
//       placeholder="Name"
//       icon="account_circle"
//     />
//   </div>
// ))
// .add('validation', () => (
//   <div>
//     <TextInput
//       type="text"
//       label="Name"
//     />
//   </div>
// ));
