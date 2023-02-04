import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Paper from './paper';

const text = 'Text';
const node = <span>{text}</span>;
const tagName = 'article';

describe('Paper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Paper />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with a text passed as a child', () => {
    const { baseElement } = render(<Paper>{text}</Paper>);

    expect(baseElement).toHaveTextContent(text);
  });

  it('should render successfully with a ReactNode passed as a child', () => {
    const { baseElement } = render(<Paper>{node}</Paper>);

    expect(baseElement).toHaveTextContent(text);
  });

  it('should render as an element passed in "as" prop', () => {
    render(<Paper as={tagName}>{text}</Paper>);

    expect(
      screen.getByText(text).tagName === tagName.toUpperCase()
    ).toBeTruthy();
  });
});
