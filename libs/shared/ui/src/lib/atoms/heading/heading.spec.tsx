import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Heading from './heading';

describe('Heading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Heading />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with a text passed as a child', () => {
    const HEADING_TEXT = 'Heading text';
    const { baseElement } = render(<Heading>{HEADING_TEXT}</Heading>);

    expect(baseElement).toHaveTextContent(HEADING_TEXT);
  });

  it('should render successfully with a ReactNode passed as a child', () => {
    const HEADING_TEXT = 'Heading text';
    const HEADING_NODE = <span>{HEADING_TEXT}</span>;
    const { baseElement } = render(<Heading>{HEADING_NODE}</Heading>);

    expect(baseElement).toHaveTextContent(HEADING_TEXT);
  });
});
