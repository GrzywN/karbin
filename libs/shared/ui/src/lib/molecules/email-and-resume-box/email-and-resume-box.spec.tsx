import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import EmailAndResumeBox from './email-and-resume-box';

const email = 'someone@example.com';
const resumeFileName = 'Resume-Someone.pdf';

describe('EmailAndResumeBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <EmailAndResumeBox email={email} resumeFileName={resumeFileName} />
    );

    expect(baseElement).toBeTruthy();
  });

  it('should render with a link to the email passed as a prop', () => {
    render(<EmailAndResumeBox email={email} resumeFileName={resumeFileName} />);

    const anchorElement = screen.getByText(email).closest('a');
    expect(anchorElement).toHaveAttribute('href', `mailto:${email}`);
  });

  it('should render with a link to the resume file passed as a prop', () => {
    render(<EmailAndResumeBox email={email} resumeFileName={resumeFileName} />);

    const anchorElement = screen.getByText(resumeFileName).closest('a');
    expect(anchorElement).toHaveAttribute('href', `/${resumeFileName}`);
  });
});
