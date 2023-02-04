import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Stack from './stack';

const text = 'Text';
const node = <span>{text}</span>;

describe('Stack', () => {
  it('should render successfully with a text passed as a child', () => {
    const { baseElement } = render(<Stack>{text}</Stack>);

    expect(baseElement).toHaveTextContent(text);
  });

  it('should render successfully with a ReactNode passed as a child', () => {
    const { baseElement } = render(<Stack>{node}</Stack>);

    expect(baseElement).toHaveTextContent(text);
  });
});
