import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Text from './text';

const text = 'Text';
const node = <span>{text}</span>;
const tagName = 'span';

describe('Text', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Text />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with a text passed as a child', () => {
    const { baseElement } = render(<Text>{text}</Text>);

    expect(baseElement).toHaveTextContent(text);
  });

  it('should render successfully with a ReactNode passed as a child', () => {
    const { baseElement } = render(<Text>{node}</Text>);

    expect(baseElement).toHaveTextContent(text);
  });

  it('should render as an element passed in "as" prop', () => {
    render(<Text as={tagName}>{text}</Text>);

    expect(
      screen.getByText(text).tagName === tagName.toUpperCase()
    ).toBeTruthy();
  });
});
