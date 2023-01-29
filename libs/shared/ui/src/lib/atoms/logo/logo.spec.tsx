import { render, screen } from '@testing-library/react';

import Logo from './logo';

describe('Logo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Logo />);
    expect(baseElement).toBeTruthy();
  });

  it('should render as an element passed in "as" prop', () => {
    const tagName = 'h5';
    render(<Logo as={tagName} />);

    expect(
      screen.getByRole('heading').tagName === tagName.toUpperCase()
    ).toBeTruthy();
  });
});
