import React from 'react';
import { action } from '@storybook/addon-actions';
import { Portal } from './index';

module.exports = stories => (
  stories
  .add('Portal with actual contents', () => (
    <Portal />
  ))
);
