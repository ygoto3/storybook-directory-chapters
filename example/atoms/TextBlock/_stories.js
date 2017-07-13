import React from 'react';
import { TextBlock } from './index';

module.exports = stories => (
  stories
  .add('with text', () => (
    <TextBlock>Hello TextBlock</TextBlock>
  ))
  .add('with some emoji', () => (
    <TextBlock>😀 😎 👍 💯</TextBlock>
  ))
);
