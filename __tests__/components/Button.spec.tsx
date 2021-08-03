import React from 'react';

import Button from '@components/Button';

import { fireEvent, render } from '@testing-library/react-native';

import renderer from 'react-test-renderer';

describe('Button', () => {
  it('renders correctly', () => {
    const result = renderer.create(<Button />);
    expect(result).toMatchSnapshot();
  });

  it('will trigger action when pressed', () => {
    const mockOnPress = jest.fn();

    const { getByTestId } = render(<Button onPress={mockOnPress} testID="button" />);

    fireEvent.press(getByTestId('button'));
    expect(mockOnPress).toBeCalled();
  });

  it('can be disabled', () => {
    const mockOnPress = jest.fn();

    const { getByTestId } = render(<Button onPress={mockOnPress} disabled testID="button" />);

    fireEvent.press(getByTestId('button'));
    expect(mockOnPress).not.toBeCalled();
  });
});
