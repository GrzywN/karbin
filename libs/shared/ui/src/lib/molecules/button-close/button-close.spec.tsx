import { render } from '@testing-library/react';

import ButtonClose from './button-close';

describe('ButtonClose', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonClose />);
    expect(baseElement).toBeTruthy();
  });
});
