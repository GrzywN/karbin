import { render } from '@testing-library/react';

import MyToolsSection from './my-tools-section';

describe('MyToolsSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyToolsSection />);
    expect(baseElement).toBeTruthy();
  });
});
