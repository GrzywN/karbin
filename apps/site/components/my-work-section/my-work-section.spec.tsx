import { render } from '@testing-library/react';
import { StaticImageData } from 'next/image';

import MyWorkSection from './my-work-section';

const image = {
  src: '/img.jpg',
  height: 24,
  width: 24,
  blurDataURL: 'data:image/png;base64,imagedata',
} as StaticImageData;

describe('MyWorkSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MyWorkSection
        sectionTitle="Lorem ipsum"
        heading={
          <>
            Lorem, <b>ipsum</b> dolor.
          </>
        }
        cards={[
          {
            imageSrc: image,
            imageAlt: '',
            imagePriority: true,
            textHeading: 'Lorem ipsum',
            textParagraph: <>Lorem ipsum dolor sit amet.</>,
            textButton: (
              <>
                Read <b>more</b>
              </>
            ),
            buttonHref: '/project/bor-kur',
          },
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
