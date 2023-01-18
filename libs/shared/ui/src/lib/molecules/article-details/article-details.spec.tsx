import { render } from '@testing-library/react';

import ArticleDetails from './article-details';

describe('ArticleDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleDetails />);
    expect(baseElement).toBeTruthy();
  });
});
