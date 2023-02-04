import { render } from '@testing-library/react';

import WorkSection from './work-section';

const mockStaticImageData = {
  src: '/img.jpg',
  height: 24,
  width: 24,
  blurDataURL: 'data:image/png;base64,imagedata',
};

describe('WorkSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WorkSection
        sectionTitle="Lorem ipsum"
        heading="Lorem ipsum"
        projects={[
          {
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet.',
            imageSrc: mockStaticImageData,
            imageAlt: 'Lorem ipsum.',
            tags: ['Lorem', 'Ipsum', 'Dolor sit'],
            linkCaseStudy: '/',
            linkPreview: '/',
            linkSource: '/',
          },
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
