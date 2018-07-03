import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { setDefaults } from '@storybook/addon-info';

addDecorator(withKnobs)
setDefaults()

/**
 * add global
 */
import './story.scss'

function loadStories() {
  // story of example
  let req = require.context('../example', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));

  // story of component
  req = require.context('../src', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
