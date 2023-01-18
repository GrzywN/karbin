import { render } from '@testing-library/react';

import ContactSection from './contact-section';

describe('ContactSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ContactSection
        sectionTitle="Lorem ipsum"
        heading={
          <>
            Lorem ipsum dolor,{' '}
            <strong>sit amet consectetur adipisicing elit.</strong> Sapiente
            minus, error ducimus libero autem iusto magnam? Rerum aut officia
            deleniti?
          </>
        }
        email="example@example.com"
        resumeFileName="file.pdf"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
