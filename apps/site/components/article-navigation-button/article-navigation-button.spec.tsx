import { render } from '@testing-library/react';

import ArticleNavigationButton from './article-navigation-button';

describe('ArticleNavigationButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ArticleNavigationButton
        frontMatter={{
          title: 'Lorem',
          excerpt: 'Lorem ipsum',
          date: new Date().toISOString(),
          tags: ['Lorem', 'Ipsum', 'Dolor sit'],
          author: { name: 'Jane Doe' },
        }}
        direction="left"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
