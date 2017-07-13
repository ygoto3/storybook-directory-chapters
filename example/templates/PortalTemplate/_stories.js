import React from 'react';
import { action } from '@storybook/addon-actions';
import { PortalTemplate } from './index';

const data = {
  contents: 'Portal template with dummy contents',
};

module.exports = stories => (
  stories
  .add('A template for a portal page', () => (
    <PortalTemplate data={data} />
  ))
);
