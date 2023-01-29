import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Heading from './heading';

describe('Heading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Heading />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with a text passed as a child', () => {
    const text = 'Text';
    const { baseElement } = render(<Heading>{text}</Heading>);

    expect(baseElement).toHaveTextContent(text);
  });

  it('should render successfully with a ReactNode passed as a child', () => {
    const text = 'Text';
    const node = <p>{text}</p>;
    const { baseElement } = render(<Heading>{node}</Heading>);

    expect(baseElement).toHaveTextContent(text);
  });

  it('should render as an element passed in "as" prop', () => {
    const tagName = 'h5';
    const text = 'Text';
    render(<Heading as={tagName}>{text}</Heading>);

    expect(
      screen.getByText(text).tagName === tagName.toUpperCase()
    ).toBeTruthy();
  });
});
