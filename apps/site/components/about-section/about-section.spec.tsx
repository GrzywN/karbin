import { render } from '@testing-library/react';

import AboutSection from './about-section';

const mockStaticImageData = {
  src: '/img.jpg',
  height: 24,
  width: 24,
  blurDataURL: 'data:image/png;base64,imagedata',
};

describe('AboutSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AboutSection
        sectionTitle="Title"
        heading="Heading"
        paragraphs={['paragraph1', 'paragraph2']}
        imageSrc={mockStaticImageData}
        imageAlt=""
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
