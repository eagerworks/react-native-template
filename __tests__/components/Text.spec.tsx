import React from 'react';

import renderer from 'react-test-renderer';

import Text from '@components/Text';

describe('Text', () => {
  it('renders correctly', () => {
    const props = {
      children: 'test text',
    };
    const result = renderer.create(<Text {...props} />);
    expect(result).toMatchSnapshot();
  });
});
