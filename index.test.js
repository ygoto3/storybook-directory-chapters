// @flow
/*global it, describe, expect, jest */

jest.mock('@storybook/react');

import loadDirectories from './index';
import type { Story } from '@storybook/react';
import type { Context } from 'storybook-directory-chapters';

function mockFunc(): (Story) => Story {
  return (stories) => {
    return stories;
  };
}

Object.assign(mockFunc, {
  keys(): string[] {
    return [
      './atoms/Button/_stories.js',
      './molecules/Form/AnotherForm/_stories.js',
      './molecules/Form/_stories.js',
      './organisms/Footer/_stories.js',
      './organisms/Header/_stories.js',
    ];
  }
});

const mockContext: Context = (mockFunc: any);

describe('loadDirectories', () => {
  it('should create stories and chapters in the order expected', () => {
    loadDirectories(mockContext);

    const expected = [
      'storiesOf:atoms',
      'chapter:Button',
      'endOfChapter',
      'endOfChapter',
      'storiesOf:molecules',
      'chapter:Form',
      'chapter:AnotherForm',
      'endOfChapter',
      'endOfChapter',
      'endOfChapter',
      'storiesOf:organisms',
      'chapter:Footer',
      'endOfChapter',
      'chapter:Header',
    ];
    const logs = global['@storybook/react'];
    expected.forEach((exp, i) => {
      expect(logs[i]).toBe(exp);
    });
  })
});
