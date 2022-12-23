import { render } from '@testing-library/react';

import Chip from './chip';

describe('Chip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Chip />);
    expect(baseElement).toBeTruthy();
  });
});
