import { configure } from '@storybook/react';

/**
 * add global
 */
import './story.scss'

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
