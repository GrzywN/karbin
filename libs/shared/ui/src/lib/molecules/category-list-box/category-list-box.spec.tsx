import { render } from '@testing-library/react';

import CategoryListBox from './category-list-box';

describe('CategoryListBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CategoryListBox />);
    expect(baseElement).toBeTruthy();
  });
});
