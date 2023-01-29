import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Heading from './heading';

const text = 'Text';
const node = <span>{text}</span>;
const tagName = 'h5';

describe('Heading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Heading />);
    
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with a text passed as a child', () => {
    const { baseElement } = render(<Heading>{text}</Heading>);

    expect(baseElement).toHaveTextContent(text);
  });

  it('should render successfully with a ReactNode passed as a child', () => {
    const { baseElement } = render(<Heading>{node}</Heading>);

    expect(baseElement).toHaveTextContent(text);
  });

  it('should render as an element passed in "as" prop', () => {
    render(<Heading as={tagName}>{text}</Heading>);

    expect(
      screen.getByText(text).tagName === tagName.toUpperCase()
    ).toBeTruthy();
  });
});
