import React from 'react';
import { action } from '@storybook/addon-actions';
import { AnotherList, AnotherListItem } from './index';

module.exports = stories => (
  stories
  .add('with text', () => (
    <AnotherList>
      {new Array(3).fill(null).map((_, i) => (
        <AnotherListItem key={i}>Hello AnotherList {i}</AnotherListItem>
      ))}
    </AnotherList>
  ))
  .add('with some emoji', () => (
    <AnotherList>
      {new Array(3).fill(null).map((_, i) => (
        <AnotherListItem key={i}>😀 😎 👍 💯</AnotherListItem>
      ))}
    </AnotherList>
  ))
);
