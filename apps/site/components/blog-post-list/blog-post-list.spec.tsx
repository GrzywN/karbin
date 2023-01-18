import { render } from '@testing-library/react';

import BlogPostList from './blog-post-list';

describe('BlogPostList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BlogPostList
        posts={[
          {
            title: 'Lorem ipsum',
            whenPublished: '1 minute ago',
            tags: ['Lorem', 'Ipsum', 'Dolor sit'],
          },
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
