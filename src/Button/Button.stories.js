import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { boolean } from '@storybook/addon-knobs';

import { GrButton } from '../index';

storiesOf('Form:Button', module)
  .add('default', () => (
    <div>
      <GrButton />
    </div>
  ));
