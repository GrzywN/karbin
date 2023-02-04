import { render } from '@testing-library/react';

import ArticleNavigationButton from './article-navigation-button';

describe('ArticleNavigationButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleNavigationButton />);
    expect(baseElement).toBeTruthy();
  });
});
