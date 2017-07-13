import React from 'react';
import { action } from '@storybook/addon-actions';
import { SearchForm } from './index';

module.exports = stories => (
  stories
  .add('with a \'Search\' label', () => (
    <SearchForm onSubmit={action('click submit')} />
  ))
  .add('with a emoji label', () => (
    <SearchForm label='😀 😎 👍 💯' onSubmit={action('click emoji')} />
  ))
);
