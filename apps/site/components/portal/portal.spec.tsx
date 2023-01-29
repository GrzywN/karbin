import { render } from '@testing-library/react';

import Portal from './portal';

describe('Portal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Portal />);
    expect(baseElement).toBeTruthy();
  });
});
