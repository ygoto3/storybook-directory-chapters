import React from 'react';
import { action } from '@storybook/addon-actions';
import { Header } from './index';

module.exports = stories => (
  stories
  .add('normal', () => (
    <Header />
  ))
);
