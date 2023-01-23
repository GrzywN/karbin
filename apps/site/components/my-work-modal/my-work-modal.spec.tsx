import { render } from '@testing-library/react';

import MyWorkModal from './my-work-modal';

describe('MyWorkModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyWorkModal id="testid" />);
    expect(baseElement).toBeTruthy();
  });
});
