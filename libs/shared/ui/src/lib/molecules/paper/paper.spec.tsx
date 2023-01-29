import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Paper from './paper';

describe('Paper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Paper />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with a text passed as a child', () => {
    const text = 'Text';
    const { baseElement } = render(<Paper>{text}</Paper>);

    expect(baseElement).toHaveTextContent(text);
  });

  it('should render successfully with a ReactNode passed as a child', () => {
    const text = 'Text';
    const node = <span>{text}</span>;
    const { baseElement } = render(<Paper>{node}</Paper>);

    expect(baseElement).toHaveTextContent(text);
  });
});
