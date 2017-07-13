import { configure } from '@storybook/react';
import '@storybook/addon-chapters';
import loadDirectories from '../index';

const context = require.context('../example', true, /_stories.js$/);

function loadStories() {
  loadDirectories(context);
}

configure(loadStories, module);
