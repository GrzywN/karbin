import { render } from '@testing-library/react';

import EmailAndResumeBox from './email-and-resume-box';

describe('EmailAndResumeBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmailAndResumeBox />);
    expect(baseElement).toBeTruthy();
  });
});
