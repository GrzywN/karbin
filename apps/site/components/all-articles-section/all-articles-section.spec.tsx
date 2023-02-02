import { render } from '@testing-library/react';

import AllArticlesSection from './all-articles-section';

describe('AllArticlesSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AllArticlesSection />);
    expect(baseElement).toBeTruthy();
  });
});
