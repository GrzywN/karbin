import { render } from '@testing-library/react';

import MyToolsSection from './my-tools-section';

describe('MyToolsSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MyToolsSection
        sectionTitle="My tools"
        heading="My tools"
        categories={[{ heading: 'Lorem', list: ['Lorem', 'Ipsum'] }]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
