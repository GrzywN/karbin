import { render } from '@testing-library/react';
import { StaticImageData } from 'next/image';

import NotFoundSection from './not-found-section';

const image = {
  src: '/img.jpg',
  height: 24,
  width: 24,
  blurDataURL: 'data:image/png;base64,imagedata',
} as StaticImageData;

describe('NotFoundSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <NotFoundSection
        sectionTitle="Lorem ipsum"
        imageSrc={image}
        heading="Lorem ipsum"
        paragraph="Lorem ipsum dolor sit amet."
        buttonText="Lorem ipsum dolor sit"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
