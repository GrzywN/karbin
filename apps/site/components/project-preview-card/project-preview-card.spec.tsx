import { render } from '@testing-library/react';

import ProjectPreviewCard from './project-preview-card';

describe('ProjectPreviewCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectPreviewCard />);
    expect(baseElement).toBeTruthy();
  });
});
