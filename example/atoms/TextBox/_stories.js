import React from 'react';
import { action } from '@storybook/addon-actions';
import { TextBox } from './index';

module.exports = stories => (
  stories
  .add('with text', () => (
    <TextBox onChange={action('clicked')}>Hello TextBox</TextBox>))
  .add('with some emoji', () => (
    <TextBox onClick={action('clicked')}>😀 😎 👍 💯</TextBox>
  ))
);
