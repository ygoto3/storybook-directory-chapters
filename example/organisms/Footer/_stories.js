import React from 'react';
import { action } from '@storybook/addon-actions';
import { Footer } from './index';

module.exports = stories => (
  stories
  .add('normal', () => (
    <Footer />
  ))
);
