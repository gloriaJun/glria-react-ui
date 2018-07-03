import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

import { GrButton } from '../index';

storiesOf('Form:Button', module)
  .add('default', () => (
    <div>
      <GrButton
        onClick={action('onClick')}
      />
    </div>
  ))
  .add('disabled', () => {
    const disabled = boolean('disabled', true);

    return (
      <div>
        <GrButton
          disabled={disabled}
        />
      </div>
    );
  });
