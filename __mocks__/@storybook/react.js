// @flow

const storybook = jest.genMockFromModule('@storybook/react');

const logs = global['@storybook/react'] = [];

function createStory() {
  return {
    add() {
    },
    chapter(chapterName: string) {
      logs.push(`chapter:${chapterName}`);
      return createStory();
    },
    endOfChapter() {
      logs.push('endOfChapter');
      return createStory();
    }
  };
}

module.exports = {
  storiesOf(storyName: string, module: Object) {
    logs.push(`storiesOf:${storyName}`);
    return createStory();
  }
};
