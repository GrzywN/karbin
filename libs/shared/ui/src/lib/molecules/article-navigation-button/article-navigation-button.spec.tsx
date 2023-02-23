import { render } from '@testing-library/react';

import ArticleNavigationButton from './article-navigation-button';

describe('ArticleNavigationButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ArticleNavigationButton
        title="Title"
        formattedDate="16.01.2023"
        tags={['Tag 1', 'Tag 2']}
        direction="left"
        onClick={() => {}}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
