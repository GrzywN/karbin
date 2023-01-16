import { render } from '@testing-library/react';

import BlogPostsSection from './blog-posts-section';

describe('BlogPostsSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BlogPostsSection
        sectionTitle="Lorem ipsum dolor"
        heading={
          <>
            Lorem ipsum dolor <span className="ml-2">📝</span>
          </>
        }
        posts={[
          {
            title: 'Lorem ipsum dolor sit amet',
            whenPublished: '1 month ago',
            tags: ['Lorem', 'Ipsum', 'Dolor sit'],
          },
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
