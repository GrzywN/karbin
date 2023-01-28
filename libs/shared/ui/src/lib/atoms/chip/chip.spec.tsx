import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Chip from './chip';

describe('Chip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Chip>Lorem ipsum</Chip>);

    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with a text passed as a child', () => {
    const CHIP_TEXT = 'Chip text';
    const { baseElement } = render(<Chip>{CHIP_TEXT}</Chip>);

    expect(baseElement).toHaveTextContent(CHIP_TEXT);
  });

  it('should render successfully with a ReactNode passed as a child', () => {
    const CHIP_TEXT = 'Chip text maybe with an icon.';
    const CHIP_NODE = <span>{CHIP_TEXT}</span>;
    const { baseElement } = render(<Chip>{CHIP_NODE}</Chip>);

    expect(baseElement).toHaveTextContent(CHIP_TEXT);
  });
});
