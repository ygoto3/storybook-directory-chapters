import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './index';

module.exports = stories => (
  stories
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
);
