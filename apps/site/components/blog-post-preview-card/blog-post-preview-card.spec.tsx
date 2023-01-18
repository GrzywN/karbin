import { render } from '@testing-library/react';

import BlogPostPreviewCard from './blog-post-preview-card';

describe('BlogPostPreviewCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BlogPostPreviewCard
        title="Lorem ipsum dolor sit amet"
        whenPublished="1 month ago"
        tags={['Lorem', 'Ipsum', 'Dolor sit']}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
