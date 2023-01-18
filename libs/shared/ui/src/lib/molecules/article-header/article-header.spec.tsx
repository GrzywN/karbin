import { render } from '@testing-library/react';

import ArticleHeader from './article-header';

describe('ArticleHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleHeader />);
    expect(baseElement).toBeTruthy();
  });
});
