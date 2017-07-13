import React from 'react';
import { action } from '@storybook/addon-actions';
import { List, ListItem } from './index';

module.exports = stories => (
  stories
  .add('with text', () => (
    <List>
      {new Array(3).fill(null).map((_, i) => (
        <ListItem key={i}>Hello List {i}</ListItem>
      ))}
    </List>
  ))
  .add('with some emoji', () => (
    <List>
      {new Array(3).fill(null).map((_, i) => (
        <ListItem key={i}>😀 😎 👍 💯</ListItem>
      ))}
    </List>
  ))
);
