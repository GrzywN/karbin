import { render } from '@testing-library/react';

import MultiCategoryListBox from './multi-category-list-box';

describe('MultiCategoryListBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MultiCategoryListBox />);
    expect(baseElement).toBeTruthy();
  });
});
