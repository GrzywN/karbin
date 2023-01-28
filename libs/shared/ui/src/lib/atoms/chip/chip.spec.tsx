import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Chip from './chip';

describe('Chip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Chip>Lorem ipsum</Chip>);

    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with a text passed as a child', () => {
    const text = 'Text';
    const { baseElement } = render(<Chip>{text}</Chip>);

    expect(baseElement).toHaveTextContent(text);
  });

  it('should render successfully with a ReactNode passed as a child', () => {
    const text = 'Text';
    const node = <p>{text}</p>;
    const { baseElement } = render(<Chip>{node}</Chip>);

    expect(baseElement).toHaveTextContent(text);
  });
});
